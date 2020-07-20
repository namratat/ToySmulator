webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CommandTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_tableData__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommandTypes;
(function (CommandTypes) {
    CommandTypes["PLACE"] = "PLACE";
    CommandTypes["MOVE"] = "MOVE";
    CommandTypes["LEFT"] = "LEFT";
    CommandTypes["RIGHT"] = "RIGHT";
    CommandTypes["REPORT"] = "REPORT";
})(CommandTypes || (CommandTypes = {}));
var HomePage = (function () {
    function HomePage(navCtrl, tData, show) {
        this.navCtrl = navCtrl;
        this.tData = tData;
        this.show = show;
        this.X = 0;
        this.Y = 0;
        this.directionArray = ["NORTH", "SOUTH", "WEST", "EAST"];
        this.currentDirection = "NORTH";
        this.rotate = 0;
        this.placeObj = false;
        this.xmax = 4;
        this.ymax = 4;
        this.tableData = this.tData.generateData(null, null);
        this.input = '';
    }
    // Robot Commands
    HomePage.prototype.CommandFunction = function () {
        if (!this.placeObj) {
            alert('Click place to start the move');
            return;
        }
        switch (this.currentDirection) {
            case 'NORTH':
                this.checkForBondaries('Y', this.ymax, 'increment');
                break;
            case 'SOUTH':
                this.checkForBondaries('Y', this.ymax, 'decrement');
                break;
            case 'EAST':
                this.checkForBondaries('X', this.xmax, 'increment');
                break;
            case 'WEST':
                this.checkForBondaries('X', this.xmax, 'decrement');
                break;
        }
    };
    HomePage.prototype.isValid = function (img) {
        if (img != null) {
            return true;
        }
        else {
            return false;
        }
    };
    //Check for Robot Bondaries
    HomePage.prototype.checkForBondaries = function (axis, maxVal, value) {
        switch (axis) {
            case 'X': {
                if (value == 'increment') {
                    if (this.X != maxVal)
                        this.X = this.X + 1;
                    else
                        this.showAlert();
                }
                else if (value == 'decrement') {
                    if (this.X != 0)
                        this.X = this.X - 1;
                    else
                        this.showAlert();
                }
                break;
            }
            case 'Y': {
                if (value == 'increment') {
                    if (this.Y != maxVal)
                        this.Y = this.Y + 1;
                    else
                        this.showAlert();
                }
                else if (value == 'decrement') {
                    if (this.Y != 0)
                        this.Y = this.Y - 1;
                    else
                        this.showAlert();
                }
                break;
            }
        }
        this.tableData = this.tData.generateData(this.X, this.Y);
    };
    // Rotate Robot to given direction
    HomePage.prototype.rotateLeftRight = function (side) {
        if (!this.placeObj) {
            alert('Click place to start the move');
            return;
        }
        var currDi = this.currentDirection;
        if (side == "LEFT") {
            switch (this.currentDirection) {
                case 'SOUTH':
                    this.currentDirection = 'EAST';
                    break;
                case 'EAST':
                    this.currentDirection = 'NORTH';
                    break;
                case 'WEST':
                    this.currentDirection = 'SOUTH';
                    break;
                case 'NORTH':
                    this.currentDirection = 'WEST';
                    break;
            }
            this.rotate = this.rotate - 90;
        }
        else {
            switch (this.currentDirection) {
                case 'SOUTH':
                    this.currentDirection = 'WEST';
                    break;
                case 'EAST':
                    this.currentDirection = 'SOUTH';
                    break;
                case 'WEST':
                    this.currentDirection = 'NORTH';
                    break;
                case 'NORTH':
                    this.currentDirection = 'EAST';
                    break;
            }
            this.rotate = this.rotate + 90;
        }
    };
    //Place Robot on the Table
    HomePage.prototype.Place = function () {
        this.placeObj = true;
        if (this.input != '') {
            var val = this.input.split(',');
            this.X = Number(val[0]);
            this.Y = Number(val[1]);
            this.currentDirection = val[2].toUpperCase();
        }
        else {
            this.X = 0;
            this.Y = 0;
        }
        if (this.X >= 5 || this.Y >= 5) {
            this.showAlert();
        }
        else {
            this.tableData = this.tData.generateData(this.X, this.Y);
        }
    };
    ;
    // Reset All values
    HomePage.prototype.Reset = function () {
        this.content.resize();
        this.placeObj = false;
        this.setDefault();
        this.input = '';
        this.tableData = this.tData.generateData(null, null);
    };
    // Set Default Values
    HomePage.prototype.setDefault = function () {
        this.X = 0;
        this.Y = 0;
        this.currentDirection = 'NORTH';
    };
    // Show Alert if Robot Moves out of Boundaries
    HomePage.prototype.showAlert = function () {
        var alert = this.show.create({
            subTitle: 'ROBOT will fall',
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/namratathanekar/Documents/work/ToySimulator/ToySimulator/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Robot Toy Simulator\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="tab5-content">\n  <ion-grid style="">\n    <ion-row *ngFor="let item of tableData; index as i" >\n      <ion-col *ngFor="let img of item; index as j"col-auto class="cell-class">\n        <div *ngIf="isValid(img)">\n        <img src="{{img}}" class="ion-img" [ngStyle]="{\'transform\': \'rotate(\'+rotate+\'deg)\'}"/>\n      </div>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n  <button ion-button (click)="rotateLeftRight(\'LEFT\')">LEFT</button>\n  <button ion-button (click)="rotateLeftRight(\'RIGHT\')">RIGHT</button>\n  <button ion-button (click)="CommandFunction()">MOVE</button>\n  <ion-item>\n    <ion-label>Enter Input commands and click on Place (X,Y,DIRECTION)</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" [(ngModel)]="input" autocapitalize="characters" style="border: 1px;"></ion-input>\n  </ion-item>\n  \n  <button ion-button (click)="Place()">Place</button>\n  <button ion-button (click)="Reset()">Reset</button>\n\n  <ion-item>\n    <label> OutPut X,Y,Direction => {{X}} , {{Y}} , {{currentDirection}} </label>\n  </ion-item>\n  <!-- <div>X Axis {{X}}</div>\n  <div>Y Axis {{Y}}</div>\n  <div>Direction {{currentDirection}}</div>\n  <div>{{input}}</div> -->\n\n</ion-content>>`/*ion-inline-end:"/Users/namratathanekar/Documents/work/ToySimulator/ToySimulator/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__data_tableData__["a" /* tableData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tableData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var tableData = (function () {
    function tableData() {
        this.XVal = 5;
        this.YVal = 5;
        this.data = this.generateData(null, null);
    }
    tableData.prototype.generateData = function (x, y) {
        var xData = [];
        for (var i = 0; i < this.XVal; i++) {
            var yData = [];
            for (var j = 0; j < this.YVal; j++) {
                var val = null;
                yData.push(val);
            }
            xData.push(yData);
        }
        this.data = xData;
        if (x != null) {
            this.data[x][y] = "../assets/imgs/logo.png";
        }
        return this.data;
    };
    tableData.prototype.getTableData = function () {
        return this.data;
    };
    tableData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], tableData);
    return tableData;
}());

//# sourceMappingURL=tableData.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_tableData__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__data_tableData__["a" /* tableData */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/namratathanekar/Documents/work/ToySimulator/ToySimulator/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/namratathanekar/Documents/work/ToySimulator/ToySimulator/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map