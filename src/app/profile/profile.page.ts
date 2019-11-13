import { Component } from '@angular/core';
import { ToastController, LoadingController, ActionSheetController } from '@ionic/angular';
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
  myimage = "";
  base64Image;


  showGallery = false;
  showTrips = true;
  showMaps = false;

  galleryimages = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},]
  trips = [{},{},{},{}]

  constructor(public toastCtrl: ToastController,
    public camera: Camera,
    // public crop: Crop,
    public actionSheetCtrl: ActionSheetController,
    // public imagePicker: ImagePicker,
    public loadingCtrl: LoadingController,
    public travelAppService: TravelAppService) { 
          // firebase.database().ref('/users').child(firebase.auth().currentUser.uid).once('value', snapshot => {
    //   this.firstname = snapshot.val().firstname;
    //   this.lastname = snapshot.val().lastname;
    //   this.phonenumber = snapshot.val().phoneNumber;
    //   this.aboutMe = snapshot.val().aboutMe;
    //   if(snapshot.val().photoURL == undefined){
      this.base64Image = '../../assets/icon/user2.png';
      //   }else{
      //     this.base64Image = snapshot.val().photoURL;
      //   }
      // })
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

  // async presentActionSheet() {
  //   const actionSheet = await this.actionSheetCtrl.create({
  //     header: 'Options',
  //     buttons: [
  //       {
  //         text: 'Capture with camera',
  //         icon: 'camera',
  //         handler: () => {
  //           this.AccessCamera();
  //         }
  //       },  
  //     {
  //       text: 'Select from gallery',
  //       icon: 'photos',
  //       handler: () => {
  //         this.AccessGallery()
  //       }
  //     },
  //     {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }]
  //   });
  //   await actionSheet.present();
  // }

  // AccessCamera() {
  //   this.camera.getPicture({
  //       targetWidth: 512,
  //       targetHeight: 512,
  //       correctOrientation: true,
  //       sourceType: this.camera.PictureSourceType.CAMERA,
  //       destinationType: this.camera.DestinationType.DATA_URL
  //     }).then(
  //       imageData => {
  //         this.base64Image = "data:image/jpeg;base64," + imageData;
  //         this.loadingCtrl.create({message: "Uploading profile photo"}).then((load) =>{
  //           load.present()
  //           this.travelAppService.uploadProfilePic(firebase.auth().currentUser.uid, this.base64Image).then(() =>{
              
  //             this.presentToast("Profile Photo Uploaded Successfully")
  //             load.dismiss()
  //           }).catch((err) =>{
  //             this.presentToast("Profile Pic Not Uploaded")
  //             load.dismiss()
  //           });
  //         })  
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }

  // AccessGallery() {
  //   this.camera.getPicture({
  //       sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
  //       destinationType: this.camera.DestinationType.DATA_URL
  //     }).then(
  //       imageData => {
  //         this.base64Image = "data:image/jpeg;base64," + imageData;
  //         this.loadingCtrl.create({message: "Uploading profile photo"}).then((load) =>{
  //           load.present()
  //           this.travelAppService.uploadProfilePic(firebase.auth().currentUser.uid, this.base64Image).then(() =>{
  //             this.presentToast("Profile Photo Uploaded Successfully")
  //             load.dismiss()
  //           }).catch((err) =>{
  //             this.presentToast("Profile Pic Not Uploaded")
  //             load.dismiss()
  //           });
  //         }) 
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 6000,
      color: 'dark'
    });
    toast.present();
  }
}
