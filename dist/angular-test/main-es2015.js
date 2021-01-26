(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/__ivy_ngcc__/fesm2015/angular-highcharts.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.service */ "./src/app/test.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










function AppComponent_li_8_h6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.subTitle);
} }
function AppComponent_li_8_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.count);
} }
function AppComponent_li_8_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.kitCount);
} }
function AppComponent_li_8_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.pagesCount);
} }
function AppComponent_li_8_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.status);
} }
function AppComponent_li_8_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_li_8_h6_1_Template, 2, 1, "h6", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_li_8_span_7_Template, 2, 1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_li_8_span_8_Template, 2, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_li_8_span_9_Template, 2, 1, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_li_8_span_10_Template, 2, 1, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_li_8_span_11_Template, 2, 0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.kitCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.pagesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.childs);
} }
function AppComponent_li_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " issues");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r15.title.charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r15.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r15.issues);
} }
function AppComponent_tr_166_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 98);
} }
function AppComponent_tr_166_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 99);
} }
function AppComponent_tr_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_tr_166_span_7_Template, 1, 0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_tr_166_span_8_Template, 1, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", row_r16.graph, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r16.item, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r16.level === "up" ? "text-success" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r16.level === "up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r16.level === "down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r16.percentage, "% ");
} }
// declare var require: any;
// const Boost = require("highcharts/modules/boost");
// const noData = require("highcharts/modules/no-data-to-display");
// const More = require("highcharts/highcharts-more");
// Boost(Highcharts);
// noData(Highcharts);
// More(Highcharts);
class AppComponent {
    constructor(router, activatedRoute, testService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.testService = testService;
        this.menu = [];
        this.multi = [];
        this.breadcrumbs = [];
        this.openProjects = [];
        this.stats = [];
        this.title = 'angular-test';
    }
    ngOnInit() {
        const events = this.router.events;
        console.log('events', events);
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.activatedRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(route => route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_1__["PRIMARY_OUTLET"]))
            .subscribe(route => {
            const snapshot = this.router.routerState.snapshot;
            this.breadcrumbs = [];
            const url = snapshot.url;
            const routeData = route.snapshot.data;
            console.log(routeData);
            const label = routeData['breadcrumb'];
            const params = snapshot.root.params;
            this.breadcrumbs.push({
                url: url,
                label: label,
                params: params
            });
            console.log('', this.breadcrumbs);
        });
        this.menu = [
            {
                name: 'Dashboard',
                url: 'dashboard',
                icon: 'fa fa-tachometer',
                subTitle: 'Main'
            },
            {
                name: 'Apps',
                url: 'apps',
                icon: 'fa fa-th',
                count: 6,
                childs: [
                    {
                        name: 'Apps1',
                        url: 'apps1',
                    }
                ]
            },
            {
                name: 'Layouts',
                url: 'layouts',
                icon: 'fa fa-th-large',
                childs: [
                    {
                        name: 'Layouts1',
                        url: 'layouts1',
                    }
                ]
            },
            {
                name: 'Widgets',
                url: 'widgets',
                icon: 'fa fa-square'
            },
            {
                name: 'UI Kit',
                url: 'ui-kit',
                subTitle: 'Components',
                icon: 'fa fa-sliders',
                childs: [
                    {
                        name: 'UI Kit1',
                        url: 'ui-kit1',
                    }
                ],
                kitCount: 8
            },
            {
                name: 'Pages',
                url: 'pages',
                icon: 'fa fa-columns',
                childs: [
                    {
                        name: 'Pages1',
                        url: 'pages1',
                    }
                ],
                pagesCount: 9
            },
            {
                name: 'Form',
                url: 'form',
                icon: 'fa fa-dot-circle-o',
                childs: [
                    {
                        name: 'Form1',
                        url: 'form',
                    }
                ]
            },
            {
                name: 'Tables',
                url: 'tables',
                icon: 'fa fa-table'
            },
            {
                name: 'Charts',
                url: 'charts',
                icon: 'fa fa-bar-chart',
                status: 'New'
            },
            {
                name: 'Documents',
                url: 'documents',
                subTitle: 'Help'
            }
        ];
        this.multi = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "1990",
                        "value": 62000000
                    },
                    {
                        "name": "2010",
                        "value": 73000000
                    },
                    {
                        "name": "2011",
                        "value": 89400000
                    }
                ]
            },
            {
                "name": "USA",
                "series": [
                    {
                        "name": "1990",
                        "value": 250000000
                    },
                    {
                        "name": "2010",
                        "value": 309000000
                    },
                    {
                        "name": "2011",
                        "value": 311000000
                    }
                ]
            },
            {
                "name": "France",
                "series": [
                    {
                        "name": "1990",
                        "value": 58000000
                    },
                    {
                        "name": "2010",
                        "value": 50000020
                    },
                    {
                        "name": "2011",
                        "value": 58000000
                    }
                ]
            },
            {
                "name": "UK",
                "series": [
                    {
                        "name": "1990",
                        "value": 57000000
                    },
                    {
                        "name": "2010",
                        "value": 62000000
                    }
                ]
            }
        ];
        this.init();
        this.init2();
        this.init3();
        this.openProjects = [
            {
                title: 'Brodcast web app mockup',
                tasks: 5,
                issues: 3
            },
            {
                title: 'Gooddesign Bootstrap 4 migration',
                tasks: 35,
                issues: 6
            },
            {
                title: '#Hashtag android app develop',
                tasks: 52,
                issues: 13
            },
            {
                title: 'Google material design application',
                tasks: 15,
                issues: 3
            },
            {
                title: 'Facebook connection web application',
                tasks: 15,
                issues: 3
            }
        ];
        this.stats = [
            {
                graph: 'assets/images/chart1.png',
                item: 'App downloads',
                percentage: 40,
                level: 'up'
            },
            {
                graph: 'assets/images/chart2.png',
                item: 'Social connection',
                percentage: 20,
                level: 'up'
            },
            {
                graph: 'assets/images/chart3.png',
                item: 'Revenue',
                percentage: 5,
                level: 'down'
            },
            {
                graph: 'assets/images/chart4.png',
                item: 'Customer increase',
                percentage: 20,
                level: 'down'
            },
            {
                graph: 'assets/images/chart5.png',
                item: 'Order placed',
                percentage: 5,
                level: 'down'
            }
        ];
        this.getTestData();
    }
    getTestData() {
        this.testService.getTestAPI().subscribe((res) => {
            if (res) {
                console.log('res', res);
                this.testInfo = res;
            }
        });
    }
    init() {
        this.options = {
            chart: {
                type: 'area',
                height: '300px'
            },
            colors: ['#a88bdf', '#0dc3aa', '#fcc200'],
            title: {
                text: 'Month Day'
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 0.5,
                    marker: {
                        lineWidth: 0.5,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                    name: 'Month',
                    type: undefined,
                    data: [
                        {
                            id: 1,
                            name: 'raja',
                            y: 1
                        },
                        {
                            id: 2,
                            name: 'raja1',
                            y: 1.2
                        },
                        {
                            id: 3,
                            name: 'raja2',
                            y: 1.4
                        },
                        {
                            id: 4,
                            name: 'raja3',
                            y: 1.3
                        },
                        {
                            id: 5,
                            name: 'raja4',
                            y: 1.2
                        },
                        {
                            id: 6,
                            name: 'raja5',
                            y: 1
                        }
                    ]
                },
                {
                    name: "Day",
                    type: undefined,
                    data: [
                        {
                            id: 11,
                            name: 'hari',
                            y: 1
                        },
                        {
                            id: 21,
                            name: 'hari1',
                            y: 1.1
                        },
                        {
                            id: 21,
                            name: 'hari2',
                            y: 1.3
                        },
                        {
                            id: 21,
                            name: 'hari3',
                            y: 1.2
                        },
                        {
                            id: 21,
                            name: 'hari4',
                            y: 1.1
                        },
                        {
                            id: 21,
                            name: 'hari5',
                            y: 1
                        }
                    ]
                },
                {
                    name: "Day",
                    type: undefined,
                    data: [
                        {
                            id: 11,
                            name: 'yash',
                            y: 1
                        },
                        {
                            id: 21,
                            name: 'yash1',
                            y: 1.3
                        },
                        {
                            id: 21,
                            name: 'yash2',
                            y: 1.2
                        },
                        {
                            id: 21,
                            name: 'yash3',
                            y: 1
                        },
                        {
                            id: 21,
                            name: 'yash4',
                            y: 1.4
                        },
                        {
                            id: 21,
                            name: 'yash5',
                            y: 1.2
                        }
                    ]
                }
            ]
        };
        let chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.options);
        // chart.addPoint(4);
        this.chart = chart;
        // chart.addPoint(5);
        // setTimeout(() => {
        //   chart.addPoint(6);
        // }, 2000);
    }
    init2() {
        this.options = {
            chart: {
                type: 'column',
                height: '300px'
            },
            colors: ['#b397e1'],
            legend: {
                enabled: false
            },
            title: {
                text: 'This month This week'
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Month',
                    type: undefined,
                    data: [
                        {
                            id: 1,
                            name: 'raja',
                            y: 1200
                        }
                    ]
                },
                {
                    name: "Week1",
                    type: undefined,
                    data: [
                        {
                            id: 11,
                            name: 'hari',
                            y: 2300
                        }
                    ]
                },
                {
                    name: "Week2",
                    type: undefined,
                    data: [
                        {
                            id: 11,
                            name: 'hari',
                            y: 2300
                        }
                    ]
                },
                {
                    name: "Week3",
                    type: undefined,
                    data: [
                        {
                            id: 21,
                            name: 'hari5',
                            y: 1200
                        }
                    ]
                },
                {
                    name: "Week4",
                    type: undefined,
                    data: [
                        {
                            id: 31,
                            name: 'hari6',
                            y: 1000
                        }
                    ]
                },
                {
                    name: "Week5",
                    type: undefined,
                    data: [
                        {
                            id: 31,
                            name: 'hari7',
                            y: 500
                        }
                    ]
                }
            ]
        };
        let chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.options);
        // chart.addPoint(4);
        this.chart2 = chart;
        // chart.addPoint(5);
        // setTimeout(() => {
        //   chart.addPoint(6);
        // }, 2000);
    }
    init3() {
        this.options = {
            chart: {
                type: 'bar',
                height: '300px'
            },
            legend: {
                enabled: false
            },
            colors: ['#35c3b7'],
            title: {
                text: 'Market Referral'
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Market',
                    type: undefined,
                    data: [
                        {
                            id: 1,
                            name: 'raja',
                            y: 1200
                        }
                    ]
                },
                {
                    name: "Referal",
                    type: undefined,
                    data: [
                        {
                            id: 11,
                            name: 'hari',
                            y: 2300
                        }
                    ]
                },
                {
                    name: "Referal",
                    type: undefined,
                    data: [
                        {
                            id: 11,
                            name: 'hari',
                            y: 300
                        }
                    ]
                },
                {
                    name: "Referal",
                    type: undefined,
                    data: [
                        {
                            id: 11,
                            name: 'hari',
                            y: 1300
                        }
                    ]
                },
                {
                    name: "Referal",
                    type: undefined,
                    data: [
                        {
                            id: 11,
                            name: 'hari',
                            y: 800
                        }
                    ]
                },
            ]
        };
        let chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.options);
        // chart.addPoint(4);
        this.chart3 = chart;
        // chart.addPoint(5);
        // setTimeout(() => {
        //   chart.addPoint(6);
        // }, 2000);
    }
    logout() {
        localStorage.removeItem('userDetails');
        this.router.navigate(['login']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 167, vars: 9, consts: [["id", "layoutSidenav"], ["id", "layoutSidenav_nav"], ["id", "sidenavAccordion", 1, "sb-sidenav", "accordion", "sb-sidenav-dark"], [1, "sb-sidenav-menu", "customScroll"], [1, "nav"], [1, "logo"], ["src", "assets/images/logo.png", "alt", ""], [1, "menu-list"], [4, "ngFor", "ngForOf"], [1, "sb-sidenav-footer"], [1, "user-login"], [1, "user-pic"], ["src", "assets/images/user.jpg", "alt", ""], [1, "user-login-info"], [1, "status"], [1, "fa", "fa-circle"], [1, "status-info"], ["id", "layoutSidenav_content"], [1, "sb-topnav", "navbar", "navbar-expand", "navbar"], [1, "navbar-left"], ["href", "index.html", 1, "navbar-brand"], [1, "btn", "btn-link"], [1, "fa", "fa-plus"], [1, "d-none", "d-md-inline-block", "form-inline", "ml-auto", "mr-0", "mr-md-3", "my-2", "my-md-0"], [1, "input-group"], ["type", "text", "placeholder", "Search projects", "aria-label", "Search", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary"], [1, "fa", "fa-search"], [1, "profile-ul"], [1, "fa", "fa-arrows-v"], [1, "fa", "fa-bell-o", "notifications"], [1, "count"], [1, "user", 3, "click"], [1, "breadcrumb"], [1, "breadcrumb-left"], [1, "breadcrumb-right"], [1, "app-settings"], [1, "fa", "fa-cog"], [1, "active"], [1, "fa", "fa-list"], [1, "container-fluid", "py-3"], [1, "row"], [1, "col", "info-widget"], [1, "info-widget-data"], [1, "info-left", "email-bg"], [1, "fa", "fa-envelope-open"], [1, "info-right"], [1, "info-count"], [1, "info-below"], [1, "info-left", "project-bg"], [1, "fa", "fa-product-hunt"], [1, "info-left", "user-bg"], [1, "fa", "fa-users"], [1, "row", "mt-4"], [1, "col"], [1, "chart-widget"], [1, "chart-header"], [1, "chart-header-left"], [1, "chart-header-right"], [1, "fa", "fa-refresh"], [1, "fa", "fa-ellipsis-v", "ml-2"], [3, "chart"], [1, "open-projects-widget"], [1, "open-projects-widget-header"], [1, "open-projects-widget-header-left"], [1, "open-projects-widget-title"], [1, "sub-title"], [1, "open-projects-widget-header-right"], [1, "open-projects-widget-list"], [1, "open-projects-widget", "h-100"], [1, "fa", "fa-ellipsis-v"], [1, "table"], [2, "width", "70px"], [2, "width", "20px"], [4, "ngIf"], [1, "nav-link", 3, "routerLink"], [1, "sb-nav-link-icon"], [3, "ngClass"], [1, "link-right"], ["class", "count", 4, "ngIf"], ["class", "kit-count", 4, "ngIf"], ["class", "page-count", 4, "ngIf"], ["class", "new", 4, "ngIf"], ["class", "sub-arrow", 4, "ngIf"], [1, "kit-count"], [1, "page-count"], [1, "new"], [1, "sub-arrow"], [1, "fa", "fa-caret-down"], [1, "square"], [1, "project-info"], [1, "project-edit"], [1, "fa", "fa-pencil", "ml-2"], ["alt", "", 3, "src"], [1, "td-custom", 3, "ngClass"], ["class", "pr-1 fa fa-level-up", 4, "ngIf"], ["class", "pr-1 fa fa-level-down", 4, "ngIf"], [1, "pr-1", "fa", "fa-level-up"], [1, "pr-1", "fa", "fa-level-down"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_li_8_Template, 12, 9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Jean Reyes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_44_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Welcome to flatkit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Bootstrap 4 webkit app with angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Start manage: projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "6 new arrivals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "38 open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "638 vips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Projects monitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Calculated in last 30 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Calculated in last 7 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Calculated in last 7 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Open Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Your data status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "ul", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, AppComponent_li_145_Template, 18, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Stats ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Your data status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "table", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "th", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, AppComponent_tr_166_Template, 11, 6, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.testInfo == null ? null : ctx.testInfo.info == null ? null : ctx.testInfo.info.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.testInfo == null ? null : ctx.testInfo.info == null ? null : ctx.testInfo.info.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.testInfo == null ? null : ctx.testInfo.info == null ? null : ctx.testInfo.info.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx.chart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx.chart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx.chart3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.openProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #fff;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  list-style: none;\n  background-color: #fff;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  font-size: 14px;\n  border-bottom: 1px solid #ebebeb;\n  margin-bottom: 10px !important;\n  border-radius: 0px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 56px;\n  background-color: #fff;\n  z-index: 9;\n}\n\n.breadcrumb-left[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n}\n\n.breadcrumb-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: \"/\";\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:hover::before {\n  text-decoration: underline;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:hover::before {\n  text-decoration: none;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n@media (min-width: 992px) {\n  #layoutSidenav[_ngcontent-%COMP%]   #layoutSidenav_nav[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    height: 100vh;\n    position: fixed;\n    width: 200px;\n  }\n\n  #layoutSidenav[_ngcontent-%COMP%]   #layoutSidenav_content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    transition: margin 0.15s ease-in-out;\n    padding-left: 200px;\n  }\n\n  .sb-sidenav-toggled[_ngcontent-%COMP%]   #layoutSidenav[_ngcontent-%COMP%]   #layoutSidenav_nav[_ngcontent-%COMP%] {\n    transform: translateX(-225px);\n  }\n\n  .sb-sidenav-toggled[_ngcontent-%COMP%]   #layoutSidenav[_ngcontent-%COMP%]   #layoutSidenav_content[_ngcontent-%COMP%] {\n    margin-left: -225px;\n  }\n\n  .sb-sidenav-toggled[_ngcontent-%COMP%]   #layoutSidenav[_ngcontent-%COMP%]   #layoutSidenav_content[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n\n.sb-nav-fixed[_ngcontent-%COMP%]   .sb-topnav[_ngcontent-%COMP%] {\n  z-index: 1039;\n}\n\n.sb-nav-fixed[_ngcontent-%COMP%]   #layoutSidenav[_ngcontent-%COMP%]   #layoutSidenav_nav[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 100vh;\n  z-index: 1038;\n}\n\n.sb-nav-fixed[_ngcontent-%COMP%]   #layoutSidenav[_ngcontent-%COMP%]   #layoutSidenav_nav[_ngcontent-%COMP%]   .sb-sidenav[_ngcontent-%COMP%] {\n  padding-top: 56px;\n}\n\n.sb-nav-fixed[_ngcontent-%COMP%]   #layoutSidenav[_ngcontent-%COMP%]   #layoutSidenav_nav[_ngcontent-%COMP%]   .sb-sidenav[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.sb-nav-fixed[_ngcontent-%COMP%]   #layoutSidenav[_ngcontent-%COMP%]   #layoutSidenav_content[_ngcontent-%COMP%] {\n  padding-left: 225px;\n  top: 56px;\n}\n\n#layoutError[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n#layoutError[_ngcontent-%COMP%]   #layoutError_content[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex-grow: 1;\n}\n\n#layoutError[_ngcontent-%COMP%]   #layoutError_footer[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.img-error[_ngcontent-%COMP%] {\n  max-width: 20rem;\n}\n\n.nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .sb-nav-link-icon[_ngcontent-%COMP%], .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .sb-nav-link-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.sb-topnav[_ngcontent-%COMP%] {\n  padding-left: 0;\n  height: 56px;\n  z-index: 1039;\n  border-bottom: 1px solid #f3f3f3;\n  display: flex;\n  justify-content: space-between;\n}\n\n.sb-topnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  margin: 0;\n  flex: 1;\n}\n\n.sb-topnav.navbar-dark[_ngcontent-%COMP%]   #sidebarToggle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.sb-topnav.navbar-light[_ngcontent-%COMP%]   #sidebarToggle[_ngcontent-%COMP%] {\n  color: #212529;\n}\n\n.sb-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex-wrap: nowrap;\n}\n\n.sb-sidenav[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.sb-sidenav[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n\n.sb-sidenav[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .sb-sidenav-menu-heading[_ngcontent-%COMP%] {\n  padding: 1.75rem 1rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sb-sidenav[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 7px;\n  position: relative;\n  font-size: 14px;\n  justify-content: space-between;\n}\n\n.sb-sidenav[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .sb-nav-link-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.sb-sidenav[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .sb-sidenav-collapse-arrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: auto;\n  transition: transform 0.15s ease;\n}\n\n.sb-sidenav[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.collapsed[_ngcontent-%COMP%]   .sb-sidenav-collapse-arrow[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n\n.sb-sidenav[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .sb-sidenav-menu-nested[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n  flex-direction: column;\n}\n\n.sb-sidenav[_ngcontent-%COMP%]   .sb-sidenav-footer[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  flex-shrink: 0;\n  border-top: 1px solid #5b5b5b;\n}\n\n.sb-sidenav-dark[_ngcontent-%COMP%] {\n  background-color: #2d3e4e;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.sb-sidenav-dark[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .sb-sidenav-menu-heading[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.sb-sidenav-dark[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.sb-sidenav-dark[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .sb-nav-link-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.sb-sidenav-dark[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .sb-sidenav-collapse-arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.25);\n}\n\n.sb-sidenav-dark[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.sb-sidenav-dark[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.sb-sidenav-dark[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .sb-nav-link-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.sb-sidenav-dark[_ngcontent-%COMP%]   .sb-sidenav-footer[_ngcontent-%COMP%] {\n  background-color: #2d3e4e;\n}\n\n.sb-sidenav-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #212529;\n}\n\n.sb-sidenav-light[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .sb-sidenav-menu-heading[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n\n.sb-sidenav-light[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #212529;\n}\n\n.sb-sidenav-light[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .sb-nav-link-icon[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n\n.sb-sidenav-light[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .sb-sidenav-collapse-arrow[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n\n.sb-sidenav-light[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n\n.sb-sidenav-light[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.sb-sidenav-light[_ngcontent-%COMP%]   .sb-sidenav-menu[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .sb-nav-link-icon[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.sb-sidenav-light[_ngcontent-%COMP%]   .sb-sidenav-footer[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n}\n\n.sb-sidenav-menu[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.notifications[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.notifications[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -25px;\n  background-color: #f9be00;\n  border-radius: 7px;\n  width: 20px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  line-height: 16px;\n}\n\n.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.profile-ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n}\n\n.profile-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.profile-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n}\n\nform[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\nform[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-left: none;\n}\n\n.navbar-left[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.navbar-left[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.info-widget-data[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-radius: 3px;\n}\n\n.info-widget-data[_ngcontent-%COMP%]   .info-left[_ngcontent-%COMP%] {\n  min-width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  margin-right: 10px;\n  border-radius: 50%;\n  color: #fff;\n}\n\n.info-widget-data[_ngcontent-%COMP%]   .info-left.email-bg[_ngcontent-%COMP%] {\n  background-color: #aa8ddf;\n}\n\n.info-widget-data[_ngcontent-%COMP%]   .info-left.project-bg[_ngcontent-%COMP%] {\n  background-color: #0bc1a8;\n}\n\n.info-widget-data[_ngcontent-%COMP%]   .info-left.user-bg[_ngcontent-%COMP%] {\n  background-color: #fbbe0e;\n}\n\n.info-widget-data[_ngcontent-%COMP%]   .info-right[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n\n.info-widget-data[_ngcontent-%COMP%]   .info-right[_ngcontent-%COMP%]   .info-count[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: bold;\n}\n\n.info-widget-data[_ngcontent-%COMP%]   .info-right[_ngcontent-%COMP%]   .info-count[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  font-size: 18px;\n  color: #000;\n}\n\n.info-widget-data[_ngcontent-%COMP%]   .info-right[_ngcontent-%COMP%]   .info-below[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.open-projects-widget[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 3px;\n  padding: 10px 15px;\n  font-size: 14px;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   .open-projects-widget-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   .open-projects-widget-header[_ngcontent-%COMP%]   .open-projects-widget-header-left[_ngcontent-%COMP%]   .open-projects-widget-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   .open-projects-widget-header[_ngcontent-%COMP%]   .open-projects-widget-header-left[_ngcontent-%COMP%]   .open-projects-widget-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #fb668e;\n  font-size: 14px;\n  color: #fff;\n  border-radius: 5px;\n  padding: 0 5px;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   .open-projects-widget-header[_ngcontent-%COMP%]   .open-projects-widget-header-left[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   .open-projects-widget-header[_ngcontent-%COMP%]   .open-projects-widget-header-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  justify-content: space-between;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #f9f9f9;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #a889e7;\n  font-size: 24px;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.open-projects-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.chart-widget[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #fff;\n}\n\n.chart-widget[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.chart-widget[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-header-left[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 0;\n}\n\n.chart-widget[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-header-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.user-login[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.user-pic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 5px;\n}\n\n.user-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n\n.user-login-info[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.user-login-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n\n.user-login-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  color: #4c8e68;\n  font-size: 14px;\n}\n\n.user-login-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.td-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  margin: 5px 0 0;\n  font-size: 16px;\n}\n\n.menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sb-nav-link-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.count[_ngcontent-%COMP%] {\n  background-color: #f4c20b;\n  padding: 2px 7px;\n  border-radius: 50%;\n  font-size: 12px;\n  color: #fff;\n  margin-right: 8px;\n}\n\n.kit-count[_ngcontent-%COMP%] {\n  background-color: #c596fe;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-size: 12px;\n  color: #fff;\n  margin-right: 8px;\n}\n\n.page-count[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-right: 7px;\n}\n\n.new[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-right: 7px;\n}\n\n.customScroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.3em;\n}\n\n.customScroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.customScroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n\n.breadcrumb-right[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.app-settings[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 75px;\n  right: 0;\n  z-index: 9;\n  background-color: #fff;\n}\n\n.app-settings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  border: 1px solid #f8f8f8;\n}\n\n.app-settings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-bottom: 1px solid #f8f8f8;\n}\n\n.app-settings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.app-settings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHJhamFcXGFuZ3VsYXItdGVzdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQU1FLGFBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBRERFO0VBQ0UsVUFBQTtBQ0dKOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7QUNJRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNJRjs7QURERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZFO0VBQ0UseUJBQUE7QUNJSjs7QUREQTtFQUNFLGFBQUE7QUNJRjs7QURGQTtFQUNFLG9CQUFBO0FDS0Y7O0FESEE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLDBCQUFBO0FDT0Y7O0FETEE7RUFDRSxxQkFBQTtBQ1FGOztBRE5BO0VBQ0UsY0FBQTtBQ1NGOztBRE5BO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQ1NGOztFRFBBO0lBQ0UsY0FBQTtJQUNBLG9DQUFBO0lBQ0EsbUJBQUE7RUNVRjs7RURQQTtJQUNFLDZCQUFBO0VDVUY7O0VEUkE7SUFDRSxtQkFBQTtFQ1dGOztFRFRBO0lBQ0UsYUFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRSxhQUFBO0FDWUY7O0FEVkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNhRjs7QURYQTtFQUNFLGlCQUFBO0FDY0Y7O0FEWkE7RUFDRSxnQkFBQTtBQ2VGOztBRGJBO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0FDZ0JGOztBRGJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ2lCRjs7QURmQTtFQUNFLFlBQUE7QUNrQkY7O0FEZkE7RUFDRSxnQkFBQTtBQ2tCRjs7QURmQTs7RUFFRSxvQkFBQTtBQ2tCRjs7QURmQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDa0JGOztBRGhCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ21CRjs7QURqQkE7RUFDRSwrQkFBQTtBQ29CRjs7QURsQkE7RUFDRSxjQUFBO0FDcUJGOztBRGxCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ3FCRjs7QURuQkE7RUFDRSxZQUFBO0FDc0JGOztBRHBCQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUN1QkY7O0FEckJBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUN3QkY7O0FEdEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDeUJGOztBRHZCQTtFQUNFLGlCQUFBO0FDMEJGOztBRHhCQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQzJCRjs7QUR6QkE7RUFDRSx5QkFBQTtBQzRCRjs7QUQxQkE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FDNkJGOztBRDNCQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FDOEJGOztBRDNCQTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7QUM4QkY7O0FENUJBO0VBQ0UsK0JBQUE7QUMrQkY7O0FEN0JBO0VBQ0UsK0JBQUE7QUNnQ0Y7O0FEOUJBO0VBQ0UsK0JBQUE7QUNpQ0Y7O0FEL0JBO0VBQ0UsZ0NBQUE7QUNrQ0Y7O0FEaENBO0VBQ0UsV0FBQTtBQ21DRjs7QURqQ0E7RUFDRSxXQUFBO0FDb0NGOztBRGxDQTtFQUNFLFdBQUE7QUNxQ0Y7O0FEbkNBO0VBQ0UseUJBQUE7QUNzQ0Y7O0FEbkNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDc0NGOztBRHBDQTtFQUNFLGNBQUE7QUN1Q0Y7O0FEckNBO0VBQ0UsY0FBQTtBQ3dDRjs7QUR0Q0E7RUFDRSxjQUFBO0FDeUNGOztBRHZDQTtFQUNFLGNBQUE7QUMwQ0Y7O0FEeENBO0VBQ0UsY0FBQTtBQzJDRjs7QUR6Q0E7RUFDRSxjQUFBO0FDNENGOztBRDFDQTtFQUNFLGNBQUE7QUM2Q0Y7O0FEM0NBO0VBQ0UseUJBQUE7QUM4Q0Y7O0FENUNBO0VBQ0UsZ0JBQUE7QUMrQ0Y7O0FENUNBO0VBQ0Usa0JBQUE7QUMrQ0Y7O0FEOUNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDZ0RKOztBRDVDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUMrQ0o7O0FENUNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDK0NGOztBRDlDRTtFQUNFLGlCQUFBO0FDZ0RKOztBRC9DSTtFQUNFLFdBQUE7QUNpRE47O0FEM0NJO0VBQ0Usa0JBQUE7QUM4Q047O0FEM0NFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQzZDSjs7QUQxQ0E7RUFDRSxhQUFBO0FDNkNGOztBRDVDRTtFQUNFLFdBQUE7QUM4Q0o7O0FEM0NBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUM4Q0Y7O0FEN0NFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDK0NKOztBRDlDSTtFQUNFLHlCQUFBO0FDZ0ROOztBRDlDSTtFQUNFLHlCQUFBO0FDZ0ROOztBRDlDSTtFQUNFLHlCQUFBO0FDZ0ROOztBRDdDRTtFQUNFLGlCQUFBO0FDK0NKOztBRDlDSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDZ0ROOztBRC9DTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNpRFI7O0FEOUNJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNnRE47O0FENUNBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQytDRjs7QUQ5Q0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDZ0RKOztBRDlDTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ2dEUjs7QUQvQ1E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDaURWOztBRDlDTTtFQUNFLGNBQUE7QUNnRFI7O0FENUNNO0VBQ0Usa0JBQUE7QUM4Q1I7O0FEMUNFO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQzRDSjs7QUQzQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQzZDTjs7QUQ1Q007RUFDRSxtQkFBQTtBQzhDUjs7QUQ1Q007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQzhDUjs7QUQ1Q007RUFDRSxPQUFBO0FDOENSOztBRDdDUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDK0NWOztBRDdDUTtFQUNFLHlCQUFBO0FDK0NWOztBRHpDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUM0Q0Y7O0FEM0NFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUM2Q0o7O0FEM0NNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDNkNSOztBRDNDTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQzZDUjs7QUR4Q0E7RUFDRSxhQUFBO0FDMkNGOztBRHpDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUM0Q0Y7O0FEMUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUM0Q0o7O0FEekNBO0VBQ0UsaUJBQUE7QUM0Q0Y7O0FEM0NFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUM2Q0o7O0FEM0NFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUM2Q0o7O0FENUNJO0VBQ0Usa0JBQUE7QUM4Q047O0FEMUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDNkNGOztBRDNDQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUM4Q0Y7O0FENUNJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQzhDTjs7QUQzQ007RUFDRSxrQkFBQTtBQzZDUjs7QUR4Q0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDMkNGOztBRHpDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUM0Q0Y7O0FEMUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQzZDRjs7QUQzQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDOENGOztBRDVDQTtFQUNFLFlBQUE7QUMrQ0Y7O0FEN0NBO0VBRUUsNENBQUE7QUNnREY7O0FEOUNBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtBQ2lERjs7QUQvQ0E7RUFDRSxpQkFBQTtBQ2tERjs7QURoREE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNtREY7O0FEbERFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FDb0RKOztBRG5ESTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7QUNxRE47O0FEcERNO0VBQ0UsbUJBQUE7QUNzRFI7O0FEcERNO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FDc0RSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4ubG9nb3tcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDIuNXJlbSAwLjc1cmVtIDFyZW07XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogNTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDk7XHJcbn1cclxuLmJyZWFkY3J1bWItbGVmdCB7XHJcbiAgaDUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxufVxyXG4uYnJlYWRjcnVtYi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxufVxyXG4uYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGNvbnRlbnQ6IFwiL1wiO1xyXG59XHJcbi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOmhvdmVyOjpiZWZvcmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOmhvdmVyOjpiZWZvcmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X25hdiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICB9XHJcblxyXG4gIC5zYi1zaWRlbmF2LXRvZ2dsZWQgI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfbmF2IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1cHgpO1xyXG4gIH1cclxuICAuc2Itc2lkZW5hdi10b2dnbGVkICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcclxuICB9XHJcbiAgLnNiLXNpZGVuYXYtdG9nZ2xlZCAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9jb250ZW50OmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4uc2ItbmF2LWZpeGVkIC5zYi10b3BuYXYge1xyXG4gIHotaW5kZXg6IDEwMzk7XHJcbn1cclxuLnNiLW5hdi1maXhlZCAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9uYXYge1xyXG4gIHdpZHRoOiAyMjVweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDEwMzg7XHJcbn1cclxuLnNiLW5hdi1maXhlZCAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9uYXYgLnNiLXNpZGVuYXYge1xyXG4gIHBhZGRpbmctdG9wOiA1NnB4O1xyXG59XHJcbi5zYi1uYXYtZml4ZWQgI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfbmF2IC5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLnNiLW5hdi1maXhlZCAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9jb250ZW50IHtcclxuICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gIHRvcDogNTZweDtcclxufVxyXG5cclxuI2xheW91dEVycm9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuI2xheW91dEVycm9yICNsYXlvdXRFcnJvcl9jb250ZW50IHtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcbiNsYXlvdXRFcnJvciAjbGF5b3V0RXJyb3JfZm9vdGVyIHtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5pbWctZXJyb3Ige1xyXG4gIG1heC13aWR0aDogMjByZW07XHJcbn1cclxuXHJcbi5uYXYgLm5hdi1saW5rIC5zYi1uYXYtbGluay1pY29uLFxyXG4uc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayAuc2ItbmF2LWxpbmstaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5zYi10b3BuYXYge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgei1pbmRleDogMTAzOTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uc2ItdG9wbmF2IC5uYXZiYXItYnJhbmQge1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmbGV4OiAxO1xyXG59XHJcbi5zYi10b3BuYXYubmF2YmFyLWRhcmsgI3NpZGViYXJUb2dnbGUge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuLnNiLXRvcG5hdi5uYXZiYXItbGlnaHQgI3NpZGViYXJUb2dnbGUge1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG59XHJcblxyXG4uc2Itc2lkZW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1tZW51IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuLnNiLXNpZGVuYXYgLnNiLXNpZGVuYXYtbWVudSAubmF2IHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiAuc2Itc2lkZW5hdi1tZW51LWhlYWRpbmcge1xyXG4gIHBhZGRpbmc6IDEuNzVyZW0gMXJlbSAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiAubmF2LWxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnNiLXNpZGVuYXYgLnNiLXNpZGVuYXYtbWVudSAubmF2IC5uYXYtbGluayAuc2ItbmF2LWxpbmstaWNvbiB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLnNiLXNpZGVuYXYgLnNiLXNpZGVuYXYtbWVudSAubmF2IC5uYXYtbGluayAuc2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvdyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlO1xyXG59XHJcbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiAubmF2LWxpbmsuY29sbGFwc2VkIC5zYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG59XHJcbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiAuc2Itc2lkZW5hdi1tZW51LW5lc3RlZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LWZvb3RlciB7XHJcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1YjViNWI7XHJcbn1cclxuXHJcbi5zYi1zaWRlbmF2LWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDNlNGU7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxufVxyXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLnNiLXNpZGVuYXYtbWVudS1oZWFkaW5nIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG59XHJcbi5zYi1zaWRlbmF2LWRhcmsgLnNiLXNpZGVuYXYtbWVudSAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn1cclxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayAuc2ItbmF2LWxpbmstaWNvbiB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rIC5zYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93IHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluay5hY3RpdmUgLnNiLW5hdi1saW5rLWljb24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zYi1zaWRlbmF2LWRhcmsgLnNiLXNpZGVuYXYtZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzZTRlO1xyXG59XHJcblxyXG4uc2Itc2lkZW5hdi1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG4uc2Itc2lkZW5hdi1saWdodCAuc2Itc2lkZW5hdi1tZW51IC5zYi1zaWRlbmF2LW1lbnUtaGVhZGluZyB7XHJcbiAgY29sb3I6ICNhZGI1YmQ7XHJcbn1cclxuLnNiLXNpZGVuYXYtbGlnaHQgLnNiLXNpZGVuYXYtbWVudSAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG59XHJcbi5zYi1zaWRlbmF2LWxpZ2h0IC5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rIC5zYi1uYXYtbGluay1pY29uIHtcclxuICBjb2xvcjogI2FkYjViZDtcclxufVxyXG4uc2Itc2lkZW5hdi1saWdodCAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayAuc2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvdyB7XHJcbiAgY29sb3I6ICNhZGI1YmQ7XHJcbn1cclxuLnNiLXNpZGVuYXYtbGlnaHQgLnNiLXNpZGVuYXYtbWVudSAubmF2LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcbi5zYi1zaWRlbmF2LWxpZ2h0IC5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuLnNiLXNpZGVuYXYtbGlnaHQgLnNiLXNpZGVuYXYtbWVudSAubmF2LWxpbmsuYWN0aXZlIC5zYi1uYXYtbGluay1pY29uIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG4uc2Itc2lkZW5hdi1saWdodCAuc2Itc2lkZW5hdi1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbn1cclxuLnNiLXNpZGVuYXYtbWVudSB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICByaWdodDogLTI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliZTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbn1cclxuLnVzZXIge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuLnByb2ZpbGUtdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mb3JtIHtcclxuICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIH1cclxufVxyXG4ubmF2YmFyLWxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLmJ0bi1saW5rIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG4uaW5mby13aWRnZXQtZGF0YSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLmluZm8tbGVmdCB7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAmLmVtYWlsLWJnIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhOGRkZjtcclxuICAgIH1cclxuICAgICYucHJvamVjdC1iZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYmMxYTg7XHJcbiAgICB9XHJcbiAgICAmLnVzZXItYmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiZTBlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5mby1yaWdodCB7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIC5pbmZvLWNvdW50IHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgYiB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluZm8tYmVsb3cge1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ub3Blbi1wcm9qZWN0cy13aWRnZXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLm9wZW4tcHJvamVjdHMtd2lkZ2V0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAub3Blbi1wcm9qZWN0cy13aWRnZXQtaGVhZGVyLWxlZnQge1xyXG4gICAgICAub3Blbi1wcm9qZWN0cy13aWRnZXQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjY2OGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc3ViLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI2IzYjNiMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9wZW4tcHJvamVjdHMtd2lkZ2V0LWhlYWRlci1yaWdodCB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOWY5Zjk7XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuc3F1YXJlIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTg4OWU3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2plY3QtaW5mbyB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY2hhcnQtd2lkZ2V0IHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAuY2hhcnQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmNoYXJ0LWhlYWRlci1sZWZ0IHtcclxuICAgICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi51c2VyLWxvZ2luIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi51c2VyLXBpYyB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuLnVzZXItbG9naW4taW5mbyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgaDUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAuc3RhdHVzIHtcclxuICAgIGNvbG9yOiAjNGM4ZTY4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRkLWN1c3RvbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tZW51LWxpc3R7XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpe1xyXG4gICAgaDZ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgICBtYXJnaW46IDVweCAwIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5zYi1uYXYtbGluay1pY29ue1xyXG4gICAgICBpe1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY291bnR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YzIwYjtcclxuICBwYWRkaW5nOiAycHggN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmtpdC1jb3VudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU5NmZlO1xyXG4gIHBhZGRpbmc6IDJweCA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4ucGFnZS1jb3VudHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbn1cclxuLm5ld3tcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbn1cclxuLmN1c3RvbVNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwLjNlbTtcclxufVxyXG4uY3VzdG9tU2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4uY3VzdG9tU2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbiAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxufVxyXG4uYnJlYWRjcnVtYi1yaWdodHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYXBwLXNldHRpbmdze1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDc1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOGY4O1xyXG4gICAgbGl7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjhmODtcclxuICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLm5hdmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMi41cmVtIDAuNzVyZW0gMXJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDU2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5icmVhZGNydW1iLWxlZnQgaDUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uYnJlYWRjcnVtYi1sZWZ0IHNwYW4ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgY29udGVudDogXCIvXCI7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOmhvdmVyOjpiZWZvcmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06aG92ZXI6OmJlZm9yZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X25hdiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjE1cyBlYXNlLWluLW91dDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xuICB9XG5cbiAgLnNiLXNpZGVuYXYtdG9nZ2xlZCAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9uYXYge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1cHgpO1xuICB9XG5cbiAgLnNiLXNpZGVuYXYtdG9nZ2xlZCAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogLTIyNXB4O1xuICB9XG5cbiAgLnNiLXNpZGVuYXYtdG9nZ2xlZCAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9jb250ZW50OmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnNiLW5hdi1maXhlZCAuc2ItdG9wbmF2IHtcbiAgei1pbmRleDogMTAzOTtcbn1cblxuLnNiLW5hdi1maXhlZCAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9uYXYge1xuICB3aWR0aDogMjI1cHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDEwMzg7XG59XG5cbi5zYi1uYXYtZml4ZWQgI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfbmF2IC5zYi1zaWRlbmF2IHtcbiAgcGFkZGluZy10b3A6IDU2cHg7XG59XG5cbi5zYi1uYXYtZml4ZWQgI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfbmF2IC5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc2ItbmF2LWZpeGVkICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xuICB0b3A6IDU2cHg7XG59XG5cbiNsYXlvdXRFcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jbGF5b3V0RXJyb3IgI2xheW91dEVycm9yX2NvbnRlbnQge1xuICBtaW4td2lkdGg6IDA7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuI2xheW91dEVycm9yICNsYXlvdXRFcnJvcl9mb290ZXIge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5pbWctZXJyb3Ige1xuICBtYXgtd2lkdGg6IDIwcmVtO1xufVxuXG4ubmF2IC5uYXYtbGluayAuc2ItbmF2LWxpbmstaWNvbixcbi5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rIC5zYi1uYXYtbGluay1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5zYi10b3BuYXYge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGhlaWdodDogNTZweDtcbiAgei1pbmRleDogMTAzOTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNiLXRvcG5hdiAubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW46IDA7XG4gIGZsZXg6IDE7XG59XG5cbi5zYi10b3BuYXYubmF2YmFyLWRhcmsgI3NpZGViYXJUb2dnbGUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4uc2ItdG9wbmF2Lm5hdmJhci1saWdodCAjc2lkZWJhclRvZ2dsZSB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4uc2Itc2lkZW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1tZW51IC5uYXYgLnNiLXNpZGVuYXYtbWVudS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMS43NXJlbSAxcmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiAubmF2LWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiAubmF2LWxpbmsgLnNiLW5hdi1saW5rLWljb24ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnNiLXNpZGVuYXYgLnNiLXNpZGVuYXYtbWVudSAubmF2IC5uYXYtbGluayAuc2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlO1xufVxuXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1tZW51IC5uYXYgLm5hdi1saW5rLmNvbGxhcHNlZCAuc2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvdyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiAuc2Itc2lkZW5hdi1tZW51LW5lc3RlZCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LWZvb3RlciB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1YjViNWI7XG59XG5cbi5zYi1zaWRlbmF2LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzZTRlO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLnNiLXNpZGVuYXYtbWVudS1oZWFkaW5nIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5zYi1zaWRlbmF2LWRhcmsgLnNiLXNpZGVuYXYtbWVudSAubmF2LWxpbmsgLnNiLW5hdi1saW5rLWljb24ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rIC5zYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93IHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi5zYi1zaWRlbmF2LWRhcmsgLnNiLXNpZGVuYXYtbWVudSAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluay5hY3RpdmUgLnNiLW5hdi1saW5rLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzZTRlO1xufVxuXG4uc2Itc2lkZW5hdi1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4uc2Itc2lkZW5hdi1saWdodCAuc2Itc2lkZW5hdi1tZW51IC5zYi1zaWRlbmF2LW1lbnUtaGVhZGluZyB7XG4gIGNvbG9yOiAjYWRiNWJkO1xufVxuXG4uc2Itc2lkZW5hdi1saWdodCAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4uc2Itc2lkZW5hdi1saWdodCAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayAuc2ItbmF2LWxpbmstaWNvbiB7XG4gIGNvbG9yOiAjYWRiNWJkO1xufVxuXG4uc2Itc2lkZW5hdi1saWdodCAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayAuc2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvdyB7XG4gIGNvbG9yOiAjYWRiNWJkO1xufVxuXG4uc2Itc2lkZW5hdi1saWdodCAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc2Itc2lkZW5hdi1saWdodCAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLnNiLXNpZGVuYXYtbGlnaHQgLnNiLXNpZGVuYXYtbWVudSAubmF2LWxpbmsuYWN0aXZlIC5zYi1uYXYtbGluay1pY29uIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5zYi1zaWRlbmF2LWxpZ2h0IC5zYi1zaWRlbmF2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbi5zYi1zaWRlbmF2LW1lbnUge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubm90aWZpY2F0aW9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ub3RpZmljYXRpb25zIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIHJpZ2h0OiAtMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YmUwMDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4udXNlciBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wcm9maWxlLXVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5wcm9maWxlLXVsIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ucHJvZmlsZS11bCBsaSBhIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmZvcm0gLmlucHV0LWdyb3VwIGlucHV0IHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuZm9ybSAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5uYXZiYXItbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmF2YmFyLWxlZnQgLmJ0bi1saW5rIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5pbmZvLXdpZGdldC1kYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmluZm8td2lkZ2V0LWRhdGEgLmluZm8tbGVmdCB7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmluZm8td2lkZ2V0LWRhdGEgLmluZm8tbGVmdC5lbWFpbC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYThkZGY7XG59XG4uaW5mby13aWRnZXQtZGF0YSAuaW5mby1sZWZ0LnByb2plY3QtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGJjMWE4O1xufVxuLmluZm8td2lkZ2V0LWRhdGEgLmluZm8tbGVmdC51c2VyLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmUwZTtcbn1cbi5pbmZvLXdpZGdldC1kYXRhIC5pbmZvLXJpZ2h0IHtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4uaW5mby13aWRnZXQtZGF0YSAuaW5mby1yaWdodCAuaW5mby1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5mby13aWRnZXQtZGF0YSAuaW5mby1yaWdodCAuaW5mby1jb3VudCBiIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmluZm8td2lkZ2V0LWRhdGEgLmluZm8tcmlnaHQgLmluZm8tYmVsb3cge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3Blbi1wcm9qZWN0cy13aWRnZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm9wZW4tcHJvamVjdHMtd2lkZ2V0IC5vcGVuLXByb2plY3RzLXdpZGdldC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ub3Blbi1wcm9qZWN0cy13aWRnZXQgLm9wZW4tcHJvamVjdHMtd2lkZ2V0LWhlYWRlciAub3Blbi1wcm9qZWN0cy13aWRnZXQtaGVhZGVyLWxlZnQgLm9wZW4tcHJvamVjdHMtd2lkZ2V0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5vcGVuLXByb2plY3RzLXdpZGdldCAub3Blbi1wcm9qZWN0cy13aWRnZXQtaGVhZGVyIC5vcGVuLXByb2plY3RzLXdpZGdldC1oZWFkZXItbGVmdCAub3Blbi1wcm9qZWN0cy13aWRnZXQtdGl0bGUgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjY2OGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4ub3Blbi1wcm9qZWN0cy13aWRnZXQgLm9wZW4tcHJvamVjdHMtd2lkZ2V0LWhlYWRlciAub3Blbi1wcm9qZWN0cy13aWRnZXQtaGVhZGVyLWxlZnQgLnN1Yi10aXRsZSB7XG4gIGNvbG9yOiAjYjNiM2IzO1xufVxuLm9wZW4tcHJvamVjdHMtd2lkZ2V0IC5vcGVuLXByb2plY3RzLXdpZGdldC1oZWFkZXIgLm9wZW4tcHJvamVjdHMtd2lkZ2V0LWhlYWRlci1yaWdodCBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm9wZW4tcHJvamVjdHMtd2lkZ2V0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLm9wZW4tcHJvamVjdHMtd2lkZ2V0IHVsIGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOWY5Zjk7XG59XG4ub3Blbi1wcm9qZWN0cy13aWRnZXQgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ub3Blbi1wcm9qZWN0cy13aWRnZXQgdWwgbGkgLnNxdWFyZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTg4OWU3O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ub3Blbi1wcm9qZWN0cy13aWRnZXQgdWwgbGkgLnByb2plY3QtaW5mbyB7XG4gIGZsZXg6IDE7XG59XG4ub3Blbi1wcm9qZWN0cy13aWRnZXQgdWwgbGkgLnByb2plY3QtaW5mbyBoNSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi5vcGVuLXByb2plY3RzLXdpZGdldCB1bCBsaSAucHJvamVjdC1pbmZvIHNwYW4ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY2hhcnQtd2lkZ2V0IHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNoYXJ0LXdpZGdldCAuY2hhcnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNoYXJ0LXdpZGdldCAuY2hhcnQtaGVhZGVyIC5jaGFydC1oZWFkZXItbGVmdCBoNSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jaGFydC13aWRnZXQgLmNoYXJ0LWhlYWRlciAuY2hhcnQtaGVhZGVyLWxlZnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnVzZXItbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udXNlci1waWMge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi51c2VyLXBpYyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlci1sb2dpbi1pbmZvIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4udXNlci1sb2dpbi1pbmZvIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udXNlci1sb2dpbi1pbmZvIC5zdGF0dXMge1xuICBjb2xvcjogIzRjOGU2ODtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnVzZXItbG9naW4taW5mbyAuc3RhdHVzIGkge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi50ZC1jdXN0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLm1lbnUtbGlzdCBsaSBoNiB7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBtYXJnaW46IDVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tZW51LWxpc3QgbGkgLnNiLW5hdi1saW5rLWljb24gaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YzIwYjtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmtpdC1jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNTk2ZmU7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5wYWdlLWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cblxuLm5ldyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG59XG5cbi5jdXN0b21TY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAuM2VtO1xufVxuXG4uY3VzdG9tU2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uY3VzdG9tU2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICBvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5O1xufVxuXG4uYnJlYWRjcnVtYi1yaWdodCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYXBwLXNldHRpbmdzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDc1cHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmFwcC1zZXR0aW5ncyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y4ZjhmODtcbn1cbi5hcHAtc2V0dGluZ3MgdWwgbGkge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY4Zjg7XG59XG4uYXBwLXNldHRpbmdzIHVsIGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmFwcC1zZXR0aW5ncyB1bCBsaS5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/__ivy_ngcc__/fesm2015/angular-highcharts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        angular_highcharts__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    angular_highcharts__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/test.service.ts":
/*!*********************************!*\
  !*** ./src/app/test.service.ts ***!
  \*********************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class TestService {
    constructor(_http) {
        this._http = _http;
        this.apiUrl = 'http://15.207.44.182:3000/api/master/testAPI';
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occured', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status} body was ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happend, please try again later');
    }
    extractData(res) {
        const body = res;
        return body || {};
    }
    getTestAPI() {
        return this._http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
}
TestService.ɵfac = function TestService_Factory(t) { return new (t || TestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TestService, factory: TestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\raja\angular-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map