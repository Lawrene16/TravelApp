(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"topcover\">\n    <div>\n      <ion-grid>\n        <ion-row>\n          <ion-col routerLink=\"/login\" routerDirection=\"backward\" size=\"2\" style=\"text-align: center\">\n            <ion-icon style=\"font-size: 25px; color: black; margin-top: 15px\" name=\"arrow-back\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"8\">\n            <p align=center style=\"font-size: 18px; color:black\">SIGN UP</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <br>\n    <!-- <p align=\"center\"><img src=\"../../assets/iconsandbackgrounds/logo.png\" height=\"100\"></p> -->\n    <br>\n\n  </div>\n\n\n  <div padding>\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/icon/User.png\" style=\"margin-right: 15px; zoom: 70%;\">\n      <ion-input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Full Name\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/icon/mail.png\" style=\"margin-right: 15px; zoom: 32%;\">\n      <ion-input style=\"margin-left: 5px\" type=\"text\" [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/icon/Password.png\" style=\"margin-right: 15px; zoom: 70%;\">\n      <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" (click)=\"register()\">SIGN UP</ion-button>\n\n\n    <div style=\"margin-top: 10px;\">\n\n         \n        <ion-grid>\n        \n          <ion-row style=\"justify-content: center; padding-left: 20px;\" >\n    \n            <div class=\"testclass\" (click)=\"fblogin()\">\n                    <img style=\"zoom:10%;\" src=\"../../assets/icon/facebook.svg\">\n            </div>\n    \n            <div class=\"testclass\" (click)=\"googleLogin()\">\n                      <img style=\"zoom:10%;\" src=\"../../assets/icon/google.svg\">\n            </div>\n            </ion-row>\n        </ion-grid>\n        \n    </div> \n\n    <p routerLink=\"/login\" routerDirection=\"backward\"  class=\"tna\" style=\"margin-top: 20px\" align=center>Already have an account?<b style=\"font-size: 14px; margin-left: 5px\">Login</b></p>\n\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
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



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topcover {\n  height: 35vh;\n}\n\n.secondlayer {\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.testclass {\n  margin: 10px;\n}\n\n.tna {\n  font-size: 12px;\n  opacity: 0.6;\n  margin-bottom: 20px;\n}\n\n.each_item {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9EZXNrdG9wL1RyYXZlbEFwcC9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtBQ0FKOztBRE9BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRFFBO0VBQ0ksWUFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFVBO0VBQ0ksbUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Bjb3ZlcntcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDM1dmg7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbnNhbmRiYWNrZ3JvdW5kcy9iYWNrZy5wbmcnKTtcbiAgICAgICAgXG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uc2Vjb25kbGF5ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi50ZXN0Y2xhc3N7XG4gICAgbWFyZ2luOiAxMHB4XG59XG5cbi50bmF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVhY2hfaXRlbXtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSIsIi50b3Bjb3ZlciB7XG4gIGhlaWdodDogMzV2aDtcbn1cblxuLnNlY29uZGxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRlc3RjbGFzcyB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnRuYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMC42O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZWFjaF9pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../travel-app.service */ "./src/app/travel-app.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






let RegisterPage = class RegisterPage {
    constructor(router, travelAppService, toastCtrl, loadingController) {
        this.router = router;
        this.travelAppService = travelAppService;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.name = "";
        this.email = "";
        this.password = "";
    }
    ngOnInit() {
    }
    fblogin() {
        this.loadingController.create({ message: "Please wait" }).then((res) => {
            res.present();
            this.travelAppService.facebookLogin().then((user) => {
                this.checkIfUserExits(user.uid).then((isthereuser) => {
                    switch (isthereuser) {
                        case true:
                            this.router.navigateByUrl('/tabs');
                            res.dismiss();
                            break;
                        case false:
                            this.travelAppService.generateInitialUserDetails(user.displayName, user.email, user.photoURL).then(() => {
                                this.router.navigateByUrl('/tabs');
                                res.dismiss();
                            }).catch((err) => {
                                this.presentToast(err);
                                res.dismiss();
                            });
                            break;
                    }
                }).catch((err) => {
                    this.presentToast(err);
                    console.log(err);
                });
            }).catch((err) => {
                this.presentToast(err);
                res.dismiss();
            });
        });
    }
    googleLogin() {
        this.loadingController.create({ message: "Please wait" }).then((res) => {
            res.present();
            this.travelAppService.googleLogin().then((user) => {
                this.checkIfUserExits(user.uid).then((isthereuser) => {
                    switch (isthereuser) {
                        case true:
                            this.router.navigateByUrl('/tabs');
                            res.dismiss();
                            break;
                        case false:
                            this.travelAppService.generateInitialUserDetails(user.displayName, user.email, user.photoURL).then(() => {
                                this.router.navigateByUrl('/tabs');
                                res.dismiss();
                            }).catch((err) => {
                                this.presentToast(err);
                                res.dismiss();
                            });
                            break;
                    }
                }).catch((err) => {
                    this.presentToast(err);
                    console.log(err);
                });
            }).catch((err) => {
                this.presentToast(err);
                res.dismiss();
            });
        });
    }
    checkIfUserExits(userId) {
        return new Promise((resolve, reject) => {
            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/users').child(userId).once('value', (snapshot) => {
                var exists = (snapshot.val() !== null);
                resolve(exists);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    register() {
        if (this.name == "" || this.name.length < 2) {
            this.presentToast("First name field is either blank or too short");
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
            }).then((res) => {
                res.present();
                this.travelAppService.createnewuser(this.email, this.password).then(() => {
                    this.travelAppService.generateInitialUserDetails(this.name, this.email, "").then(() => {
                        res.dismiss();
                        this.router.navigateByUrl('/tabs');
                    }).catch((err) => {
                        res.dismiss();
                        this.presentToast(err);
                    });
                }).catch((err) => {
                    res.dismiss();
                    this.presentToast(err);
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
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _travel_app_service__WEBPACK_IMPORTED_MODULE_4__["TravelAppService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map