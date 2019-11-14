import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class TravelAppService {

  firedata = firebase.database();
  firestore = firebase.storage();
  tripsarray = [];1
  fireauth = firebase.auth();

  constructor(
    public faceBook: Facebook, 
    public googlePlus: GooglePlus
    ) {}

  // Creates a new user
  createnewuser(firstname, lastname, email, password) {
    return new Promise((resolve, reject) => {
      this.fireauth
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          this.firedata
            .ref("/users")
            .child(this.fireauth.currentUser.uid)
            .set({
              firstname: firstname,
              lastname: lastname,
              email: email
            })
            .then(() => {
              resolve(res);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Uploads the user profile picture
  uploadProfilePic(useruid, photoString){
    return new Promise((resolve, reject) => {
      var storageRef = this.firestore.ref('/profilePhotos').child(useruid+".jpg");
      storageRef.putString(photoString, firebase.storage.StringFormat.DATA_URL).then((res) =>{
        storageRef.getDownloadURL().then((url) =>{
          this.firedata.ref('/users').child(useruid).update({
            photoURL: url
          }).then((res) =>{
            resolve(res)
          }).catch((err) =>{
            reject(err)
          })
        })
      }).catch((err) =>{
        reject(err)
      })
    })
  }

  uploadCoverPhoto(useruid, photoString){
    return new Promise((resolve, reject) => {
      var storageRef = this.firestore.ref('/coverPhotos').child(useruid+".jpg");
      storageRef.putString(photoString, firebase.storage.StringFormat.DATA_URL).then((res) =>{
        storageRef.getDownloadURL().then((url) =>{
          this.firedata.ref('/users').child(useruid).update({
            coverPhoto: url
          }).then((res) =>{
            resolve(res)
          }).catch((err) =>{
            reject(err)
          })
        })
      }).catch((err) =>{
        reject(err)
      })
    })
  }

  // Login with facebook
  facebookLogin(){
    return new Promise((resolve, reject) => {
      this.faceBook.login(['email', 'public_profile']).then((response) =>{
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential).then((result) =>{
          var user = result.user;
          resolve(user)
        }).catch((err) =>{
          reject(err);
        })
      })
    })
  }

  // Fetch all the user's trips
  fetchTrips(){
    return new Promise((resolve, reject) => {
      this.firedata.ref('/users').child(this.fireauth.currentUser.uid).child('trips').orderByChild("mjbmmn")
      .once("value", snapshot => {
        this.tripsarray  = [];
        let result = snapshot.val();
        for (var key in result) {
          this.tripsarray.push(result[key]);
        }
      }).then(() =>{
        resolve(this.tripsarray)
      }).catch((err) =>{
        reject(err)
      })
    })
  }

  addTrip(){
    return new Promise((resolve, reject) => {

    })
  }

  // Login with google
  googleLogin(){
    return new Promise((resolve, reject) => {
      this.googlePlus.login({
        'webClientId': '970318906848-ct8t889mtf21inrhvmc3j2e8v73676gh.apps.googleusercontent.com',
        'scopes': '',
        'offline': true
      }).then((response) => {
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(response.idToken);
        firebase.auth().signInWithCredential(googleCredential)
          .then((result) => {
            var user = result.user;
            resolve(user);
          });
      }, (err) => {
        reject(err);
      });
  })
  }

  // Login with email
  loginExistingUser(email, password) {
    return new Promise((resolve, reject) => {
      this.fireauth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Update the user details
  updateUserDetails(firstname, lastname, aboutMe ){
    return new Promise((resolve, reject) => {
      this.firedata.ref('/users').child(this.fireauth.currentUser.uid).update({
        firstname: firstname,
        lastname: lastname,
        aboutMe: aboutMe,
      }).then((res) =>{
        resolve(res)
      }).catch((err) =>{
        reject(err)
      })
    })
  }

  
}
