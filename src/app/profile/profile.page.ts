import { Component } from '@angular/core';
import { ToastController, LoadingController, ActionSheetController, AlertController, Events } from '@ionic/angular';
import { TravelAppService } from '../travel-app.service';
import * as firebase from "firebase";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage{

  firstname = "";
  lastname = "";
  phonenumber = "";
  aboutMe = "";
  following = "";
  followers = "";
  provincesVisited = "";
  myimage = "";
  base64CoverPhoto;
  base64ProfilePhoto;


  useruid;
  showGallery = false;
  showTrips = true;
  showMaps = false;

  galleryimages = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},]
  trips = [{},{},{},{}]

  constructor(public toastCtrl: ToastController,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public alertController: AlertController,
    public events: Events,
    public loadingCtrl: LoadingController,
    public travelAppService: TravelAppService) { 

      // this.useruid = "ER9ayHUaZHPuWcUS0yq2oG77NRg2";
      this.useruid = firebase.auth().currentUser.uid;

      this.loadingCtrl.create({message: "Fetching your profile details"}).then((res) =>{
        res.present()

        firebase.database().ref('/users').child(this.useruid).once('value', snapshot => {
          this.firstname = snapshot.val().firstname;
          this.lastname = snapshot.val().lastname;
          this.phonenumber = snapshot.val().phoneNumber;
          this.aboutMe = snapshot.val().aboutMe;
          this.following = snapshot.val().following;
          this.followers = snapshot.val().followers;
          this.provincesVisited = snapshot.val().provincesVisited;
          if(snapshot.val().photoURL == undefined){
            this.base64ProfilePhoto = '../../assets/icon/user2.png';
          }else{
              this.base64ProfilePhoto = snapshot.val().photoURL;
          }
          if(snapshot.val().coverPhoto == undefined){
            this.base64CoverPhoto = '../../assets/icon/backg2.png';
          }else{
              this.base64CoverPhoto = snapshot.val().coverPhoto;
          }

          }).then(() =>{
            res.dismiss()

          }).catch(() =>{
            res.dismiss()

          })
      })
 
    }

    async editname(){
      const alert = await this.alertController.create({
        header: 'Edit name',
        inputs: [
            {
                name: 'firstname',
                type: 'text',
                value: this.firstname,
                placeholder: 'Enter firstname'
            },
            {
              name: 'lastname',
              type: 'text',             
               value: this.lastname,
              placeholder: 'Enter lastname'
          }
        ],
        buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel');
                }
            }, {
                text: 'Ok',
                handler: (alertData) => {
                  this.loadingCtrl.create({message:"Please wait"}).then((res) =>{
                    res.present();
                    this.travelAppService.updateUserDetails(alertData.firstname, alertData.lastname, "aboutme").then(() =>{
                      this.firstname = alertData.firstname;
                      this.lastname = alertData.lastname;
                      res.dismiss();
                      this.presentToast("Names updated successfully")
                    }).catch((err) =>{
                      res.dismiss();
                      this.presentToast("Names not updated" + err)
                    })
                  });
                    console.log(alertData);
                }
            }
        ]
    });

    alert.present()
    }

  segmentChanged(event){
    if(event.detail.value == "showTrips"){
      this.showTrips = true;
      this.showGallery = false;
      this.showMaps = false;
    }else if(event.detail.value == "showMaps"){
      this.showMaps = true;
      this.showGallery = false;
      this.showTrips = false;
    }else if(event.detail.value == "showGallery"){
      this.showGallery = true;
      this.showMaps = false;
      this.showTrips = false;
    }
  }

  // ionViewDidLoad(){
  //   console.log("yayayay")
  // }

  // saveProfile(){
  //   if(this.firstname == "" || this.lastname == ""){
  //     this.presentToast("Names field cannot be left blank")
  //   }else if(this.phonenumber == ""){
  //     this.presentToast("Phone Number field cannot be left blank")
  //   }else if(this.aboutMe == ""){
  //     this.presentToast("About me field cannot be left blank")
  //   }else{
  //     this.loadingCtrl.create({message: "Please wait"}).then((load) =>{
  //       load.present();
  //       this.travelAppService.updateUserDetails(this.firstname, this.lastname, this.phonenumber, this.aboutMe).then(() =>{
  //         this.presentToast("Profile updated successfully");
  //         load.dismiss();
  //       }).catch((err) =>{
  //         console.log(err)
  //         load.dismiss();
  //       })
  //     })
      
  //   }
  // }

  async presentActionSheet(index) {

    console.log(index)
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      buttons: [
        {
          text: ' Capture Image',
          icon: 'camera',
          handler: () => {
            this.AccessCamera(index);
          }
        },  
      {
        text: 'Pick from Gallery',
        icon: 'photos',
        handler: () => {
          this.AccessGallery(index)
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  AccessCamera(index) {

    this.camera.getPicture({
        targetWidth: 512,
        targetHeight: 512,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL
      }).then(
        imageData => {
          this.presentToast(imageData)
          this.loadingCtrl.create({message: "Uploading profile photo"}).then((load) =>{
            load.present()
            if(index == 0){
              this.base64CoverPhoto = "data:image/jpeg;base64," + imageData;
              this.travelAppService.uploadCoverPhoto(this.useruid, this.base64CoverPhoto).then(() =>{
                this.presentToast("Cover Photo Uploaded Successfully")
                load.dismiss()
              }).catch((err) =>{
                this.presentToast("Cover Photo Not Uploaded")
                load.dismiss()
              });
            }
            
            
            else if(index == 1){
              this.base64ProfilePhoto = "data:image/jpeg;base64," + imageData;
              this.travelAppService.uploadProfilePic(this.useruid, this.base64ProfilePhoto).then(() =>{
                this.presentToast("Profile Photo Uploaded Successfully")
                load.dismiss()
              }).catch((err) =>{
                this.presentToast("Profile Photo Not Uploaded")
                load.dismiss()
              });
            }
            
          })  
        },
        err => {
          console.log(err);
        }
      );
  }

  AccessGallery(index) {
    this.camera.getPicture({
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: this.camera.DestinationType.DATA_URL
      }).then(
        imageData => {
          this.loadingCtrl.create({message: "Uploading profile photo"}).then((load) =>{
            load.present()
            if(index == 0){
              this.base64CoverPhoto = "data:image/jpeg;base64," + imageData;
              this.travelAppService.uploadCoverPhoto(this.useruid, this.base64CoverPhoto).then(() =>{
                this.presentToast("Cover Photo Uploaded Successfully")
                load.dismiss()
              }).catch((err) =>{
                this.presentToast("Cover Photo Not Uploaded")
                load.dismiss()
              });
            }
            
            
            else if(index == 1){
              this.base64ProfilePhoto = "data:image/jpeg;base64," + imageData;
              this.travelAppService.uploadProfilePic(this.useruid, this.base64ProfilePhoto).then(() =>{
                this.presentToast("Profile Photo Uploaded Successfully")
                load.dismiss()
              }).catch((err) =>{
                this.presentToast("Profile Photo Not Uploaded")
                load.dismiss()
              });
            }
            
          })  
        },
        err => {
          console.log(err);
        }
      );
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 6000,
      color: 'dark'
    });
    toast.present();
  }
}
