(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addtrip-addtrip-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addtrip/addtrip.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addtrip/addtrip.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Add Trip</ion-title>\n\n    <ion-buttons (click)=\"uploadTrip()\" style=\"margin-right: 10px\" slot=\"end\">\n      <div style=\"font-size: 16px; font-weight: 300; \">Share</div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <!-- Each option -->\n    <div style=\"margin-top: 15px;\">\n      <ion-label style=\"margin-left: 15px; opacity: 0.7;\">Select Province</ion-label>\n      <ion-select\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; margin-top: 10px; margin-right: 15px;padding: 15px;\"\n        placeholder=\"Select One\">\n        <ion-select-option value=\"f\">Female</ion-select-option>\n        <ion-select-option value=\"m\">Male</ion-select-option>\n      </ion-select>\n    </div>\n\n\n    <div style=\"margin-top: 25px;\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Select City/Munucipality</ion-label>\n      <ion-select\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; margin-top: 10px; margin-right: 15px;padding: 15px;\"\n        placeholder=\"Select One\">\n        <ion-select-option value=\"f\">Female</ion-select-option>\n        <ion-select-option value=\"m\">Male</ion-select-option>\n      </ion-select>\n    </div>\n\n\n    <div style=\"margin-top: 25px;\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Select Date</ion-label>\n      <div\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; height: 45px; margin-top: 10px; margin-right: 15px;\">\n        <ion-datetime [(ngModel)]=\"date\" (ionChange)=\"validateButton($event)\" display-format=\"MMMM, D, YYYY\"\n          picker-format=\"DD MM YYYY\"></ion-datetime>\n      </div>\n    </div>\n\n\n    <div style=\"margin-top: 25px;\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Event Title</ion-label>\n      <ion-input [(ngModel)]=\"eventTitle\"\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; height: 50px; padding-left: 10px; width: 93vw; margin-top: 10px; margin-right: 15px;\">\n      </ion-input>\n    </div>\n\n\n    <div style=\"margin-top: 25px;\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Tell us more about this trip</ion-label>\n      <ion-textarea [(ngModel)]=\"aboutTrip\"\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; padding-left: 10px; height: 150px; width: 93vw; margin-top: 10px; margin-right: 15px;\">\n      </ion-textarea>\n    </div>\n\n\n\n    <div style=\"margin-top: 25px;\" (click)=\"AccessGallery()\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Upload your photo</ion-label>\n\n      <img [src]=\"base64TripPhoto\"\n        style=\"border: 1px solid rgb(216,216,216); background-color: rgb(232,239,241); margin-left: 15px; height: 200px; width: 93vw; margin-top: 10px; margin-right: 15px;\">\n\n\n    </div>\n  </ion-list>\n\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/addtrip/addtrip.module.ts":
/*!*******************************************!*\
  !*** ./src/app/addtrip/addtrip.module.ts ***!
  \*******************************************/
/*! exports provided: AddtripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtripPageModule", function() { return AddtripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _addtrip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addtrip.page */ "./src/app/addtrip/addtrip.page.ts");







let AddtripPageModule = class AddtripPageModule {
};
AddtripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _addtrip_page__WEBPACK_IMPORTED_MODULE_6__["AddtripPage"] }])
        ],
        declarations: [_addtrip_page__WEBPACK_IMPORTED_MODULE_6__["AddtripPage"]]
    })
], AddtripPageModule);



/***/ }),

/***/ "./src/app/addtrip/addtrip.page.scss":
/*!*******************************************!*\
  !*** ./src/app/addtrip/addtrip.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHRyaXAvYWRkdHJpcC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/addtrip/addtrip.page.ts":
/*!*****************************************!*\
  !*** ./src/app/addtrip/addtrip.page.ts ***!
  \*****************************************/
/*! exports provided: AddtripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtripPage", function() { return AddtripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../travel-app.service */ "./src/app/travel-app.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






let AddtripPage = class AddtripPage {
    constructor(camera, actionSheetCtrl, toastCtrl, loadingCtrl, travelAppService) {
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.travelAppService = travelAppService;
        this.bla = "";
        this.base64TripPhoto = "../../assets/browsephoto.png";
        this.aboutTrip = "";
        this.city = "Metro Manila";
        this.date = "";
        this.eventTitle = "";
        this.province = "Mandaluyong";
        this.useruid = firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid;
    }
    validateButton(event) {
        console.log(event);
    }
    uploadTrip() {
        this.loadingCtrl.create({ message: "Uploading your trip" }).then((res) => {
            res.present();
            this.travelAppService.addTrip(this.useruid, this.aboutTrip, this.city, this.date, this.eventTitle, this.province, this.base64TripPhoto).then(() => {
                res.dismiss();
                this.aboutTrip = "";
                this.city = "";
                this.date = "";
                this.eventTitle = "";
                this.base64TripPhoto = "";
                this.province = "";
                this.presentToast("Trip uploaded successfully");
            }).catch((err) => {
                res.dismiss();
                console.log(err);
            });
        });
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
        }).then(imageData => {
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
AddtripPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _travel_app_service__WEBPACK_IMPORTED_MODULE_4__["TravelAppService"] }
];
AddtripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addtrip',
        template: __webpack_require__(/*! raw-loader!./addtrip.page.html */ "./node_modules/raw-loader/index.js!./src/app/addtrip/addtrip.page.html"),
        styles: [__webpack_require__(/*! ./addtrip.page.scss */ "./src/app/addtrip/addtrip.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _travel_app_service__WEBPACK_IMPORTED_MODULE_4__["TravelAppService"]])
], AddtripPage);



/***/ })

}]);
//# sourceMappingURL=addtrip-addtrip-module-es2015.js.map