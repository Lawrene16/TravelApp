(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div (click)=\"openImagePickerCrop()\" style=\"width: 100vw; height: 41w; align-content: center\">\n        <p align=\"center\"><img class=\"userimg\" height=\"50\" src=\"{{myimage}}\"></p>\n        <ion-icon name=\"create\" style=\"position: absolute; z-index: 4; font-size: 40px; left: 46vw; top: 13vh\" color=\"light\"></ion-icon>\n      </div>\n\n      <br>\n      <div style=\"margin-right: 20px;\">\n          <div class=\"titles\">First Name</div>\n          <ion-item>\n            <ion-input style=\"margin-right: 20px\" type=\"text\" [(ngModel)]=\"firstname\"></ion-input>\n          </ion-item>\n        </div>\n      \n      \n      \n        <div style=\"margin-right: 20px;\">\n            <div class=\"titles\">Last Name</div>\n            <ion-item>\n              <ion-input style=\"margin-right: 20px\" type=\"text\" [(ngModel)]=\"lastname\"></ion-input>\n            </ion-item>\n          </div>\n        \n        <!-- <div style=\"margin-right: 20px;\">\n          <div class=\"titles\">Email</div>\n          <ion-item>\n            <ion-input [readonly]=\"true\" style=\"margin-right: 20px\" placeholder=\"{{email}}\" type=\"text\">\n            </ion-input>\n          </ion-item>\n        </div>\n       -->\n    \n        <div style=\"margin-right: 20px;\">\n          <div class=\"titles\">Phone</div>\n          <ion-item>\n            <ion-input style=\"margin-right: 20px\" type=\"text\" [(ngModel)]=\"phonenumber\"></ion-input>\n          </ion-item>\n        </div>\n\n        <div style=\"margin-right: 20px;\">\n            <div class=\"titles\">About Me</div>\n            <!-- <ion-item style=\"padding: 0px; margin:0px\"> -->\n              <ion-textarea style=\"margin-left: 18px\" type=\"text\" [(ngModel)]=\"aboutMe\"></ion-textarea>\n            <!-- </ion-item> -->\n            <div style=\"width: 90vw; position: absolute; opacity: 0.3; bottom: 105px; height: 1px; margin-left: 20px; background-color: black;\"></div>\n          </div>\n\n      <p align=\"center\"><button (click)=\"saveProfile()\" ion-button class=\"btn\"><b>SAVE</b></button></p>\n        \n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
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

module.exports = ".userimg {\n  -webkit-border-radius: 50%;\n  height: 40vw;\n  width: 40vw;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.titles {\n  margin-left: 16px;\n  font-size: 16px;\n  opacity: 0.7;\n  margin-top: 30px;\n}\n\n.btn {\n  padding: 23px;\n  font-size: 18px;\n  margin-bottom: 40px;\n  border-radius: 25px;\n  margin-top: 20px;\n  width: 40vw;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVXB3b3JrIFByb2plY3RzL0poYXpUcmF2ZWxBcHAvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0QsV0FBQTtFQUNELHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURJRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElFO0VBSUUsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyaW1ne1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNDB2dzsgXG4gICB3aWR0aDogNDB2dzsgXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLy8gYm94LXNoYWRvdzogMCAwIDVweCBncmF5O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgfVxuXG4gIC50aXRsZXN7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4gIC5idG57XG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgY29sb3IoJGNvbG9ycywgYnV0dG9uY29sb3JzKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcigkY29sb3JzLCBidXR0b25jb2xvcnMpO1xuICAgIC8vIGNvbG9yOiBjb2xvcigkY29sb3JzLCBsaWdodCk7XG4gICAgcGFkZGluZzogMjNweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi51c2VyaW1nIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDB2dztcbiAgd2lkdGg6IDQwdnc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udGl0bGVzIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMjNweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogNDB2dztcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

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




// import * as firebase from "firebase";
// import { Crop } from '@ionic-native/crop/ngx';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
let ProfilePage = class ProfilePage {
    constructor(toastCtrl, 
    // public crop: Crop,
    // public imagePicker: ImagePicker,
    loadingCtrl, travelAppService) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.travelAppService = travelAppService;
        this.firstname = "";
        this.lastname = "";
        this.phonenumber = "";
        this.aboutMe = "";
        this.myimage = '../../assets/icon/user2.png';
    }
    ngOnInit() {
    }
    saveProfile() {
        if (this.firstname == "" || this.lastname == "") {
            this.presentToast("Names field cannot be left blank");
        }
        else if (this.phonenumber == "") {
            this.presentToast("Phone Number field cannot be left blank");
        }
        else if (this.aboutMe == "") {
            this.presentToast("About me field cannot be left blank");
        }
        else {
            this.loadingCtrl.create({ message: "Please wait" }).then((res) => {
                res.present();
                this.travelAppService.updateUserDetails(this.firstname, this.lastname, this.phonenumber, this.aboutMe, this.myimage).then(() => {
                    this.presentToast("Profile updated successfully");
                    res.dismiss();
                }).catch((err) => {
                    console.log(err);
                    res.dismiss();
                });
            });
        }
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 2000,
                color: 'dark'
            });
            toast.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _travel_app_service__WEBPACK_IMPORTED_MODULE_3__["TravelAppService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map