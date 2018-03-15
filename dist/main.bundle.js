webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.alert-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"title\">Alert</h2>\n<div mat-dialog-content>\n    <p>Selection dates are invalid, please check again</p>\n    <p>Required: Dates length beetwen start and end max at 7 days long</p>\n    <p>Date format: (MM/DD/YYYY)</p>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"okButtonClicked()\">Ok</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.alert-dialog.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  color: #ff3e3e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"app-nav\">\n  <mat-toolbar-row>\n    <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"menu-burger\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span class=\"example-spacer\"></span>\n    <span>Astronomy Information</span>\n    <span class=\"example-spacer\"></span>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav [mode]=\"mode.value\" position=\"start\" class=\"my-sidenav\" color=\"primary\">\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <mat-icon> apps </mat-icon>\n        <span>Menu</span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <button mat-button class=\"menu-nav\" routerLink=\"/dashboard\">\n      <mat-icon>dashboard</mat-icon>\n       Dashboard\n    </button>\n    <button mat-button class=\"menu-nav\" (click)=\"goToAuroraHunting()\">\n      <mat-icon>place</mat-icon>\n       Aurora hunting location\n    </button>\n    <button mat-button class=\"menu-nav\">\n      <mat-icon>collections</mat-icon>\n       Mars Rover Curiosity\n    </button>\n    <mat-accordion>\n\n      <!-- Expansion panel modal NEO by Fixed value -->\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Near Earth Obect\n          </mat-panel-title>\n          \n        </mat-expansion-panel-header>\n        <button mat-raised-button color=\"primary\" (click)=\"goToTodayNEO()\">\n          <mat-icon>today</mat-icon> Today\n        </button>\n        <button mat-raised-button color=\"accent\" (click)=\"goToWeeklyNEO()\">\n          <mat-icon>date_range</mat-icon> Weekly\n        </button>\n\n\n        <!-- Expansion modal for search option -->\n        <mat-accordion>\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Search\n              </mat-panel-title>\n              <mat-panel-description>\n                Search by start and end date\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <!-- Start Date -->\n            <span>Format: (MM/DD/YYYY)</span> <br>\n            <span>Max request day : 7 days</span>\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a start date\" [(ngModel)]=\"NEO_start_date\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi=\"true\" #picker1></mat-datepicker>\n            </mat-form-field>\n\n            <!-- End Date -->\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a end date\" [(ngModel)]=\"NEO_end_date\" >\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi=\"true\" #picker2></mat-datepicker>\n            </mat-form-field>\n\n            <!-- Submit Search -->\n            <button mat-raised-button color=\"warn\" (click)=\"getNEObyDate()\">\n              <mat-icon>done</mat-icon> Submit\n            </button>\n          </mat-expansion-panel>\n        </mat-accordion>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <router-outlet #o=\"outlet\"></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  font-family: 'Roboto', sans-serif;\n  right: 0;\n  z-index: 2;\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n.example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.my-sidenav {\n  width: 300px; }\n\n.menu-button {\n  width: 100%;\n  height: 60px;\n  font-size: 20px; }\n\n.menu-nav {\n  width: 100%;\n  height: 48px;\n  text-align: left; }\n\n.menu-burger:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = /** @class */ (function () {
    function AppComponent(my_dialog, _router) {
        this.my_dialog = my_dialog;
        this._router = _router;
        this.mode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('over');
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.getNEObyDate = function () {
        if (this.NEO_start_date != null && this.NEO_end_date != null) {
            if (this.NEO_start_date < this.NEO_end_date) {
                // Go to next component
                console.log(this.getDateFormat(this.NEO_start_date));
                console.log(this.getDateFormat(this.NEO_end_date));
                var length_1 = Math.ceil((this.NEO_end_date - this.NEO_start_date) / (1000 * 60 * 60 * 24)) + 1;
                if (length_1 > 7) {
                    console.log('Out of Bound');
                    this.openDialog();
                    return;
                }
                this.goToByDateNEO(this.NEO_start_date, this.NEO_end_date, length_1);
            }
            else {
                console.log('Date is not valid');
                return;
            }
        }
        else {
            console.log('Some of the dates are empty');
            return;
        }
    };
    AppComponent.prototype.getDateFormat = function (date) {
        var month = '' + (date.getMonth() + 1);
        var day = '' + date.getDate();
        var year = '' + date.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    };
    AppComponent.prototype.goToTodayNEO = function () {
        this._router.navigate(['/neo', { mode: 'today' }]);
    };
    AppComponent.prototype.goToWeeklyNEO = function () {
        this._router.navigate(['/neo', { mode: 'week' }]);
    };
    AppComponent.prototype.goToByDateNEO = function (start_date, end_date, length) {
        this._router.navigate(['/neo', { mode: 'getbydate', start: start_date.toDateString(), end: end_date.toDateString(), size: length }]);
    };
    AppComponent.prototype.goToAuroraHunting = function () {
        this._router.navigate(['/aurorahunting']);
    };
    AppComponent.prototype.openDialog = function () {
        var dialofRef = this.my_dialog.open(AlertDialog, {
            width: '300px',
            data: { case: 'error-date' }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());

var AlertDialog = /** @class */ (function () {
    function AlertDialog(dialogref, data) {
        this.dialogref = dialogref;
        this.data = data;
    }
    AlertDialog.prototype.okButtonClicked = function () {
        this.dialogref.close();
    };
    AlertDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert-dialog',
            template: __webpack_require__("../../../../../src/app/app.alert-dialog.html"),
            styles: [__webpack_require__("../../../../../src/app/app.alert-dialog.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object])
    ], AlertDialog);
    return AlertDialog;
}());



/***/ }),

/***/ "../../../../../src/app/app.materials.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialsComponent = /** @class */ (function () {
    function MaterialsComponent() {
    }
    MaterialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTooltipModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTooltipModule */]
            ]
        })
    ], MaterialsComponent);
    return MaterialsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_materials__ = __webpack_require__("../../../../../src/app/app.materials.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_nasa_service__ = __webpack_require__("../../../../../src/app/services/nasa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_aurora_live_service__ = __webpack_require__("../../../../../src/app/services/aurora-live.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_google_services_service__ = __webpack_require__("../../../../../src/app/services/google-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_open_weather_service__ = __webpack_require__("../../../../../src/app/services/open-weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__welcome_page_welcome_page_component__ = __webpack_require__("../../../../../src/app/welcome-page/welcome-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__neo_page_neo_page_component__ = __webpack_require__("../../../../../src/app/neo-page/neo-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aurora_hunting_aurora_hunting_component__ = __webpack_require__("../../../../../src/app/aurora-hunting/aurora-hunting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__neo_information_neo_information_component__ = __webpack_require__("../../../../../src/app/neo-information/neo-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__aurora_location_information_aurora_location_information_component__ = __webpack_require__("../../../../../src/app/aurora-location-information/aurora-location-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mars_rover_landscape_mars_rover_landscape_component__ = __webpack_require__("../../../../../src/app/mars-rover-landscape/mars-rover-landscape.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/notfound/notfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Services














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */] },
    { path: 'neo', component: __WEBPACK_IMPORTED_MODULE_14__neo_page_neo_page_component__["b" /* NeoPageComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'aurorahunting', component: __WEBPACK_IMPORTED_MODULE_15__aurora_hunting_aurora_hunting_component__["a" /* AuroraHuntingComponent */] },
    { path: 'neo-information', component: __WEBPACK_IMPORTED_MODULE_16__neo_information_neo_information_component__["a" /* NeoInformationComponent */] },
    { path: 'location-info', component: __WEBPACK_IMPORTED_MODULE_17__aurora_location_information_aurora_location_information_component__["a" /* AuroraLocationInformationComponent */] },
    { path: 'mars-curiosity-rover', component: __WEBPACK_IMPORTED_MODULE_18__mars_rover_landscape_mars_rover_landscape_component__["a" /* MarsRoverLandscapeComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_19__notfound_notfound_component__["a" /* NotfoundComponent */] },
    { path: '**', redirectTo: '/404' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["b" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__neo_page_neo_page_component__["b" /* NeoPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AlertDialog */],
                __WEBPACK_IMPORTED_MODULE_14__neo_page_neo_page_component__["a" /* NeoDialog */],
                __WEBPACK_IMPORTED_MODULE_15__aurora_hunting_aurora_hunting_component__["a" /* AuroraHuntingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__neo_information_neo_information_component__["a" /* NeoInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__aurora_location_information_aurora_location_information_component__["a" /* AuroraLocationInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__mars_rover_landscape_mars_rover_landscape_component__["a" /* MarsRoverLandscapeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__notfound_notfound_component__["a" /* NotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["b" /* NeoDashDialog */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_materials__["a" /* MaterialsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AlertDialog */], __WEBPACK_IMPORTED_MODULE_14__neo_page_neo_page_component__["a" /* NeoDialog */], __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["b" /* NeoDashDialog */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_nasa_service__["a" /* NasaService */],
                __WEBPACK_IMPORTED_MODULE_8__services_aurora_live_service__["a" /* AuroraLiveService */],
                __WEBPACK_IMPORTED_MODULE_9__services_google_services_service__["a" /* GoogleServicesService */],
                __WEBPACK_IMPORTED_MODULE_10__services_open_weather_service__["a" /* OpenWeatherService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["b" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/aurora-hunting/aurora-hunting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron banner\">\n  <div class=\"container\">\n    <h2> Aurora Hunting Locations</h2>\n    <p>Data resources by Aurora.live</p>\n  </div>\n</div>\n<div class=\"jumbotron\">\n  <div class=\"container-fluid\">\n    <h2 class=\"label\"> <mat-icon>label</mat-icon> Hunting Locations</h2>\n    <div *ngIf=\"spinner_visible\">\n      <mat-spinner style=\"margin:0 auto;\" mode=\"indeterminate\">Loading</mat-spinner>\n    </div>\n    <div class=\"row\" *ngIf=\"content_visible\">\n      <div class=\"col col-md-4\" *ngFor=\"let location of hunting_locations; let i = index\">\n        <div class=\"container\">\n          <div class=\"card\">\n            <div class=\"card-head\">\n              <span class=\"name\"> <mat-icon>location_on</mat-icon> Location: {{location.name}}</span>\n            </div>\n            <div class=\"card-body\">\n              <img src=\"{{getStaticMapImage(location.lat, location.long)}}\" alt=\"\" class=\"img-responsive\">\n              <span class=\"desc\">Description: {{location.description}}</span><br>\n            </div>\n            <div class=\"cardfooter\">\n              <button mat-raised-button color=\"primary\" (click)=\"goLocationInformation(location.lat, location.long)\">\n                <mat-icon>explore</mat-icon>Explore\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/aurora-hunting/aurora-hunting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner {\n  height: 40vh;\n  background: #0f0c29;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#24243e), color-stop(#302b63), to(#0f0c29));\n  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n  .banner h2 {\n    color: white;\n    font-size: 34px;\n    text-align: center;\n    margin-top: 5vh; }\n  .banner p {\n    color: white;\n    text-align: center; }\n  .jumbotron {\n  margin-bottom: 0;\n  border-radius: 0; }\n  .card {\n  width: 100%;\n  height: auto;\n  min-width: 280px;\n  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  margin-bottom: 10px; }\n  .card-head {\n  height: 20%;\n  text-align: left;\n  padding: 5px;\n  padding-left: 15px;\n  font-size: 24px; }\n  .card-head .name {\n    font-size: 16px;\n    font-weight: bold;\n    color: #2b2b2b; }\n  .card-body {\n  font-size: 12px;\n  height: 50%;\n  padding-left: 15px; }\n  .card-body img {\n    width: 100%;\n    height: auto; }\n  .card-body .desc {\n    font-size: 10px; }\n  .spinner {\n  margin-left: 47%; }\n  .cardfooter {\n  height: 30%;\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n  .label {\n  color: #154996; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aurora-hunting/aurora-hunting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuroraHuntingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_aurora_live_service__ = __webpack_require__("../../../../../src/app/services/aurora-live.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_google_services_service__ = __webpack_require__("../../../../../src/app/services/google-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuroraHuntingComponent = /** @class */ (function () {
    function AuroraHuntingComponent(aurora_live_services, google, _router) {
        this.aurora_live_services = aurora_live_services;
        this.google = google;
        this._router = _router;
        this.spinner_visible = false;
        this.content_visible = false;
        this.hunting_locations = [];
    }
    AuroraHuntingComponent.prototype.ngOnInit = function () {
        this.getAuroraLocations();
    };
    AuroraHuntingComponent.prototype.getAuroraLocations = function () {
        var _this = this;
        this.content_visible = false;
        this.spinner_visible = true;
        this.sub = this.aurora_live_services.getAuroraHuntingLocations()
            .subscribe(function (data) {
            var JSON_body = JSON.parse(data.text());
            _this.hunting_locations = JSON_body;
            console.log(_this.hunting_locations);
            _this.spinner_visible = false;
            _this.content_visible = true;
        }, function (err) {
            console.log(err);
        });
    };
    AuroraHuntingComponent.prototype.getStaticMapImage = function (lat, lon) {
        return this.google.getStaticMapImage(lat, lon);
    };
    AuroraHuntingComponent.prototype.goLocationInformation = function (lat, lon) {
        this._router.navigate(['location-info', { lat: lat, long: lon }]);
    };
    AuroraHuntingComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AuroraHuntingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aurora-hunting',
            template: __webpack_require__("../../../../../src/app/aurora-hunting/aurora-hunting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aurora-hunting/aurora-hunting.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_aurora_live_service__["a" /* AuroraLiveService */], __WEBPACK_IMPORTED_MODULE_2__services_google_services_service__["a" /* GoogleServicesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AuroraHuntingComponent);
    return AuroraHuntingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/aurora-location-information/aurora-location-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron banner\">\n  <div class=\"container\">\n    <h2>Location Status</h2>\n  </div>\n</div>\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <div class=\"container weather-card\">\n          <div class=\"head\">\n            <h2> <mat-icon>label</mat-icon> Weather</h2>\n          </div>\n          <div class=\"content\">\n            <div *ngIf=\"!weather_data\" class=\"spinner\">\n              <mat-spinner color=\"warn\" style=\"margin:0 auto;\" mode=\"indeterminate\"></mat-spinner>\n            </div>\n            <div class=\"row\" *ngIf=\"weather_data\">\n              <div class=\"col-md-4\">\n                <span class=\"label-info\">Cloudiness</span>\n              </div>\n              <div class=\"col-md-8\">\n                <span class=\"label-value\">{{weather_data.clouds.all}} %</span>\n              </div>\n              <div class=\"col-md-4\">\n                <span class=\"label-info\">Pressures</span>\n              </div>\n              <div class=\"col-md-8\">\n                <span class=\"label-value\">{{weather_data.main.pressure}} hPa</span>\n              </div>\n              <div class=\"col-md-4\">\n                <span class=\"label-info\">Status</span>\n              </div>\n              <div class=\"col-md-8\">\n                <span class=\"label-value\">{{weather_data.weather[0].main}}</span>\n              </div>\n              <div class=\"col-md-4\">\n                <span class=\"label-info\">Description</span>\n              </div>\n              <div class=\"col-md-8\">\n                <span class=\"label-value\">{{weather_data.weather[0].description}}</span>\n              </div>\n              <div class=\"col-md-4\">\n                <span class=\"label-info\">Temperature</span>\n              </div>\n              <div class=\"col-md-8\">\n                <span class=\"label-value\">{{weather_data.main.temp}}Kelvin</span>\n              </div>\n              <div class=\"col-md-4\">\n                <span class=\"label-info\">Wind speed</span>\n              </div>\n              <div class=\"col-md-8\">\n                <span class=\"label-value\">{{weather_data.wind.speed}} m/s</span>\n              </div>\n              <div class=\"col-md-4\">\n                <span class=\"label-info\">City</span>\n              </div>\n              <div class=\"col-md-8\">\n                <span class=\"label-value\">{{weather_data.name}}</span>\n              </div>  \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5 offset-md-2\">\n        <div class=\"container kp-card\">\n          <div class=\"head\">\n            <h2> <mat-icon>label</mat-icon> Kp </h2>\n          </div>\n          <div class=\"content\">\n            <div *ngIf=\"!ace_data\" class=\"spinner\">\n              <mat-spinner color=\"primary\" style=\"margin:0 auto;\" mode=\"indeterminate\"></mat-spinner>\n            </div>\n            <div class=\"row\" *ngIf=\"ace_data\">\n              <div class=\"col-md-6\">\n                <span class=\"label-info\">Kp color</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-value\">{{ace_data.colour.kp}}</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-info\">Kp First hour color</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-value\">{{ace_data.colour.kp1hour}}</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-info\">Kp 4th hour color</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-value\">{{ace_data.colour.kp4hour}}</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-info\">Kp</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-value\">{{ace_data.kp}}</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-info\">Kp 1st hour</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-value\">{{ace_data.kp1hour}}</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-info\">Kp 4th hour</span>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"label-value\">{{ace_data.kp4hour}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"container chart-card\">\n          <div class=\"head\">\n            <h2> <mat-icon>timeline</mat-icon> Forecast Chart</h2><hr width=\"100px\">\n          </div>\n          <div class=\"content\">\n            <div *ngIf=\"weather_forecast_data.length <= 0\" class=\"spinner\">\n              <mat-spinner color=\"primary\" style=\"margin:0 auto;\" mode=\"indeterminate\"></mat-spinner>\n            </div>\n            <div *ngIf=\"weather_forecast_data\">\n              <canvas id=\"forecast-weather\">{{ chart }}</canvas>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/aurora-location-information/aurora-location-information.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  margin-bottom: 0;\n  border-radius: 0; }\n\n.banner {\n  height: 40vh;\n  background: #1377b9; }\n\n.banner h2 {\n    text-align: center;\n    margin-top: 5%;\n    color: #ffe;\n    font-size: 45px; }\n\n.weather-card {\n  width: 100%;\n  height: auto;\n  background: #017599;\n  margin-bottom: 10px;\n  padding-top: 5px;\n  color: white;\n  padding-bottom: 10px;\n  -webkit-box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3); }\n\n.weather-card h2 {\n    font-size: 18px; }\n\n.weather-card .content {\n    padding-left: 30px; }\n\n.kp-card {\n  width: 100%;\n  height: auto;\n  margin-bottom: 10px;\n  padding-top: 5px;\n  background: #e02242;\n  color: white;\n  padding-bottom: 10px;\n  -webkit-box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3); }\n\n.kp-card h2 {\n    font-size: 18px; }\n\n.kp-card .content {\n    padding-left: 30px; }\n\n.chart-card {\n  width: 100%;\n  height: auto;\n  margin-bottom: 10px;\n  margin-top: 20px;\n  color: #f14519;\n  -webkit-box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);\n  padding-top: 5px;\n  padding-bottom: 10px;\n  background: #ffe; }\n\n.chart-card h2 {\n    font-size: 20px;\n    text-align: center; }\n\n.chart-card hr {\n    border-color: #f14519; }\n\n.label-info {\n  font-weight: bold;\n  font-size: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aurora-location-information/aurora-location-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuroraLocationInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_aurora_live_service__ = __webpack_require__("../../../../../src/app/services/aurora-live.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_open_weather_service__ = __webpack_require__("../../../../../src/app/services/open-weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuroraLocationInformationComponent = /** @class */ (function () {
    function AuroraLocationInformationComponent(_router, _activatedRoute, _auroraServices, _openWeather) {
        var _this = this;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._auroraServices = _auroraServices;
        this._openWeather = _openWeather;
        this.weather_forecast_data = [];
        this.chart_forecast_data = {
            temp_high: [],
            temp_min: [],
            wind_speed: [],
            date_time: []
        };
        this.sub = this._activatedRoute.params.subscribe(function (params) {
            _this.getAceData(params['lat'], params['long']);
            _this.getWeatherData(params['lat'], params['long']);
            _this.getForecastWeatherData(params['lat'], params['long']);
        });
    }
    AuroraLocationInformationComponent.prototype.getAceData = function (lat, long) {
        var _this = this;
        var location = {
            lat: lat,
            long: long
        };
        this._auroraServices.getAceModulData(location)
            .subscribe(function (data) {
            _this.ace_data = JSON.parse(data.text());
        }, function (err) {
            console.log(err);
        });
    };
    AuroraLocationInformationComponent.prototype.getWeatherData = function (lat, long) {
        var _this = this;
        this._openWeather.getCurrentWeather(lat, long)
            .subscribe(function (data) {
            _this.weather_data = JSON.parse(data.text());
        }, function (err) {
            console.log(err);
        });
    };
    AuroraLocationInformationComponent.prototype.getForecastWeatherData = function (lat, long) {
        var _this = this;
        this._openWeather.getForecastWeather(lat, long)
            .subscribe(function (data) {
            var json_tmp = JSON.parse(data.text());
            _this.weather_forecast_data = json_tmp.list;
            for (var i = 0; i < _this.weather_forecast_data.length; i++) {
                _this.chart_forecast_data.temp_high.push(_this.weather_forecast_data[i].main.temp_max);
                _this.chart_forecast_data.temp_min.push(_this.weather_forecast_data[i].main.temp_min);
                _this.chart_forecast_data.wind_speed.push(_this.weather_forecast_data[i].wind.speed);
                _this.chart_forecast_data.date_time.push(_this.weather_forecast_data[i].dt_txt);
            }
            _this.createForecastChart();
        }, function (err) {
            console.log(err);
        });
    };
    AuroraLocationInformationComponent.prototype.ngOnInit = function () {
    };
    AuroraLocationInformationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AuroraLocationInformationComponent.prototype.createForecastChart = function () {
        this.chart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"]('forecast-weather', {
            type: 'line',
            data: {
                labels: this.chart_forecast_data.date_time,
                datasets: [{
                        label: 'Temp Max',
                        data: this.chart_forecast_data.temp_high,
                        borderColor: '#00796B',
                        fill: true
                    },
                    {
                        label: 'Temp Min',
                        data: this.chart_forecast_data.temp_min,
                        borderColor: '#F44336',
                        fill: true
                    }
                ],
            },
            options: {
                legend: {
                    display: true,
                    label: {
                        text: 'Data'
                    }
                },
                animation: {
                    duration: 500,
                },
                hover: {
                    animationDuration: 200,
                },
                responsiveAnimationDuration: 500,
                scales: {
                    xAxes: [{
                            display: false,
                            ticks: {
                                fontSize: 0
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                fontSize: 9
                            }
                        }],
                }
            }
        });
    };
    AuroraLocationInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aurora-location-information',
            template: __webpack_require__("../../../../../src/app/aurora-location-information/aurora-location-information.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aurora-location-information/aurora-location-information.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_aurora_live_service__["a" /* AuroraLiveService */], __WEBPACK_IMPORTED_MODULE_3__services_open_weather_service__["a" /* OpenWeatherService */]])
    ], AuroraLocationInformationComponent);
    return AuroraLocationInformationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron banner\">\n  <div class=\"container\">\n    <h1>Astronomy Dashboard</h1>\n    <h3>orionstark @ 2018</h3>\n  </div>\n</div>\n<div class=\"jumbotron\">\n  <div class=\"container-fluid graph-content\">\n    <h2>\n      <mat-icon>timeline</mat-icon>\n      NEO Statistics\n    </h2>\n    <p class=\"subtitle\">Statistic about amount of objects near earth this week and last week.</p>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"container\">\n          <div>\n            <canvas id=\"weekly_stats\">{{ chart }}</canvas>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"container\">\n          <div>\n            <canvas id=\"last_weekly_stats\">{{ sec_chart }}</canvas>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"container\">\n          <h3>This week statistic compare to last week</h3>\n          <div ng-if=\"data_set\">\n            <canvas id=\"weekly_stats_and_last\">{{ third_chart }}</canvas>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"container\">\n          <h3>Potentially Hazardous Asteroid Statistic</h3>\n          <div ng-if=\"data_set\">\n            <canvas id=\"hazardous_potentially\">{{ hazardous_potentially_chart }}</canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"jumbotron neo_today_info\">\n  <div class=\"container-fluid today-neo\">\n    <h2>\n      <mat-icon>today</mat-icon>\n      Today NEO</h2>\n    <p class=\"subtitle\">List of today objects</p>\n    <div class=\"row\">\n      <div class=\"col-md-4\" *ngFor=\"let neo of today_NEO; let i = index\">\n        <div class=\"container\">\n          <div class=\"neo-card\">\n            <div class=\"neo-card-head\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"> \n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"moreNEOInformation(today_NEO[i])\">\n                  <span>Info</span>\n                </button>\n                <button mat-menu-item>\n                  <span>JPL</span>\n                </button>\n              </mat-menu>\n            </div>\n            <div class=\"neo-card-body\">\n              <mat-icon *ngIf=\"neo.is_potentially_hazardous_asteroid\" color=\"warn\" matTooltip=\"Potential hazardous object\" class=\"warning\">warning</mat-icon>\n              <span class=\"name\">{{neo.name}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  margin-bottom: 0;\n  border-radius: 0; }\n\n.banner {\n  height: 40vh;\n  background: #0277BD; }\n\n.banner h1, .banner h3 {\n    text-align: center;\n    color: white; }\n\n.banner h3 {\n    font-size: 14px; }\n\n.banner h1 {\n    margin-top: 5vh; }\n\n.graph-content {\n  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3); }\n\n.graph-content p {\n    font-style: 12px; }\n\n.graph-content h3 {\n    text-align: center; }\n\n.graph-content h2 {\n    text-align: center;\n    color: #0277BD; }\n\n.graph-content .subtitle {\n    text-align: center;\n    font-size: 14px;\n    color: #929292; }\n\n.today-neo h2 {\n  text-align: center;\n  color: #EF5C29; }\n\n.today-neo .subtitle {\n  text-align: center;\n  font-size: 14px;\n  color: #929292; }\n\n.neo_today_info {\n  padding-top: 5px; }\n\n.neo-card {\n  width: 100%;\n  height: 180px;\n  color: white;\n  background: #0277BD;\n  margin-bottom: 10px;\n  webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3); }\n\n.neo-card .neo-card-head {\n    width: 100%;\n    height: 40px;\n    padding: 5px; }\n\n.neo-card .neo-card-body {\n    height: 140px;\n    padding: 5px;\n    line-height: 100px;\n    text-align: center;\n    color: white; }\n\n.neo-card .name {\n    font-size: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NeoDashDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nasa_service__ = __webpack_require__("../../../../../src/app/services/nasa.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dialog, _route, _nasaServices) {
        this.dialog = dialog;
        this._route = _route;
        this._nasaServices = _nasaServices;
        this.object_data = {
            date_date: [],
            objects_value: [],
            hazardous_value: []
        };
        this.lastWeek_object_data = {
            date_date: [],
            objects_value: [],
            hazardous_value: []
        };
        this.sub = null;
        this.chart = [];
        this.sec_chart = [];
        this.third_chart = [];
        this.hazardous_potentially_chart = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getWeeklyStatistics();
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.prototype.getWeeklyStatistics = function () {
        var _this = this;
        this.sub = this._nasaServices.getWeeklyNEO()
            .subscribe(function (data) {
            var body_JSON = JSON.parse(data.text());
            _this.today_NEO = body_JSON.near_earth_objects[_this._nasaServices.getDateFormat(new Date()).toString()];
            var date = _this._nasaServices.getFirstDate(new Date());
            var count = 0;
            var hazardous_count = 0;
            for (var i = 0; i < 7; i++) {
                date = new Date(date.setDate(date.getDate() + count));
                _this.object_data.date_date.push(_this._nasaServices.getDateFormat(date));
                _this.object_data.objects_value.push(body_JSON.near_earth_objects[_this._nasaServices.getDateFormat(date).toString()].length);
                for (var j = 0; j < body_JSON.near_earth_objects[_this._nasaServices.getDateFormat(date).toString()].length; j++) {
                    if (body_JSON.near_earth_objects[_this._nasaServices.getDateFormat(date).toString()][j].is_potentially_hazardous_asteroid) {
                        hazardous_count += 1;
                    }
                }
                _this.object_data.hazardous_value.push(hazardous_count);
                count = 1;
                hazardous_count = 0;
            }
            _this.createThisWeekChart();
            _this.getLastWeekStatistics();
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.getLastWeekStatistics = function () {
        var _this = this;
        this._nasaServices.getLastWeekNEO()
            .subscribe(function (data) {
            var body_JSON = JSON.parse(data.text());
            var date = _this._nasaServices.getFirstDate(new Date(_this._nasaServices.getFirstDate(new Date()) - 86400000));
            var count = 0;
            var hazardous_count = 0;
            for (var i = 0; i < 7; i++) {
                date = new Date(date.setDate(date.getDate() + count));
                _this.lastWeek_object_data.date_date.push(_this._nasaServices.getDateFormat(date));
                _this.lastWeek_object_data.objects_value
                    .push(body_JSON.near_earth_objects[_this._nasaServices.getDateFormat(date).toString()].length);
                for (var j = 0; j < body_JSON.near_earth_objects[_this._nasaServices.getDateFormat(date).toString()].length; j++) {
                    if (body_JSON.near_earth_objects[_this._nasaServices.getDateFormat(date).toString()][j].is_potentially_hazardous_asteroid) {
                        hazardous_count += 1;
                    }
                }
                _this.lastWeek_object_data.hazardous_value.push(hazardous_count);
                count = 1;
                hazardous_count = 0;
            }
            _this.createLastWeekChart();
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.createThisWeekChart = function () {
        this.chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]('weekly_stats', {
            type: 'line',
            data: {
                labels: this.object_data.date_date,
                datasets: [{
                        label: 'Objects this week',
                        data: this.object_data.objects_value,
                        borderColor: '#3cba9f',
                        fill: true
                    }],
            },
            options: {
                legend: {
                    display: true,
                    label: {
                        text: 'Objects count'
                    }
                },
                animation: {
                    duration: 500,
                },
                hover: {
                    animationDuration: 200,
                },
                responsiveAnimationDuration: 500,
                scales: {
                    xAxes: [{
                            display: true,
                            ticks: {
                                fontSize: 9
                            }
                        }],
                    yAxes: [{
                            display: true
                        }],
                }
            }
        });
    };
    DashboardComponent.prototype.createLastWeekChart = function () {
        this.sec_chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]('last_weekly_stats', {
            type: 'line',
            data: {
                labels: this.lastWeek_object_data.date_date,
                datasets: [{
                        label: 'Objects last week',
                        data: this.lastWeek_object_data.objects_value,
                        borderColor: '#1E88E5',
                        fill: true
                    }],
            },
            options: {
                legend: {
                    display: true,
                    label: {
                        text: 'Objects count'
                    }
                },
                animation: {
                    duration: 500,
                },
                hover: {
                    animationDuration: 200,
                },
                responsiveAnimationDuration: 500,
                scales: {
                    xAxes: [{
                            display: true,
                            ticks: {
                                fontSize: 9
                            }
                        }],
                    yAxes: [{
                            display: true
                        }],
                }
            }
        });
        this.createNeoBeetweenWeeksChart();
        this.createHazardousChart();
    };
    DashboardComponent.prototype.createNeoBeetweenWeeksChart = function () {
        this.third_chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]('weekly_stats_and_last', {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                        label: 'Objects this week',
                        data: this.object_data.objects_value,
                        borderColor: '#1E88E5',
                        fill: true
                    },
                    {
                        label: 'Object last week',
                        data: this.lastWeek_object_data.objects_value,
                        borderColor: '#F4511E',
                        fill: true
                    }
                ],
            },
            options: {
                legend: {
                    display: true,
                    label: {
                        text: 'Objects count'
                    }
                },
                animation: {
                    duration: 500,
                },
                hover: {
                    animationDuration: 200,
                },
                responsiveAnimationDuration: 500,
                scales: {
                    xAxes: [{
                            display: true,
                            ticks: {
                                fontSize: 9
                            }
                        }],
                    yAxes: [{
                            display: true
                        }],
                }
            }
        });
    };
    DashboardComponent.prototype.createHazardousChart = function () {
        this.hazardous_potentially_chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]('hazardous_potentially', {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                        label: 'This week',
                        data: this.object_data.hazardous_value,
                        borderColor: '#00796B',
                        fill: true
                    },
                    {
                        label: 'Last week',
                        data: this.lastWeek_object_data.hazardous_value,
                        borderColor: '#F44336',
                        fill: true
                    }
                ],
            },
            options: {
                legend: {
                    display: true,
                    label: {
                        text: 'Objects count'
                    }
                },
                animation: {
                    duration: 500,
                },
                hover: {
                    animationDuration: 200,
                },
                responsiveAnimationDuration: 500,
                scales: {
                    xAxes: [{
                            display: true,
                            ticks: {
                                fontSize: 9
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                fontSize: 9
                            }
                        }],
                }
            }
        });
    };
    DashboardComponent.prototype.onDestroy = function () {
        this.sub.unsubscribe();
    };
    DashboardComponent.prototype.moreNEOInformation = function (data) {
        var dialogref = this.dialog.open(NeoDashDialog, {
            width: '400px',
            minWidth: '280px',
            data: data
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_nasa_service__["a" /* NasaService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());

var NeoDashDialog = /** @class */ (function () {
    function NeoDashDialog(mat_dialog_ref, _route, object) {
        this.mat_dialog_ref = mat_dialog_ref;
        this._route = _route;
        this.object = object;
        console.log(object);
    }
    NeoDashDialog.prototype.closeButtonClicked = function () {
        this.mat_dialog_ref.close();
    };
    NeoDashDialog.prototype.gotToInformation = function (url) {
        this.mat_dialog_ref.close();
        this._route.navigate(['/neo-information', { id: this.object.neo_reference_id }]);
    };
    NeoDashDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-neo-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/neo-dashboard.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/neo-dialog.scss")]
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], Object])
    ], NeoDashDialog);
    return NeoDashDialog;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/neo-dashboard.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span class=\"example-spacer\"></span>\n    <span>{{object.name}}</span>\n    <span class=\"example-spacer\"></span>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div mat-dialog-content>\n    <span class=\"desc\">Hazardous Potentially Asteroid</span>:<span>{{object.is_potentially_hazardous_asteroid}}</span> <br>\n    <span class=\"desc\">Estimated Diameter Minimal (km)</span>:<span> {{object.estimated_diameter.kilometers.estimated_diameter_min}}</span><br>\n    <span class=\"desc\">Estimated Diameter Maximal (km)</span>:<span> {{object.estimated_diameter.kilometers.estimated_diameter_max}}</span><br>\n    <span class=\"desc\">Miss Distance (AU) </span>:<span> {{object.close_approach_data[0].miss_distance.astronomical}}</span><br>\n    <span class=\"desc\">Orbiting Body </span>:<span> {{object.close_approach_data[0].orbiting_body}}</span><br>\n    <span class=\"desc\">Relative Velocity (km/h)</span>:<span>{{object.close_approach_data[0].relative_velocity.kilometers_per_hour}}</span><br>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"closeButtonClicked()\"> <mat-icon>done</mat-icon> Ok</button>\n    <button mat-raised-button color=\"warn\" (click)=\"gotToInformation()\"> <mat-icon>details</mat-icon> Details </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/neo-dialog.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mars-rover-landscape/mars-rover-landscape.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mars-rover-landscape works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/mars-rover-landscape/mars-rover-landscape.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mars-rover-landscape/mars-rover-landscape.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarsRoverLandscapeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarsRoverLandscapeComponent = /** @class */ (function () {
    function MarsRoverLandscapeComponent() {
    }
    MarsRoverLandscapeComponent.prototype.ngOnInit = function () {
    };
    MarsRoverLandscapeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mars-rover-landscape',
            template: __webpack_require__("../../../../../src/app/mars-rover-landscape/mars-rover-landscape.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mars-rover-landscape/mars-rover-landscape.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MarsRoverLandscapeComponent);
    return MarsRoverLandscapeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/neo-information/neo-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron banner\">\n  <div class=\"container\">\n    <h1 class=\"object-name\">Object Information</h1>\n  </div>\n</div>\n<div class=\"jumbotron orbit-section\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"container orbit-card-name\">\n                  <div class=\"\">\n                    <span class=\"label\"> <mat-icon>label</mat-icon> Name</span>\n                    <div *ngIf=\"!neo_data\">\n                      <mat-spinner color=\"warn\" style=\"margin:0 auto;\" mode=\"indeterminate\"></mat-spinner>\n                    </div>\n                    <div *ngIf=\"neo_data\">\n                      <h2 class=\"name\">{{neo_data.name}}</h2>\n                      <h6 class=\"reference\">{{neo_data.neo_reference_id}}</h6>\n                    </div>\n                  </div>\n                </div>\n          </div>\n      \n            <div class=\"col-md-12\">\n              <div class=\"container simple-info-card\">\n                <span class=\"label\"> <mat-icon>label</mat-icon> Estimated Diameter</span><br>\n                <div *ngIf=\"!neo_data\">\n                  <mat-spinner color=\"primary\" style=\"margin:0 auto;\" mode=\"indeterminate\"></mat-spinner>\n                </div>\n                <div *ngIf=\"neo_data\">\n                  <h2 class=\"diameter-data\"> Min : {{neo_data.estimated_diameter.kilometers.estimated_diameter_min}}km </h2>\n                  <h2> Max : {{neo_data.estimated_diameter.kilometers.estimated_diameter_max}}km </h2>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"col-md-7\">\n        <div class=\"row\">\n            <div class=\"container\">\n                <div class=\"orbit-card\">\n                  <div class=\"head\">\n                    <span class=\"label\"> <mat-icon>label</mat-icon> Orbit Data </span>\n                  </div>\n                  <div class=\"body\">\n                    <div *ngIf=\"!neo_data\">\n                      <mat-spinner color=\"warn\" style=\"margin:0 auto;\" mode=\"indeterminate\"></mat-spinner>\n                    </div>\n                    <div class=\"row\" *ngIf=\"neo_data\">\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Aphelion distance:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.aphelion_distance}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Ascending node longtitude:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.ascending_node_longtitude}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Eccentricity:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.eccentricity}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Epoch osculation:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.epoch_osculation}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Equinox:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.equinox}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Inclination:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.inclination}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Mean anomaly:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.mean_anomaly}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Mean motion:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.mean_motion}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Minimum orbit intersection:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.minimum_orbit_intersection}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Orbit determination date:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.orbit_determination_date}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Orbit Uncertainty:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.orbit_uncertainty}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Orbital period:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.orbital_period}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Perihelion argument:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.perihelion_argument}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Perihelion distance:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.perihelion_distance}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Perihelion time:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.perihelion_time}}</span>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <span class=\"orbit-data-label\">Semi major axis:</span>\n                      </div>\n                      <div class=\"col-md-7\">\n                          <span>{{neo_data.orbital_data.semi_major_axis}}</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"footer\">\n      \n                  </div>\n                </div>\n              </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"jumbotron\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"container-fluid data-table\">\n          <h2 class=\"title\">Historical Footage</h2>\n          <mat-form-field class=\"input-field\">\n            <input class=\"input-filter\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n          <mat-icon class=\"sort-icon\">sort</mat-icon>\n          <mat-table #table [dataSource]=\"dataSource\" class=\"table-content\">\n\n            <ng-container matColumnDef=\"No\">\n              <mat-header-cell *matHeaderCellDef class=\"table-label\"> No. </mat-header-cell>\n              <mat-cell *matCellDef=\"let i = index\" class=\"table-label\"> {{i + 1}} </mat-cell>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"Orbiting Body\">\n              <mat-header-cell *matHeaderCellDef class=\"table-label\"> Orbiting Body </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" class=\"table-label\"> {{element.orbiting_body}} </mat-cell>\n            </ng-container> \n        \n            <ng-container matColumnDef=\"Date\">\n              <mat-header-cell *matHeaderCellDef class=\"table-label\"> Date </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" class=\"table-label\"> {{element.close_approach_date}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Miss Distance\">\n                <mat-header-cell *matHeaderCellDef class=\"table-label\"> Miss Distance(km) </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"table-label\"> {{element.miss_distance.kilometers}} </mat-cell>\n            </ng-container>\n        \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n          <mat-paginator #paginator\n            [pageSize]=\"10\"\n            [pageSizeOptions]=\"[5, 10, 20]\">\n          </mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/neo-information/neo-information.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  margin-bottom: 0;\n  border-radius: 0; }\n\n.orbit-section {\n  padding-top: 10px; }\n\n.data-table {\n  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  padding: 10px;\n  background: #ef5c29; }\n\n.data-table .table-content {\n    background: #ef5c29; }\n\n.data-table .table-label {\n    color: white; }\n\n.input-filter {\n  color: white !important; }\n\n.sort-icon {\n  color: white;\n  font-size: 20px;\n  display: inline-block; }\n\n.input-field {\n  margin-left: 20px; }\n\n.information {\n  height: 230px;\n  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3); }\n\n.banner {\n  height: 40vh;\n  background: #1377b9; }\n\n.banner .object-name {\n    color: white;\n    text-align: center; }\n\n.orbit-card {\n  width: 100%;\n  height: auto;\n  -webkit-box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);\n  background: #05a69e;\n  padding: 10px;\n  color: white; }\n\n.orbit-card .head {\n    width: 100%;\n    height: 30%; }\n\n.orbit-card .body {\n    width: 100%;\n    padding-left: 15px; }\n\n.orbit-card .orbit-data-label {\n    font-size: 14px;\n    font-weight: bold; }\n\n.label {\n  font-size: 20px;\n  z-index: 1; }\n\n.orbit-card-name {\n  background: #1377b9;\n  width: 100%;\n  height: 200px;\n  padding: 10px;\n  color: white;\n  margin-bottom: 10px;\n  -webkit-box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3); }\n\n.orbit-card-name .name {\n    margin-top: 20px;\n    text-align: center; }\n\n.orbit-card-name .reference {\n    text-align: center; }\n\n.row {\n  padding: 10px; }\n\n.simple-info-card {\n  background: #f7941f;\n  width: 100%;\n  height: 180px;\n  -webkit-box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);\n  margin-bottom: 10px;\n  padding: 10px;\n  color: white; }\n\n.simple-info-card .diameter-data {\n    margin-top: 20px;\n    font-size: 20px; }\n\n.simple-info-card h2 {\n    text-align: center;\n    font-size: 20px; }\n\n.spinner {\n  margin-left: 40%; }\n\n.table-history {\n  background: #1377b9; }\n\n.title {\n  text-align: center;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/neo-information/neo-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeoInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_nasa_service__ = __webpack_require__("../../../../../src/app/services/nasa.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NeoInformationComponent = /** @class */ (function () {
    function NeoInformationComponent(_activeRoute, _nasaService, _router) {
        var _this = this;
        this._activeRoute = _activeRoute;
        this._nasaService = _nasaService;
        this._router = _router;
        this.displayedColumns = ['No', 'Orbiting Body', 'Date', 'Miss Distance'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatTableDataSource */]();
        this.sub = this._activeRoute.params.subscribe(function (params) {
            _this.getData(params['id']);
        });
    }
    NeoInformationComponent.prototype.ngOnInit = function () {
    };
    NeoInformationComponent.prototype.getData = function (param) {
        var _this = this;
        this._nasaService.getNEOLookUp(param)
            .subscribe(function (data) {
            _this.neo_data = JSON.parse(data.text());
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatTableDataSource */](_this.neo_data.close_approach_data);
            _this.dataSource.paginator = _this.paginator;
        }, function (err) {
            console.log(err);
        });
    };
    NeoInformationComponent.prototype.ngAfterViewInit = function () {
    };
    NeoInformationComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */])
    ], NeoInformationComponent.prototype, "paginator", void 0);
    NeoInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-neo-information',
            template: __webpack_require__("../../../../../src/app/neo-information/neo-information.component.html"),
            styles: [__webpack_require__("../../../../../src/app/neo-information/neo-information.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_nasa_service__["a" /* NasaService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NeoInformationComponent);
    return NeoInformationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/neo-page/neo-dialog.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span class=\"example-spacer\"></span>\n    <span>{{object.name}}</span>\n    <span class=\"example-spacer\"></span>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div mat-dialog-content>\n    <span class=\"desc\">Hazardous Potentially Asteroid</span>:<span>{{object.is_potentially_hazardous_asteroid}}</span> <br>\n    <span class=\"desc\">Estimated Diameter Minimal (km)</span>:<span> {{object.estimated_diameter.kilometers.estimated_diameter_min}}</span><br>\n    <span class=\"desc\">Estimated Diameter Maximal (km)</span>:<span> {{object.estimated_diameter.kilometers.estimated_diameter_max}}</span><br>\n    <span class=\"desc\">Miss Distance (AU) </span>:<span> {{object.close_approach_data[0].miss_distance.astronomical}}</span><br>\n    <span class=\"desc\">Orbiting Body </span>:<span> {{object.close_approach_data[0].orbiting_body}}</span><br>\n    <span class=\"desc\">Relative Velocity (km/h)</span>:<span>{{object.close_approach_data[0].relative_velocity.kilometers_per_hour}}</span><br>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"okButtonClicked()\"> <mat-icon>done</mat-icon> Ok</button>\n    <button mat-raised-button color=\"accent\" (click)=\"gotoJPL(object.nasa_jpl_url)\"> <mat-icon>navigate_next</mat-icon> Go to JPL </button>\n    <button mat-raised-button color=\"warn\" (click)=\"goToDetails()\"> <mat-icon>details</mat-icon> Details </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/neo-page/neo-dialog.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n  font-size: 14px; }\n\n.title {\n  color: #01579B;\n  font-weight: bold; }\n\n.desc {\n  color: #01579B; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/neo-page/neo-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div *ngIf=\"spinner_visible\">\n    <mat-spinner style=\"margin:0 auto;\" mode=\"indeterminate\">Loading</mat-spinner>\n  </div>\n  <div class=\"container-fluid\" *ngIf=\"content_visible\">\n    <h2> <mat-icon>today</mat-icon> {{mode_text}} NEO (Near Earth Objects)</h2>\n    <div class=\"row\">\n      <div class=\"col col-md-4\" *ngFor=\"let neo of NEO_Today; let i = index\">\n        <div class=\"container\">\n          <div class=\"card\">\n            <div class=\"card-head\">\n              <span> <mat-icon>label</mat-icon> {{neo.name}}</span>\n            </div>\n            <div class=\"card-content\">\n              <span>Close Approach Date : {{neo.close_approach_data[0].close_approach_date}}</span> <br>\n              <span>Miss Distance (AU) : {{neo.close_approach_data[0].miss_distance.astronomical}}</span> <br>\n              <span>Estimated Diameter Max (km) : {{neo.estimated_diameter.kilometers.estimated_diameter_max}}</span> <br>\n              <span>Speed (km/s) : {{neo.close_approach_data[0].relative_velocity.kilometers_per_second}}</span> <br>\n              <span>Magnitude : {{neo.absolute_magnitude_h}}</span>\n            </div>\n            <div class=\"card-foot\">\n              <button mat-raised-button color=\"primary\" (click)=\"moreInforClicked(NEO_Today[i])\">\n                  <mat-icon>more_horiz</mat-icon>\n                More\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/neo-page/neo-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  margin-bottom: 0;\n  background: white; }\n  .jumbotron h2 {\n    text-align: center;\n    font-size: 28px; }\n  .card {\n  width: 100%;\n  height: 190px;\n  min-width: 280px;\n  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  margin-bottom: 10px; }\n  .hide-spinner {\n  display: none; }\n  .spinner {\n  margin-left: 47%; }\n  .card-head {\n  height: 22%;\n  text-align: left;\n  padding: 5px;\n  padding-left: 15px;\n  font-size: 24px; }\n  .card-content {\n  font-size: 12px;\n  height: 48%;\n  padding-left: 15px; }\n  .card-foot {\n  height: 30%;\n  padding-left: 15px;\n  padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/neo-page/neo-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NeoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeoDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nasa_service__ = __webpack_require__("../../../../../src/app/services/nasa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NeoPageComponent = /** @class */ (function () {
    function NeoPageComponent(_route, _nasaServices, dialog) {
        var _this = this;
        this._route = _route;
        this._nasaServices = _nasaServices;
        this.dialog = dialog;
        this.spinner_visible = false;
        this.content_visible = false;
        this.mode_text = '';
        this._sub_ = this._route.params.subscribe(function (params) {
            if (params['mode'] === 'today') {
                _this.getTodayNEO();
            }
            else if (params['mode'] === 'week') {
                _this.getWeeklyNEO();
            }
            else if (params['mode'] === 'getbydate') {
                var start = new Date(params['start']);
                var end = new Date(params['end']);
                var length_1 = params['size'];
                _this.getByDateNEO(start, end, length_1);
            }
            else {
                //
            }
        });
    }
    NeoPageComponent.prototype.ngOnInit = function () { };
    NeoPageComponent.prototype.ngAfterViewInit = function () { };
    NeoPageComponent.prototype.getTodayNEO = function () {
        var _this = this;
        this.content_visible = false;
        this.spinner_visible = true;
        this._nasaServices.getTodayNEO()
            .subscribe(function (data) {
            var body_JSON = JSON.parse(data.text());
            _this.NEO_Today = body_JSON.near_earth_objects[_this._nasaServices.getDateFormat(new Date()).toString()];
            _this.spinner_visible = false;
            _this.content_visible = true;
            _this.mode_text = 'Today';
            console.log(body_JSON);
        }, function (err) {
            console.log('error');
        });
    };
    NeoPageComponent.prototype.getWeeklyNEO = function () {
        var _this = this;
        this.content_visible = false;
        this.spinner_visible = true;
        this._nasaServices.getWeeklyNEO()
            .subscribe(function (data) {
            var body_JSON = JSON.parse(data.text());
            var tmp = [];
            var sec_tmp = [];
            var curr = new Date();
            var date = _this._nasaServices.getFirstDate(new Date());
            var count = 0;
            for (var i = 0; i < 7; i++) {
                date = new Date(date.setDate(date.getDate() + count));
                tmp.push(body_JSON.near_earth_objects[_this._nasaServices.getDateFormat(date).toString()]);
                count = 1;
            }
            for (var i = 0; i < tmp.length; i++) {
                for (var j = 0; j < tmp[i].length; j++) {
                    sec_tmp.push(tmp[i][j]);
                }
            }
            _this.NEO_Today = sec_tmp;
            _this.spinner_visible = false;
            _this.content_visible = true;
            _this.mode_text = 'Weekly';
        }, function (err) {
            console.log(err);
        });
    };
    NeoPageComponent.prototype.getByDateNEO = function (start, end, length) {
        var _this = this;
        this.content_visible = false;
        this.spinner_visible = true;
        this._nasaServices.getByDate(start, end)
            .subscribe(function (data) {
            var body_JSON = JSON.parse(data.text());
            var tmp = [];
            var sec_tmp = [];
            var count = 0;
            var date_buffer = start;
            for (var i = 0; i < length; i++) {
                date_buffer = new Date(date_buffer.setDate(date_buffer.getDate() + count));
                tmp.push(body_JSON.near_earth_objects[_this._nasaServices.getDateFormat(date_buffer).toString()]);
                count = 1;
            }
            for (var i = 0; i < tmp.length; i++) {
                for (var j = 0; j < tmp[i].length; j++) {
                    sec_tmp.push(tmp[i][j]);
                }
            }
            _this.NEO_Today = sec_tmp;
            _this.spinner_visible = false;
            _this.content_visible = true;
            _this.mode_text = '' + start.toString().substring(0, 16) + ' -> ' + end.toString().substring(0, 16);
        }, function (err) {
            console.log(err);
        });
    };
    NeoPageComponent.prototype.moreInforClicked = function (data) {
        var dialogRef = this.dialog.open(NeoDialog, {
            width: '400px',
            minWidth: '280px',
            data: data
        });
    };
    NeoPageComponent.prototype.ngOnDestroy = function () {
        this._sub_.unsubscribe();
    };
    NeoPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-neo-page',
            template: __webpack_require__("../../../../../src/app/neo-page/neo-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/neo-page/neo-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_nasa_service__["a" /* NasaService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]])
    ], NeoPageComponent);
    return NeoPageComponent;
}());

var NeoDialog = /** @class */ (function () {
    function NeoDialog(dialogref, object, _router) {
        this.dialogref = dialogref;
        this.object = object;
        this._router = _router;
        // console.log(object);
    }
    NeoDialog.prototype.okButtonClicked = function () {
        this.dialogref.close();
    };
    NeoDialog.prototype.gotoJPL = function (url) {
        this.dialogref.close();
        window.open(url, '_blank');
    };
    NeoDialog.prototype.goToDetails = function () {
        this.dialogref.close();
        this._router.navigate(['/neo-information', { id: this.object.neo_reference_id }]);
    };
    NeoDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-neo-dialog',
            template: __webpack_require__("../../../../../src/app/neo-page/neo-dialog.html"),
            styles: [__webpack_require__("../../../../../src/app/neo-page/neo-dialog.scss")]
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NeoDialog);
    return NeoDialog;
}());



/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notfound',
            template: __webpack_require__("../../../../../src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notfound/notfound.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/aurora-live.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuroraLiveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuroraLiveService = /** @class */ (function () {
    function AuroraLiveService(_http) {
        this._http = _http;
        this.URL = '/api/v1/aurora/locations'; // Locations Hunting Aurora
    }
    AuroraLiveService.prototype.getAuroraHuntingLocations = function () {
        return this._http.get(this.URL.toString());
    };
    AuroraLiveService.prototype.getAceModulData = function (location) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('access_mode', 'normalaccess');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var _url = '/api/v1/aurora/ace/data/' + location.lat + '/' + location.long;
        return this._http.get(_url, options);
    };
    AuroraLiveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuroraLiveService);
    return AuroraLiveService;
}());



/***/ }),

/***/ "../../../../../src/app/services/google-services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleServicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleServicesService = /** @class */ (function () {
    function GoogleServicesService(_http) {
        this._http = _http;
        this.API_KEY = 'AIzaSyAfOAoHVk4cVXbgvhd7dS0ogE3DIksufWI';
    }
    GoogleServicesService.prototype.getStaticMapImage = function (lat, lon) {
        var urls = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lon + '&zoom=12&size=400x100&key=' + this.API_KEY;
        return urls;
    };
    GoogleServicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GoogleServicesService);
    return GoogleServicesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/nasa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NasaService = /** @class */ (function () {
    function NasaService(_http) {
        this._http = _http;
    }
    NasaService.prototype.getTodayNEO = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('access_mode', 'normalaccess');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('/api/v1/neo/today', options);
    };
    NasaService.prototype.getWeeklyNEO = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('access_mode', 'normalaccess');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('/api/v1/neo/weekly', options);
    };
    NasaService.prototype.getLastWeekNEO = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('access_mode', 'normalaccess');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('/api/v1/neo/lastweek', options);
    };
    NasaService.prototype.getNEOLookUp = function (reference_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('access_mode', 'normalaccess');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('/api/v1/neo/' + reference_id, options);
    };
    NasaService.prototype.getByDate = function (start_date, end_date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('access_mode', 'normalaccess');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('/api/v1/neo/bydate/' + start_date.toString() + '/' + end_date.toString(), options);
    };
    /*
      NASA API required date format like yyyy-mm-dd
    */
    NasaService.prototype.getDateFormat = function (date) {
        var month = '' + (date.getMonth() + 1);
        var day = '' + date.getDate();
        var year = '' + date.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    };
    NasaService.prototype.getFirstDate = function (_date) {
        var day = _date.getDay() || 7;
        if (day !== 1) {
            _date.setHours(-24 * (day - 1));
        }
        return _date;
    };
    NasaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NasaService);
    return NasaService;
}());



/***/ }),

/***/ "../../../../../src/app/services/open-weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenWeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenWeatherService = /** @class */ (function () {
    function OpenWeatherService(_http) {
        this._http = _http;
    }
    OpenWeatherService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('access_mode', 'normalaccess');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    OpenWeatherService.prototype.getCurrentWeather = function (lat, long) {
        var _url = '/api/v1/weather/current/' + lat + '/' + long;
        return this._http.get(_url, this.getHeaders());
    };
    OpenWeatherService.prototype.getForecastWeather = function (lat, long) {
        var _url = '/api/v1/weather/forecast/' + lat + '/' + long;
        return this._http.get(_url, this.getHeaders());
    };
    OpenWeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OpenWeatherService);
    return OpenWeatherService;
}());



/***/ }),

/***/ "../../../../../src/app/welcome-page/welcome-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron welcome-page\">\n  <div class=\"container\">\n    <h1 class=\"brand\">Astronomy Information</h1>\n    <p>See what's happening today</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/welcome-page/welcome-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  margin-bottom: 0;\n  border-radius: 0; }\n\n.welcome-page {\n  background: #01579B;\n  height: 100%;\n  color: white;\n  text-align: center; }\n\n.brand {\n  text-align: center;\n  margin-top: 30vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome-page/welcome-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomePageComponent = /** @class */ (function () {
    function WelcomePageComponent() {
    }
    WelcomePageComponent.prototype.ngOnInit = function () {
    };
    WelcomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome-page',
            template: __webpack_require__("../../../../../src/app/welcome-page/welcome-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome-page/welcome-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomePageComponent);
    return WelcomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map