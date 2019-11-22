import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController, LoadingController, ToastController } from '@ionic/angular';
import { TravelAppService } from '../travel-app.service';
import * as firebase from "firebase";
import { Router } from '@angular/router';

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
  frommax = "";
  tomax = "";
  states = [];
  cities = [];
  currentdate = new Date();

  constructor( public camera: Camera,
    public router: Router,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public travelAppService: TravelAppService) { 

      // this.useruid = firebase.auth().currentUser.uid;
      this.useruid = "ER9ayHUaZHPuWcUS0yq2oG77NRg2";

      this.frommax = this.currentdate.getFullYear() + "-" + Number(this.currentdate.getMonth()+1) + "-" + this.currentdate.getDate()
      // this.tomax = this.currentdate.getFullYear() + "-" + Number(this.currentdate.getMonth()+1) + "-" + this.currentdate.getDate();

      // this.populateStatesArray("PH");
      // this.travelAppService.fetchAllStates("NG").then((states) =>{
      //   // console.log(states);
      //   this.states = states;
      // });

      // this.travelAppService.fetchAllCities("NG", "dfd").then((cities) =>{
      //   // console.log(cities);
      //   this.cities = cities;
      // });
    }

    populateStatesArray(country_code){
      // this.travelAppService.fetchAllStates(country_code).then((states:any) =>{
      //   console.log(states)
      //   for(var i = 0; i < Object.keys(states).length; i++){
      //     this.states.push(states[i])
      //   }
      // });

      this.states = [{'label': "dgdfgdfg"}, {'label': "dgdfgdfg"}]
      console.log(this.states)
    }

    validateFromButton(event){
      var year = this.fromDate.slice(0, -25);
      var month = this.fromDate.slice(5, -22);
      var day = this.fromDate.slice(8, -19);


      this.tomax = year + "-" + month + "-" + day;


    }

  // validateToButton(event){
  //   // console.log(this.parseDate(this.toDate));

  //   // if(Number(this.toDate.slice(0, -25)) < Number(this.fromDate.slice(0, -25))){
  //   //   this.presentToast("To year cannot be less than from year")
  //   // }else if(Number(this.toDate.slice(5, -22)) < Number(this.fromDate.slice(5, -22))){
  //   //   this.presentToast("To month cannot be less than from month")
  //   // }else if(Number(this.toDate.slice(5, -22)) < Number(this.fromDate.slice(5, -22))){
  //   //   this.presentToast("To month cannot be less than from month")
  //   // }
  // }

  parseDate(date:any){
    var year = date.slice(0, -25);
    var month = date.slice(5, -22);
    var day = date.slice(8, -19);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    var newdate = months[month - 1] + ' ' + day + ', ' + year;

    return newdate;
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
        this.close();
        
      }).catch((err) =>{
                res.dismiss()

        console.log(err)
      })
    })
  }

  close(){
    this.router.navigateByUrl('/tabs/profile');
  }

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
