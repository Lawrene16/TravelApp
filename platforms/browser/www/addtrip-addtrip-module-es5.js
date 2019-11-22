(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addtrip-addtrip-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addtrip/addtrip.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addtrip/addtrip.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Post Trip</ion-title>\n\n    <ion-buttons (click)=\"uploadTrip()\" style=\"margin-right: 10px\" slot=\"end\">\n      <div style=\"font-size: 16px; font-weight: 300; \">Save</div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <!-- Each option -->\n    <div style=\"margin-top: 15px;\">\n      <ion-label style=\"margin-left: 15px; opacity: 0.7;\">Select Country</ion-label>\n      <ion-select #C (ionChange)=\"onChange(C.value)\"\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; margin-top: 10px; margin-right: 15px;padding: 15px;\"\n        placeholder=\"Select One\">\n        <ion-select-option [value]=\"country.country_code\" *ngFor=\"let country of countries;\">{{country.country_name}}\n        </ion-select-option>\n      </ion-select>\n    </div>\n\n    <!-- Each option -->\n    <!-- Each option -->\n    <div style=\"margin-top: 15px;\">\n      <ion-label style=\"margin-left: 15px; opacity: 0.7;\">Select Province</ion-label>\n      <ion-select #D (ionChange)=\"onChange2(D.value)\"\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; margin-top: 10px; margin-right: 15px;padding: 15px;\"\n        placeholder=\"Select One\">\n        <ion-select-option [value]=\"state.id\" *ngFor=\"let state of states;\">{{state}}</ion-select-option>\n      </ion-select>\n    </div>\n\n\n    <div style=\"margin-top: 25px;\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Select City/Munucipality</ion-label>\n      <ion-select\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; margin-top: 10px; margin-right: 15px;padding: 15px;\"\n        placeholder=\"Select One\">\n        <ion-select-option value=\"f\">Female</ion-select-option>\n        <ion-select-option value=\"m\">Male</ion-select-option>\n      </ion-select>\n    </div>\n\n\n    <div style=\"margin-top: 25px;\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Select Date(from)</ion-label>\n      <div\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; height: 45px; margin-top: 10px; margin-right: 15px;\">\n        <ion-datetime [(ngModel)]=\"fromDate\" (ionChange)=\"validateButton($event)\" display-format=\"MMMM, D, YYYY\"\n          picker-format=\"DD MM YYYY\"></ion-datetime>\n      </div>\n    </div>\n\n    <div style=\"margin-top: 25px;\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Select Date(to)</ion-label>\n      <div\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; height: 45px; margin-top: 10px; margin-right: 15px;\">\n        <ion-datetime [(ngModel)]=\"toDate\" (ionChange)=\"validateButton($event)\" display-format=\"MMMM, D, YYYY\"\n          picker-format=\"DD MM YYYY\"></ion-datetime>\n      </div>\n    </div>\n\n\n\n    <div style=\"margin-top: 25px;\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Event Title</ion-label>\n      <ion-input [(ngModel)]=\"eventTitle\"\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; height: 50px; padding-left: 10px; width: 93vw; margin-top: 10px; margin-right: 15px;\">\n      </ion-input>\n    </div>\n\n\n    <div style=\"margin-top: 25px;\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Tell us more about this trip</ion-label>\n      <ion-textarea [(ngModel)]=\"aboutTrip\"\n        style=\"border: 1px solid rgb(216,216,216); margin-left: 15px; padding-left: 10px; height: 150px; width: 93vw; margin-top: 10px; margin-right: 15px;\">\n      </ion-textarea>\n    </div>\n\n\n\n    <div style=\"margin-top: 25px;\" (click)=\"AccessGallery()\">\n      <ion-label style=\"margin-left: 20px; opacity: 0.7;\">Upload your photo</ion-label>\n\n      <img [src]=\"base64TripPhoto\"\n        style=\"border: 1px solid rgb(216,216,216); background-color: rgb(232,239,241); margin-left: 15px; height: 200px; width: 93vw; margin-top: 10px; margin-right: 15px;\">\n\n\n    </div>\n  </ion-list>\n\n\n\n\n\n</ion-content>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _addtrip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addtrip.page */ "./src/app/addtrip/addtrip.page.ts");







var AddtripPageModule = /** @class */ (function () {
    function AddtripPageModule() {
    }
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
    return AddtripPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../travel-app.service */ "./src/app/travel-app.service.ts");





var AddtripPage = /** @class */ (function () {
    function AddtripPage(camera, actionSheetCtrl, toastCtrl, loadingCtrl, travelAppService) {
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.travelAppService = travelAppService;
        this.bla = "";
        this.base64TripPhoto = "../../assets/browsephoto.png";
        this.aboutTrip = "";
        this.city = "Metro Manila";
        this.fromDate = "";
        this.toDate = "";
        this.eventTitle = "";
        this.province = "Mandaluyong";
        this.countries = [];
        this.states = [];
        this.cities = [];
        // this.useruid = firebase.auth().currentUser.uid;
        this.useruid = "ER9ayHUaZHPuWcUS0yq2oG77NRg2";
        this.populateCountriesArray();
        // this.populateStatesArray("AF");
        // this.travelAppService.fetchAllStates("NG").then((states) =>{
        //   // console.log(states);
        //   this.states = states;
        // });
        // this.travelAppService.fetchAllCities("NG", "dfd").then((cities) =>{
        //   // console.log(cities);
        //   this.cities = cities;
        // });
    }
    AddtripPage.prototype.onChange = function (selected) {
        this.populateStatesArray(selected);
    };
    AddtripPage.prototype.onChange2 = function (selected) {
        console.log(selected);
    };
    AddtripPage.prototype.populateCountriesArray = function () {
        var _this = this;
        this.travelAppService.fetchAllCountries().then(function (countries) {
            for (var i = 0; i < Object.keys(countries).length; i++) {
                _this.countries.push(countries[i]);
            }
        });
    };
    AddtripPage.prototype.populateStatesArray = function (country_code) {
        // this.travelAppService.fetchAllStates(country_code).then((states:any) =>{
        //   console.log(states)
        //   for(var i = 0; i < Object.keys(states).length; i++){
        //     this.states.push(states[i])
        //   }
        // });
        this.states = [{ 'label': "dgdfgdfg" }, { 'label': "dgdfgdfg" }];
        console.log(this.states);
    };
    AddtripPage.prototype.validateButton = function (event) {
        console.log(this.parseDate(this.fromDate));
    };
    AddtripPage.prototype.parseDate = function (date) {
        var year = date.slice(0, -25);
        var month = date.slice(5, -22);
        var day = date.slice(8, -19);
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var newdate = months[month - 1] + ', ' + day + ', ' + year;
        return newdate;
        // console.log(newdate)
        // console.log(date)
    };
    AddtripPage.prototype.uploadTrip = function () {
        var _this = this;
        this.loadingCtrl.create({ message: "Uploading your trip" }).then(function (res) {
            res.present();
            _this.travelAppService.addTrip(_this.useruid, _this.aboutTrip, _this.city, _this.parseDate(_this.fromDate), _this.parseDate(_this.toDate), _this.eventTitle, _this.province, _this.base64TripPhoto).then(function () {
                res.dismiss();
                _this.aboutTrip = "";
                _this.city = "";
                _this.fromDate = "";
                _this.toDate = "";
                _this.eventTitle = "";
                _this.base64TripPhoto = "";
                _this.province = "";
                _this.presentToast("Trip uploaded successfully");
            }).catch(function (err) {
                res.dismiss();
                console.log(err);
            });
        });
    };
    AddtripPage.prototype.AccessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            // this.loadingCtrl.create({message: "Uploading photo"}).then((load) =>{
            //   load.present()
            _this.base64TripPhoto = "data:image/jpeg;base64," + imageData;
            // this.travelAppService.uploadTripPhoto(this.useruid, this.base64TripPhoto).then(() =>{
            //   this.presentToast("Trip Photo Uploaded Successfully")
            //   load.dismiss()
            // }).catch((err) =>{
            //   this.presentToast("Trip Photo Not Uploaded")
            //   load.dismiss()
            // });
            // })  
        }, function (err) {
            console.log(err);
        });
    };
    AddtripPage.prototype.presentToast = function (message) {
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
    AddtripPage.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _travel_app_service__WEBPACK_IMPORTED_MODULE_4__["TravelAppService"] }
    ]; };
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
    return AddtripPage;
}());



/***/ })

}]);
//# sourceMappingURL=addtrip-addtrip-module-es5.js.map