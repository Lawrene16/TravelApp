(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <div class=\"topcover\">\n    <div>\n      <ion-grid>\n        <ion-row>\n          <ion-col (click)=\"gotoregister()\" size=\"2\" style=\"text-align: center\">\n            <ion-icon style=\"font-size: 25px; color: white; margin-top: 15px\" name=\"arrow-back\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"8\">\n            <p align=center style=\"font-size: 18px; color:white\">LOGIN</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <!-- <p align=\"center\"><img src=\"../../assets/iconsandbackgrounds/iconn.png\" height=\"120\"><br><br><b style=\"text-align: center; color: white; font-size: 18px\">Please login to your <br>account</b></p> -->\n\n  </div>\n\n\n  <div padding>\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/icon/User.png\" style=\"margin-right: 15px; zoom: 70%;\">\n      <ion-input type=\"text\" [(ngModel)]=\"email\" placeholder=\"User Name\"></ion-input>\n    </ion-item>\n\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/icon/Password.png\" style=\"margin-right: 15px; zoom: 70%;\">\n      <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n\n    <p class=\"tna\" align=center>Terms and Agreement</p>\n\n    <ion-button expand=\"block\" (click)=\"login()\">LOGIN</ion-button>\n\n       <div style=\"margin-top: 10px;\">\n\n         \n        <ion-grid>\n        \n          <ion-row style=\"justify-content: center; padding-left: 20px;\" >\n    \n            <div class=\"testclass\" (click)=\"fblogin()\">\n                    <img style=\"zoom:10%;\" src=\"../../assets/icon/facebook.svg\">\n            </div>\n    \n            <div class=\"testclass\" (click)=\"googleLogin()\">\n                      <img style=\"zoom:10%;\" src=\"../../assets/icon/google.svg\">\n            </div>\n            </ion-row>\n        </ion-grid>\n        \n    </div> \n    \n    <p routerLink=\"/register\" routerDirection=\"forward\"  class=\"tna\" style=\"margin-top: 20px\" align=center>Dont have an account?<b\n        style=\"font-size: 14px; margin-left: 5px\">Register Now</b></p>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topcover {\n  height: 35vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.testclass {\n  margin: 10px;\n}\n\n.secondlayer {\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.tna {\n  font-size: 12px;\n  opacity: 0.6;\n  margin-bottom: 20px;\n}\n\n.each_item {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVXB3b3JrIFByb2plY3RzL0poYXpUcmF2ZWxBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLFlBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0FDRko7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FES0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRko7O0FET0E7RUFDSSxtQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGNvdmVye1xuICAgIC8vIGhlaWdodDogNTV2aDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uc2FuZGJhY2tncm91bmRzL2JhY2tnLnBuZycpO1xuICAgIGhlaWdodDogMzV2aDtcbiAgICAgICAgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGVzdGNsYXNze1xuICAgIG1hcmdpbjogMTBweFxufVxuLnNlY29uZGxheWVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4udG5he1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5lYWNoX2l0ZW17XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iLCIudG9wY292ZXIge1xuICBoZWlnaHQ6IDM1dmg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50ZXN0Y2xhc3Mge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5zZWNvbmRsYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50bmEge1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmVhY2hfaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../travel-app.service */ "./src/app/travel-app.service.ts");





let LoginPage = class LoginPage {
    constructor(router, travelAppService, toastCtrl, loadingController) {
        this.router = router;
        this.travelAppService = travelAppService;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.email = "";
        this.password = "";
    }
    ngOnInit() {
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
    // fblogin(){
    //   this.travelAppService.facebookLogin().then(() =>{
    //     this.router.navigateByUrl('/home');
    //   }).catch((err) =>{
    //     console.log(err)
    //   })
    // }
    // googleLogin(){
    //   this.travelAppService.googleLogin().then(() =>{
    //     this.router.navigateByUrl('/home');
    //   }).catch((err) =>{
    //     console.log(err)
    //   })
    // }
    login() {
        if (this.email == "" || this.email.length < 3 ||
            !this.email.includes('@') || !this.email.includes('.')) {
            this.presentToast("Invalid username/email address");
        }
        else if (this.password == "" || this.password.length < 6) {
            this.presentToast("Password name field is either blank or too short");
        }
        else {
            this.loadingController.create({
                message: 'Logging In',
            }).then((res) => {
                res.present();
                this.travelAppService.loginExistingUser(this.email, this.password).then(() => {
                    res.dismiss();
                    this.router.navigateByUrl('/home');
                }).catch((err) => {
                    this.presentToast(err);
                    res.dismiss();
                });
            });
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _travel_app_service__WEBPACK_IMPORTED_MODULE_4__["TravelAppService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _travel_app_service__WEBPACK_IMPORTED_MODULE_4__["TravelAppService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map