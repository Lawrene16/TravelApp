(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"topcover\">\n    <div>\n      <ion-grid>\n        <ion-row>\n          <ion-col routerLink=\"/login\" routerDirection=\"backward\" size=\"2\" style=\"text-align: center\">\n            <ion-icon style=\"font-size: 25px; color: black; margin-top: 15px\" name=\"arrow-back\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"8\">\n            <p align=center style=\"font-size: 18px; color:black\">SIGN UP</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <br>\n    <!-- <p align=\"center\"><img src=\"../../assets/iconsandbackgrounds/logo.png\" height=\"100\"></p> -->\n    <br>\n\n  </div>\n\n\n  <div padding>\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/icon/User.png\" style=\"margin-right: 15px; zoom: 70%;\">\n      <ion-input type=\"text\" [(ngModel)]=\"firstname\" placeholder=\"First Name\"></ion-input>\n    </ion-item>\n\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/icon/User.png\" style=\"margin-right: 15px; zoom: 70%;\">\n      <ion-input type=\"text\" [(ngModel)]=\"lastname\" placeholder=\"Last Name\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/icon/mail.png\" style=\"margin-right: 15px; zoom: 32%;\">\n      <ion-input style=\"margin-left: 5px\" type=\"text\" [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/icon/Password.png\" style=\"margin-right: 15px; zoom: 70%;\">\n      <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" (click)=\"register()\">SIGN UP</ion-button>\n\n\n    <div style=\"margin-top: 10px;\">\n\n         \n        <ion-grid>\n        \n          <ion-row style=\"justify-content: center; padding-left: 20px;\" >\n    \n            <div class=\"testclass\" (click)=\"fblogin()\">\n                    <img style=\"zoom:10%;\" src=\"../../assets/icon/facebook.svg\">\n            </div>\n    \n            <div class=\"testclass\" (click)=\"googleLogin()\">\n                      <img style=\"zoom:10%;\" src=\"../../assets/icon/google.svg\">\n            </div>\n            </ion-row>\n        </ion-grid>\n        \n    </div> \n\n    <p routerLink=\"/login\" routerDirection=\"backward\"  class=\"tna\" style=\"margin-top: 20px\" align=center>Already have an account?<b style=\"font-size: 14px; margin-left: 5px\">Login</b></p>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topcover {\n  height: 35vh;\n}\n\n.secondlayer {\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.testclass {\n  margin: 10px;\n}\n\n.tna {\n  font-size: 12px;\n  opacity: 0.6;\n  margin-bottom: 20px;\n}\n\n.each_item {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVXB3b3JrIFByb2plY3RzL0poYXpUcmF2ZWxBcHAvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUNBSjs7QURPQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNKSjs7QURRQTtFQUNJLFlBQUE7QUNMSjs7QURRQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURVQTtFQUNJLG1CQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wY292ZXJ7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiAzNXZoO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb25zYW5kYmFja2dyb3VuZHMvYmFja2cucG5nJyk7XG4gICAgICAgIFxuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNlY29uZGxheWVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4udGVzdGNsYXNze1xuICAgIG1hcmdpbjogMTBweFxufVxuXG4udG5he1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5lYWNoX2l0ZW17XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iLCIudG9wY292ZXIge1xuICBoZWlnaHQ6IDM1dmg7XG59XG5cbi5zZWNvbmRsYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZXN0Y2xhc3Mge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi50bmEge1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmVhY2hfaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../travel-app.service */ "./src/app/travel-app.service.ts");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, travelAppService, toastCtrl, loadingController) {
        this.router = router;
        this.travelAppService = travelAppService;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
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
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.firstname == "" || this.firstname.length < 2) {
            this.presentToast("First name field is either blank or too short");
        }
        else if (this.lastname == "" || this.lastname.length < 2) {
            this.presentToast("Last name field is either blank or too short");
        }
        else if (this.email == "" || this.email.length < 3 ||
            !this.email.includes('@') || !this.email.includes('.')) {
            this.presentToast("Invalid email address");
        }
        else if (this.password == "" || this.password.length < 6) {
            this.presentToast("Password name field is either blank or too short");
        }
        else {
            this.loadingController.create({
                message: 'Logging In',
            }).then(function (res) {
                res.present();
                _this.travelAppService.createnewuser(_this.firstname, _this.lastname, _this.email, _this.password).then(function () {
                    res.dismiss();
                    _this.router.navigateByUrl('/home');
                }).catch(function (err) {
                    res.dismiss();
                    _this.presentToast(err);
                });
            });
        }
    };
    RegisterPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000,
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
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _travel_app_service__WEBPACK_IMPORTED_MODULE_4__["TravelAppService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _travel_app_service__WEBPACK_IMPORTED_MODULE_4__["TravelAppService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map