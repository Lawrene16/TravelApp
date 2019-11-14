(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div style=\"height: 150px; background-color: rgb(216, 216, 216);\">\n    <img style=\"height: 150px; object-fit: cover; width: 100vw;\" [src]=\"base64CoverPhoto\">\n\n    <ion-icon style=\"position: absolute; top: 110px; font-size: 34px; right: 10px; z-index: 4;\" name=\"camera\" (click)=\"presentActionSheet(0)\" color=\"light\">\n    </ion-icon>\n  </div>\n\n\n\n  <!-- Camera close to profile photo -->\n  <div style=\"position: absolute;\n  top: 90px; width: 100vw;\">\n  <div style=\"position: absolute;\n  height: 40px;\n  top: 90px; width: 100vw;\">\n\n  <div (click)=\"presentActionSheet(1)\" style=\"margin-left: 55vw; height: 30px; width: 30px; border-radius: 50%; padding: 1px; background-color: rgb(216, 216, 216); \">\n    <ion-icon style=\"font-size: 26px;\" name=\"camera\" color=\"light\"></ion-icon>\n  </div>\n\n   <!-- Profile Photo -->\n  </div>\n    <p style=\"margin: 0px;\" align=\"center\"><img class=\"userimg\" height=\"30\" [src]=\"base64ProfilePhoto\"></p>\n  </div>\n\n  <br>\n  <br>\n  <br>\n  <br>\n\n\n  <p align=\"center\" style=\"margin: 0px; font-size: 22px; opacity: 0.6; font-weight: 600;\"><span>{{firstname}} {{lastname}}</span><ion-icon (click)=\"editname()\" style=\"margin-top: 5px; margin-left: 5px;\" name=\"create\" color=\"dark\"></ion-icon></p>\n\n  <div style=\"width: 100%; margin-top: 7px; text-align: center; height: 27px;\">\n    <div style=\"display: inline-block; margin: 0 auto;\n    padding: 3px;\">\n      <div style=\"width: 25px; float: left;\">\n        <img height=\"25px\" style=\"width: 25px;\" src=\"../../assets/icon/location-pointer.png\">\n      </div>\n      <div style=\"float: left; padding-left: 5px; font-size: 15px; opacity: 0.6; margin-top: 2px;\">\n        Mandaluyong, Metro Manila\n      </div>\n    </div>\n  </div>\n\n  <div style=\"width: 100%; text-align: center; height: 27px;\">\n    <div style=\"display: inline-block; margin: 0 auto;\n    padding: 3px;\">\n      <div style=\"width: 25px; float: left;\">\n        <img height=\"25px\" style=\"width: 22px;\" src=\"../../assets/icon/human-footprint.png\">\n      </div>\n      <div style=\"float: left; padding-left: 5px; opacity: 0.6; font-size: 15px; margin-top: 2px;\">\n        {{provincesVisited}}/81 Provinces Visited\n      </div>\n    </div>\n  </div>\n\n  <br>\n\n  <div style=\"width: 100vw; margin-top: 20px;\">\n    <div style=\"height: 60px; width: 50vw; float: left; border: 1px solid rgb(216,216,216);\">\n      <p style=\"margin: 0px; padding-top: 10px; font-weight: 600; opacity: 0.7;\" align=\"center\">{{following}}<br><span\n          style=\"font-weight: 200; opacity: 0.7; font-size: 14px;\">Following</span></p>\n    </div>\n    <div style=\"height: 60px; width: 50vw; float: left; border: 1px solid rgb(216,216,216);\">\n      <p style=\"margin: 0px; padding-top: 10px; font-weight: 600; opacity: 0.7;\" align=\"center\">{{followers}}<br><span\n          style=\"font-weight: 200; opacity: 0.7; font-size: 14px;\">Followers</span></p>\n    </div>\n  </div>\n\n  <br>\n  <br>\n  <br>\n\n\n  <!-- Default Segment -->\n  <ion-segment mode=\"md\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"showTrips\">\n      <ion-label>Trip</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"showMaps\">\n      <ion-label>Map</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"showGallery\">\n      <ion-label>Gallery</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- Trips Div -->\n  <div  *ngIf=\"showTrips\">\n    <ion-card *ngFor=\"let trip of trips\" padding style=\"height: 350px;\">\n      <img height=\"200px\" style=\"background-color: rgb(216, 216, 216);\">\n      <p style=\"font-weight: 600; margin: 0px; padding-top: 20px; font-size: 16px;\">First Anniversary with wifey</p>\n\n      <div style=\"width: 100%; margin-top: 10px;\">\n        <div style=\"width: 25px; float: left;\">\n          <img height=\"25px\" style=\"width: 30px;\" src=\"../../assets/icon/location-pointer.png\">\n        </div>\n        <div style=\"float: left; padding-left: 5px; font-size: 15px; margin-top: 2px;\">\n          Baguio, Benguet\n        </div>\n      </div><br>\n      <div style=\"width: 100%; margin-top: 12px;\">\n        <div style=\"width: 25px; float: left;\">\n          <img height=\"18px\" style=\"width: 20px;\" src=\"../../assets/icon/appointment-2.png\">\n        </div>\n        <div style=\"float: left; padding-left: 5px; font-size: 15px; margin-top: 2px;\">\n          February 14-18, 2019\n        </div>\n      </div>\n    </ion-card>\n  </div>\n\n  <!-- Map Div -->\n  <div *ngIf=\"showMaps\">\n    <p align=\"center\"><img height=\"500px\" src=\"../../assets/mapsshot.png\"></p>\n  </div>\n\n  <!-- Gallery Div -->\n  <div *ngIf=\"showGallery\" style=\"width: 100%;\">\n    <div *ngFor=\"let galleryimage of galleryimages\" class=\"eachgalleryimage\">\n    </div>\n  </div>\n\n  <!-- <ion-icon name=\"create\" style=\"position: absolute; z-index: 4; font-size: 40px; left: 46vw; top: 13vh\" color=\"light\"></ion-icon> -->\n\n  <!-- \n      <br>\n      <div style=\"margin-right: 20px;\">\n          <div class=\"titles\">First Name</div>\n          <ion-item>\n            <ion-input style=\"margin-right: 20px\" type=\"text\" [(ngModel)]=\"firstname\"></ion-input>\n          </ion-item>\n        </div>\n      \n      \n      \n        <div style=\"margin-right: 20px;\">\n            <div class=\"titles\">Last Name</div>\n            <ion-item>\n              <ion-input style=\"margin-right: 20px\" type=\"text\" [(ngModel)]=\"lastname\"></ion-input>\n            </ion-item>\n          </div>\n    \n        <div style=\"margin-right: 20px;\">\n          <div class=\"titles\">Phone</div>\n          <ion-item>\n            <ion-input style=\"margin-right: 20px\" type=\"text\" [(ngModel)]=\"phonenumber\"></ion-input>\n          </ion-item>\n        </div>\n\n        <div style=\"margin-right: 20px;\">\n            <div class=\"titles\">About Me</div>\n              <ion-textarea style=\"margin-left: 18px\" type=\"text\" [(ngModel)]=\"aboutMe\"></ion-textarea>\n          </div>\n\n      <p align=\"center\"><button (click)=\"saveProfile()\" ion-button class=\"btn\"><b>SAVE</b></button></p>\n         -->\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"] }])
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userimg {\n  -webkit-border-radius: 50%;\n  height: 120px;\n  width: 120px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.eachgalleryimage {\n  width: 24.5vw;\n  height: 25vw;\n  margin: 1px;\n  float: left;\n  background-color: #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9EZXNrdG9wL1RyYXZlbEFwcC9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDRCxZQUFBO0VBQ0Qsc0JBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0FDQUY7O0FETUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcmltZ3tcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDEyMHB4OyBcbiAgIHdpZHRoOiAxMjBweDsgXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLy8gYm94LXNoYWRvdzogMCAwIDVweCBncmF5O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgfVxuXG4gIC5lYWNoZ2FsbGVyeWltYWdle1xuICAgIHdpZHRoOiAyNC41dnc7IFxuICAgIGhlaWdodDogMjV2dzsgXG4gICAgbWFyZ2luOiAxcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xuICB9XG5cbiAgLy8gLnRpdGxlc3tcbi8vICAgICBtYXJnaW4tbGVmdDogMTZweDtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgb3BhY2l0eTogMC43O1xuLy8gICAgIG1hcmdpbi10b3A6IDMwcHg7XG4vLyB9XG5cbi8vICAgLmJ0bntcbi8vICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCBjb2xvcigkY29sb3JzLCBidXR0b25jb2xvcnMpO1xuLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKCRjb2xvcnMsIGJ1dHRvbmNvbG9ycyk7XG4vLyAgICAgLy8gY29sb3I6IGNvbG9yKCRjb2xvcnMsIGxpZ2h0KTtcbi8vICAgICBwYWRkaW5nOiAxNXB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgICB3aWR0aDogNDB2dztcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9IiwiLnVzZXJpbWcge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmVhY2hnYWxsZXJ5aW1hZ2Uge1xuICB3aWR0aDogMjQuNXZ3O1xuICBoZWlnaHQ6IDI1dnc7XG4gIG1hcmdpbjogMXB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../travel-app.service */ "./src/app/travel-app.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");






let ProfilePage = class ProfilePage {
    constructor(toastCtrl, camera, actionSheetCtrl, alertController, events, loadingCtrl, travelAppService) {
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertController = alertController;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.travelAppService = travelAppService;
        this.firstname = "";
        this.lastname = "";
        this.phonenumber = "";
        this.aboutMe = "";
        this.following = "";
        this.followers = "";
        this.provincesVisited = "";
        this.myimage = "";
        this.showGallery = false;
        this.showTrips = true;
        this.showMaps = false;
        this.galleryimages = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},];
        this.trips = [];
        // this.useruid = "ER9ayHUaZHPuWcUS0yq2oG77NRg2";
        this.useruid = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid;
        this.loadingCtrl.create({ message: "Fetching your profile details" }).then((res) => {
            res.present();
            firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('/users').child(this.useruid).once('value', snapshot => {
                this.firstname = snapshot.val().firstname;
                this.lastname = snapshot.val().lastname;
                this.phonenumber = snapshot.val().phoneNumber;
                this.aboutMe = snapshot.val().aboutMe;
                this.following = snapshot.val().following;
                this.followers = snapshot.val().followers;
                this.provincesVisited = snapshot.val().provincesVisited;
                if (snapshot.val().photoURL == undefined) {
                    this.base64ProfilePhoto = '../../assets/icon/user2.png';
                }
                else {
                    this.base64ProfilePhoto = snapshot.val().photoURL;
                }
                if (snapshot.val().coverPhoto == undefined) {
                    this.base64CoverPhoto = '../../assets/icon/backg2.png';
                }
                else {
                    this.base64CoverPhoto = snapshot.val().coverPhoto;
                }
            }).then(() => {
                res.dismiss();
            }).catch(() => {
                res.dismiss();
            });
        });
        this.travelAppService.fetchTrips().then((trips) => {
            console.log(trips);
            this.trips = trips;
        });
    }
    editname() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
                            this.loadingCtrl.create({ message: "Please wait" }).then((res) => {
                                res.present();
                                this.travelAppService.updateUserDetails(alertData.firstname, alertData.lastname, "aboutme").then(() => {
                                    this.firstname = alertData.firstname;
                                    this.lastname = alertData.lastname;
                                    res.dismiss();
                                    this.presentToast("Names updated successfully");
                                }).catch((err) => {
                                    res.dismiss();
                                    this.presentToast("Names not updated" + err);
                                });
                            });
                            console.log(alertData);
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    segmentChanged(event) {
        if (event.detail.value == "showTrips") {
            this.showTrips = true;
            this.showGallery = false;
            this.showMaps = false;
        }
        else if (event.detail.value == "showMaps") {
            this.showMaps = true;
            this.showGallery = false;
            this.showTrips = false;
        }
        else if (event.detail.value == "showGallery") {
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
    presentActionSheet(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(index);
            const actionSheet = yield this.actionSheetCtrl.create({
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
                            this.AccessGallery(index);
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            // console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    AccessCamera(index) {
        this.camera.getPicture({
            targetWidth: 512,
            targetHeight: 512,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(imageData => {
            // this.presentToast(imageData)
            this.loadingCtrl.create({ message: "Uploading photo" }).then((load) => {
                load.present();
                if (index == 0) {
                    this.base64CoverPhoto = "data:image/jpeg;base64," + imageData;
                    this.travelAppService.uploadCoverPhoto(this.useruid, this.base64CoverPhoto).then(() => {
                        this.presentToast("Cover Photo Uploaded Successfully");
                        load.dismiss();
                    }).catch((err) => {
                        this.presentToast("Cover Photo Not Uploaded");
                        load.dismiss();
                    });
                }
                else if (index == 1) {
                    this.base64ProfilePhoto = "data:image/jpeg;base64," + imageData;
                    this.travelAppService.uploadProfilePic(this.useruid, this.base64ProfilePhoto).then(() => {
                        this.presentToast("Profile Photo Uploaded Successfully");
                        load.dismiss();
                    }).catch((err) => {
                        this.presentToast("Profile Photo Not Uploaded");
                        load.dismiss();
                    });
                }
            });
        }, err => {
            console.log(err);
        });
    }
    AccessGallery(index) {
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(imageData => {
            this.loadingCtrl.create({ message: "Uploading photo" }).then((load) => {
                load.present();
                if (index == 0) {
                    this.base64CoverPhoto = "data:image/jpeg;base64," + imageData;
                    this.travelAppService.uploadCoverPhoto(this.useruid, this.base64CoverPhoto).then(() => {
                        this.presentToast("Cover Photo Uploaded Successfully");
                        load.dismiss();
                    }).catch((err) => {
                        this.presentToast("Cover Photo Not Uploaded");
                        load.dismiss();
                    });
                }
                else if (index == 1) {
                    this.base64ProfilePhoto = "data:image/jpeg;base64," + imageData;
                    this.travelAppService.uploadProfilePic(this.useruid, this.base64ProfilePhoto).then(() => {
                        this.presentToast("Profile Photo Uploaded Successfully");
                        load.dismiss();
                    }).catch((err) => {
                        this.presentToast("Profile Photo Not Uploaded");
                        load.dismiss();
                    });
                }
            });
        }, err => {
            console.log(err);
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 6000,
                color: 'dark'
            });
            toast.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _travel_app_service__WEBPACK_IMPORTED_MODULE_3__["TravelAppService"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _travel_app_service__WEBPACK_IMPORTED_MODULE_3__["TravelAppService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map