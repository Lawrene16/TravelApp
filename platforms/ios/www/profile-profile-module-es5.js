(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"arrow-dropdown\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n\n  <div style=\"height: 150px; background-color: rgb(216, 216, 216);\">\n    <img style=\"height: 150px; object-fit: cover; width: 100vw;\" [src]=\"base64CoverPhoto\">\n\n    <ion-icon style=\"position: absolute; top: 110px; font-size: 34px; right: 10px; z-index: 4;\" name=\"camera\" (click)=\"AccessGallery(0)\" color=\"light\">\n    </ion-icon>\n  </div>\n\n\n\n  <!-- Camera close to profile photo -->\n  <div style=\"position: absolute;\n  top: 90px; width: 100vw;\">\n  <div style=\"position: absolute;\n  height: 40px;\n  top: 90px; width: 100vw;\">\n\n  <div (click)=\"AccessGallery(1)\" style=\"margin-left: 55vw; height: 30px; width: 30px; border-radius: 50%; padding: 1px; background-color: rgb(216, 216, 216); \">\n    <ion-icon style=\"font-size: 26px;\" name=\"camera\" color=\"light\"></ion-icon>\n  </div>\n\n   <!-- Profile Photo -->\n  </div>\n    <p style=\"margin: 0px;\" align=\"center\"><img class=\"userimg\" height=\"30\" [src]=\"base64ProfilePhoto\"></p>\n  </div>\n\n  <br>\n  <br>\n  <br>\n  <br>\n\n\n  <p align=\"center\" style=\"margin: 0px; font-size: 22px; opacity: 0.6; font-weight: 600;\"><span>{{firstname}} {{lastname}}</span><ion-icon (click)=\"editname()\" style=\"margin-top: 5px; margin-left: 5px;\" name=\"create\" color=\"dark\"></ion-icon></p>\n\n  <div style=\"width: 100%; margin-top: 7px; text-align: center; height: 27px;\">\n    <div style=\"display: inline-block; margin: 0 auto;\n    padding: 3px;\">\n      <div style=\"width: 25px; float: left;\">\n        <img height=\"25px\" style=\"width: 25px;\" src=\"../../assets/icon/location-pointer.png\">\n      </div>\n      <div style=\"float: left; padding-left: 5px; font-size: 15px; opacity: 0.6; margin-top: 2px;\">\n        Mandaluyong, Metro Manila\n      </div>\n    </div>\n  </div>\n\n  <div style=\"width: 100%; text-align: center; height: 27px;\">\n    <div style=\"display: inline-block; margin: 0 auto;\n    padding: 3px;\">\n      <div style=\"width: 25px; float: left;\">\n        <img height=\"25px\" style=\"width: 22px;\" src=\"../../assets/icon/human-footprint.png\">\n      </div>\n      <div style=\"float: left; padding-left: 5px; opacity: 0.6; font-size: 15px; margin-top: 2px;\">\n        {{provincesVisited}}/81 Provinces Visited\n      </div>\n    </div>\n  </div>\n\n  <br>\n\n  \n  <div style=\"width: 100vw; margin-top: 20px;\">\n    <div style=\"height: 60px; width: 50vw; float: left; border: 1px solid rgb(216,216,216);\">\n      <p style=\"margin: 0px; padding-top: 10px; font-weight: 600; opacity: 0.7;\" align=\"center\">{{following}}<br><span\n          style=\"font-weight: 200; opacity: 0.7; font-size: 14px;\">Following</span></p>\n    </div>\n    <div style=\"height: 60px; width: 50vw; float: left; border: 1px solid rgb(216,216,216);\">\n      <p style=\"margin: 0px; padding-top: 10px; font-weight: 600; opacity: 0.7;\" align=\"center\">{{followers}}<br><span\n          style=\"font-weight: 200; opacity: 0.7; font-size: 14px;\">Followers</span></p>\n    </div>\n  </div>\n\n  <br>\n  <br>\n  <br>\n\n\n  <!-- Default Segment -->\n  <ion-segment mode=\"md\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"showTrips\">\n      <ion-label>Trip</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"showMaps\">\n      <ion-label>Map</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"showGallery\">\n      <ion-label>Gallery</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- Trips Div -->\n  <div  *ngIf=\"showTrips\">\n    <ion-card *ngFor=\"let trip of trips\" padding style=\"height: 350px;\">\n      <img height=\"200px\" src=\"{{trip.photo}}\">\n      <p style=\"font-weight: 600; margin: 0px; padding-top: 20px; font-size: 16px;\">{{trip.eventTitle}}</p>\n\n      <div style=\"width: 100%; margin-top: 10px;\">\n        <div style=\"width: 25px; float: left;\">\n          <img height=\"25px\" style=\"width: 30px;\" src=\"../../assets/icon/location-pointer.png\">\n        </div>\n        <div style=\"float: left; padding-left: 5px; font-size: 15px; margin-top: 2px;\">\n          {{trip.city}}, {{trip.province}}\n        </div>\n      </div><br>\n      <div style=\"width: 100%; margin-top: 12px;\">\n        <div style=\"width: 25px; float: left;\">\n          <img height=\"18px\" style=\"width: 20px;\" src=\"../../assets/icon/appointment-2.png\">\n        </div>\n        <div style=\"float: left; padding-left: 5px; font-size: 15px; margin-top: 2px;\">\n          {{trip.date}}\n        </div>\n      </div>\n    </ion-card>\n  </div>\n\n  <!-- Map Div -->\n  <div *ngIf=\"showMaps\">\n    <p align=\"center\"><img height=\"500px\" src=\"../../assets/mapsshot.png\"></p>\n  </div>\n\n  <!-- Gallery Div -->\n  <div *ngIf=\"showGallery\" style=\"width: 100%;\">\n    <div *ngFor=\"let galleryimage of galleryimages\" class=\"eachgalleryimage\">\n      <img style=\"width: 100%; height: 100%;\" src=\"{{galleryimage}}\">\n    </div>\n  </div>\n\n  <!-- <ion-icon name=\"create\" style=\"position: absolute; z-index: 4; font-size: 40px; left: 46vw; top: 13vh\" color=\"light\"></ion-icon> -->\n\n  <!-- \n      <br>\n      <div style=\"margin-right: 20px;\">\n          <div class=\"titles\">First Name</div>\n          <ion-item>\n            <ion-input style=\"margin-right: 20px\" type=\"text\" [(ngModel)]=\"firstname\"></ion-input>\n          </ion-item>\n        </div>\n      \n      \n      \n        <div style=\"margin-right: 20px;\">\n            <div class=\"titles\">Last Name</div>\n            <ion-item>\n              <ion-input style=\"margin-right: 20px\" type=\"text\" [(ngModel)]=\"lastname\"></ion-input>\n            </ion-item>\n          </div>\n    \n        <div style=\"margin-right: 20px;\">\n          <div class=\"titles\">Phone</div>\n          <ion-item>\n            <ion-input style=\"margin-right: 20px\" type=\"text\" [(ngModel)]=\"phonenumber\"></ion-input>\n          </ion-item>\n        </div>\n\n        <div style=\"margin-right: 20px;\">\n            <div class=\"titles\">About Me</div>\n              <ion-textarea style=\"margin-left: 18px\" type=\"text\" [(ngModel)]=\"aboutMe\"></ion-textarea>\n          </div>\n\n      <p align=\"center\"><button (click)=\"saveProfile()\" ion-button class=\"btn\"><b>SAVE</b></button></p>\n         -->\n</ion-content>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
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
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userimg {\n  -webkit-border-radius: 50%;\n  height: 120px;\n  width: 120px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.eachgalleryimage {\n  width: 24vw;\n  height: 25vw;\n  margin: 1px;\n  float: left;\n  background-color: #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9EZXNrdG9wL1RyYXZlbEFwcC9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDRCxZQUFBO0VBQ0Qsc0JBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0FDQUY7O0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcmltZ3tcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDEyMHB4OyBcbiAgIHdpZHRoOiAxMjBweDsgXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLy8gYm94LXNoYWRvdzogMCAwIDVweCBncmF5O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgfVxuXG4gIC5lYWNoZ2FsbGVyeWltYWdle1xuICAgIHdpZHRoOiAyNHZ3OyBcbiAgICBoZWlnaHQ6IDI1dnc7IFxuICAgIG1hcmdpbjogMXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcbiAgfVxuXG4gIC8vIC50aXRsZXN7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICAgIG9wYWNpdHk6IDAuNztcbi8vICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuLy8gfVxuXG4vLyAgIC5idG57XG4vLyAgICAgLy8gYm9yZGVyOiAycHggc29saWQgY29sb3IoJGNvbG9ycywgYnV0dG9uY29sb3JzKTtcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcigkY29sb3JzLCBidXR0b25jb2xvcnMpO1xuLy8gICAgIC8vIGNvbG9yOiBjb2xvcigkY29sb3JzLCBsaWdodCk7XG4vLyAgICAgcGFkZGluZzogMTVweDtcbi8vICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgICAgd2lkdGg6IDQwdnc7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfSIsIi51c2VyaW1nIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5lYWNoZ2FsbGVyeWltYWdlIHtcbiAgd2lkdGg6IDI0dnc7XG4gIGhlaWdodDogMjV2dztcbiAgbWFyZ2luOiAxcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../travel-app.service */ "./src/app/travel-app.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");






var ProfilePage = /** @class */ (function () {
    function ProfilePage(toastCtrl, camera, actionSheetCtrl, alertController, events, loadingCtrl, travelAppService) {
        var _this = this;
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
        this.galleryimages = [];
        this.trips = [];
        // this.useruid = "ER9ayHUaZHPuWcUS0yq2oG77NRg2";
        this.useruid = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid;
        this.loadingCtrl.create({ message: "Fetching your profile details" }).then(function (res) {
            res.present();
            firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('/users').child(_this.useruid).once('value', function (snapshot) {
                _this.firstname = snapshot.val().firstname;
                _this.lastname = snapshot.val().lastname;
                _this.phonenumber = snapshot.val().phoneNumber;
                _this.aboutMe = snapshot.val().aboutMe;
                _this.following = snapshot.val().following;
                _this.followers = snapshot.val().followers;
                _this.provincesVisited = snapshot.val().provincesVisited;
                if (snapshot.val().photoURL == undefined) {
                    _this.base64ProfilePhoto = '../../assets/icon/user2.png';
                }
                else {
                    _this.base64ProfilePhoto = snapshot.val().photoURL;
                }
                if (snapshot.val().coverPhoto == undefined) {
                    _this.base64CoverPhoto = '../../assets/icon/backg2.png';
                }
                else {
                    _this.base64CoverPhoto = snapshot.val().coverPhoto;
                }
            }).then(function () {
                setTimeout(function () {
                    res.dismiss();
                }, 1000);
            }).catch(function () {
                res.dismiss();
            });
        });
        this.travelAppService.fetchTrips().then(function (trips) {
            console.log(trips);
            _this.trips = trips;
            _this.trips.forEach(function (trip) {
                _this.galleryimages.push(trip.photo);
            });
        });
    }
    ProfilePage.prototype.editname = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (alertData) {
                                        _this.loadingCtrl.create({ message: "Please wait" }).then(function (res) {
                                            res.present();
                                            _this.travelAppService.updateUserDetails(alertData.firstname, alertData.lastname, "aboutme").then(function () {
                                                _this.firstname = alertData.firstname;
                                                _this.lastname = alertData.lastname;
                                                res.dismiss();
                                                _this.presentToast("Names updated successfully");
                                            }).catch(function (err) {
                                                res.dismiss();
                                                _this.presentToast("Names not updated" + err);
                                            });
                                        });
                                        console.log(alertData);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.segmentChanged = function (event) {
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
    };
    ProfilePage.prototype.doRefresh = function (event) {
        // setTimeout(() => {
        //   console.log('Async operation has ended');
        // }, 3000);
        var _this = this;
        this.travelAppService.fetchTrips().then(function (trips) {
            console.log(trips);
            _this.trips = trips;
            _this.trips.forEach(function (trip) {
                _this.galleryimages.push(trip.photo);
                event.target.complete();
            });
        });
    };
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
    ProfilePage.prototype.AccessCamera = function (index) {
        var _this = this;
        this.camera.getPicture({
            targetWidth: 512,
            targetHeight: 512,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            // this.presentToast(imageData)
            _this.loadingCtrl.create({ message: "Uploading photo" }).then(function (load) {
                load.present();
                if (index == 0) {
                    _this.base64CoverPhoto = "data:image/jpeg;base64," + imageData;
                    _this.travelAppService.uploadCoverPhoto(_this.useruid, _this.base64CoverPhoto).then(function () {
                        _this.presentToast("Cover Photo Uploaded Successfully");
                        load.dismiss();
                    }).catch(function (err) {
                        _this.presentToast("Cover Photo Not Uploaded");
                        load.dismiss();
                    });
                }
                else if (index == 1) {
                    _this.base64ProfilePhoto = "data:image/jpeg;base64," + imageData;
                    _this.travelAppService.uploadProfilePic(_this.useruid, _this.base64ProfilePhoto).then(function () {
                        _this.presentToast("Profile Photo Uploaded Successfully");
                        load.dismiss();
                    }).catch(function (err) {
                        _this.presentToast("Profile Photo Not Uploaded");
                        load.dismiss();
                    });
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.AccessGallery = function (index) {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.loadingCtrl.create({ message: "Uploading photo" }).then(function (load) {
                load.present();
                if (index == 0) {
                    _this.base64CoverPhoto = "data:image/jpeg;base64," + imageData;
                    _this.travelAppService.uploadCoverPhoto(_this.useruid, _this.base64CoverPhoto).then(function () {
                        _this.presentToast("Cover Photo Uploaded Successfully");
                        load.dismiss();
                    }).catch(function (err) {
                        _this.presentToast("Cover Photo Not Uploaded");
                        load.dismiss();
                    });
                }
                else if (index == 1) {
                    _this.base64ProfilePhoto = "data:image/jpeg;base64," + imageData;
                    _this.travelAppService.uploadProfilePic(_this.useruid, _this.base64ProfilePhoto).then(function () {
                        _this.presentToast("Profile Photo Uploaded Successfully");
                        load.dismiss();
                    }).catch(function (err) {
                        _this.presentToast("Profile Photo Not Uploaded");
                        load.dismiss();
                    });
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 6000,
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _travel_app_service__WEBPACK_IMPORTED_MODULE_3__["TravelAppService"] }
    ]; };
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
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map