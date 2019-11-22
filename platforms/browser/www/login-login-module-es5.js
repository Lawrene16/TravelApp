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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topcover {\n  height: 35vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.testclass {\n  margin: 10px;\n}\n\n.secondlayer {\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.tna {\n  font-size: 12px;\n  opacity: 0.6;\n  margin-bottom: 20px;\n}\n\n.each_item {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9EZXNrdG9wL1RyYXZlbEFwcC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksWUFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESjs7QURLQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURPQTtFQUNJLG1CQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wY292ZXJ7XG4gICAgLy8gaGVpZ2h0OiA1NXZoO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb25zYW5kYmFja2dyb3VuZHMvYmFja2cucG5nJyk7XG4gICAgaGVpZ2h0OiAzNXZoO1xuICAgICAgICBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50ZXN0Y2xhc3N7XG4gICAgbWFyZ2luOiAxMHB4XG59XG4uc2Vjb25kbGF5ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi50bmF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVhY2hfaXRlbXtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSIsIi50b3Bjb3ZlciB7XG4gIGhlaWdodDogMzV2aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRlc3RjbGFzcyB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnNlY29uZGxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRuYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMC42O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZWFjaF9pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../travel-app.service */ "./src/app/travel-app.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






var LoginPage = /** @class */ (function () {
    function LoginPage(router, travelAppService, toastCtrl, loadingController) {
        this.router = router;
        this.travelAppService = travelAppService;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.email = "a@gmail.com";
        this.password = "aaaaaaaa";
    }
    LoginPage.prototype.ngOnInit = function () {
        // this.login()
    };
    LoginPage.prototype.presentToast = function (message) {
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
    LoginPage.prototype.fblogin = function () {
        var _this = this;
        this.loadingController.create({ message: "Please wait" }).then(function (res) {
            res.present();
            _this.travelAppService.facebookLogin().then(function (user) {
                console.log(user);
                _this.checkIfUserExits(user.uid).then(function (isthereuser) {
                    switch (isthereuser) {
                        case true:
                            _this.router.navigateByUrl('/tabs');
                            res.dismiss();
                            break;
                        case false:
                            _this.travelAppService.generateInitialUserDetails(user.displayName, user.email, user.photoURL).then(function () {
                                _this.router.navigateByUrl('/tabs');
                                res.dismiss();
                            }).catch(function (err) {
                                _this.presentToast(err);
                                res.dismiss();
                            });
                            break;
                    }
                }).catch(function (err) {
                    _this.presentToast(err);
                    console.log(err);
                });
            }).catch(function (err) {
                _this.presentToast(err);
                res.dismiss();
            });
        });
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.loadingController.create({ message: "Please wait" }).then(function (res) {
            res.present();
            _this.travelAppService.googleLogin().then(function (user) {
                _this.checkIfUserExits(user.uid).then(function (isthereuser) {
                    switch (isthereuser) {
                        case true:
                            _this.router.navigateByUrl('/tabs');
                            res.dismiss();
                            break;
                        case false:
                            _this.travelAppService.generateInitialUserDetails(user.displayName, user.email, user.photoURL).then(function () {
                                _this.router.navigateByUrl('/tabs');
                                res.dismiss();
                            }).catch(function (err) {
                                _this.presentToast(err);
                                res.dismiss();
                            });
                            break;
                    }
                }).catch(function (err) {
                    _this.presentToast(err);
                    console.log(err);
                });
            }).catch(function (err) {
                _this.presentToast(err);
                res.dismiss();
            });
        });
    };
    LoginPage.prototype.checkIfUserExits = function (userId) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/users').child(userId).once('value', function (snapshot) {
                var exists = (snapshot.val() !== null);
                resolve(exists);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
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
            }).then(function (res) {
                res.present();
                _this.travelAppService.loginExistingUser(_this.email, _this.password).then(function () {
                    res.dismiss();
                    _this.router.navigateByUrl('/tabs');
                }).catch(function (err) {
                    _this.presentToast(err);
                    res.dismiss();
                });
            });
        }
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _travel_app_service__WEBPACK_IMPORTED_MODULE_4__["TravelAppService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
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
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map