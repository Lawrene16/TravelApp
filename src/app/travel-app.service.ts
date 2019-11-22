import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { ToastController } from "@ionic/angular";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TravelAppService {
  firedata = firebase.database();
  firestore = firebase.storage();
  tripsarray = [];
  fireauth = firebase.auth();

  // Note the parent id is the ID of the parent not the parent_id of the parent
  constructor(
    public faceBook: Facebook,
    public googlePlus: GooglePlus,
    public httpClient: HttpClient,
    public toastCtrl: ToastController
  ) {}

  // Creates a new user
  createnewuser(email, password) {
    return new Promise((resolve, reject) => {
      this.fireauth
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Generates the initial placeholder details of the user
  generateInitialUserDetails(name, email, photo) {
    return new Promise((resolve, reject) => {
      this.firedata
        .ref("/users")
        .child(this.fireauth.currentUser.uid)
        .set({
          name: name,
          email: email,
          coverPhoto: "",
          aboutMe:
            "About me has not been set. Click on the edit icon to tell us about yourself",
          followers: "0",
          following: "0",
          photoURL: photo,
          provincesVisited: "0"
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Uploads the user profile picture
  uploadProfilePic(useruid, photoString) {
    return new Promise((resolve, reject) => {
      var storageRef = this.firestore
        .ref("/profilePhotos")
        .child(useruid + ".jpg");
      storageRef
        .putString(photoString, firebase.storage.StringFormat.DATA_URL)
        .then(res => {
          storageRef.getDownloadURL().then(url => {
            this.firedata
              .ref("/users")
              .child(useruid)
              .update({
                photoURL: url
              })
              .then(res => {
                resolve(res);
              })
              .catch(err => {
                reject(err);
              });
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  uploadCoverPhoto(useruid, photoString) {
    return new Promise((resolve, reject) => {
      var storageRef = this.firestore
        .ref("/coverPhotos")
        .child(useruid + ".jpg");
      storageRef
        .putString(photoString, firebase.storage.StringFormat.DATA_URL)
        .then(res => {
          storageRef.getDownloadURL().then(url => {
            this.firedata
              .ref("/users")
              .child(useruid)
              .update({
                coverPhoto: url
              })
              .then(res => {
                resolve(res);
              })
              .catch(err => {
                reject(err);
              });
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  uploadTripPhoto(useruid, tripuid, photoString) {
    return new Promise((resolve, reject) => {
      var storageRef = this.firestore
        .ref("/trips")
        .child(useruid)
        .child(tripuid + ".jpg");
      storageRef
        .putString(photoString, firebase.storage.StringFormat.DATA_URL)
        .then(res => {
          storageRef.getDownloadURL().then(url => {
            this.firedata
              .ref("/users")
              .child(useruid)
              .child("trips")
              .child(tripuid)
              .update({
                photo: url
              })
              .then(res => {
                resolve(res);
              })
              .catch(err => {
                reject(err);
              });
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Login with facebook
  facebookLogin() {
    return new Promise((resolve, reject) => {

      this.faceBook.getLoginStatus().then((res) =>{
        if (res.status === 'connected') {
          // Already logged in to FB so pass credentials to provider (in my case firebase)
          let credentials2 = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          firebase.auth().signInWithCredential(credentials2).then((result2) => {
            var user2 = result2.user;
            resolve(user2);
          }).catch((err) =>{
            reject(err)
          });
      } else {
          // Not already logged in to FB so sign in
          this.faceBook.login(['public_profile', 'user_friends', 'email'])
          .then((response: FacebookLoginResponse) => {
            this.presentToast("response");
            const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
              response.authResponse.accessToken
            );
            firebase.auth().signInWithCredential(facebookCredential)
              .then(result => {
                var user = result.user;
                resolve(user);
              })
              .catch(err => {
                reject(err);
              });
          })
          .catch(err => {
            this.presentToast(err);
          });
      }
      });
    });
  }

  test2(){

    return new Promise((resolve, reject) => {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
  
        resolve(user)
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        reject(error)
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    })
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: "dark"
    });
    toast.present();
  }

  // Fetch all the user's trips
  fetchTrips() {
    return new Promise((resolve, reject) => {
      this.firedata
        .ref("/users")
        .child(this.fireauth.currentUser.uid)
        .child("trips")
        .orderByChild("mjbmmn")
        .once("value", snapshot => {
          this.tripsarray = [];
          let result = snapshot.val();
          for (var key in result) {
            this.tripsarray.push(result[key]);
          }
        })
        .then(() => {
          resolve(this.tripsarray);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  addTrip(
    useruid,
    aboutTrip,
    city,
    fromDate,
    toDate,
    eventTitle,
    province,
    photoString
  ) {
    return new Promise((resolve, reject) => {
      var tripuid = this.firedata.ref("/users").push().key;
      this.firedata
        .ref("/users")
        .child(useruid)
        .child("trips")
        .child(tripuid)
        .update({
          aboutTrip: aboutTrip,
          city: city,
          fromDate: fromDate,
          toDate: toDate,
          eventTitle: eventTitle,
          province: province
        })
        .then(res => {
          this.uploadTripPhoto(useruid, tripuid, photoString)
            .then(res => {
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Login with google
  googleLogin() {
    return new Promise((resolve, reject) => {
      this.googlePlus
        .login({
          webClientId:
            "970318906848-ct8t889mtf21inrhvmc3j2e8v73676gh.apps.googleusercontent.com",
          scopes: "",
          offline: true
        })
        .then(
          response => {
            const googleCredential = firebase.auth.GoogleAuthProvider.credential(
              response.idToken
            );
            firebase
              .auth()
              .signInWithCredential(googleCredential)
              .then(result => {
                var user = result.user;
                resolve(user);
              });
          },
          err => {
            reject(err);
          }
        );
    });
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
  updateUserName(name) {
    return new Promise((resolve, reject) => {
      this.firedata
        .ref("/users")
        .child(this.fireauth.currentUser.uid)
        .update({
          name: name
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Fetch all countries
  fetchAllCountries() {
    var fetchCountriesURL =
      "https://ezcmd.com/apps/api_ezhigh/get_countries/9548d4dd520add28122862b784a9da1c/673";
    return new Promise((resolve, reject) => {
      this.httpClient.get(fetchCountriesURL).subscribe(
        data => {
          resolve(data);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  // Fetch all states
  fetchAllStates(countrycode) {
    var fetchStatesURL =
      "https://ezcmd.com/apps/api_ezhigh/get_hierarchy/9548d4dd520add28122862b784a9da1c/673?country_code=" +
      countrycode +
      "&level=1";
    return new Promise((resolve, reject) => {
      this.httpClient.get(fetchStatesURL).subscribe(
        data => {
          resolve(data);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  // Fetch all cities
  fetchAllCities(countrycode, stateid) {
    var fetchCitiesURL =
    "https://ezcmd.com/apps/api_ezhigh/get_hierarchy/9548d4dd520add28122862b784a9da1c/673?country_code="+countrycode+"&parent_id="+stateid+"&level=2";
  return new Promise((resolve, reject) => {
    this.httpClient.get(fetchCitiesURL).subscribe(
      data => {
        resolve(data);
      },
      err => {
        reject(err);
      }
    );
  });
  }


  test(){
    return new Promise((resolve, reject) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        resolve(user)
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        reject(error)
      });
    })
  }


}
