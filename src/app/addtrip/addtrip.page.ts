import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController, LoadingController, ToastController } from '@ionic/angular';
import { TravelAppService } from '../travel-app.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.page.html',
  styleUrls: ['./addtrip.page.scss'],
})
export class AddtripPage {

  useruid;
  bla = "";
  base64TripPhoto = "../../assets/browsephoto.png";
  aboutTrip = "";
  city = "Metro Manila";
  fromDate = "";
  toDate = "";
  eventTitle = "";
  province = "Mandaluyong";



  constructor( public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public travelAppService: TravelAppService) { 

      // this.useruid = firebase.auth().currentUser.uid;
      this.useruid = "ER9ayHUaZHPuWcUS0yq2oG77NRg2";

    }


  validateButton(event){
    // console.log(this.fromDate)
    // console.log(this.toDate)

    console.log(this.parseDate(this.fromDate))
    // this.parseDate(this.toDate)

  }

  parseDate(date:any){
    var year = date.slice(0, -25);
    var month = date.slice(5, -22);
    var day = date.slice(8, -19);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    var newdate = months[month - 1] + ', ' + day + ', ' + year;

    return newdate;
    // console.log(newdate)
    // console.log(date)
  }

  uploadTrip(){
    this.loadingCtrl.create({message: "Uploading your trip"}).then((res) =>{
      res.present();
      this.travelAppService.addTrip(
        this.useruid, this.aboutTrip, this.city, this.parseDate(this.fromDate), this.parseDate(this.toDate), this.eventTitle,
        this.province, this.base64TripPhoto 
      ).then(() =>{
        res.dismiss();
        this.aboutTrip = "";
        this.city = "";
        this.fromDate = "";
        this.toDate = "";
        this.eventTitle = "";
        this.base64TripPhoto = "";
        this.province = ""

        this.presentToast("Trip uploaded successfully");
      }).catch((err) =>{
                res.dismiss()

        console.log(err)
      })
    })
  }

  // async presentActionSheet() {

  //   const actionSheet = await this.actionSheetCtrl.create({
  //     header: 'Options',
  //     buttons: [
  //       {
  //         text: ' Capture Image',
  //         icon: 'camera',
  //         handler: () => {
  //           this.AccessCamera();
  //         }
  //       },  
  //     {
  //       text: 'Pick from Gallery',
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
  //         this.loadingCtrl.create({message: "Uploading photo"}).then((load) =>{
  //           load.present()
  //           if(index == 0){
  //             this.base64CoverPhoto = "data:image/jpeg;base64," + imageData;
  //             this.travelAppService.uploadCoverPhoto(this.useruid, this.base64CoverPhoto).then(() =>{
  //               this.presentToast("Cover Photo Uploaded Successfully")
  //               load.dismiss()
  //             }).catch((err) =>{
  //               this.presentToast("Cover Photo Not Uploaded")
  //               load.dismiss()
  //             });
  //           }
            
            
  //           else if(index == 1){
  //             this.base64ProfilePhoto = "data:image/jpeg;base64," + imageData;
  //             this.travelAppService.uploadProfilePic(this.useruid, this.base64ProfilePhoto).then(() =>{
  //               this.presentToast("Profile Photo Uploaded Successfully")
  //               load.dismiss()
  //             }).catch((err) =>{
  //               this.presentToast("Profile Photo Not Uploaded")
  //               load.dismiss()
  //             });
  //           }
            
  //         })  
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }

  AccessGallery() {
    this.camera.getPicture({
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: this.camera.DestinationType.DATA_URL
      }).then(
        imageData => {
          // this.loadingCtrl.create({message: "Uploading photo"}).then((load) =>{
          //   load.present()
              this.base64TripPhoto = "data:image/jpeg;base64," + imageData;
              // this.travelAppService.uploadTripPhoto(this.useruid, this.base64TripPhoto).then(() =>{
              //   this.presentToast("Trip Photo Uploaded Successfully")
              //   load.dismiss()
              // }).catch((err) =>{
              //   this.presentToast("Trip Photo Not Uploaded")
              //   load.dismiss()
              // });
          // })  
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
