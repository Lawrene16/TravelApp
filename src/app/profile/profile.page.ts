import { Component } from '@angular/core';
import { ToastController, LoadingController, ActionSheetController, AlertController, Events } from '@ionic/angular';
import { TravelAppService } from '../travel-app.service';
import * as firebase from "firebase";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage{

  name = "";
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
  showTripsText = false;
  showGalleryText = false;

  galleryimages = []
  trips = [];

  constructor(public toastCtrl: ToastController,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public alertController: AlertController,
    public events: Events,
    public router: Router,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public travelAppService: TravelAppService) { 

      // this.useruid = "ER9ayHUaZHPuWcUS0yq2oG77NRg2";
      
      this.useruid = firebase.auth().currentUser.uid;

      console.log(this.useruid)
      this.loadingCtrl.create({message: "Fetching your profile details"}).then((res) =>{
        res.present()

        firebase.database().ref('/users').child(this.useruid).once('value', snapshot => {
          this.name = snapshot.val().name;
          this.phonenumber = snapshot.val().phoneNumber;
          this.aboutMe = snapshot.val().aboutMe;
          this.following = snapshot.val().following;
          this.followers = snapshot.val().followers;
          this.provincesVisited = snapshot.val().provincesVisited;
          if(snapshot.val().photoURL == undefined || snapshot.val().photoURL == ""){
            this.base64ProfilePhoto = '../../assets/icon/user2.png';
          }else{
              this.base64ProfilePhoto = snapshot.val().photoURL;
          }
          if(snapshot.val().coverPhoto == undefined || snapshot.val().coverPhoto == ""){
            this.base64CoverPhoto = '../../assets/backg2.png';
          }else{
              this.base64CoverPhoto = snapshot.val().coverPhoto;
          }
          }).then(() =>{
            setTimeout(() => {
            res.dismiss()
              
            }, 1000);
          }).catch((err) =>{
            res.dismiss()
            this.presentToast(err)
          })
      })

      this.travelAppService.fetchTrips().then((trips:any) =>{
        // console.log(trips)
        this.trips = trips;

        this.checkTripsArray();

          this.trips.forEach(trip =>{
            this.galleryimages.push(trip.photo);

            this.checkGalleryArray()
          })
      })

      // this.geolocation.getCurrentPosition().then((resp) =>{
      //   // console.log(resp.coords);
      //   this.presentToast(resp.coords.latitude)
      // }).catch((err) =>{
      //   console.log(err)
      // })
 
    }

    async editname(){
      const alert = await this.alertController.create({
        header: 'Edit name',
        inputs: [
            {
              name: 'name',
              type: 'text',             
               value: this.name,
              placeholder: 'Enter Fullname'
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
                    this.travelAppService.updateUserName(alertData.name).then(() =>{
                      this.name = alertData.name;
                      res.dismiss();
                      this.presentToast("Name updated successfully")
                    }).catch((err) =>{
                      res.dismiss();
                      this.presentToast("Name not updated" + err)
                    })
                  });
                    console.log(alertData);
                }
            }
        ]
    });

    alert.present()
    }

    showTripDetails(i){
      let navigationExtras: NavigationExtras = {
        state: {
          trip: this.trips[i]
        }
      };
  
      console.log(i)
      this.router.navigate(['tripdetails'], navigationExtras);
    }

  segmentChanged(event){
    if(event.detail.value == "showTrips"){
      this.showTrips = true;
      this.showGallery = false;
      this.showMaps = false;
      this.checkTripsArray()
      this.checkGalleryArray()
    }else if(event.detail.value == "showMaps"){
      this.showMaps = true;
      this.showGallery = false;
      this.showTrips = false;
      this.checkTripsArray()
      this.checkGalleryArray()
    }else if(event.detail.value == "showGallery"){
      this.showGallery = true;
      this.showMaps = false;
      this.showTrips = false;
      this.checkTripsArray()
      this.checkGalleryArray()
    }
  }

  checkTripsArray(){
    if(this.trips == [] || this.trips == undefined){
      this.showTripsText = true;
    }
  }

  checkGalleryArray(){
    if(this.galleryimages == [] || this.galleryimages == undefined){
      this.showGalleryText = true;
    }
  }

  doRefresh(event){

    // setTimeout(() => {
    //   console.log('Async operation has ended');
    // }, 3000);

    this.travelAppService.fetchTrips().then((trips:any) =>{
      console.log(trips)
      this.trips = trips;

      this.trips.forEach(trip =>{
        this.galleryimages.push(trip.photo);

        event.target.complete();

      })
    })
  }

  // async presentActionSheet(index) {

  //   console.log(index)
  //   const actionSheet = await this.actionSheetCtrl.create({
  //     header: 'Options',
  //     buttons: [
  //       {
  //         text: ' Capture Image',
  //         icon: 'camera',
  //         handler: () => {
  //           this.AccessCamera(index);
  //         }
  //       },  
  //     {
  //       text: 'Pick from Gallery',
  //       icon: 'photos',
  //       handler: () => {
  //         this.AccessGallery(index)
  //       }
  //     },
  //     {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         // console.log('Cancel clicked');
  //       }
  //     }]
  //   });
  //   await actionSheet.present();
  // }

  AccessCamera(index) {

    this.camera.getPicture({
        targetWidth: 512,
        targetHeight: 512,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL
      }).then(
        imageData => {
          // this.presentToast(imageData)
          this.loadingCtrl.create({message: "Uploading photo"}).then((load) =>{
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
          this.loadingCtrl.create({message: "Uploading photo"}).then((load) =>{
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
