(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(6);
	var app_routes_1 = __webpack_require__(7);
	var app_component_1 = __webpack_require__(57);
	var login_module_1 = __webpack_require__(61);
	var dashboard_module_1 = __webpack_require__(67);
	//import { SharedModule } from './shared/shared.module'
	var index_1 = __webpack_require__(44);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	        ],
	        providers: [
	            index_1.AuthGuard
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            router_1.RouterModule.forRoot(app_routes_1.routes),
	            //SharedModule.forRoot(),
	            dashboard_module_1.DashboardModule,
	            login_module_1.LoginModule
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(8);
	var index_2 = __webpack_require__(46);
	var login_component_1 = __webpack_require__(47);
	exports.routes = index_1.DashboardRoutes.concat(index_2.LoginRoutes, [
	    { path: '**', component: login_component_1.LoginComponent }
	]);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(9));
	__export(__webpack_require__(11));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	/**
	*	This class represents the lazy loaded DashboardComponent.
	*/
	var DashboardComponent = (function () {
	    function DashboardComponent() {
	    }
	    return DashboardComponent;
	}());
	DashboardComponent = __decorate([
	    core_1.Component({
	        selector: 'pop-dashboard',
	        template: __webpack_require__(10),
	    }),
	    __metadata("design:paramtypes", [])
	], DashboardComponent);
	exports.DashboardComponent = DashboardComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<!--<top-nav></top-nav>\r\n<sidebar-cmp></sidebar-cmp>\r\n<section class=\"main-container\" [ngClass]=\"{sidebarPushRight: isActive}\">\r\n    <router-outlet></router-outlet>\r\n</section>-->\r\n\r\n\r\n<div class=\"container-fluid main-page\">\r\n    <pop-header></pop-header>\r\n    <div class=\"menu-content\">\r\n        <div style=\"padding-top:60px;\"></div>\r\n        <pop-nav-menu></pop-nav-menu>\r\n    </div>\r\n    <div class=\"body-content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n<!--<pop-header></pop-header>\r\n<router-outlet></router-outlet>-->\r\n"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var overview_routes_1 = __webpack_require__(12);
	var campaign_routes_1 = __webpack_require__(20);
	var group_routes_1 = __webpack_require__(33);
	var my_campaign_routes_1 = __webpack_require__(38);
	var index_1 = __webpack_require__(8);
	var index_2 = __webpack_require__(44);
	exports.DashboardRoutes = [
	    { path: '', redirectTo: '/dashboard/overview', pathMatch: 'full' },
	    {
	        path: 'dashboard',
	        component: index_1.DashboardComponent,
	        children: overview_routes_1.OverviewRoutes.concat(campaign_routes_1.CampaignRoutes, group_routes_1.GroupRoutes, my_campaign_routes_1.MyCampaignRoutes),
	        canActivate: [index_2.AuthGuard]
	    }
	];


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(13);
	exports.OverviewRoutes = [
	    {
	        path: 'overview',
	        component: index_1.OverviewComponent
	    }
	];


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(14));
	__export(__webpack_require__(12));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var OverviewComponent = (function () {
	    function OverviewComponent() {
	    }
	    return OverviewComponent;
	}());
	OverviewComponent = __decorate([
	    core_1.Component({
	        selector: 'pop-overview',
	        template: __webpack_require__(15),
	        styles: [__webpack_require__(16).toString()],
	        animations: [
	            core_1.trigger('flyInOut', [
	                core_1.state('in', core_1.style({ opacity: 1, transform: 'translateY(0)' })),
	                core_1.transition('void => *', [
	                    core_1.style({
	                        opacity: 0,
	                        transform: 'translateY(100%)'
	                    }),
	                    core_1.animate('0.4s ease-in')
	                ]),
	                core_1.transition('* => void', [
	                    core_1.animate('0.2s 10 ease-out', core_1.style({
	                        opacity: 0,
	                        transform: 'translateY(-100%)'
	                    }))
	                ])
	            ])
	        ],
	    }),
	    __metadata("design:paramtypes", [])
	], OverviewComponent);
	exports.OverviewComponent = OverviewComponent;


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid\" [@flyInOut]=\"'in'\">\r\n    <h1>Overview</h1>\r\n    <i class=\"fa fa-meetup\" aria-hidden=\"true\"></i>\r\n    <!--carousel-->\r\n    <div class=\"content\">\r\n        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <!-- Indicators -->\r\n            <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n            <!-- Wrapper for slides -->\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"item active\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"thumbnail adjust1\">\r\n                                <div mobileHide=\"772\" class=\"col-md-2 col-sm-2 col-xs-12\">\r\n                                    <span class=\"fa-stack fa-4x\">\r\n                                        <i class=\"fa fa-square fa-stack-2x text-primary\"></i>\r\n                                        <i class=\"fa fa-html5 fa-stack-1x fa-inverse\" style=\"color:#FFC107\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"col-md-10 col-sm-10 col-xs-12\">\r\n                                    <div class=\"caption\">\r\n                                        <p class=\"text-info lead adjust2\">ASP.NET Core</p>\r\n                                        <p>\r\n                                            <span class=\"glyphicon glyphicon-thumbs-up\"></span> ASP.NET Core is a new open-source\r\n                                            and cross-platform framework for building modern cloud based internet connected\r\n                                            applications, such as web apps, IoT apps and mobile backends.\r\n                                        </p>\r\n                                        <blockquote class=\"adjust2\">\r\n                                            <p>Microsoft Corp.</p> <small><cite title=\"Source Title\"><i class=\"glyphicon glyphicon-globe\"></i> https://docs.asp.net/en/latest/</cite></small>\r\n                                        </blockquote>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"item\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"thumbnail adjust1\">\r\n                                <div mobileHide=\"772\" class=\"col-md-2 col-sm-2 col-xs-12\">\r\n                                    <span class=\"fa-stack fa-4x\">\r\n                                        <i class=\"fa fa-square fa-stack-2x text-primary\"></i>\r\n                                        <i class=\"fa fa-code fa-stack-1x fa-inverse\" style=\"color:#FFC107\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"col-md-10 col-sm-10 col-xs-12\">\r\n                                    <div class=\"caption\">\r\n                                        <p class=\"text-info lead adjust2\">Angular 2</p>\r\n                                        <p>\r\n                                            <span class=\"glyphicon glyphicon-thumbs-up\"></span> Learn one way to build applications\r\n                                            with Angular and reuse your code and abilities to build apps for any deployment\r\n                                            target. For web, mobile web, native mobile and native desktop.\r\n                                        </p>\r\n                                        <blockquote class=\"adjust2\">\r\n                                            <p>Google</p> <small><cite title=\"Source Title\"><i class=\"glyphicon glyphicon-globe\"></i>https://angular.io/</cite></small>\r\n                                        </blockquote>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"item\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"thumbnail adjust1\">\r\n                                <div mobileHide=\"772\" class=\"col-md-2 col-sm-2 col-xs-12\">\r\n                                    <span class=\"fa-stack fa-4x\">\r\n                                        <i class=\"fa fa-square fa-stack-2x text-primary\"></i>\r\n                                        <i class=\"fa fa-rss fa-stack-1x fa-inverse\" style=\"color:#FFC107\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"col-md-10 col-sm-10 col-xs-12\">\r\n                                    <div class=\"caption\">\r\n                                        <p class=\"text-info lead adjust2\">chsakell's Blog</p>\r\n                                        <p>\r\n                                            <span class=\"glyphicon glyphicon-thumbs-up\"></span> Anything around ASP.NET MVC,Web\r\n                                            API, WCF, Entity Framework & Angular.\r\n                                        </p>\r\n                                        <blockquote class=\"adjust2\">\r\n                                            <p>Chris Sakellarios</p> <small><cite title=\"Source Title\"><i class=\"glyphicon glyphicon-globe\"></i> https://chsakell.com</cite></small>\r\n                                        </blockquote>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Controls -->\r\n            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\"> <span class=\"glyphicon glyphicon-chevron-left\"></span> </a>\r\n            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\"> <span class=\"glyphicon glyphicon-chevron-right\"></span> </a>\r\n        </div>\r\n    </div>\r\n    <!--end carousel-->\r\n</div>\r\n"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./overview.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./overview.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var campaign_component_1 = __webpack_require__(21);
	exports.CampaignRoutes = [
	    {
	        path: 'campaign',
	        component: campaign_component_1.CampaignComponent
	    }
	];


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var campaign_service_1 = __webpack_require__(22);
	var CampaignComponent = (function () {
	    function CampaignComponent(CampaignService) {
	        this.CampaignService = CampaignService;
	        this.btn2Visible = true;
	        this.color = "#127bdc";
	        this.popAppTypes = [
	            { value: 'centerPopApp', display: 'Center PopApp' },
	            { value: 'pushPopApp', display: 'Push PopApp' },
	            { value: 'fullscreenPopApp', display: 'Full Screen PopApp' },
	            { value: 'notificationPopApp', display: 'Notification PopApp' },
	            { value: 'emails', display: 'Emails' }
	        ];
	    }
	    CampaignComponent.prototype.ngOnInit = function () {
	        this.campaign = {
	            button1Text: 'Button Text',
	            button2Text: 'Button Text',
	            bodyText: 'Body Text',
	            headerText: 'Header Text'
	        };
	    };
	    CampaignComponent.prototype.hideBtn = function () {
	        this.btn2Visible = !this.btn2Visible;
	    };
	    CampaignComponent.prototype.addBtn = function () {
	        this.btn2Visible = true;
	    };
	    CampaignComponent.prototype.eraseData = function () {
	        for (var prop in this.campaign) {
	            if (this.campaign.hasOwnProperty(prop)) {
	                delete this.campaign[prop];
	            }
	        }
	    };
	    CampaignComponent.prototype.saveCampaign = function () {
	        this.CampaignService
	            .createCampaign(this.campaign)
	            .subscribe(function (res) {
	            console.log(res);
	            if (res.status = 200) {
	                alert('status text: ' + res.statusText);
	            }
	            else {
	                alert('error: ' + res.statusText);
	            }
	        });
	    };
	    return CampaignComponent;
	}());
	CampaignComponent = __decorate([
	    core_1.Component({
	        selector: 'pop-campaign',
	        template: __webpack_require__(29),
	        styles: [__webpack_require__(30).toString()],
	    }),
	    __metadata("design:paramtypes", [campaign_service_1.CampaignService])
	], CampaignComponent);
	exports.CampaignComponent = CampaignComponent;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var api_1 = __webpack_require__(23);
	var CampaignService = (function () {
	    //private data: any = null
	    function CampaignService(api) {
	        this.api = api;
	        this.path = '/api/campaign/CreateCampaign';
	    }
	    CampaignService.prototype.createCampaign = function (data) {
	        console.log('campaignservice', data);
	        return this.api.post(this.path, data);
	    };
	    CampaignService.prototype.getCampaign = function (all) {
	        if (all === void 0) { all = false; }
	    };
	    CampaignService.prototype.deleteCampaign = function () {
	    };
	    return CampaignService;
	}());
	CampaignService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [api_1.ApiService])
	], CampaignService);
	exports.CampaignService = CampaignService;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(24);
	var Observable_1 = __webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	var ApiService = (function () {
	    //give me instance 
	    function ApiService(http) {
	        this.http = http;
	        this.headers = new http_1.Headers({
	            'Content-Type': 'application/json',
	            'Accept': 'application/json'
	        });
	        this.apiUrl = 'http://localhost:64971';
	    }
	    ApiService.prototype.getJson = function (response) {
	        return response.json();
	    };
	    ApiService.prototype.checkForErrors = function (response) {
	        if (response.status >= 200 && response.status <= 300) {
	            return response;
	        }
	        else {
	            var error = new Error(response.statusText);
	            error['response'] = response;
	            console.log(error);
	            throw error;
	        }
	    };
	    ApiService.prototype.get = function (path) {
	        return this.http.get("" + this.apiUrl + path, { headers: this.headers })
	            .map(this.checkForErrors)
	            .catch(function (err) { return Observable_1.Observable.throw(err); })
	            .map(this.getJson);
	    };
	    ApiService.prototype.post = function (path, data) {
	        console.log(JSON.stringify(data));
	        return this.http.post("" + this.apiUrl + path, JSON.stringify(data), { headers: this.headers })
	            .map(this.checkForErrors)
	            .catch(function (err) { return Observable_1.Observable.throw(err); });
	    };
	    ApiService.prototype.delete = function (path) {
	        return this.http.delete("" + this.apiUrl + path, { headers: this.headers })
	            .map(this.checkForErrors)
	            .catch(function (err) { return Observable_1.Observable.throw(err); })
	            .map(this.getJson);
	    };
	    ApiService.prototype.login = function (path, username, password) {
	        return this.http.post("" + this.apiUrl + path, JSON.stringify({ username: username, password: password }), { headers: this.headers })
	            .map(function (response) {
	            // login successful if there's a jwt token in the response
	            var user = response.json();
	            console.log(user);
	            if (user && user.token) {
	                // store user details and jwt token in local storage to keep user logged in between page refreshes
	                localStorage.setItem('currentUser', JSON.stringify(user));
	            }
	        });
	    };
	    return ApiService;
	}());
	ApiService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], ApiService);
	exports.ApiService = ApiService;


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Observable");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/observable/throw");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\r\n<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Campaign</a></li>\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Compose</a></li>\r\n    <li class=\"breadcrumb-item active\">Summary</li>\r\n</ol>\r\n    <pop-users-panel></pop-users-panel>\r\n    <div class=\"panel panel-default campaign-main-panel\">\r\n\r\n        <div class=\"panel-body\">\r\n            <h4 class=\"pull-left\">Name the campaign</h4>\r\n            <div class=\"clearfix\"></div>\r\n            <hr />\r\n            <div class=\"col-sm-12 campaign-name\">\r\n                <input type=\"text\" value=\"\" placeholder=\"Name\" />\r\n                <label> Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod</label>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <hr />\r\n            <h4>Choose the type of campaign</h4>\r\n            <hr />\r\n            <!--#region POPAPP TYPES-->\r\n            <div class=\"types\">\r\n                <div *ngFor=\"let type of popAppTypes\">\r\n\r\n                    <input type=\"radio\" name=\"type\" [value]=\"type.value\" [id]=\"type.value\" />\r\n\r\n                    <label attr.for=\"{{type.value}}\">\r\n                        <img src=\"../images/{{type.value}}.png\" alt=\"{{type.value}}\" />\r\n                        <p>{{type.display}}</p>\r\n                    </label>\r\n\r\n                </div>\r\n            </div>\r\n            <!--#endregion-->\r\n            <hr />\r\n            <h4>preview</h4>\r\n            <hr />\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <!--<span>Device:</span>-->\r\n                    <!--<button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"devices\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                        <span class=\"caret\"></span>\r\n                        {{btnText}}\r\n                    </button>\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"devices\" >\r\n                        <li *ngFor=\"let device of devices\"><a href=\"#\" (click)='changeDevice($event)'>{{popAppTypes.name}}</a></li>\r\n                    </ul>-->\r\n                    <div class=\"form-group\">\r\n                        <label for=\"deviceSelect\">Device:</label>\r\n                        <select class=\"form-control\" id=\"deviceSelect\">\r\n                            <option>iPhone</option>\r\n                            <option>Desctop</option>\r\n                            <option>iPAD</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"iphone\">\r\n                        <div>{{campaign.headerText}}</div>\r\n                        <div>{{campaign.bodyText}}</div>\r\n                        <div class=\"buttons\">\r\n                            <button *ngIf=\"campaign.button1Text\">{{campaign.button1Text}}</button>\r\n                            <button *ngIf=\"campaign.button2Text\">{{campaign.button2Text}}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--<form #editPopAppForm=\"ngForm\">\r\n\r\n                    <div class=\"alert alert-danger\" [hidden]=\"editPopAppForm.form.valid\">\r\n                        <ul *ngIf=\"creator.dirty && !creator.valid\">\r\n                            <li>Creator name is required <i>(5-50 characters)</i></li>\r\n                        </ul>\r\n                        <ul *ngIf=\"title.dirty && !title.valid\">\r\n                            <li *ngIf=\"title.errors.required\">Title is required</li>\r\n                            <li *ngIf=\"title.errors.pattern\">Title should have 5-20 characters</li>\r\n                        </ul>\r\n                        <ul *ngIf=\"description.dirty && !description.valid\">\r\n                            <li *ngIf=\"description.errors.required\">Description is required</li>\r\n                            <li *ngIf=\"description.errors.pattern\">Description should have at least 10 characters</li>\r\n                        </ul>\r\n                        <ul *ngIf=\"location.dirty && !location.valid\">\r\n                            <li *ngIf=\"location.errors.required\">Location is required</li>\r\n                        </ul>\r\n                    </div>-->\r\n\r\n                <div class=\"col-sm-8 popapp-editor\">\r\n                    <!--PICTURE-->\r\n                    <div class=\"col-sm-4\">\r\n                        <h4>picture</h4>\r\n                    </div>\r\n                    <!--#region ICONS-->\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"row icons-container\">\r\n                            <ul class=\"pull-left\">\r\n                                <li><label html.for=\"asdasd\">pick an icon</label><br /><input type=\"radio\" name=\"iconsGroup\" id=\"asdasd\" /></li>\r\n                                <li><label>upload an image</label><br /><input type=\"radio\" name=\"iconsGroup\" /></li>\r\n                            </ul>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                        <ul class=\"icons-list\">\r\n                            <li><span class='glyphicon glyphicon-lock'></span></li>\r\n                            <li><span class='glyphicon glyphicon-piggy-bank'></span></li>\r\n                            <li><span class='glyphicon glyphicon-lock'></span></li>\r\n                            <li><span class='glyphicon glyphicon-piggy-bank'></span></li>\r\n                            <li><span class='glyphicon glyphicon-lock'></span></li>\r\n                            <li><span class='glyphicon glyphicon-piggy-bank'></span></li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <!--#endregion-->\r\n                    <hr style=\"border-top: dashed 1px #eee;\" />\r\n                    <!--#region BACKGROUND COLOR-->\r\n                    <div class=\"col-sm-4\">\r\n                        <h4>background color</h4>\r\n                    </div>\r\n                    <div class=\"col-sm-8\">\r\n                        Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod,\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <!--#endregion-->\r\n                    <hr style=\"border-top: dashed 1px #eee;\" />\r\n                    <!--#region TEXT ALIGNMENT-->\r\n                    <div class=\"col-sm-4\">\r\n                        <h4>text alignment</h4>\r\n                    </div>\r\n                    <div class=\"col-sm-8\">\r\n                        <h4>\r\n                            <span class=\"glyphicon glyphicon-align-left\"></span>\r\n                            <span class=\"glyphicon glyphicon-align-center\"></span>\r\n                            <span class=\"glyphicon glyphicon-align-right\"></span>\r\n                        </h4>\r\n\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <!--#endregion-->\r\n                    <hr style=\"border-top: dashed 1px #eee;\" />\r\n\r\n\r\n\r\n                    <!--#region HEADER-->\r\n                    <div class=\"col-sm-4\">\r\n                        <h4>header</h4>\r\n                    </div>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"col-xs-6 nopadding\">\r\n                            <textarea [(ngModel)]=\"campaign.headerText\" class=\"form-control\" placeholer=\"Message\" rows=\"3\" style=\"max-width:435px;width:200px;\"></textarea>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <p>opacity</p>\r\n                            <p>font</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <!--#endregion-->\r\n                    <hr style=\"border-top: dashed 1px #eee;\" />\r\n                    <!--#region BODY  -->\r\n                    <div class=\"col-sm-4\">\r\n                        <h4>body</h4>\r\n                    </div>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"col-xs-6 nopadding\">\r\n                            <textarea [(ngModel)]=\"campaign.bodyText\" class=\"form-control\" placeholer=\"Message\" rows=\"3\" style=\"max-width:435px;width:200px;\"></textarea>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <p>opacity</p>\r\n                            <p>font</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <!--#endregion -->\r\n                    <hr style=\"border-top: dashed 1px #eee;\" />\r\n                    <!--#region BUTTON 1-->\r\n                    <div class=\"col-sm-4\">\r\n                        <h4>button 1 text</h4>\r\n                    </div>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"col-xs-6 nopadding\">\r\n                            <input [(ngModel)]=\"campaign.button1Text\" class=\"form-control\" style=\"max-width:435px;width:200px;\" id=\"ex1\" type=\"text\">\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <p>opacity</p>\r\n                            <p>font</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"col-sm-4\">\r\n                        <h4>button 1 background</h4>\r\n                    </div>\r\n                    <div class=\"col-sm-8\">\r\n                        <span>Opacity:</span>\r\n                        <input class=\"form-control\" type=\"text\" value=\"\" maxlength=\"3\" style=\"width:40px;display:inline\" placeholder=\"%\" />\r\n                        <span>%</span>\r\n                        <span>Color:</span>\r\n                        <input class=\"form-control\" type=\"text\" value=\"\" maxlength=\"7\" style=\"width:80px;display:inline\" placeholder=\"#000000\" />\r\n                        <span>Stroke:</span>\r\n                        <input class=\"form-control\" type=\"text\" value=\"\" maxlength=\"3\" style=\"width:40px;display:inline\" placeholder=\"\" />\r\n                        <span (click)=\"addBtn()\" class=\"pull-right add-btn\">ADD BUTTON</span>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <!--#endregion -->\r\n                    <hr style=\"border-top: dashed 1px #eee;\" />\r\n                    <!--#region BUTTON 2-->\r\n                    <div *ngIf=\"btn2Visible\">\r\n                        <div class=\"col-sm-4\">\r\n                            <h4>button 2 text</h4>\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"col-xs-6 nopadding\">\r\n                                <input [(ngModel)]=\"campaign.button2Text\" class=\"form-control\" style=\"max-width:435px;width:200px;\" id=\"ex1\" type=\"text\">\r\n                            </div>\r\n                            <div class=\"col-xs-6\">\r\n                                <p>opacity</p>\r\n                                <p>font</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                        <div class=\"col-sm-4\">\r\n                            <h4>button 2 background</h4>\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <span>Opacity:</span>\r\n                            <input class=\"form-control\" type=\"text\" value=\"\" maxlength=\"3\" style=\"width:40px;display:inline\" placeholder=\"%\" />\r\n                            <span>%</span>\r\n                            <span>Color:</span>\r\n                            <input class=\"form-control\" type=\"text\" value=\"\" maxlength=\"7\" style=\"width:80px;display:inline\" placeholder=\"#000000\" />\r\n                            <span>Stroke:</span>\r\n                            <input class=\"form-control\" type=\"text\" value=\"\" maxlength=\"3\" style=\"width:40px;display:inline\" placeholder=\"\" />\r\n                            <span (click)=\"hideBtn()\" class=\"pull-right add-btn\">REMOVE BUTTON</span>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                        <hr style=\"border-top: dashed 1px #eee;\" />\r\n                    </div>\r\n                    <!--#endregion-->\r\n\r\n                </div>\r\n                <!--</form>-->\r\n            </div>\r\n            <br />\r\n            <br />\r\n        </div>\r\n    </div>\r\n\r\n    <!--#region Modal-->\r\n    <!--<button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#confirmModal\">Open Modal</button>-->\r\n    <!--<div id=\"confirmModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Header: {{campaign.headerText}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p>Body: {{campaign.bodyText}}</p>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"saveCampaign()\">Send?</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>-->\r\n    <!--#endregion-->\r\n    <!--#region CANCEL SAVE BUTTONS-->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"pull-right\">\r\n                <button (click)=\"eraseData()\" class=\"btnCancel\" type=\"button\">cancel</button>\r\n                <button (click)=\"saveCampaign()\" class=\"btnSave\" type=\"button\">save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--#endregion-->\r\n    <br />\r\n\r\n\r\n\r\n"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./campaign.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./campaign.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, "h4 {\n  text-transform: uppercase;\n  font-size: 1.1em; }\n\n.campaign-main-panel {\n  background: #ffffff;\n  box-shadow: 0 3px 8px 0px rgba(0, 0, 0, 0.25);\n  box-sizing: border-box; }\n  .campaign-main-panel .iphone {\n    background: url(" + __webpack_require__(32) + ") no-repeat center center;\n    width: 300px;\n    height: 600px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n    .campaign-main-panel .iphone .buttons {\n      display: inline-block; }\n\n/*NAME THE CAMPAIGN*/\nlabel {\n  font-weight: normal; }\n\n/*CHOOSE THE TYPE OF CAMPAIGN*/\n.types {\n  display: inline-flex;\n  flex-wrap: wrap; }\n\n.types > div {\n  text-align: center;\n  align-self: flex-end;\n  padding-left: 20px; }\n\n/*.types > div label, .types > div input {\r\n            display: block;\r\n            margin: 0 auto;\r\n        }*/\n/*PREVIEW*/\n#deviceSelect {\n  max-width: 100px;\n  display: inline-block; }\n\n/*TODO: MOVE*/\n.icons-container ul {\n  text-align: center; }\n\n.icons-container ul li {\n  display: inline-block; }\n\nul.icons-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\nul.icons-list li {\n  display: inline;\n  font-size: 1.5em; }\n\n.nopadding {\n  padding: 0 !important;\n  margin: 0 !important; }\n\n.add-btn {\n  vertical-align: middle;\n  line-height: 34px;\n  color: #aeaeae;\n  text-decoration: underline;\n  font-size: 0.8em;\n  cursor: pointer; }\n\n.add-btn:hover {\n  color: #ee264d; }\n\n.btnCancel {\n  background: #ebebeb;\n  border: 1px solid #ee264d;\n  color: #ee264d;\n  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25); }\n\n.btnSave {\n  background: #ee264d;\n  border: 1px solid #ee264d;\n  color: #ffffff;\n  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25); }\n\n.btnCancel, .btnSave {\n  padding: 2px 45px;\n  font-size: 1.4em;\n  border-radius: 25px;\n  width: 150px; }\n\n/*breadcrump*/\n.breadcrumb > li + li:before {\n  content: \"\\2192\";\n  color: #777; }\n\n.breadcrumb {\n  background: none; }\n\n.breadcrumb li a {\n  color: #777; }\n\n.breadcrumb-item.active {\n  color: #ee264d; }\n\n/*end breadcrump*/\n.glyphicon:hover {\n  color: #ee264d;\n  cursor: pointer; }\n\n/*.align-icons {\r\n    display:flex;\r\n    justify-content:flex-start;\r\n    align-items:center;\r\n}*/\n/*#region radio types*/\n.types label {\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n  padding-left: 15px;\n  margin-right: 15px;\n  font-size: 13px; }\n\n.types input[type=radio] {\n  display: none; }\n\n.types label:before {\n  content: \"\";\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  position: absolute;\n  left: 50%;\n  bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ee264d;\n  border-radius: 50%; }\n\n.types input[type=radio]:checked + label:before {\n  background-color: #ee264d; }\n\n.types input[type=radio]:checked + label {\n  color: #ee264d; }\n\n/*#endregion*/\n/*#region group name*/\n.campaign-name input {\n  border: none;\n  border-bottom: 1px solid #000;\n  color: #85cec5; }\n\n.campaign-name input:focus {\n  outline: none; }\n\n/*#endregion*/\n", ""]);
	
	// exports


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAAJWCAYAAABlHVNJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNjU5NTU0NzJGQzFFNjExOTMyN0VERENCQTc0NThDMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RThEQ0VFNkMxMzkxMUU2QjAxRUUyQjE5OTBGMEUwQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RThEQ0VFNUMxMzkxMUU2QjAxRUUyQjE5OTBGMEUwQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNjU5NTU0NzJGQzFFNjExOTMyN0VERENCQTc0NThDMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNjU5NTU0NzJGQzFFNjExOTMyN0VERENCQTc0NThDMSIvPiA8L3JkZjpEZXNjcmlwdGlv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"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var group_component_1 = __webpack_require__(34);
	exports.GroupRoutes = [
	    {
	        path: 'group',
	        component: group_component_1.GroupComponent
	    }
	];


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var GroupComponent = (function () {
	    function GroupComponent() {
	        this.devices = ['Desctop', 'Android', 'IOS'];
	        this.ddlTriggers = [
	            'Country',
	            'Language',
	            'Registration date',
	            'Open trade on',
	            'Balance between',
	            'Volume between',
	            'Won in a row',
	            'Loss in a row',
	            'Age',
	            'Balance above',
	            'Volume above',
	            'Total open trade',
	            'More then 50% trade',
	            'Number of deposits',
	            'Deposit amount',
	            'PNL between',
	            'Copy specific trader',
	            'Copy specific asset',
	            'Trade more at night',
	            'Trade more in the ',
	            'Used custom feature',
	            'Was on custom page',
	            'Clicked custom button',
	            'One trade amount is',
	            'All users'
	        ];
	        this.hideElement = false;
	    }
	    GroupComponent.prototype.toggleElement = function (e) {
	        e.srcElement.parentElement.parentElement.parentElement.style.display = "none";
	    };
	    return GroupComponent;
	}());
	GroupComponent = __decorate([
	    core_1.Component({
	        selector: 'pop-group',
	        template: __webpack_require__(35),
	        styles: [__webpack_require__(36).toString()]
	    }),
	    __metadata("design:paramtypes", [])
	], GroupComponent);
	exports.GroupComponent = GroupComponent;


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Group</a></li>\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Create a group</a></li>\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Target users</a></li>\r\n    <li class=\"breadcrumb-item active\">Save</li>\r\n</ol>\r\n<pop-users-panel></pop-users-panel>\r\n<!--#region CANCEL SAVE BUTTONS-->\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"pull-right\">\r\n            <button (click)=\"createGroup()\" class=\"btnCreateGroup\" type=\"button\">create a group</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<!--#endregion-->\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n        <h4 class=\"pull-left\">Name the group</h4>\r\n        <div class=\"clearfix\"></div>\r\n        <hr />\r\n        <div class=\"col-sm-12 group-name\">\r\n            <input type=\"text\" value=\"\" placeholder=\"Name of the Group\" />\r\n            <label> Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod</label>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n        <hr />\r\n        <h4>Choose the type of campaign</h4>\r\n        <hr />\r\n        <ul class=\"devices\">\r\n            <li *ngFor=\"let device of devices\">\r\n                <input type=\"radio\" [value]=\"device\" name=\"device\" [id]=\"device\" />\r\n                <label attr.for=\"{{device}}\">{{device}}</label>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<!--#region FILTERS-->\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n        <h4 class=\"pull-left\">Filters</h4>\r\n        <div class=\"clearfix\"></div>\r\n        <hr />\r\n        <form class=\"filters\">\r\n            <div class=\"panel-body\" [hidden]=\"hideElement\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6\">\r\n                        <select id=\"sel1\">\r\n                            <option *ngFor=\"let trigger of ddlTriggers\" name=\"trigger\">{{trigger}}</option>\r\n                        </select>\r\n                        <label for=\"sel2\">from:</label>\r\n                        <select id=\"sel2\">\r\n                            <option *ngFor=\"let age of [18,19,20,21]\">{{age}}</option>\r\n                        </select>\r\n\r\n                        <label for=\"sel2\">to:</label>\r\n                        <select id=\"sel2\">\r\n                            <option *ngFor=\"let age of [21,22,23,24]\">{{age}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-lg-5\">\r\n                        <span class='glyphicon glyphicon-screenshot'></span>\r\n                        <span>14k targeted</span>\r\n                        <span class='glyphicon glyphicon-envelope'></span>\r\n                        <span>0.500K emailable</span>\r\n                        <span class='glyphicon glyphicon-signal'></span>\r\n                        <span>1.500K online</span>\r\n                        <span class='glyphicon glyphicon-circle-arrow-right'></span>\r\n                        <span>1K offline</span>\r\n\r\n                    </div>\r\n                    <div class=\"col-lg-1\">\r\n                        <button class=\"pull-right\" (click)=\"toggleElement($event)\">X</button>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body\" [hidden]=\"hideElement\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6\">\r\n                        <select id=\"sel1\">\r\n                            <option *ngFor=\"let trigger of ddlTriggers\" name=\"trigger\">{{trigger}}</option>\r\n                        </select>\r\n                        <select id=\"sel2\">\r\n                            <option>more than</option>\r\n                        </select>\r\n                        <select id=\"sel2\">\r\n                            <option>2 weeks</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-lg-5\">\r\n                        <span class='glyphicon glyphicon-screenshot'></span>\r\n                        <span>14k targeted</span>\r\n                        <span class='glyphicon glyphicon-envelope'></span>\r\n                        <span>0.500K emailable</span>\r\n                        <span class='glyphicon glyphicon-signal'></span>\r\n                        <span>1.500K online</span>\r\n                        <span class='glyphicon glyphicon-circle-arrow-right'></span>\r\n                        <span>1K offline</span>\r\n\r\n                    </div>\r\n                    <div class=\"col-lg-1\">\r\n                        <button class=\"pull-right\" (click)=\"toggleElement($event)\">X</button>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n                </div>\r\n            <div class=\"panel-body\" >\r\n                <div class=\"row\" >\r\n                    <div class=\"col-lg-6\">\r\n                        <select id=\"sel1\">\r\n                            <option *ngFor=\"let trigger of ddlTriggers\" name=\"trigger\">{{trigger}}</option>\r\n                        </select>\r\n                        <label for=\"sel2\">currency:</label>\r\n                        <select id=\"sel2\">\r\n                            <option>GBP</option>\r\n                        </select>\r\n                        <label for=\"sel2\">between:</label>\r\n                        <select id=\"sel2\">\r\n                            <option *ngFor=\"let age of ['200k','300k']\">{{age}}</option>\r\n                        </select>\r\n                        <label for=\"sel2\">and:</label>\r\n                        <select id=\"sel2\">\r\n                            <option *ngFor=\"let age of ['200k','300k']\">{{age}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-lg-5\">\r\n                        <span class='glyphicon glyphicon-screenshot'></span>\r\n                        <span>14k targeted</span>\r\n                        <span class='glyphicon glyphicon-envelope'></span>\r\n                        <span>0.500K emailable</span>\r\n                        <span class='glyphicon glyphicon-signal'></span>\r\n                        <span>1.500K online</span>\r\n                        <span class='glyphicon glyphicon-circle-arrow-right'></span>\r\n                        <span>1K offline</span>\r\n                        \r\n                    </div>\r\n                    <div class=\"col-lg-1\">\r\n                        <button class=\"pull-right\" (click)=\"toggleElement($event)\">X</button>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n                </div>\r\n\r\n</form>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<!--#endregion-->\r\n<!--#region CANCEL SAVE BUTTONS-->\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"pull-right\">\r\n            <button (click)=\"saveGroup()\" class=\"btnSaveGroup\" type=\"button\">save the group</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<!--#endregion-->"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./group.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./group.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 0.5em;\n  height: 0.5em; }\n\n::-webkit-scrollbar-thumb {\n  background: slategray;\n  cursor: pointer; }\n\n::-webkit-scrollbar-track {\n  background: #b8c0c8; }\n\nbody {\n  scrollbar-face-color: slategray;\n  scrollbar-track-color: #b8c0c8; }\n\nh4 {\n  text-transform: uppercase;\n  font-size: 1.1em; }\n\n.main-panel {\n  background: #ffffff;\n  box-shadow: 0 3px 8px 0px rgba(0, 0, 0, 0.25);\n  box-sizing: border-box; }\n\nlabel {\n  font-weight: normal; }\n\n/*#region breadcrump*/\n.breadcrumb > li + li:before {\n  content: \"\\2192\";\n  color: #777; }\n\n.breadcrumb {\n  background: none; }\n\n.breadcrumb li a {\n  color: #777; }\n\n.breadcrumb-item.active {\n  color: #ee264d; }\n\n/*#endregion breadcrump*/\n/*#region btns*/\n.btnCreateGroup {\n  background: #ee264d;\n  border: 1px solid #ee264d;\n  color: #fff;\n  padding: 4px 15px;\n  border-radius: 25px;\n  width: 180px;\n  text-transform: uppercase;\n  font-size: 15px;\n  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25); }\n\n.btnSaveGroup {\n  background: #ebebeb;\n  border: 1px solid #ee264d;\n  color: #ee264d;\n  padding: 4px 15px;\n  border-radius: 25px;\n  width: 180px;\n  text-transform: uppercase;\n  font-size: 15px;\n  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25); }\n\n/*#endregion*/\n.content-box {\n  -ms-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\n/*#region radio design*/\nul.devices {\n  padding: 0;\n  margin: 0; }\n\nul.devices li {\n  display: inline-block;\n  text-decoration: none;\n  margin-right: 20px; }\n\nul.devices li label {\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n  padding-left: 15px;\n  margin-right: 15px;\n  font-size: 13px; }\n\nul.devices input[type=radio] {\n  display: none; }\n\nul.devices li label:before {\n  content: \"\";\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  margin-right: 4px;\n  position: absolute;\n  left: 0;\n  bottom: 5px;\n  background-color: #fff;\n  border: 1px solid #ee264d;\n  border-radius: 50%; }\n\nul.devices input[type=radio]:checked + label:before {\n  background-color: #ee264d; }\n\nul.devices input[type=radio]:checked + label {\n  color: #ee264d; }\n\n/*#endregion radio design*/\n/*#region group name*/\n.group-name input {\n  border: none;\n  border-bottom: 1px solid #000;\n  color: #85cec5; }\n\n.group-name input:focus {\n  outline: none; }\n\n/*#endregion*/\nform.filters .glyphicon {\n  color: #85cec5; }\n\n/*form.filters,form.filters .panel-body {\r\n    padding: 10px 0;\r\n}*/\nform.filters .panel-body:nth-child(odd) {\n  background: #ebebeb; }\n\nform.filters .panel-body:nth-child(even) {\n  background: #e1e1e1; }\n\nform.filters .panel-body {\n  border-top: 1px solid #c5c5c5;\n  border-right: 1px solid #c5c5c5;\n  border-left: 4px solid #ee264d; }\n\nform.filters .panel-body:last-child {\n  border-bottom: 1px solid #c5c5c5; }\n\nform.filters .panel-body:hover {\n  border-left: 4px solid #85cec5; }\n\nform.filters .panel-body button {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #777; }\n", ""]);
	
	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var my_campaign_component_1 = __webpack_require__(39);
	exports.MyCampaignRoutes = [
	    {
	        path: 'my-campaign',
	        component: my_campaign_component_1.MyCampaignComponent
	    }
	];


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	//import { FormsModule, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
	var MyCampaignComponent = (function () {
	    function MyCampaignComponent() {
	        this.title = 'my campaign';
	        this.popAppTypes = [
	            { value: 'centerPopApp', display: 'Center PopApp' },
	            { value: 'pushPopApp', display: 'Push PopApp' },
	            { value: 'fullscreenPopApp', display: 'Full Screen PopApp' },
	            { value: 'notificationPopApp', display: 'Notification PopApp' },
	            { value: 'emails', display: 'Emails' }
	        ];
	    }
	    MyCampaignComponent.prototype.ngOnInit = function () {
	    };
	    return MyCampaignComponent;
	}());
	MyCampaignComponent = __decorate([
	    core_1.Component({
	        selector: 'pop-my-campaign',
	        template: __webpack_require__(40),
	        styles: [__webpack_require__(41).toString()]
	    }),
	    __metadata("design:paramtypes", [])
	], MyCampaignComponent);
	exports.MyCampaignComponent = MyCampaignComponent;


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<h4>{{title | uppercase}}</h4>\r\n<pop-users-panel></pop-users-panel>\r\n<div class=\"panel-group my-campaign-main-panel\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n            <h4 class=\"pull-left\">FILTER CAMPAIGN</h4>\r\n            <div class=\"clearfix\"></div>\r\n            <hr />\r\n            <div class=\"types\">\r\n                <div *ngFor=\"let type of popAppTypes\">\r\n                    <input type=\"radio\" name=\"type\" [value]=\"type.value\" [id]=\"type.value\" />\r\n                    <label attr.for=\"{{type.value}}\">\r\n                        <img src=\"../images/{{type.value}}.png\" alt=\"{{type.value}}\" />\r\n                        <p>{{type.display}}</p>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n            <h4>campaign: center popapp</h4>\r\n        </div>\r\n        <div class=\"panel-body cards\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"card-header\">\r\n                        <span class=\"pull-left glyphicon glyphicon-apple\">iOS</span>\r\n                        <span class=\"pull-right\">CAMPAIGN 1</span>\r\n                        <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <h4 class=\"card-title text-center\">POP UP CENTER A</h4>\r\n                    <div class=\"iphone\">\r\n                        <div class=\"card\">\r\n                            <span class=\"glyphicon glyphicon-remove-circle pull-right\"></span>\r\n                            <div class=\"clearfix\"></div>\r\n                            <span class=\"glyphicon glyphicon-shopping-cart\"></span>\r\n                            <div class=\"header\">Hello Jon</div>\r\n                            <div class=\"body\">This is Photoshop`s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.</div>\r\n                            <div class=\"buttons\">\r\n                                <button>no, thanks</button>\r\n                                <button>yes, please</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <button class=\"btnDelete\">delete campaign</button>\r\n                        <button class=\"btnEdit\">edit campaign</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"card-header\">\r\n                        <span class=\"pull-left glyphicon glyphicon-apple\">iOS</span>\r\n                        <span class=\"pull-right\">CAMPAIGN 2</span>\r\n                        <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <h4 class=\"card-title text-center\">POP UP CENTER B</h4>\r\n                    <div class=\"iphone\">\r\n                        <div class=\"card\">\r\n                            <span class=\"glyphicon glyphicon-remove-circle pull-right\"></span>\r\n                            <div class=\"clearfix\"></div>\r\n                            <span class=\"glyphicon glyphicon-shopping-cart\"></span>\r\n                            <div class=\"header\">Hello Jon</div>\r\n                            <div class=\"body\">This is Photoshop`s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.</div>\r\n                            <div class=\"buttons\">\r\n                                <button>no, thanks</button>\r\n                                <button>yes, please</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <button class=\"btnDelete\">delete campaign</button>\r\n                        <button class=\"btnEdit\">edit campaign</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"card-header\">\r\n                        <span class=\"pull-left glyphicon glyphicon-apple\">iOS</span>\r\n                        <span class=\"pull-right\">CAMPAIGN 3</span>\r\n                        <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <h4 class=\"card-title text-center\">POP UP CENTER B</h4>\r\n                    <div class=\"iphone\">\r\n                        <div class=\"card\">\r\n                            <span class=\"glyphicon glyphicon-remove-circle pull-right\"></span>\r\n                            <div class=\"clearfix\"></div>\r\n                            <span class=\"glyphicon glyphicon-shopping-cart\"></span>\r\n                            <div class=\"header\">Hello Jon</div>\r\n                            <div class=\"body\">This is Photoshop`s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.</div>\r\n                            <div class=\"buttons\">\r\n                                <button>no, thanks</button>\r\n                                <button>yes, please</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <button class=\"btnDelete\">delete campaign</button>\r\n                        <button class=\"btnEdit\">edit campaign</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./my-campaign.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./my-campaign.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".my-campaign-main-panel .panel {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n  .my-campaign-main-panel .panel .panel-body.cards {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center; }\n\n.my-campaign-main-panel .card {\n  max-width: 350px;\n  border: 1px solid #eee;\n  margin: 0 10px; }\n  .my-campaign-main-panel .card .card {\n    text-align: center;\n    width: 225px;\n    height: 190px;\n    border-radius: 10px;\n    color: #fff;\n    background: #211257; }\n    .my-campaign-main-panel .card .card .header {\n      font-size: 1.5em; }\n    .my-campaign-main-panel .card .card .glyphicon-remove-circle {\n      padding: 3px; }\n    .my-campaign-main-panel .card .card .buttons {\n      text-align: center;\n      margin: 0 auto;\n      padding: 5px 0; }\n      .my-campaign-main-panel .card .card .buttons button:first-child {\n        border-radius: 15px;\n        border: none;\n        text-transform: uppercase;\n        background: #fff;\n        color: #000; }\n      .my-campaign-main-panel .card .card .buttons button:last-child {\n        border-radius: 15px;\n        border: none;\n        text-transform: uppercase;\n        background: #00b648; }\n  .my-campaign-main-panel .card:first-of-type .card {\n    background: #ee264d; }\n    .my-campaign-main-panel .card:first-of-type .card .buttons button:first-child {\n      background: #151acc;\n      color: #fff; }\n    .my-campaign-main-panel .card:first-of-type .card .buttons button:last-child {\n      background: #00b648; }\n  .my-campaign-main-panel .card:last-of-type .card {\n    background: #808080; }\n    .my-campaign-main-panel .card:last-of-type .card .buttons button:first-child {\n      background: blue;\n      color: #fff; }\n    .my-campaign-main-panel .card:last-of-type .card .buttons button:last-child {\n      background: #00b648; }\n  .my-campaign-main-panel .card .card-header {\n    border-bottom: 1px solid #eee;\n    padding: 10px; }\n  .my-campaign-main-panel .card .card-footer {\n    padding: 10px;\n    border-top: 1px solid #eee; }\n    .my-campaign-main-panel .card .card-footer .btnDelete {\n      background: #ebebeb;\n      border: 1px solid #ee264d;\n      color: #ee264d;\n      box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);\n      border-radius: 25px;\n      padding: 7px 15px;\n      text-transform: uppercase; }\n    .my-campaign-main-panel .card .card-footer .btnEdit {\n      background: #ee264d;\n      border: 1px solid #ee264d;\n      color: #ffffff;\n      box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);\n      border-radius: 25px;\n      padding: 7px 15px;\n      text-transform: uppercase; }\n  .my-campaign-main-panel .card .iphone {\n    background: url(" + __webpack_require__(43) + ") no-repeat center center;\n    height: 600px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    margin-bottom: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAAJWCAYAAABlHVNJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNjU5NTU0NzJGQzFFNjExOTMyN0VERENCQTc0NThDMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RThEQ0VFNkMxMzkxMUU2QjAxRUUyQjE5OTBGMEUwQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RThEQ0VFNUMxMzkxMUU2QjAxRUUyQjE5OTBGMEUwQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNjU5NTU0NzJGQzFFNjExOTMyN0VERENCQTc0NThDMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNjU5NTU0NzJGQzFFNjExOTMyN0VERENCQTc0NThDMSIvPiA8L3JkZjpEZXNjcmlwdGlv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"

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(45));


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var AuthGuard = (function () {
	    function AuthGuard(router) {
	        this.router = router;
	    }
	    AuthGuard.prototype.canActivate = function (route, state) {
	        if (localStorage.getItem('currentUser')) {
	            // logged in so return true
	            return true;
	        }
	        // not logged in so redirect to login page with the return url
	        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
	        return false;
	    };
	    return AuthGuard;
	}());
	AuthGuard = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [router_1.Router])
	], AuthGuard);
	exports.AuthGuard = AuthGuard;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(47));
	__export(__webpack_require__(56));


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var index_1 = __webpack_require__(48);
	var LoginComponent = (function () {
	    function LoginComponent(route, router, authenticationService, alertService) {
	        this.route = route;
	        this.router = router;
	        this.authenticationService = authenticationService;
	        this.alertService = alertService;
	        this.model = {};
	        this.loading = false;
	    }
	    LoginComponent.prototype.ngOnInit = function () {
	        // reset login status
	        //this.authenticationService.logout();
	        // get return url from route parameters or default to '/'
	        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	    };
	    LoginComponent.prototype.login = function () {
	        var _this = this;
	        this.loading = true;
	        this.authenticationService.login(this.model.username, this.model.password)
	            .subscribe(function (data) {
	            _this.router.navigate(['/dashboard/overview']);
	        }, function (error) {
	            _this.alertService.error(error);
	            _this.loading = false;
	        });
	    };
	    return LoginComponent;
	}());
	LoginComponent = __decorate([
	    core_1.Component({
	        selector: 'pop-login',
	        template: __webpack_require__(53),
	        styles: [__webpack_require__(54).toString()]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        router_1.Router,
	        index_1.AuthenticationService,
	        index_1.AlertService])
	], LoginComponent);
	exports.LoginComponent = LoginComponent;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var api_1 = __webpack_require__(23);
	exports.ApiService = api_1.ApiService;
	var client_user_service_1 = __webpack_require__(49);
	exports.ClientUserService = client_user_service_1.ClientUserService;
	var campaign_service_1 = __webpack_require__(22);
	exports.CampaignService = campaign_service_1.CampaignService;
	var alert_service_1 = __webpack_require__(50);
	exports.AlertService = alert_service_1.AlertService;
	var authentication_service_1 = __webpack_require__(52);
	exports.AuthenticationService = authentication_service_1.AuthenticationService;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var api_1 = __webpack_require__(23);
	var ClientUserService = (function () {
	    function ClientUserService(api) {
	        this.api = api;
	        this.path = '/api/account/test';
	    }
	    ClientUserService.prototype.getUsers = function () {
	        return this.api.get(this.path);
	    };
	    return ClientUserService;
	}());
	ClientUserService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [api_1.ApiService])
	], ClientUserService);
	exports.ClientUserService = ClientUserService;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var Subject_1 = __webpack_require__(51);
	var AlertService = (function () {
	    function AlertService(router) {
	        var _this = this;
	        this.router = router;
	        this.subject = new Subject_1.Subject();
	        this.keepAfterNavigationChange = false;
	        //clear alert message on route change
	        router.events.subscribe(function (event) {
	            if (event instanceof router_1.NavigationStart) {
	                if (_this.keepAfterNavigationChange) {
	                    // only keep for a single location change
	                    _this.keepAfterNavigationChange = false;
	                }
	                else {
	                    //clear alert
	                    _this.subject.next();
	                }
	            }
	        });
	    }
	    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
	        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
	        this.keepAfterNavigationChange = keepAfterNavigationChange;
	        this.subject.next({ type: 'success', text: message });
	    };
	    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
	        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
	        this.keepAfterNavigationChange = keepAfterNavigationChange;
	        this.subject.next({ type: 'error', text: message });
	    };
	    AlertService.prototype.getMessage = function () {
	        return this.subject.asObservable();
	    };
	    return AlertService;
	}());
	AlertService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [router_1.Router])
	], AlertService);
	exports.AlertService = AlertService;


/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Subject");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var api_1 = __webpack_require__(23);
	var AuthenticationService = (function () {
	    function AuthenticationService(api) {
	        this.api = api;
	        this.path = '/api/authentication';
	    }
	    AuthenticationService.prototype.login = function (username, password) {
	        return this.api.login(this.path, username, password);
	    };
	    AuthenticationService.prototype.logout = function () {
	        // remove user from local storage to log user out
	        localStorage.removeItem('currentUser');
	    };
	    return AuthenticationService;
	}());
	AuthenticationService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [api_1.ApiService])
	], AuthenticationService);
	exports.AuthenticationService = AuthenticationService;


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <pop-alert></pop-alert>\r\n    <h2>Login</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <div *ngIf=\"loading\" class=\"small-loader\">\r\n                <div></div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./login.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./login.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, "@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@-moz-keyframes spin {\n  0% {\n    -moz-transform: rotate(0deg); }\n  100% {\n    -moz-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.small-loader {\n  display: inline-block;\n  vertical-align: middle; }\n  .small-loader div {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: 2px solid transparent;\n    border-top-color: #ee264d;\n    transform: translate3d(0, 0, 0);\n    animation: spin 2s linear infinite; }\n    .small-loader div:before {\n      content: \"\";\n      position: absolute;\n      top: 3px;\n      left: 3px;\n      right: 3px;\n      bottom: 3px;\n      border-radius: 50%;\n      border: 2px solid transparent;\n      border-top-color: #85cec5;\n      -webkit-animation: spin 3s linear infinite;\n      animation: spin 3s linear infinite; }\n    .small-loader div:after {\n      content: \"\";\n      position: absolute;\n      top: 8px;\n      left: 8px;\n      right: 8px;\n      bottom: 8px;\n      border-radius: 50%;\n      border: 3px solid transparent;\n      border-top-color: #fff;\n      animation: spin 1.5s linear infinite; }\n", ""]);
	
	// exports


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(46);
	exports.LoginRoutes = [
	    {
	        path: 'login',
	        component: index_1.LoginComponent
	    }
	];


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	//import { Config } from '../../config/env.config';
	var AppComponent = (function () {
	    function AppComponent(viewContainerRef) {
	        // You need this small hack in order to catch application root view container ref
	        this.viewContainerRef = viewContainerRef;
	        console.log('Environment config');
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(58),
	        styles: [__webpack_require__(59).toString()]
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<!--<div class=\"container-fluid main-page\">\r\n        <pop-header></pop-header>\r\n        <div class=\"menu-content\">\r\n            <div style=\"padding-top:60px;\"></div>\r\n            <pop-nav-menu></pop-nav-menu>\r\n        </div>\r\n        <div class=\"body-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n</div>-->\r\n<router-outlet></router-outlet>"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".container-fluid.main-page {\n  background: #ebebeb;\n  transition: all 0.5s ease; }\n  .container-fluid.main-page .body-content {\n    height: 100%;\n    width: calc(100% - $nav-width);\n    margin-left: 200px; }\n  @media (max-width: 768px) {\n    .container-fluid.main-page {\n      /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */ }\n      .container-fluid.main-page .body-content {\n        padding-top: 50px; } }\n  @media (max-width: 1280px) {\n    .container-fluid.main-page .body-content {\n      margin-left: 40px; } }\n", ""]);
	
	// exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(62);
	var router_1 = __webpack_require__(6);
	var login_component_1 = __webpack_require__(47);
	var forms_1 = __webpack_require__(63);
	var index_1 = __webpack_require__(48);
	var index_2 = __webpack_require__(64);
	var LoginModule = (function () {
	    function LoginModule() {
	    }
	    return LoginModule;
	}());
	LoginModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule],
	        declarations: [login_component_1.LoginComponent, index_2.AlertComponent],
	        exports: [login_component_1.LoginComponent],
	        providers: [index_1.AuthenticationService, index_1.AlertService]
	    }),
	    __metadata("design:paramtypes", [])
	], LoginModule);
	exports.LoginModule = LoginModule;


/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var highlight_directive_1 = __webpack_require__(65);
	exports.HighlightDirective = highlight_directive_1.HighlightDirective;
	var alert_component_1 = __webpack_require__(66);
	exports.AlertComponent = alert_component_1.AlertComponent;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var HighlightDirective = (function () {
	    function HighlightDirective(el) {
	        this._defaultColor = 'beige';
	        this.el = el.nativeElement;
	    }
	    HighlightDirective.prototype.onMouseEnter = function () {
	        this.highlight(this.highlightColor || this._defaultColor);
	    };
	    HighlightDirective.prototype.onMouseLeave = function () {
	        this.highlight(null);
	    };
	    HighlightDirective.prototype.highlight = function (color) {
	        this.el.style.backgroundColor = color;
	    };
	    return HighlightDirective;
	}());
	__decorate([
	    core_1.Input('highlight'),
	    __metadata("design:type", String)
	], HighlightDirective.prototype, "highlightColor", void 0);
	__decorate([
	    core_1.HostListener('mouseenter'),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], HighlightDirective.prototype, "onMouseEnter", null);
	__decorate([
	    core_1.HostListener('mouseleave'),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], HighlightDirective.prototype, "onMouseLeave", null);
	HighlightDirective = __decorate([
	    core_1.Directive({
	        selector: '[highlight]'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], HighlightDirective);
	exports.HighlightDirective = HighlightDirective;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var index_1 = __webpack_require__(48);
	var AlertComponent = (function () {
	    function AlertComponent(alertService) {
	        this.alertService = alertService;
	    }
	    AlertComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
	    };
	    return AlertComponent;
	}());
	AlertComponent = __decorate([
	    core_1.Component({
	        selector: 'pop-alert',
	        template: "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"
	    }),
	    __metadata("design:paramtypes", [index_1.AlertService])
	], AlertComponent);
	exports.AlertComponent = AlertComponent;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(62);
	var router_1 = __webpack_require__(6);
	var overview_module_1 = __webpack_require__(68);
	var forms_1 = __webpack_require__(63);
	var index_1 = __webpack_require__(8);
	var header_component_1 = __webpack_require__(69);
	var navmenu_component_1 = __webpack_require__(73);
	var campaign_component_1 = __webpack_require__(21);
	var group_component_1 = __webpack_require__(34);
	var users_component_1 = __webpack_require__(77);
	var my_campaign_component_1 = __webpack_require__(39);
	var index_2 = __webpack_require__(48);
	var DashboardModule = (function () {
	    function DashboardModule() {
	    }
	    return DashboardModule;
	}());
	DashboardModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            common_1.CommonModule,
	            router_1.RouterModule,
	            overview_module_1.OverviewModule,
	            forms_1.FormsModule
	        ],
	        declarations: [
	            index_1.DashboardComponent,
	            header_component_1.HeaderComponent,
	            navmenu_component_1.NavMenuComponent,
	            campaign_component_1.CampaignComponent,
	            group_component_1.GroupComponent,
	            users_component_1.UsersComponent,
	            my_campaign_component_1.MyCampaignComponent
	        ],
	        exports: [index_1.DashboardComponent],
	        providers: [index_2.ApiService, index_2.ClientUserService, index_2.CampaignService, index_2.AlertService]
	    }),
	    __metadata("design:paramtypes", [])
	], DashboardModule);
	exports.DashboardModule = DashboardModule;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(62);
	var overview_component_1 = __webpack_require__(14);
	var OverviewModule = (function () {
	    function OverviewModule() {
	    }
	    return OverviewModule;
	}());
	OverviewModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        declarations: [overview_component_1.OverviewComponent],
	        exports: [overview_component_1.OverviewComponent]
	    }),
	    __metadata("design:paramtypes", [])
	], OverviewModule);
	exports.OverviewModule = OverviewModule;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var HeaderComponent = (function () {
	    function HeaderComponent(router) {
	        this.router = router;
	        this.isScrolled = false;
	        this.isMenuCollapsed = false;
	    }
	    HeaderComponent.prototype.ngOnInit = function () {
	        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
	        this.date = new Date();
	        this.weekDay = getWeekDay(this.date);
	        function getWeekDay(date) {
	            var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	            return days[date.getDay()];
	        }
	    };
	    HeaderComponent.prototype.signOut = function () {
	        localStorage.removeItem('currentUser');
	        this.router.navigate(["/login"]);
	    };
	    return HeaderComponent;
	}());
	HeaderComponent = __decorate([
	    core_1.Component({
	        selector: 'pop-header',
	        template: __webpack_require__(70),
	        styles: [__webpack_require__(71).toString()],
	    }),
	    __metadata("design:paramtypes", [router_1.Router])
	], HeaderComponent);
	exports.HeaderComponent = HeaderComponent;


/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-top\" baScrollPosition maxHeight=\"50\" (scrollChange)=\"scrolledChanged($event)\"\r\n     [ngClass]=\"{scrolled: isScrolled}\">\r\n    <div class=\"pull-right user-profile-menu\">\r\n        <span class=\"date\">{{weekDay}} {{date | date:'dd/MM/yyyy'}}</span>\r\n        <div class=\"dropdown\">\r\n            <div class=\"dropdown-toggle\" id=\"user-profile\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                <span class=\"userName\">Hello {{currentUser.userName}} <span class=\"glyphicon glyphicon-option-vertical\"></span></span>\r\n            </div>\r\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"user-profile\">\r\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Profile</a></li>\r\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\"><span class=\"glyphicon glyphicon-cog\"></span>Settings</a></li>\r\n                <li role=\"presentation\" (click)=\"signOut()\"><a role=\"menuitem\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-log-out\"></span>Sign Out</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n</div>\r\n"

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(72);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./header.component.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./header.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".page-top {\n  background-color: #ee264d;\n  position: fixed;\n  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);\n  height: 50px;\n  width: calc(100% - 200px);\n  min-width: 320px;\n  box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.25);\n  z-index: 9;\n  margin-left: 185px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.blur .page-top.scrolled {\n  background-color: rgba(0, 0, 0, 0.85); }\n\n.date, .userName {\n  color: #fff;\n  margin-right: 10px; }\n\n.userName {\n  cursor: pointer; }\n\n.user-profile-menu {\n  display: inline-flex;\n  height: 100%;\n  align-items: center; }\n\n.dropdown-menu {\n  right: 0;\n  left: unset; }\n\n.dropdown-menu li span.glyphicon {\n  margin-right: 5px; }\n\n.dropdown-menu li a:hover .glyphicon {\n  color: #ee264d; }\n", ""]);
	
	// exports


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	        this.menuState = 'out';
	    }
	    NavMenuComponent.prototype.toggleMenu = function (e) {
	        e.preventDefault();
	        this.menuState = 'out';
	        if (e.target.getAttribute("aria-expanded") == "true") {
	            this.menuState = 'in';
	        }
	    };
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'pop-nav-menu',
	        template: __webpack_require__(74),
	        styles: [__webpack_require__(75).toString()],
	        animations: [
	            core_1.trigger('slideInOut', [
	                core_1.state('in', core_1.style({
	                    transform: 'translateY(-10%)'
	                })),
	                core_1.state('out', core_1.style({
	                    transform: 'translateY(0)'
	                })),
	                core_1.transition('in => out', core_1.animate('400ms ease-in-out')),
	                core_1.transition('out => in', core_1.animate('400ms ease-in-out'))
	            ]),
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\r\n    <div class=\"logo-area\">\r\n        <img src=\"../images/logo.svg\" alt=\"popapp\" />\r\n    </div>\r\n    <nav class='navbar navbar-default sidebar' role=\"navigation\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"search\">\r\n                <span class='glyphicon glyphicon-search'></span>\r\n                <input type=\"text\" placeholder=\"Search for...\">\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\r\n                <!--UL-->\r\n                <ul class=\"nav navbar-nav dashboard\">\r\n                    <li>\r\n                        <div>\r\n                            Dashboard\r\n                            <img class=\"hidden-xs showopacity\" alt=\"engagement\" src=\"../images/icons/desktop.png\" />\r\n                        </div>\r\n                        <ul class=\"forAnimate\" [@slideInOut]=\"menuState\">\r\n                            <li [routerLinkActive]=\"['link-active']\">\r\n                                <a [routerLink]=\"['overview']\">\r\n                                    Overview\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li (click)=\"toggleMenu($event)\" class=\"\">\r\n                        <div href=\"#\" class=\"\" data-toggle=\"\">\r\n                            ENGAGEMENT\r\n                            <img class=\"hidden-xs showopacity\" alt=\"engagement\" src=\"../images/icons/link.png\" />\r\n                        </div>\r\n\r\n                        <ul class=\"forAnimate\" [@slideInOut]=\"menuState\">\r\n                            <li [routerLinkActive]=\"['link-active']\">\r\n                                <a [routerLink]=\"['group']\">\r\n                                    Groups\r\n                                </a>\r\n                            </li>\r\n                            <li [routerLinkActive]=\"['link-active']\">\r\n                                <a [routerLink]=\"['campaign']\">\r\n                                    Campaign\r\n                                </a>\r\n                            </li>\r\n                            <li [routerLinkActive]=\"['link-active']\">\r\n                                <a [routerLink]=\"['my-campaign']\">\r\n                                    My Campaign\r\n                                </a>\r\n                            </li>\r\n                            <li><a href=\"#\">Triggers</a></li>\r\n\r\n                        </ul>\r\n                    </li>\r\n                    <li>\r\n                        <div>\r\n                            <img class=\"hidden-xs showopacity\" alt=\"engagement\" src=\"../images/icons/mail.png\" />\r\n                            Mail Options\r\n                        </div>\r\n                        <!--UL-->\r\n                        <ul class=\"forAnimate\">\r\n                            <li><a href=\"#\">Mail Sender</a></li>\r\n                            <li><a href=\"#\">Send Email</a></li>\r\n                        </ul>\r\n                    </li>\r\n                    <li (click)=\"toggleMenu($event)\">\r\n                        <div>\r\n                            <img class=\"hidden-xs showopacity\" alt=\"engagement\" src=\"../images/icons/cog.png\" />\r\n                            Pop app settings\r\n\r\n                        </div>\r\n                        <!--UL-->\r\n                        <ul class=\"forAnimate\" [@slideInOut]=\"menuState\">\r\n                            <li><a href=\"#\">PopApp settings</a></li>\r\n                            <li><a href=\"#\">System settings</a></li>\r\n                            <li><a href=\"#\">Manage users</a></li>\r\n                            <li><a href=\"#\">Manage permissions</a></li>\r\n                            <li><a href=\"#\">Login logout</a></li>\r\n                            <li><a href=\"#\">Campaign types</a></li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</div>\r\n"

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./navmenu.component.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./navmenu.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".main-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10; }\n\n.navbar-default {\n  background: none;\n  border: none;\n  border-radius: 0;\n  background: #333434; }\n\n.search {\n  text-shadow: none;\n  font-size: 13px;\n  line-height: 25px;\n  transition: all 0.5s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 162px;\n  margin: 0 auto;\n  padding: 10px 0 0 10px;\n  border-bottom: 1px solid #fff; }\n\n.search input {\n  background: transparent;\n  border: none;\n  color: #fff;\n  border: 1px solid #333; }\n\n.search input:focus {\n  outline: none; }\n\n.search span {\n  color: #fff;\n  cursor: pointer; }\n\n.navbar-default .navbar-nav > li > div {\n  color: #85cec5; }\n\n/*nav.sidebar .navbar-nav .open .dropdown-menu > li > a:hover, nav.sidebar .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #CCC;\n    background-color: transparent;\n}*/\n/*.dropdown-menu > li > a {\n    color: #CCC;\n}*/\n.navbar-nav > li > div {\n  text-transform: uppercase; }\n\nnav:hover .forAnimate {\n  opacity: 1; }\n\nsection {\n  padding-left: 15px; }\n\n.logo-area {\n  height: 50px;\n  background: #ee264d;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 200px; }\n\n.logo-area img {\n  height: 25px;\n  margin-left: 10px; }\n\n.link-active {\n  /*TODO: active */ }\n\n/*li ul.dropdown-menu.forAnimate li a:before {\r\n    content: '';\r\n    height: 41px;\r\n    left: 3px;\r\n    width: 1px;\r\n    background: #f00;\r\n    position: absolute;\r\n}*/\nli a {\n  color: #ffffff; }\n\n@media (min-width: 768px) {\n  /* On small screens, convert the nav menu to a vertical sidebar */\n  .main-nav {\n    height: 100%;\n    width: 40px;\n    -webkit-transition: margin 200ms ease-out;\n    -moz-transition: margin 200ms ease-out;\n    -o-transition: margin 200ms ease-out;\n    transition: margin 200ms ease-out; }\n  /*nav.sidebar .navbar-nav .open .dropdown-menu {\n        position: static;\n        float: none;\n        width: auto;\n        margin-top: 0;\n        background-color: transparent;\n        border: 0;\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }*/\n  nav.sidebar .navbar-collapse, nav.sidebar .container-fluid {\n    padding: 0 0px 0 0px; }\n  /*.navbar-inverse .navbar-nav .open .dropdown-menu > li > div {\n        color: #777;\n    }*/\n  nav.sidebar {\n    width: 200px;\n    height: 100%;\n    margin-left: -160px;\n    float: left;\n    margin-bottom: 0px; }\n  nav.sidebar li {\n    width: 100%;\n    padding: 4px 0; }\n  nav.sidebar:hover {\n    margin-left: 0px; }\n  .forAnimate {\n    opacity: 0; }\n  .nav.navbar-nav li div img {\n    float: right; }\n  .nav.navbar-nav li div {\n    padding: 10px 8px; }\n  ul.dashboard > li:first-child a img {\n    position: absolute;\n    right: 5px; }\n  .glyphicon.glyphicon-search {\n    float: right; } }\n\n@media (min-width: 1280px) {\n  nav.sidebar {\n    margin-left: 0px;\n    float: left; }\n  nav.sidebar .forAnimate {\n    opacity: 1; }\n  .nav.navbar-nav li div img {\n    float: left;\n    padding-right: 10px; }\n  .nav.navbar-nav li:first-child div img {\n    padding-right: 2px; }\n  .glyphicon.glyphicon-search {\n    float: left; }\n  ul.dashboard > li:first-child div img {\n    position: relative;\n    right: 5px; }\n  ul li a, ul li {\n    position: relative; }\n  /*vertical*/\n  ul.forAnimate li a:after {\n    position: absolute;\n    content: '';\n    width: 1px;\n    height: 28px;\n    background: #ee264d;\n    left: -20px; }\n  /*horizontal*/\n  ul li a:before {\n    position: absolute;\n    content: '';\n    width: 15px;\n    height: 1px;\n    background: #ee264d;\n    left: -20px;\n    bottom: 7px; }\n  /*circle*/\n  ul.forAnimate li:after {\n    position: absolute;\n    content: '';\n    width: 4px;\n    height: 5px;\n    border-radius: 50%;\n    background: #ee264d;\n    left: -6px;\n    bottom: 11px; }\n  ul.forAnimate li.link-active:after {\n    box-shadow: 0 0 10px 4px #ee264d;\n    background: #f793a6;\n    /*background: #eb6c85;*/ }\n  ul.forAnimate li:last-of-type a:after {\n    height: 10px; } }\n", ""]);
	
	// exports


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var client_user_service_1 = __webpack_require__(49);
	var UsersComponent = (function () {
	    function UsersComponent(ClientUserService) {
	        this.ClientUserService = ClientUserService;
	    }
	    UsersComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.ClientUserService
	            .getUsers()
	            .subscribe(function (users) { return _this.users = users; });
	    };
	    return UsersComponent;
	}());
	UsersComponent = __decorate([
	    core_1.Component({
	        selector: 'pop-users-panel',
	        template: __webpack_require__(78),
	        styles: [__webpack_require__(79).toString()]
	    }),
	    __metadata("design:paramtypes", [client_user_service_1.ClientUserService])
	], UsersComponent);
	exports.UsersComponent = UsersComponent;


/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "\r\n    \r\n<p *ngIf=\"!users\"><span>Loading...</span></p>\r\n\r\n<div class=\"row text-center\">\r\n    <div class=\"col-sm-12\" *ngIf=\"users\">\r\n        <ul *ngFor=\"let us of users\" class=\"users\">\r\n            <!--total-->\r\n            <li><span class='glyphicon glyphicon-user'></span><br /><span>{{ us.totalUsers | number}}</span><br /><span>total users</span></li>\r\n            <!--target-->\r\n            <li><span class='glyphicon glyphicon-screenshot'></span><br /><span>{{ us.targetedUsers | number}}</span> <span class=\"percent\">{{ us.targetedUsers / us.totalUsers | percent : '1.1-2'}}</span> <br /><span>targeted users</span></li>\r\n            <!--email-->\r\n            <li><span class='glyphicon glyphicon-envelope'></span><br /><span>{{ us.emailable | number}}</span> <span class=\"percent\">{{ us.emailable / us.totalUsers | percent : '1.2-2'}}</span> <br /><span>emailable users</span></li>\r\n            <!--online-->\r\n            <li><span class='glyphicon glyphicon-signal'></span><br /><span>{{ us.online | number}}</span> <span class=\"percent\">{{ us.online / us.totalUsers | percent : '1.2-2'}}</span> <br /><span>online users</span></li>\r\n            <!--offline-->\r\n            <li><span class='glyphicon glyphicon-circle-arrow-right'></span><br /><span>{{ us.offline | number}}</span> <span class=\"percent\">{{ us.offline / us.totalUsers | percent : '1.2-2'}}</span> <br /><span>offline users</span></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./users.component.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./users.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, "ul.users {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 0; }\n  ul.users li {\n    margin: 0;\n    display: inline-block;\n    text-align: center;\n    padding: 10px;\n    min-width: 100px;\n    max-width: 100%;\n    width: 100%;\n    background-color: #ffffff;\n    box-shadow: 4px 3px 8px 0px rgba(0, 0, 0, 0.25);\n    font-size: 1em;\n    line-height: 25px;\n    text-transform: uppercase;\n    border-left: 1px solid #ebebeb; }\n    ul.users li:first-child {\n      background-color: #85cec5;\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px; }\n      ul.users li:first-child .glyphicon {\n        color: #fff;\n        font-size: 1.6em; }\n    ul.users li:not(:first-of-type) .glyphicon {\n      color: #ee264d; }\n    ul.users li:last-child {\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px; }\n    ul.users li:first-of-type span:nth-of-type(2) {\n      color: #ee264d; }\n    ul.users li span:nth-of-type(2) {\n      font-size: 2.5em; }\n  ul.users .percent {\n    color: #ee264d; }\n  ul.users .glyphicon {\n    font-size: 1.6em; }\n", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmVkMmEyOTQ4MDM1MjY1MjdlYjAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9vdmVydmlldy9vdmVydmlldy5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvb3ZlcnZpZXcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzP2E3MjAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvY2FtcGFpZ24vY2FtcGFpZ24ucm91dGVzLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL2NhbXBhaWduL2NhbXBhaWduLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NoYXJlZC9zZXJ2aWNlcy9jYW1wYWlnbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2hhcmVkL3NlcnZpY2VzL2FwaS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvY2FtcGFpZ24vY2FtcGFpZ24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvY2FtcGFpZ24vY2FtcGFpZ24uY29tcG9uZW50LnNjc3M/YThiNyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9jYW1wYWlnbi9jYW1wYWlnbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi93d3dyb290L2ltYWdlcy9wYWdlcy9jYW1wYWlnbi9pcGhvbmUucG5nIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL2dyb3VwL2dyb3VwLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9ncm91cC9ncm91cC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvZ3JvdXAvZ3JvdXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LnNjc3M/YmYwZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9ncm91cC9ncm91cC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9teS1jYW1wYWlnbi9teS1jYW1wYWlnbi5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvbXktY2FtcGFpZ24vbXktY2FtcGFpZ24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL215LWNhbXBhaWduL215LWNhbXBhaWduLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL215LWNhbXBhaWduL215LWNhbXBhaWduLmNvbXBvbmVudC5zY3NzPzJhNmIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvbXktY2FtcGFpZ24vbXktY2FtcGFpZ24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9hc3NldHMvaW1nL2lwaG9uZS5wbmciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9ndWFyZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9ndWFyZHMvYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2xvZ2luL2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2hhcmVkL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2hhcmVkL3NlcnZpY2VzL2NsaWVudC51c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zaGFyZWQvc2VydmljZXMvYWxlcnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NoYXJlZC9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2Nzcz9iODE2Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9sb2dpbi9sb2dpbi5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5zY3NzPzhhNmIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9sb2dpbi9sb2dpbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NoYXJlZC9kaXJlY3RpdmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2hhcmVkL2RpcmVjdGl2ZXMvaGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NoYXJlZC9kaXJlY3RpdmVzL2FsZXJ0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL292ZXJ2aWV3L292ZXJ2aWV3Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3M/YjQ3OCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL3NoYXJlZC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnNjc3M/NmM1YiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL3NoYXJlZC91c2Vycy91c2Vycy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvc2hhcmVkL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL3NoYXJlZC91c2Vycy91c2Vycy5jb21wb25lbnQuc2Nzcz82NjY1Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL3NoYXJlZC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQyxJQUFJLEVBQUUsMkJBQTJC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Q0FBa0MsZ0RBQWdELHdLQUF3SyxzQkFBc0Isa0NBQWtDLGlEQUFpRCwrRzs7Ozs7O0FDQXg1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EscUNBQW9DLGtCQUFrQix3QkFBd0IsNEJBQTRCLGVBQWUsRUFBRSxpQkFBaUIsZ0JBQWdCLDRCQUE0Qix5QkFBeUIsb0JBQW9CLHVCQUF1QixzQkFBc0Isa0JBQWtCLGdDQUFnQyxzREFBc0QscUJBQXFCLHdCQUF3QixnQ0FBZ0MscUNBQXFDLEVBQUUsK0JBQStCLGtDQUFrQyxvQ0FBb0MsdUNBQXVDLEVBQUUsNENBQTRDLHNCQUFzQiwyQkFBMkIsRUFBRSxrREFBa0QsdUJBQXVCLEVBQUUsOEJBQThCLHFDQUFxQyx3Q0FBd0MsRUFBRSxxREFBcUQsdUJBQXVCLEVBQUUsdUNBQXVDLHlCQUF5QixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSx5QkFBeUIsdUJBQXVCLEVBQUU7O0FBRW5vQyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJlZDJhMjk0ODAzNTI2NTI3ZWIwIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJ1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCdcblxuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuL2xvZ2luL2xvZ2luLm1vZHVsZSdcbmltcG9ydCB7IERhc2hib2FyZE1vZHVsZSB9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUnXG4vL2ltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9pbmRleCdcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gICAgICAgIC8vU2hhcmVkTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgRGFzaGJvYXJkTW9kdWxlLFxuICAgICAgICBMb2dpbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgRGFzaGJvYXJkUm91dGVzIH0gZnJvbSAnLi9kYXNoYm9hcmQvaW5kZXgnXG5pbXBvcnQgeyBMb2dpblJvdXRlcyB9IGZyb20gJy4vbG9naW4vaW5kZXgnXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50J1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgLi4uRGFzaGJvYXJkUm91dGVzLFxuICAgIC4uLkxvZ2luUm91dGVzLFxuICAgIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAucm91dGVzLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50J1xuZXhwb3J0ICogZnJvbSAnLi9kYXNoYm9hcmQucm91dGVzJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4qXHRUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIERhc2hib2FyZENvbXBvbmVudC5cbiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9wLWRhc2hib2FyZCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyksXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHsgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tPHRvcC1uYXY+PC90b3AtbmF2PlxcclxcbjxzaWRlYmFyLWNtcD48L3NpZGViYXItY21wPlxcclxcbjxzZWN0aW9uIGNsYXNzPVxcXCJtYWluLWNvbnRhaW5lclxcXCIgW25nQ2xhc3NdPVxcXCJ7c2lkZWJhclB1c2hSaWdodDogaXNBY3RpdmV9XFxcIj5cXHJcXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0Plxcclxcbjwvc2VjdGlvbj4tLT5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgbWFpbi1wYWdlXFxcIj5cXHJcXG4gICAgPHBvcC1oZWFkZXI+PC9wb3AtaGVhZGVyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZW51LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwicGFkZGluZy10b3A6NjBweDtcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPHBvcC1uYXYtbWVudT48L3BvcC1uYXYtbWVudT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJvZHktY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjwhLS08cG9wLWhlYWRlcj48L3BvcC1oZWFkZXI+XFxyXFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0Pi0tPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT3ZlcnZpZXdSb3V0ZXMgfSBmcm9tICcuL292ZXJ2aWV3L292ZXJ2aWV3LnJvdXRlcydcbmltcG9ydCB7IENhbXBhaWduUm91dGVzIH0gZnJvbSAnLi9jYW1wYWlnbi9jYW1wYWlnbi5yb3V0ZXMnXG5pbXBvcnQgeyBHcm91cFJvdXRlcyB9IGZyb20gJy4vZ3JvdXAvZ3JvdXAucm91dGVzJ1xuaW1wb3J0IHsgTXlDYW1wYWlnblJvdXRlcyB9IGZyb20gJy4vbXktY2FtcGFpZ24vbXktY2FtcGFpZ24ucm91dGVzJ1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vZ3VhcmRzL2luZGV4J1xuaW1wb3J0IHsgT3ZlcnZpZXdDb21wb25lbnQgfSBmcm9tICcuL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudCdcblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZFJvdXRlczogUm91dGVbXSA9IFtcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2Rhc2hib2FyZC9vdmVydmlldycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnZGFzaGJvYXJkJyxcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAuLi5PdmVydmlld1JvdXRlcyxcbiAgICAgICAgICAgIC4uLkNhbXBhaWduUm91dGVzLFxuICAgICAgICAgICAgLi4uR3JvdXBSb3V0ZXMsXG4gICAgICAgICAgICAuLi5NeUNhbXBhaWduUm91dGVzXG4gICAgICAgIF0sXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXVxuICAgIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucm91dGVzLnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3ZlcnZpZXdDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IE92ZXJ2aWV3Um91dGVzOiBSb3V0ZVtdID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJ292ZXJ2aWV3JyxcbiAgICAgICAgY29tcG9uZW50OiBPdmVydmlld0NvbXBvbmVudFxuICAgIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9vdmVydmlldy9vdmVydmlldy5yb3V0ZXMudHMiLCJleHBvcnQgKiBmcm9tICcuL292ZXJ2aWV3LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL292ZXJ2aWV3LnJvdXRlcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9vdmVydmlldy9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9wLW92ZXJ2aWV3JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9vdmVydmlldy5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MnKS50b1N0cmluZygpXSxcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignZmx5SW5PdXQnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcwLjRzIGVhc2UtaW4nKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC4ycyAxMCBlYXNlLW91dCcsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgXSlcclxuICAgIF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCIgW0BmbHlJbk91dF09XFxcIidpbidcXFwiPlxcclxcbiAgICA8aDE+T3ZlcnZpZXc8L2gxPlxcclxcbiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbWVldHVwXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICA8IS0tY2Fyb3VzZWwtLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWNcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbCBzbGlkZVxcXCIgZGF0YS1yaWRlPVxcXCJjYXJvdXNlbFxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLSBJbmRpY2F0b3JzIC0tPlxcclxcbiAgICAgICAgICAgIDxvbCBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5kaWNhdG9yc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cXFwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1xcXCIgZGF0YS1zbGlkZS10bz1cXFwiMFxcXCIgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVxcXCIjY2Fyb3VzZWwtZXhhbXBsZS1nZW5lcmljXFxcIiBkYXRhLXNsaWRlLXRvPVxcXCIxXFxcIj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XFxcIiNjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWNcXFwiIGRhdGEtc2xpZGUtdG89XFxcIjJcXFwiPjwvbGk+XFxyXFxuICAgICAgICAgICAgPC9vbD5cXHJcXG4gICAgICAgICAgICA8IS0tIFdyYXBwZXIgZm9yIHNsaWRlcyAtLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pbm5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGh1bWJuYWlsIGFkanVzdDFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBtb2JpbGVIaWRlPVxcXCI3NzJcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMiBjb2wtc20tMiBjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYS1zdGFjayBmYS00eFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zcXVhcmUgZmEtc3RhY2stMnggdGV4dC1wcmltYXJ5XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1odG1sNSBmYS1zdGFjay0xeCBmYS1pbnZlcnNlXFxcIiBzdHlsZT1cXFwiY29sb3I6I0ZGQzEwN1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwIGNvbC1zbS0xMCBjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcHRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dC1pbmZvIGxlYWQgYWRqdXN0MlxcXCI+QVNQLk5FVCBDb3JlPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cFxcXCI+PC9zcGFuPiBBU1AuTkVUIENvcmUgaXMgYSBuZXcgb3Blbi1zb3VyY2VcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBjcm9zcy1wbGF0Zm9ybSBmcmFtZXdvcmsgZm9yIGJ1aWxkaW5nIG1vZGVybiBjbG91ZCBiYXNlZCBpbnRlcm5ldCBjb25uZWN0ZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9ucywgc3VjaCBhcyB3ZWIgYXBwcywgSW9UIGFwcHMgYW5kIG1vYmlsZSBiYWNrZW5kcy5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzcz1cXFwiYWRqdXN0MlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NaWNyb3NvZnQgQ29ycC48L3A+IDxzbWFsbD48Y2l0ZSB0aXRsZT1cXFwiU291cmNlIFRpdGxlXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1nbG9iZVxcXCI+PC9pPiBodHRwczovL2RvY3MuYXNwLm5ldC9lbi9sYXRlc3QvPC9jaXRlPjwvc21hbGw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRodW1ibmFpbCBhZGp1c3QxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgbW9iaWxlSGlkZT1cXFwiNzcyXFxcIiBjbGFzcz1cXFwiY29sLW1kLTIgY29sLXNtLTIgY29sLXhzLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEtc3RhY2sgZmEtNHhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtc3F1YXJlIGZhLXN0YWNrLTJ4IHRleHQtcHJpbWFyeVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY29kZSBmYS1zdGFjay0xeCBmYS1pbnZlcnNlXFxcIiBzdHlsZT1cXFwiY29sb3I6I0ZGQzEwN1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwIGNvbC1zbS0xMCBjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcHRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dC1pbmZvIGxlYWQgYWRqdXN0MlxcXCI+QW5ndWxhciAyPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cFxcXCI+PC9zcGFuPiBMZWFybiBvbmUgd2F5IHRvIGJ1aWxkIGFwcGxpY2F0aW9uc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBBbmd1bGFyIGFuZCByZXVzZSB5b3VyIGNvZGUgYW5kIGFiaWxpdGllcyB0byBidWlsZCBhcHBzIGZvciBhbnkgZGVwbG95bWVudFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LiBGb3Igd2ViLCBtb2JpbGUgd2ViLCBuYXRpdmUgbW9iaWxlIGFuZCBuYXRpdmUgZGVza3RvcC5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzcz1cXFwiYWRqdXN0MlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Hb29nbGU8L3A+IDxzbWFsbD48Y2l0ZSB0aXRsZT1cXFwiU291cmNlIFRpdGxlXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1nbG9iZVxcXCI+PC9pPmh0dHBzOi8vYW5ndWxhci5pby88L2NpdGU+PC9zbWFsbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGh1bWJuYWlsIGFkanVzdDFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBtb2JpbGVIaWRlPVxcXCI3NzJcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMiBjb2wtc20tMiBjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYS1zdGFjayBmYS00eFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zcXVhcmUgZmEtc3RhY2stMnggdGV4dC1wcmltYXJ5XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1yc3MgZmEtc3RhY2stMXggZmEtaW52ZXJzZVxcXCIgc3R5bGU9XFxcImNvbG9yOiNGRkMxMDdcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMCBjb2wtc20tMTAgY29sLXhzLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXB0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtaW5mbyBsZWFkIGFkanVzdDJcXFwiPmNoc2FrZWxsJ3MgQmxvZzwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXBcXFwiPjwvc3Bhbj4gQW55dGhpbmcgYXJvdW5kIEFTUC5ORVQgTVZDLFdlYlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQVBJLCBXQ0YsIEVudGl0eSBGcmFtZXdvcmsgJiBBbmd1bGFyLlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzPVxcXCJhZGp1c3QyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNocmlzIFNha2VsbGFyaW9zPC9wPiA8c21hbGw+PGNpdGUgdGl0bGU9XFxcIlNvdXJjZSBUaXRsZVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZ2xvYmVcXFwiPjwvaT4gaHR0cHM6Ly9jaHNha2VsbC5jb208L2NpdGU+PC9zbWFsbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwhLS0gQ29udHJvbHMgLS0+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImxlZnQgY2Fyb3VzZWwtY29udHJvbFxcXCIgaHJlZj1cXFwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1xcXCIgZGF0YS1zbGlkZT1cXFwicHJldlxcXCI+IDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFxcXCI+PC9zcGFuPiA8L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInJpZ2h0IGNhcm91c2VsLWNvbnRyb2xcXFwiIGhyZWY9XFxcIiNjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWNcXFwiIGRhdGEtc2xpZGU9XFxcIm5leHRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XFxcIj48L3NwYW4+IDwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPCEtLWVuZCBjYXJvdXNlbC0tPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9vdmVydmlldy5jb21wb25lbnQuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9vdmVydmlldy5jb21wb25lbnQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHsgQ2FtcGFpZ25Db21wb25lbnQgfSBmcm9tICcuL2NhbXBhaWduLmNvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBjb25zdCBDYW1wYWlnblJvdXRlczogUm91dGVbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnY2FtcGFpZ24nLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ2FtcGFpZ25Db21wb25lbnRcclxuICAgIH1cclxuXVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL2NhbXBhaWduL2NhbXBhaWduLnJvdXRlcy50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnXHJcbmltcG9ydCB7IENhbXBhaWduU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jYW1wYWlnbi5zZXJ2aWNlJ1xyXG4vL2ltcG9ydCB7IEZvcm1zTW9kdWxlLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENhbXBhaWduTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2FtcGFpZ24uaW50ZXJmYWNlJ1xyXG5cclxuaW1wb3J0IHsgQ29sb3JQaWNrZXJEaXJlY3RpdmUgfSBmcm9tICdjdC1hbmd1bGFyMi1jb2xvci1waWNrZXIvY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BvcC1jYW1wYWlnbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jYW1wYWlnbi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9jYW1wYWlnbi5jb21wb25lbnQuc2NzcycpLnRvU3RyaW5nKCldLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbXBhaWduQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwcml2YXRlIGJ0bjJWaXNpYmxlOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgcHJpdmF0ZSBjYW1wYWlnbjogQ2FtcGFpZ25Nb2RlbFxyXG4gICAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nID0gXCIjMTI3YmRjXCJcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIENhbXBhaWduU2VydmljZTogQ2FtcGFpZ25TZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY2FtcGFpZ24gPSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjFUZXh0OiAnQnV0dG9uIFRleHQnLFxyXG4gICAgICAgICAgICBidXR0b24yVGV4dDogJ0J1dHRvbiBUZXh0JyxcclxuICAgICAgICAgICAgYm9keVRleHQ6ICdCb2R5IFRleHQnLFxyXG4gICAgICAgICAgICBoZWFkZXJUZXh0OiAnSGVhZGVyIFRleHQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3BBcHBUeXBlcyA9IFtcclxuICAgICAgICB7IHZhbHVlOiAnY2VudGVyUG9wQXBwJywgZGlzcGxheTogJ0NlbnRlciBQb3BBcHAnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogJ3B1c2hQb3BBcHAnLCBkaXNwbGF5OiAnUHVzaCBQb3BBcHAnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogJ2Z1bGxzY3JlZW5Qb3BBcHAnLCBkaXNwbGF5OiAnRnVsbCBTY3JlZW4gUG9wQXBwJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6ICdub3RpZmljYXRpb25Qb3BBcHAnLCBkaXNwbGF5OiAnTm90aWZpY2F0aW9uIFBvcEFwcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAnZW1haWxzJywgZGlzcGxheTogJ0VtYWlscycgfVxyXG4gICAgXVxyXG4gICAgcHVibGljIGhpZGVCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5idG4yVmlzaWJsZSA9ICF0aGlzLmJ0bjJWaXNpYmxlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkQnRuKCkge1xyXG4gICAgICAgIHRoaXMuYnRuMlZpc2libGUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZXJhc2VEYXRhKCkge1xyXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5jYW1wYWlnbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW1wYWlnbi5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2FtcGFpZ25bcHJvcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzYXZlQ2FtcGFpZ24oKSB7XHJcbiAgICAgICAgdGhpcy5DYW1wYWlnblNlcnZpY2VcclxuICAgICAgICAgICAgLmNyZWF0ZUNhbXBhaWduKHRoaXMuY2FtcGFpZ24pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ3N0YXR1cyB0ZXh0OiAnICsgcmVzLnN0YXR1c1RleHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnZXJyb3I6ICcgKyByZXMuc3RhdHVzVGV4dClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9jYW1wYWlnbi9jYW1wYWlnbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpJ1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHBhdGg6IHN0cmluZyA9ICcvYXBpL2NhbXBhaWduL0NyZWF0ZUNhbXBhaWduJ1xyXG4gICAgLy9wcml2YXRlIGRhdGE6IGFueSA9IG51bGxcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSkgeyB9XHJcblxyXG4gICAgY3JlYXRlQ2FtcGFpZ24oZGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbXBhaWduc2VydmljZScsIGRhdGEpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnBvc3QodGhpcy5wYXRoLCBkYXRhKVxyXG4gICAgfVxyXG4gICAgZ2V0Q2FtcGFpZ24oYWxsID0gZmFsc2UpIHtcclxuXHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW1wYWlnbigpIHtcclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3NoYXJlZC9zZXJ2aWNlcy9jYW1wYWlnbi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSdcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCdcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdydcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSlcclxuXHJcbiAgICBwcml2YXRlIGFwaVVybDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NjQ5NzEnXHJcblxyXG4gICAgLy9naXZlIG1lIGluc3RhbmNlIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIGdldEpzb24ocmVzcG9uc2U6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRm9yRXJyb3JzKHJlc3BvbnNlOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8PSAzMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgICAgIGVycm9yWydyZXNwb25zZSddID0gcmVzcG9uc2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHRocm93IGVycm9yXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldChwYXRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuYXBpVXJsfSR7cGF0aH1gLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuY2hlY2tGb3JFcnJvcnMpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZ2V0SnNvbilcclxuICAgIH1cclxuXHJcbiAgICBwb3N0KHBhdGg6IHN0cmluZywgZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIGAke3RoaXMuYXBpVXJsfSR7cGF0aH1gLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmNoZWNrRm9yRXJyb3JzKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IE9ic2VydmFibGUudGhyb3coZXJyKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKHBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5hcGlVcmx9JHtwYXRofWAsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5jaGVja0ZvckVycm9ycylcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBPYnNlcnZhYmxlLnRocm93KGVycikpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5nZXRKc29uKVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKHBhdGg6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmFwaVVybH0ke3BhdGh9YCxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcilcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB1c2VyIGRldGFpbHMgYW5kIGp3dCB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlIHRvIGtlZXAgdXNlciBsb2dnZWQgaW4gYmV0d2VlbiBwYWdlIHJlZnJlc2hlc1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3NoYXJlZC9zZXJ2aWNlcy9hcGkudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL09ic2VydmFibGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvdGhyb3dcIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxvbCBjbGFzcz1cXFwiYnJlYWRjcnVtYlxcXCI+XFxyXFxuICAgIDxsaSBjbGFzcz1cXFwiYnJlYWRjcnVtYi1pdGVtXFxcIj48YSBocmVmPVxcXCIjXFxcIj5DYW1wYWlnbjwvYT48L2xpPlxcclxcbiAgICA8bGkgY2xhc3M9XFxcImJyZWFkY3J1bWItaXRlbVxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+Q29tcG9zZTwvYT48L2xpPlxcclxcbiAgICA8bGkgY2xhc3M9XFxcImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcXFwiPlN1bW1hcnk8L2xpPlxcclxcbjwvb2w+XFxyXFxuICAgIDxwb3AtdXNlcnMtcGFuZWw+PC9wb3AtdXNlcnMtcGFuZWw+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHQgY2FtcGFpZ24tbWFpbi1wYW5lbFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcInB1bGwtbGVmdFxcXCI+TmFtZSB0aGUgY2FtcGFpZ248L2g0PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aHIgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY2FtcGFpZ24tbmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmFtZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPiBUaW5jaWR1bnQgaW50ZWdlciBldSBhdWd1ZSBhdWd1ZSBudW5jIGVsaXQgZG9sb3IsIGx1Y3R1cyBwbGFjZXJhdCBzY2VsZXJpc3F1ZSBldWlzbW9kPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGhyIC8+XFxyXFxuICAgICAgICAgICAgPGg0PkNob29zZSB0aGUgdHlwZSBvZiBjYW1wYWlnbjwvaDQ+XFxyXFxuICAgICAgICAgICAgPGhyIC8+XFxyXFxuICAgICAgICAgICAgPCEtLSNyZWdpb24gUE9QQVBQIFRZUEVTLS0+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHlwZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IHR5cGUgb2YgcG9wQXBwVHlwZXNcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJ0eXBlXFxcIiBbdmFsdWVdPVxcXCJ0eXBlLnZhbHVlXFxcIiBbaWRdPVxcXCJ0eXBlLnZhbHVlXFxcIiAvPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGF0dHIuZm9yPVxcXCJ7e3R5cGUudmFsdWV9fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uL2ltYWdlcy97e3R5cGUudmFsdWV9fS5wbmdcXFwiIGFsdD1cXFwie3t0eXBlLnZhbHVlfX1cXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3t0eXBlLmRpc3BsYXl9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwhLS0jZW5kcmVnaW9uLS0+XFxyXFxuICAgICAgICAgICAgPGhyIC8+XFxyXFxuICAgICAgICAgICAgPGg0PnByZXZpZXc8L2g0PlxcclxcbiAgICAgICAgICAgIDxociAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3Bhbj5EZXZpY2U6PC9zcGFuPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImRldmljZXNcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAge3tidG5UZXh0fX1cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRldmljZXNcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgZGV2aWNlIG9mIGRldmljZXNcXFwiPjxhIGhyZWY9XFxcIiNcXFwiIChjbGljayk9J2NoYW5nZURldmljZSgkZXZlbnQpJz57e3BvcEFwcFR5cGVzLm5hbWV9fTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImRldmljZVNlbGVjdFxcXCI+RGV2aWNlOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZGV2aWNlU2VsZWN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5pUGhvbmU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EZXNjdG9wPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+aVBBRDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpcGhvbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3tjYW1wYWlnbi5oZWFkZXJUZXh0fX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7Y2FtcGFpZ24uYm9keVRleHR9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJjYW1wYWlnbi5idXR0b24xVGV4dFxcXCI+e3tjYW1wYWlnbi5idXR0b24xVGV4dH19PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcImNhbXBhaWduLmJ1dHRvbjJUZXh0XFxcIj57e2NhbXBhaWduLmJ1dHRvbjJUZXh0fX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxmb3JtICNlZGl0UG9wQXBwRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgW2hpZGRlbl09XFxcImVkaXRQb3BBcHBGb3JtLmZvcm0udmFsaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCAqbmdJZj1cXFwiY3JlYXRvci5kaXJ0eSAmJiAhY3JlYXRvci52YWxpZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdG9yIG5hbWUgaXMgcmVxdWlyZWQgPGk+KDUtNTAgY2hhcmFjdGVycyk8L2k+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCAqbmdJZj1cXFwidGl0bGUuZGlydHkgJiYgIXRpdGxlLnZhbGlkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJ0aXRsZS5lcnJvcnMucmVxdWlyZWRcXFwiPlRpdGxlIGlzIHJlcXVpcmVkPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJ0aXRsZS5lcnJvcnMucGF0dGVyblxcXCI+VGl0bGUgc2hvdWxkIGhhdmUgNS0yMCBjaGFyYWN0ZXJzPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCAqbmdJZj1cXFwiZGVzY3JpcHRpb24uZGlydHkgJiYgIWRlc2NyaXB0aW9uLnZhbGlkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJkZXNjcmlwdGlvbi5lcnJvcnMucmVxdWlyZWRcXFwiPkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJkZXNjcmlwdGlvbi5lcnJvcnMucGF0dGVyblxcXCI+RGVzY3JpcHRpb24gc2hvdWxkIGhhdmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVyczwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgKm5nSWY9XFxcImxvY2F0aW9uLmRpcnR5ICYmICFsb2NhdGlvbi52YWxpZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwibG9jYXRpb24uZXJyb3JzLnJlcXVpcmVkXFxcIj5Mb2NhdGlvbiBpcyByZXF1aXJlZDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBwb3BhcHAtZWRpdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS1QSUNUVVJFLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PnBpY3R1cmU8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tI3JlZ2lvbiBJQ09OUy0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBpY29ucy1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInB1bGwtbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGxhYmVsIGh0bWwuZm9yPVxcXCJhc2Rhc2RcXFwiPnBpY2sgYW4gaWNvbjwvbGFiZWw+PGJyIC8+PGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJpY29uc0dyb3VwXFxcIiBpZD1cXFwiYXNkYXNkXFxcIiAvPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPnVwbG9hZCBhbiBpbWFnZTwvbGFiZWw+PGJyIC8+PGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJpY29uc0dyb3VwXFxcIiAvPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImljb25zLWxpc3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbG9jayc+PC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1waWdneS1iYW5rJz48L3NwYW4+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWxvY2snPjwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcGlnZ3ktYmFuayc+PC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1sb2NrJz48L3NwYW4+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXBpZ2d5LWJhbmsnPjwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0jZW5kcmVnaW9uLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aHIgc3R5bGU9XFxcImJvcmRlci10b3A6IGRhc2hlZCAxcHggI2VlZTtcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tI3JlZ2lvbiBCQUNLR1JPVU5EIENPTE9SLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PmJhY2tncm91bmQgY29sb3I8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgVGluY2lkdW50IGludGVnZXIgZXUgYXVndWUgYXVndWUgbnVuYyBlbGl0IGRvbG9yLCBsdWN0dXMgcGxhY2VyYXQgc2NlbGVyaXNxdWUgZXVpc21vZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSNlbmRyZWdpb24tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyLXRvcDogZGFzaGVkIDFweCAjZWVlO1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0jcmVnaW9uIFRFWFQgQUxJR05NRU5ULS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PnRleHQgYWxpZ25tZW50PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYWxpZ24tbGVmdFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1hbGlnbi1jZW50ZXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYWxpZ24tcmlnaHRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tI2VuZHJlZ2lvbi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPVxcXCJib3JkZXItdG9wOiBkYXNoZWQgMXB4ICNlZWU7XFxcIiAvPlxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSNyZWdpb24gSEVBREVSLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PmhlYWRlcjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBub3BhZGRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XFxcImNhbXBhaWduLmhlYWRlclRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZXI9XFxcIk1lc3NhZ2VcXFwiIHJvd3M9XFxcIjNcXFwiIHN0eWxlPVxcXCJtYXgtd2lkdGg6NDM1cHg7d2lkdGg6MjAwcHg7XFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+b3BhY2l0eTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Zm9udDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSNlbmRyZWdpb24tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyLXRvcDogZGFzaGVkIDFweCAjZWVlO1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0jcmVnaW9uIEJPRFkgIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5ib2R5PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IG5vcGFkZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbKG5nTW9kZWwpXT1cXFwiY2FtcGFpZ24uYm9keVRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZXI9XFxcIk1lc3NhZ2VcXFwiIHJvd3M9XFxcIjNcXFwiIHN0eWxlPVxcXCJtYXgtd2lkdGg6NDM1cHg7d2lkdGg6MjAwcHg7XFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+b3BhY2l0eTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Zm9udDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSNlbmRyZWdpb24gLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aHIgc3R5bGU9XFxcImJvcmRlci10b3A6IGRhc2hlZCAxcHggI2VlZTtcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tI3JlZ2lvbiBCVVRUT04gMS0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5idXR0b24gMSB0ZXh0PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IG5vcGFkZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwiY2FtcGFpZ24uYnV0dG9uMVRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHN0eWxlPVxcXCJtYXgtd2lkdGg6NDM1cHg7d2lkdGg6MjAwcHg7XFxcIiBpZD1cXFwiZXgxXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPm9wYWNpdHk8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmZvbnQ8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+YnV0dG9uIDEgYmFja2dyb3VuZDwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PcGFjaXR5Ojwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlxcXCIgbWF4bGVuZ3RoPVxcXCIzXFxcIiBzdHlsZT1cXFwid2lkdGg6NDBweDtkaXNwbGF5OmlubGluZVxcXCIgcGxhY2Vob2xkZXI9XFxcIiVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db2xvcjo8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcXFwiIG1heGxlbmd0aD1cXFwiN1xcXCIgc3R5bGU9XFxcIndpZHRoOjgwcHg7ZGlzcGxheTppbmxpbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCIjMDAwMDAwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN0cm9rZTo8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcXFwiIG1heGxlbmd0aD1cXFwiM1xcXCIgc3R5bGU9XFxcIndpZHRoOjQwcHg7ZGlzcGxheTppbmxpbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwiYWRkQnRuKClcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0IGFkZC1idG5cXFwiPkFERCBCVVRUT048L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0jZW5kcmVnaW9uIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPVxcXCJib3JkZXItdG9wOiBkYXNoZWQgMXB4ICNlZWU7XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSNyZWdpb24gQlVUVE9OIDItLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImJ0bjJWaXNpYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5idXR0b24gMiB0ZXh0PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IG5vcGFkZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcImNhbXBhaWduLmJ1dHRvbjJUZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOjQzNXB4O3dpZHRoOjIwMHB4O1xcXCIgaWQ9XFxcImV4MVxcXCIgdHlwZT1cXFwidGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5vcGFjaXR5PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Zm9udDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PmJ1dHRvbiAyIGJhY2tncm91bmQ8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+T3BhY2l0eTo8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXFxcIiBtYXhsZW5ndGg9XFxcIjNcXFwiIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O2Rpc3BsYXk6aW5saW5lXFxcIiBwbGFjZWhvbGRlcj1cXFwiJVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29sb3I6PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlxcXCIgbWF4bGVuZ3RoPVxcXCI3XFxcIiBzdHlsZT1cXFwid2lkdGg6ODBweDtkaXNwbGF5OmlubGluZVxcXCIgcGxhY2Vob2xkZXI9XFxcIiMwMDAwMDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN0cm9rZTo8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXFxcIiBtYXhsZW5ndGg9XFxcIjNcXFwiIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O2Rpc3BsYXk6aW5saW5lXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJoaWRlQnRuKClcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0IGFkZC1idG5cXFwiPlJFTU9WRSBCVVRUT048L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyLXRvcDogZGFzaGVkIDFweCAjZWVlO1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSNlbmRyZWdpb24tLT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08L2Zvcm0+LS0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJyIC8+XFxyXFxuICAgICAgICAgICAgPGJyIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwhLS0jcmVnaW9uIE1vZGFsLS0+XFxyXFxuICAgIDwhLS08YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tbGdcXFwiIGRhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCIgZGF0YS10YXJnZXQ9XFxcIiNjb25maXJtTW9kYWxcXFwiPk9wZW4gTW9kYWw8L2J1dHRvbj4tLT5cXHJcXG4gICAgPCEtLTxkaXYgaWQ9XFxcImNvbmZpcm1Nb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+SGVhZGVyOiB7e2NhbXBhaWduLmhlYWRlclRleHR9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPkJvZHk6IHt7Y2FtcGFpZ24uYm9keVRleHR9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwic2F2ZUNhbXBhaWduKClcXFwiPlNlbmQ/PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2Pi0tPlxcclxcbiAgICA8IS0tI2VuZHJlZ2lvbi0tPlxcclxcbiAgICA8IS0tI3JlZ2lvbiBDQU5DRUwgU0FWRSBCVVRUT05TLS0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XFxcImVyYXNlRGF0YSgpXFxcIiBjbGFzcz1cXFwiYnRuQ2FuY2VsXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPmNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XFxcInNhdmVDYW1wYWlnbigpXFxcIiBjbGFzcz1cXFwiYnRuU2F2ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5zYXZlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwhLS0jZW5kcmVnaW9uLS0+XFxyXFxuICAgIDxiciAvPlxcclxcblxcclxcblxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9jYW1wYWlnbi9jYW1wYWlnbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9jYW1wYWlnbi5jb21wb25lbnQuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9jYW1wYWlnbi5jb21wb25lbnQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2NhbXBhaWduLmNvbXBvbmVudC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL2NhbXBhaWduL2NhbXBhaWduLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImg0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEuMWVtOyB9XFxuXFxuLmNhbXBhaWduLW1haW4tcGFuZWwge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5jYW1wYWlnbi1tYWluLXBhbmVsIC5pcGhvbmUge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vd3d3cm9vdC9pbWFnZXMvcGFnZXMvY2FtcGFpZ24vaXBob25lLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAuY2FtcGFpZ24tbWFpbi1wYW5lbCAuaXBob25lIC5idXR0b25zIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4vKk5BTUUgVEhFIENBTVBBSUdOKi9cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLypDSE9PU0UgVEhFIFRZUEUgT0YgQ0FNUEFJR04qL1xcbi50eXBlcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcblxcbi50eXBlcyA+IGRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDsgfVxcblxcbi8qLnR5cGVzID4gZGl2IGxhYmVsLCAudHlwZXMgPiBkaXYgaW5wdXQge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgfSovXFxuLypQUkVWSUVXKi9cXG4jZGV2aWNlU2VsZWN0IHtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4vKlRPRE86IE1PVkUqL1xcbi5pY29ucy1jb250YWluZXIgdWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmljb25zLWNvbnRhaW5lciB1bCBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG51bC5pY29ucy1saXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG51bC5pY29ucy1saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IH1cXG5cXG4ubm9wYWRkaW5nIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9XFxuXFxuLmFkZC1idG4ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xcbiAgY29sb3I6ICNhZWFlYWU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uYWRkLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogI2VlMjY0ZDsgfVxcblxcbi5idG5DYW5jZWwge1xcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZTI2NGQ7XFxuICBjb2xvcjogI2VlMjY0ZDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XFxuXFxuLmJ0blNhdmUge1xcbiAgYmFja2dyb3VuZDogI2VlMjY0ZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZTI2NGQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XFxuXFxuLmJ0bkNhbmNlbCwgLmJ0blNhdmUge1xcbiAgcGFkZGluZzogMnB4IDQ1cHg7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHdpZHRoOiAxNTBweDsgfVxcblxcbi8qYnJlYWRjcnVtcCovXFxuLmJyZWFkY3J1bWIgPiBsaSArIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIxOTJcXFwiO1xcbiAgY29sb3I6ICM3Nzc7IH1cXG5cXG4uYnJlYWRjcnVtYiB7XFxuICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuXFxuLmJyZWFkY3J1bWIgbGkgYSB7XFxuICBjb2xvcjogIzc3NzsgfVxcblxcbi5icmVhZGNydW1iLWl0ZW0uYWN0aXZlIHtcXG4gIGNvbG9yOiAjZWUyNjRkOyB9XFxuXFxuLyplbmQgYnJlYWRjcnVtcCovXFxuLmdseXBoaWNvbjpob3ZlciB7XFxuICBjb2xvcjogI2VlMjY0ZDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi8qLmFsaWduLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbn0qL1xcbi8qI3JlZ2lvbiByYWRpbyB0eXBlcyovXFxuLnR5cGVzIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDsgfVxcblxcbi50eXBlcyBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnR5cGVzIGxhYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMXB4O1xcbiAgaGVpZ2h0OiAxMXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAtMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZTI2NGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG5cXG4udHlwZXMgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUyNjRkOyB9XFxuXFxuLnR5cGVzIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBjb2xvcjogI2VlMjY0ZDsgfVxcblxcbi8qI2VuZHJlZ2lvbiovXFxuLyojcmVnaW9uIGdyb3VwIG5hbWUqL1xcbi5jYW1wYWlnbi1uYW1lIGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICM4NWNlYzU7IH1cXG5cXG4uY2FtcGFpZ24tbmFtZSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLyojZW5kcmVnaW9uKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9jYW1wYWlnbi9jYW1wYWlnbi5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUjBBQUFKV0NBWUFBQUJsSFZOSkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBMlJwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURJeElEYzVMakUxTkRreE1Td2dNakF4TXk4eE1DOHlPUzB4TVRvME56b3hOaUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBGTmpVNU5UVTBOekpHUXpGRk5qRXhPVE15TjBWRVJFTkNRVGMwTlRoRE1TSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzNSVGhFUTBWRk5rTXhNemt4TVVVMlFqQXhSVVV5UWpFNU9UQkdNRVV3UVNJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvM1JUaEVRMFZGTlVNeE16a3hNVVUyUWpBeFJVVXlRakU1T1RCR01FVXdRU0lnZUcxd09rTnlaV0YwYjNKVWIyOXNQU0pCWkc5aVpTQlFhRzkwYjNOb2IzQWdRMU0xSUZkcGJtUnZkM01pUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRk5qVTVOVFUwTnpKR1F6RkZOakV4T1RNeU4wVkVSRU5DUVRjME5UaERNU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBGTmpVNU5UVTBOekpHUXpGRk5qRXhPVE15TjBWRVJFTkNRVGMwTlRoRE1TSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QZys2c0ZFQUFCRm9TVVJCVkhqYTdOMTdiSjNuWGNEeEo2NlRPUGMyU1IyY3BHMUNVbkpwUThWbzBxWXJHdXdmTm9aV0FVSURCcU1Ja0tBRGhCQWJZdUlQYmhPdy9jRVFIWk1ZdHc0a0pDWVFCUldZTkxhU0tpVzBUVU5UdXFaWjRqVE54V21TNXA0NGRtNDh2M09PaDhuc3hJNlBqODk1enVjai9kUmJHcDg4eC9ubWZkL3pYcVk5ODh3enFRQmRlV1lsS051RlBBT3Qvb3ZvYklIWHVDTFAranhyOG54cm5udnlkT2ZweVRNL3orMitGMmt6Wi9LY3kzTThUMTl0OXVYcHpmTjZiUzZJenRqRTFzb2plZDZUNTZFOG0wUUZ2c244Mml6TjgrMGovUGVyZWI2ZTU3L3liTXZ6YkMxRW9sTVRDL2RZbmcvbStlN2FyaEp3NnpwcWV3WXhINm45dThONS9qWFAwM20rbktlLzNhSVRXelEvbk9jbmExczF0L2srZ1VuL3cvMm5heE83Wi8rUTV5L3piSm1LSWpiU1hYaytuZWRnbnFmeXZGZHdZRXAyeng3UDh4OTVYc3Z6YzZtQkg4UTBLanFyYXBIWm0rZFg4eXowdmtOVGlBOXBQcGVxQjZJL25tZDJxMGRuY1o3UHB1cEJyTmkzbk80OWhxYTBKTThmNU5tVDUyY25zdzBkay9qei9rS3FIa0YvUW15Z1pjU3BLSCthcXA5OGZXZXJSQ2VPbU1mQnFUOU9QdTZHVnZWZ0xUeWZyUGRHUTcyakU1dGxMK2Q1dC9jTVdsNTh5UE9KVkQzWDU5NW1pMDZjVy9OVWJiTnN0dmNLaXZLdVBDL2srVUN6UkNmMkFaOU4vM2NTRWxDZU9GUVNKeForZEtxanN6clAxbFM5WkFFb2YzZnJ5VlE5empNbDBZblA5NS9MczlKN0FXMGxqdk44cXRIUmlZTktjZjNHdDFoL2FFc2Z5L003allyTzhqeGZTZFZqT1VENytvMDhQei9aMFlsUHBwNnBoUWZnTTZsNjBmYWtSZWN2MHNqMzd3RGEwNHc4WHh6UGhzaDRvdk5MZVQ1a2pZSHIzSm5uQzJtTWQ0d1lhM1R1VHhNNFdnMFU3M3Z5L0VxOW9qTzlWckdaMWhXNGdkOUsxZHZZVERnNlVhL3ZzSjdBVGNTTndENTdzeDkwczl1VkxrdlZqOFhnRzFhdFdwV1dMRm1TenB3NWszYnQycFV1WDc1c1VSanl2WG0rTDgrLzNHcDA0cVkrYzYwalE1WXZYNTdXckZsVCtmdmJiNzg5WGJ0MkxiMzIybXNXaHVIaWxzUmZ5bk5sdkx0WDhkSDRqMW8vaHBzM2I5NE4veGxTOVJLcFVUL3B2bEYwZmpNMS9zYnROTGtqUjQ1VXRtNkdIRDU4MktJd2tsOGZyUitqN1Y3RjFlT1BXVGV1ZC9Ma3lmVDg4OCtuN3U3dWRQcjA2WFQwNkZHTHdramlOSnYzcCtvVkRHT0t6c2RzNVRDYWlFME0zTVFUSTBWbnBMREVUdnFIclJjd1FlOUxJOXo2WnFUb3hNSGpPZFlMbUtEb3k0K05KVHFQV3l1Z1RqNThzK2pFWTM4ZnRrNUFuYXpMcytGRzBmbWhQTk9zRTFCSEg3aFJkRDVvZllCR1JTZnVDdmlJOVFIcUxBN1p6QmtwT25ITFFiZXZBT290emdkODkwalJlZFRhQUpQazBaR2k0NEY1VTJER2pCbXBvOFBKM3hUdndlR2JQVVB4ZWRDNk5HaGJzN016M1h2dnZXblpzbVdWNk1RRmxIRk4wKzdkdTlPSkV5Y3NFQ1Y2MS9WYk9pdnlMTEF1alFuTzVzMmIwOHFWS3l2QkNkT21UVXNMRnk1TUR6MzBVQ1ZFVUtBbHRmbEdkTlpiazhaWXYzNzlxUGVnaWZoczJMQWhkWFYxV1NoSzlHM0RkNjlFcDBGYk9VdVhMcjNoajRuak8zRjN2ajE3OWt6NDZ3MXRRY1hNbk5tOEgwekc3VTR2WExoUXVWZlA0T0NnYjVSeXJjM3ozRkIwVmxtUHlUZG56cHd4SFRTZVAzLytoTDlXZkoyTkd6ZW1SWXNXdGM1MzVOcTE2YVdYWG5KY3ExeXJodTllM1dVOUp0L1ZxMWZIOU9PdVhMa3k0YTgxYTlhc2xnck8wSlpnVDArUGI1UnlMUldkQmp0Mzd0eVlkaC9pazZ5Sk9uLytmSHI5OWRkYjZra054NDRkcTh0dUpjMGRuYUhkSzMrOE5FQjhOTjdiMjF2WmpSaE5mMzkvT25Ub1VGMiszcjU5KzlMKy9mdlQ3Tm16SzhkMDRoaFBNeG82cHVONFR2R1dEWS9PSGRhak1TSTZjK2ZPclJ3c3Z0N0F3RURsbUVZOWRxK0c3OUxGRmxZTVRMRUZROUc1UGJrZmNrUHQzTGt6OWZYMVZjN0ppUURGbi9USGp4K3ZiSlZjdW5USkFsRjhkT1piaThhTDR4Y3gwRWJpVGhZellndkgvWkNCUnBuVmtXNythR0dBdW9ub3VEMHAwTEJkcklpT1l6cEFvMHozcVJYUThOMHJBTkVCUkFkQWRBRFJBUkFkUUhRQTBRRVFIVUIwQUVRSEVCMEEwUUZFQnhBZEFORUJSQWRBZEFEUkFVaDFlUHhNVjFkWFdyTm1UZXJvMEM4bzNjbVRKOU9iYjc0NXRkSHA3dTZ1UEI0WEtOL2l4WXNuSEIyYko4Q1lUWnMyOGNma2lRN1FVS0lEaUE0Z09nQ2lBNGdPZ09nQW9nT0lEb0RvQUtJRElEcUE2QUNJRGlBNmdPZ0FpQTRnT2dDaUE0Z09nT2dBb2dPSURvRG9BS0lESURxQTZBQ2lBeUE2Z09nQWlBNGdPZ0NpQTRnT0lEb0FvZ09JRG9Eb0FLSURJRHFBNkFDaUF5QTZnT2dBaUE0Z09nQ2lBNGdPSURvQW9nT0lEb0RvQUtJRGlBNkE2QUNpQXlBNmdPZ0FpQTRnT29Eb0FJZ09JRG9Bb2dPSURvRG9BS0lEaUE2QTZBQ2lBeUE2Z09nQW9tTUpBTkVCUkFkQWRBRFJBUkFkUUhRQTBRRVFIVUIwQUVRSEVCMEEwUUZFQnhBZEFORUJSQWRBZEFEUkFSQWRRSFFBMFFFUUhVQjBBRVFIRUIxQWRBQkVCeEFkQU5FQlJBZEFkQURSQVVRSFFIUUEwUUVRSFVCMEFFUUhFQjFBZEFCRUJ4QWRBTkVCUkFkQWRBRFJBVVFIUUhRQTBRRVFIVUIwQU5FQkVCMUFkQUJFQnhBZEFORUJSQWNRSFFEUkFVUUhRSFFBMFFFUUhVQjBBTkVCRUIxQWRBQkVCeEFkUUhRQVJBY1FIUURSQVVRSFFIUUEwUUZFQjBCMEFORUJFQjFBZEFCRUJ4QWRRSFFBUkFjUUhRRFJBVVFIUUhRQTBRRkVCMEIwQU5FQkVCMUFkQURSQVJBZFFIUUFSQWNRSFFEUkFVUUhFQjBBMFFGRUIwQjBBTkVCRUIxQWRBRFJBUkFkUUhRQVJBY1FIUURSQVVRSEVCMEEwUUZFQjBCMEFORUJSQWRBZEFEUkFSQWRRSFFBUkFjUUhVQjBBRVFIRUIwQTBRRkVCMEIwQU5FQlJBZEFkQURSQVJBZFFIUUEwUUVRSFVCMEFFUUhFQjBBMFFGRUJ4QWRBTkVCUkFkQWRBRFJBUkFkUUhRQTBRRVFIVUIwQUVRSEVCMEEwUUZFQnhBZEFORUJSQWRBZEFEUkFVUUhRSFFBMFFFUUhVQjBBRVFIRUIxQWRBQkVCeEFkQU5FQlJBZEFkQURSQVVRSFFIUUEwUUVRSFVCMEFFUUhFQjFBZEFCRUJ4QWRBTkVCUkFjUUhRRFJBVVFIUUhRQTBRRVFIVUIwQU5FQkVCMUFkQUJFQnhBZEFORUJSQWNRSFFEUkFVUUhRSFFBMFFGRUIwQjBBTkVCRUIxQWRBQkVCeEFkUUhRQVJBY1FIUURSQVVRSFFIUUEwUUZFQjBCMEFORUJFQjFBZEFCRUJ4QWRRSFFBUkFjUUhRRFJBVVFIRUIwQTBRRkVCMEIwQU5FQkVCMUFkQURSQVJBZFFIUUFSQWNRSFFEUkFVUUhFQjBBMFFGRUIwQjBBTkVCUk1jU0FLSURpQTZBNkFDaUF5QTZnT2dBb2dNZ09vRG9BSWdPSURvQW9nT0lEaUE2QUtJRGlBNkE2QUNpQXlBNmdPZ0FvZ01nT29Eb0FJZ09JRHFBNkFDSURpQTZBS0lEaUE2QTZBQ2lBNGdPZ09nQW9nTWdPb0RvQUlnT0lEcUE2QUNJRGlBNkFLSURpQTZBNkFDaUE0Z09nT2dBb2dNZ09vRG9BS0lESURxQTZBQ0lEaUE2QUtJRGlBNGdPZ0NpQTRnT2dPZ0FvZ01nT29Eb0FLSURJRHFBNkFDSURpQTZnT2dBaUE0Z09nQ2lBNGdPZ09nQW9nT0lEb0RvQUtJRElEcUE2QUNJRGlBNmdPZ0FpQTRnT2dDaUE0Z09nT2dBb2dPSURvRG9BS0lESURxQTZBQ2lBeUE2Z09nQWlBNGdPZ0NpQTRnT0lEb0FvZ09JRG9Eb0FLSURJRHFBNkFDaUF5QTZnT2dBaUE1UWFIUUdCd2V0SXJTSmdZR0JDZjhjblJQOUNZNGNPWksyYk5tU2JydnROdThJRks2L3YzL3FveFBPblR2bjNRQWFzM3NGSURxQTZBQ0lEaUE2Z09nQWlBNGdPZ0NpQTRnT0lEb0FvZ09JRG9Eb0FLSURNTEpPUzhETnpKdzVNODJiTnkvTm1UTW5kWFYxcGM3T3pqUnQyclIwK2ZMbGRPWEtsWFQrL1BuS1BaWE9uajJicmwyN1pzRVFIY1p2L3Z6NWFkbXlaZW5PTys5TWMrZk9IZFAvRXhFNmNlSkU1VzZTZlgxOWxTQ0I2RENxMkhwWnNtUkpXclZxVlZxd1lNSDR2NW55RmxCM2QzZGw3cnZ2dm5UZ3dJSFUyOXViTGw2OGFIRVJIZjYvTys2NG94S0syTUtwaDdobjlvb1ZLOUxkZDk5ZENjL2V2WHR0K1NBNlZMZHUxcTVkV3dsRS9IMjlkWFIwcE5XclY2ZWxTNWVtSFR0MnBOT25UMXYwTnVmVHF6WVdCNGczYjk2Y1ZxNWNPU25CR1c3MjdObVZyM1hQUGZkWWVGczZ0S09Jd0taTm15cC9iZGlmY0htckozYmg0aE93Tjk1NHc1dlF4bHM2NXkxRGU0bmY5QTgvL0hCRGd6TmNIS2lPb1MxZGkraGN0Zzd0SXc3d2J0eTRzUktlcWJSbXpacTBmUGx5YjBqN09lT1lUcHU1Ly83N0t5ZjZOWVBZMVdxVzEwSmpkNi9PV0liMjBOUFRVem5ocjVtMnVoNTQ0SUZKUDRoTlV4bU02SnkxRHVXTEUvZldyVnZYZEs4cnpndUtqK3RwQ3dONStpTTZwNnhGK2VJMzlsUWZ4eGxObk1jVFVhUjRwNGQycjY3bU9Xazl5alYwZG5Dem1qNTl1dk4zMnNPcG9laUVJOWFqWEhFc1o4YU1HVTM5R3VOeUNZcDNkSGgwRGxtUGNyWENSOU96WnMxS0N4Y3U5R2FWclc5NGRONnlIbVdLTFp5NG1MTVZ4Qlh1RkczLzhPanN0aDVsaXEySFZ2bElldEdpUmQ2d3N1MGRIaDBYd2hUcVZ1NkxNMVhpUk1HNFBvdGk3UjRlbmE5Wmp6TEZMVVpiUld5UnRkTHJaZHplR0I2ZFBjbVp5VVdhcW9zNjIrWDFNbWJIVXUwRHE2SG94TGs2MjYxTGVWcnRwRHNuQ1JicjVhRy9HYjREdmMyNmxDZE9EUFI2YVFJdmpoU2RyMXFYOGx5OWVyV2xYcS83S0JmcnVaR2lzelZWTDhpaUlQRllHTkZoaWwycTllV2Jvbk1oejdQV3B5ejkvZjFlTDFQdFA5T3dPNVJlZjFMRVAxcWZzc1RUTjF0SlBDbVU0dnpUOEgrNFBqcFB4eGF1TlNwSEt6M3lKWUpqOTZwSVQ5OG9PbkZCMXBldFVUbmVlZWVkbG5tdDhVaGlpdk5TcXA0SE9HcDB3bFBXcVJ3REF3TXRzN1Z6OU9oUmIxaDV2bkQ5dnhncE9uOWYyK0toRUljT05mK2RTd1lIQjlPeFk4ZThXV1dKaDlqLzdWaWlNNWpuejYxWE9RNGZQdHoweDBvT0hEaVFybDI3NXMwcXk5L2xPVDZXNklRblUvVWpkQW9RV3hGdnZkVzh0MHlLSU83YnQ4OGJWWjdQalBRdlI0dk8yM24reEpxVlkrL2V2ZW5TcFV0Titkb2lPQkZHaXZKTW5oM2ppVTc0ZEhMbGVWRmJPODM0L1BBTEZ5NVVna2h4Zm51MC8zQ2o2TVJIQ1orMGR1V0k0eWJOZExBMmp1SHMzTG5UdVRubCtXS2VGMjRsT3VHUGtsdVpGaU4razcveXlpdnA0c1dMVGZGNmR1L2U3ZHljOHNRMzE4ZHY5QU51RnAyNEFQUm40dnZWV3Bhem0vWGlpeTlPK2ZHZGd3Y1AycTBxMCsvbWVYTWkwUWx4U2ZxVDFySWNaOCtlVFMrODhNS1VIYnlOODRaZWZmVlZiMFI1L2p2UHAyNzJnOFo2Rit6WVhIckZtcFlqemxMZXRtMWI1VUJ1SS9YMjlsYU80emducHpqeGpmUVRxWG9iaTdwRUovYlRQcFJxenlLbURIR0I1ZGF0VzlQYmI3ODk2VjhyZHVlMmI5K2VkdTNhSlRobCt1VTgvek9XSHppZTUzM0U1NjAva2x5RlhwU2hHT3pZc1dQU0RqREhHZEZidG14cFNOeVlFbitXNS9Oai9jSGp2UXYyditYNXhlVEV3ZUwwOWZWVkxyaGNzV0pGWldiT25Ebmhuek4rdmpoWWZQTGtTUXRjcnEvaytlaDQvb2RidWZYKzUvTEVFOXgrejNxWEpjNlhpVWpFR2NMeGlOK2VucDYwZVBIaWNUMmhJUTVTSHpseXBIS3d1TkhIaTJpNE9CZm5CMVAxZXMxSmpVNzQvZHBmaGFkQWNUUDMyUEtKaVFmZ3hWTkM0K21iOFNDOHJxNnV5aE1iWW1MWExPN0JISEdKT3hUR09UY3VaMmdiY1orYzk2VmJPTTQ3a1ljTVJYamkzcEp4VVpmbmhoUXFEdnFlT25XcU1sRHpiSjdIMGkxZUpqWFJCMGZIK1RzL1VJc1BVTDYveWZQK05JSHJNdXZ4dFBwL3pyTTV6eTd2QnhRcm5tVVU1K3ZGdVRnVCtwaXpvMDR2S0Q2ZjM1amMvQXRLdEQvUGUxTDF6aE1UMWxISEZ4YTdXSEdkMXZmbk9laDlncFlYWjNIR3A5VWI4anhmcjUrMFl4SmVhTnk4WjEycVhvUGhvd3hvVGR2elBKTG5pVHhuNi9rVGQwelNDNDZ0bmwvTHN6WlZEenhkOVI1Q1M0aEwveitTWjFPZWJaUHhCVG9tK1JjUU43Nk5BMC9yVS9WNGp5MGZhRTV4MmYvanRRMkZ2NTdNRFlXT0J2MkM0cnF0T041elY1NVA1T24xSHNPVWl6MlN2OHJ6M2p3UHBPb3o3eTVQOWhmdGFQQXZNbTZCR21jeHI4N3phS3Bldy9XbTl4NGFKdlkyNGhyS0g4L1RuZWVuOG53MU5mQkdmWjFUOUF1UFgrRFcycVRhSmwyY2NCU25WWDlYbmxtK042QnV2OWUrbG1kTG5uL1A4NlUweFNmemRqYkp3dXlxelIvbW1aNnFIOUZ0cW0zeXJhdEZhWW52SDdpaHVBN3E2N1hmUzNIdTNQYmFOTlZsL3AxTnVIQng1N0dYYXpQYzdEd3JhL0hweVRNdlZhOTI3Nno5L1l3OGMzemZVYkJUdFMyWHVBVGhmSjUzOHNUalBRN25PVkQ3NzAzdmZ3VVlBQ0E4UGR4eTlsc05BQUFBQUVsRlRrU3VRbUNDXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3d3d3Jvb3QvaW1hZ2VzL3BhZ2VzL2NhbXBhaWduL2lwaG9uZS5wbmdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQgeyBHcm91cENvbXBvbmVudCB9IGZyb20gJy4vZ3JvdXAuY29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyb3VwUm91dGVzOiBSb3V0ZVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdncm91cCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBHcm91cENvbXBvbmVudFxyXG4gICAgfVxyXG5dXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvZ3JvdXAvZ3JvdXAucm91dGVzLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9wLWdyb3VwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2dyb3VwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2dyb3VwLmNvbXBvbmVudC5zY3NzJykudG9TdHJpbmcoKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91cENvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBkZXZpY2VzOiBzdHJpbmdbXSA9IFsnRGVzY3RvcCcsICdBbmRyb2lkJywgJ0lPUyddXHJcbiAgICBwcml2YXRlIGRkbFRyaWdnZXJzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAnQ291bnRyeScsXHJcbiAgICAgICAgJ0xhbmd1YWdlJyxcclxuICAgICAgICAnUmVnaXN0cmF0aW9uIGRhdGUnLFxyXG4gICAgICAgICdPcGVuIHRyYWRlIG9uJyxcclxuICAgICAgICAnQmFsYW5jZSBiZXR3ZWVuJyxcclxuICAgICAgICAnVm9sdW1lIGJldHdlZW4nLFxyXG4gICAgICAgICdXb24gaW4gYSByb3cnLFxyXG4gICAgICAgICdMb3NzIGluIGEgcm93JyxcclxuICAgICAgICAnQWdlJyxcclxuICAgICAgICAnQmFsYW5jZSBhYm92ZScsXHJcbiAgICAgICAgJ1ZvbHVtZSBhYm92ZScsXHJcbiAgICAgICAgJ1RvdGFsIG9wZW4gdHJhZGUnLFxyXG4gICAgICAgICdNb3JlIHRoZW4gNTAlIHRyYWRlJyxcclxuICAgICAgICAnTnVtYmVyIG9mIGRlcG9zaXRzJyxcclxuICAgICAgICAnRGVwb3NpdCBhbW91bnQnLFxyXG4gICAgICAgICdQTkwgYmV0d2VlbicsXHJcbiAgICAgICAgJ0NvcHkgc3BlY2lmaWMgdHJhZGVyJyxcclxuICAgICAgICAnQ29weSBzcGVjaWZpYyBhc3NldCcsXHJcbiAgICAgICAgJ1RyYWRlIG1vcmUgYXQgbmlnaHQnLFxyXG4gICAgICAgICdUcmFkZSBtb3JlIGluIHRoZSAnLFxyXG4gICAgICAgICdVc2VkIGN1c3RvbSBmZWF0dXJlJyxcclxuICAgICAgICAnV2FzIG9uIGN1c3RvbSBwYWdlJyxcclxuICAgICAgICAnQ2xpY2tlZCBjdXN0b20gYnV0dG9uJyxcclxuICAgICAgICAnT25lIHRyYWRlIGFtb3VudCBpcycsXHJcbiAgICAgICAgJ0FsbCB1c2VycydcclxuXHJcbiAgICBdXHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlRWxlbWVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVFbGVtZW50KGUpIHtcclxuICAgICAgICBlLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9ncm91cC9ncm91cC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG9sIGNsYXNzPVxcXCJicmVhZGNydW1iXFxcIj5cXHJcXG4gICAgPGxpIGNsYXNzPVxcXCJicmVhZGNydW1iLWl0ZW1cXFwiPjxhIGhyZWY9XFxcIiNcXFwiPkdyb3VwPC9hPjwvbGk+XFxyXFxuICAgIDxsaSBjbGFzcz1cXFwiYnJlYWRjcnVtYi1pdGVtXFxcIj48YSBocmVmPVxcXCIjXFxcIj5DcmVhdGUgYSBncm91cDwvYT48L2xpPlxcclxcbiAgICA8bGkgY2xhc3M9XFxcImJyZWFkY3J1bWItaXRlbVxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+VGFyZ2V0IHVzZXJzPC9hPjwvbGk+XFxyXFxuICAgIDxsaSBjbGFzcz1cXFwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVxcXCI+U2F2ZTwvbGk+XFxyXFxuPC9vbD5cXHJcXG48cG9wLXVzZXJzLXBhbmVsPjwvcG9wLXVzZXJzLXBhbmVsPlxcclxcbjwhLS0jcmVnaW9uIENBTkNFTCBTQVZFIEJVVFRPTlMtLT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJjcmVhdGVHcm91cCgpXFxcIiBjbGFzcz1cXFwiYnRuQ3JlYXRlR3JvdXBcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+Y3JlYXRlIGEgZ3JvdXA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48YnIgLz5cXHJcXG48IS0tI2VuZHJlZ2lvbi0tPlxcclxcbjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgIDxoNCBjbGFzcz1cXFwicHVsbC1sZWZ0XFxcIj5OYW1lIHRoZSBncm91cDwvaDQ+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8aHIgLz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBncm91cC1uYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hbWUgb2YgdGhlIEdyb3VwXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxsYWJlbD4gVGluY2lkdW50IGludGVnZXIgZXUgYXVndWUgYXVndWUgbnVuYyBlbGl0IGRvbG9yLCBsdWN0dXMgcGxhY2VyYXQgc2NlbGVyaXNxdWUgZXVpc21vZDwvbGFiZWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxociAvPlxcclxcbiAgICAgICAgPGg0PkNob29zZSB0aGUgdHlwZSBvZiBjYW1wYWlnbjwvaDQ+XFxyXFxuICAgICAgICA8aHIgLz5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZGV2aWNlc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IGRldmljZSBvZiBkZXZpY2VzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBbdmFsdWVdPVxcXCJkZXZpY2VcXFwiIG5hbWU9XFxcImRldmljZVxcXCIgW2lkXT1cXFwiZGV2aWNlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgYXR0ci5mb3I9XFxcInt7ZGV2aWNlfX1cXFwiPnt7ZGV2aWNlfX08L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48IS0tI3JlZ2lvbiBGSUxURVJTLS0+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGg0IGNsYXNzPVxcXCJwdWxsLWxlZnRcXFwiPkZpbHRlcnM8L2g0PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGhyIC8+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZmlsdGVyc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgW2hpZGRlbl09XFxcImhpZGVFbGVtZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzZWwxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCB0cmlnZ2VyIG9mIGRkbFRyaWdnZXJzXFxcIiBuYW1lPVxcXCJ0cmlnZ2VyXFxcIj57e3RyaWdnZXJ9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInNlbDJcXFwiPmZyb206PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzZWwyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBhZ2Ugb2YgWzE4LDE5LDIwLDIxXVxcXCI+e3thZ2V9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInNlbDJcXFwiPnRvOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic2VsMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgYWdlIG9mIFsyMSwyMiwyMywyNF1cXFwiPnt7YWdlfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXNjcmVlbnNob3QnPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xNGsgdGFyZ2V0ZWQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGUnPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4wLjUwMEsgZW1haWxhYmxlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXNpZ25hbCc+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjEuNTAwSyBvbmxpbmU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tY2lyY2xlLWFycm93LXJpZ2h0Jz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MUsgb2ZmbGluZTwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiIChjbGljayk9XFxcInRvZ2dsZUVsZW1lbnQoJGV2ZW50KVxcXCI+WDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiIFtoaWRkZW5dPVxcXCJoaWRlRWxlbWVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic2VsMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgdHJpZ2dlciBvZiBkZGxUcmlnZ2Vyc1xcXCIgbmFtZT1cXFwidHJpZ2dlclxcXCI+e3t0cmlnZ2VyfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzZWwyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5tb3JlIHRoYW48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzZWwyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yIHdlZWtzPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1zY3JlZW5zaG90Jz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTRrIHRhcmdldGVkPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MC41MDBLIGVtYWlsYWJsZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1zaWduYWwnPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xLjUwMEsgb25saW5lPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWNpcmNsZS1hcnJvdy1yaWdodCc+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjFLIG9mZmxpbmU8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVFbGVtZW50KCRldmVudClcXFwiPlg8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzZWwxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCB0cmlnZ2VyIG9mIGRkbFRyaWdnZXJzXFxcIiBuYW1lPVxcXCJ0cmlnZ2VyXFxcIj57e3RyaWdnZXJ9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInNlbDJcXFwiPmN1cnJlbmN5OjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic2VsMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+R0JQPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwic2VsMlxcXCI+YmV0d2Vlbjo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInNlbDJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGFnZSBvZiBbJzIwMGsnLCczMDBrJ11cXFwiPnt7YWdlfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzZWwyXFxcIj5hbmQ6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzZWwyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBhZ2Ugb2YgWycyMDBrJywnMzAwayddXFxcIj57e2FnZX19PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1zY3JlZW5zaG90Jz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTRrIHRhcmdldGVkPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MC41MDBLIGVtYWlsYWJsZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1zaWduYWwnPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xLjUwMEsgb25saW5lPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWNpcmNsZS1hcnJvdy1yaWdodCc+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjFLIG9mZmxpbmU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVFbGVtZW50KCRldmVudClcXFwiPlg8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9mb3JtPlxcclxcblxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48IS0tI2VuZHJlZ2lvbi0tPlxcclxcbjwhLS0jcmVnaW9uIENBTkNFTCBTQVZFIEJVVFRPTlMtLT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJzYXZlR3JvdXAoKVxcXCIgY2xhc3M9XFxcImJ0blNhdmVHcm91cFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5zYXZlIHRoZSBncm91cDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxiciAvPlxcclxcbjwhLS0jZW5kcmVnaW9uLS0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2dyb3VwLmNvbXBvbmVudC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2dyb3VwLmNvbXBvbmVudC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3JvdXAuY29tcG9uZW50LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC41ZW07XFxuICBoZWlnaHQ6IDAuNWVtOyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiBzbGF0ZWdyYXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICNiOGMwYzg7IH1cXG5cXG5ib2R5IHtcXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiBzbGF0ZWdyYXk7XFxuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICNiOGMwYzg7IH1cXG5cXG5oNCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxLjFlbTsgfVxcblxcbi5tYWluLXBhbmVsIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBib3gtc2hhZG93OiAwIDNweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi8qI3JlZ2lvbiBicmVhZGNydW1wKi9cXG4uYnJlYWRjcnVtYiA+IGxpICsgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjE5MlxcXCI7XFxuICBjb2xvcjogIzc3NzsgfVxcblxcbi5icmVhZGNydW1iIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7IH1cXG5cXG4uYnJlYWRjcnVtYiBsaSBhIHtcXG4gIGNvbG9yOiAjNzc3OyB9XFxuXFxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xcbiAgY29sb3I6ICNlZTI2NGQ7IH1cXG5cXG4vKiNlbmRyZWdpb24gYnJlYWRjcnVtcCovXFxuLyojcmVnaW9uIGJ0bnMqL1xcbi5idG5DcmVhdGVHcm91cCB7XFxuICBiYWNrZ3JvdW5kOiAjZWUyNjRkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlMjY0ZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XFxuXFxuLmJ0blNhdmVHcm91cCB7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlMjY0ZDtcXG4gIGNvbG9yOiAjZWUyNjRkO1xcbiAgcGFkZGluZzogNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XFxuXFxuLyojZW5kcmVnaW9uKi9cXG4uY29udGVudC1ib3gge1xcbiAgLW1zLWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxcblxcbi8qI3JlZ2lvbiByYWRpbyBkZXNpZ24qL1xcbnVsLmRldmljZXMge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbnVsLmRldmljZXMgbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuXFxudWwuZGV2aWNlcyBsaSBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBmb250LXNpemU6IDEzcHg7IH1cXG5cXG51bC5kZXZpY2VzIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG51bC5kZXZpY2VzIGxpIGxhYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMXB4O1xcbiAgaGVpZ2h0OiAxMXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlMjY0ZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcblxcbnVsLmRldmljZXMgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUyNjRkOyB9XFxuXFxudWwuZGV2aWNlcyBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xcbiAgY29sb3I6ICNlZTI2NGQ7IH1cXG5cXG4vKiNlbmRyZWdpb24gcmFkaW8gZGVzaWduKi9cXG4vKiNyZWdpb24gZ3JvdXAgbmFtZSovXFxuLmdyb3VwLW5hbWUgaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBjb2xvcjogIzg1Y2VjNTsgfVxcblxcbi5ncm91cC1uYW1lIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cXG4vKiNlbmRyZWdpb24qL1xcbmZvcm0uZmlsdGVycyAuZ2x5cGhpY29uIHtcXG4gIGNvbG9yOiAjODVjZWM1OyB9XFxuXFxuLypmb3JtLmZpbHRlcnMsZm9ybS5maWx0ZXJzIC5wYW5lbC1ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwO1xcclxcbn0qL1xcbmZvcm0uZmlsdGVycyAucGFuZWwtYm9keTpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViOyB9XFxuXFxuZm9ybS5maWx0ZXJzIC5wYW5lbC1ib2R5Om50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kOiAjZTFlMWUxOyB9XFxuXFxuZm9ybS5maWx0ZXJzIC5wYW5lbC1ib2R5IHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzVjNWM1O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M1YzVjNTtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2VlMjY0ZDsgfVxcblxcbmZvcm0uZmlsdGVycyAucGFuZWwtYm9keTpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzVjNWM1OyB9XFxuXFxuZm9ybS5maWx0ZXJzIC5wYW5lbC1ib2R5OmhvdmVyIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzg1Y2VjNTsgfVxcblxcbmZvcm0uZmlsdGVycyAucGFuZWwtYm9keSBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6ICM3Nzc7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9ncm91cC9ncm91cC5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7IE15Q2FtcGFpZ25Db21wb25lbnQgfSBmcm9tICcuL215LWNhbXBhaWduLmNvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBjb25zdCBNeUNhbXBhaWduUm91dGVzOiBSb3V0ZVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdteS1jYW1wYWlnbicsXHJcbiAgICAgICAgY29tcG9uZW50OiBNeUNhbXBhaWduQ29tcG9uZW50XHJcbiAgICB9XHJcbl1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9teS1jYW1wYWlnbi9teS1jYW1wYWlnbi5yb3V0ZXMudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJ1xyXG4vL2ltcG9ydCB7IEZvcm1zTW9kdWxlLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BvcC1teS1jYW1wYWlnbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9teS1jYW1wYWlnbi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9teS1jYW1wYWlnbi5jb21wb25lbnQuc2NzcycpLnRvU3RyaW5nKCldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTXlDYW1wYWlnbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgdGl0bGU6IHN0cmluZyA9ICdteSBjYW1wYWlnbidcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHBvcEFwcFR5cGVzID0gW1xyXG4gICAgICAgIHsgdmFsdWU6ICdjZW50ZXJQb3BBcHAnLCBkaXNwbGF5OiAnQ2VudGVyIFBvcEFwcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAncHVzaFBvcEFwcCcsIGRpc3BsYXk6ICdQdXNoIFBvcEFwcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAnZnVsbHNjcmVlblBvcEFwcCcsIGRpc3BsYXk6ICdGdWxsIFNjcmVlbiBQb3BBcHAnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogJ25vdGlmaWNhdGlvblBvcEFwcCcsIGRpc3BsYXk6ICdOb3RpZmljYXRpb24gUG9wQXBwJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6ICdlbWFpbHMnLCBkaXNwbGF5OiAnRW1haWxzJyB9XHJcbiAgICBdXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL215LWNhbXBhaWduL215LWNhbXBhaWduLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQ+e3t0aXRsZSB8IHVwcGVyY2FzZX19PC9oND5cXHJcXG48cG9wLXVzZXJzLXBhbmVsPjwvcG9wLXVzZXJzLXBhbmVsPlxcclxcbjxkaXYgY2xhc3M9XFxcInBhbmVsLWdyb3VwIG15LWNhbXBhaWduLW1haW4tcGFuZWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwicHVsbC1sZWZ0XFxcIj5GSUxURVIgQ0FNUEFJR048L2g0PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aHIgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgdHlwZSBvZiBwb3BBcHBUeXBlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcInR5cGVcXFwiIFt2YWx1ZV09XFxcInR5cGUudmFsdWVcXFwiIFtpZF09XFxcInR5cGUudmFsdWVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgYXR0ci5mb3I9XFxcInt7dHlwZS52YWx1ZX19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vaW1hZ2VzL3t7dHlwZS52YWx1ZX19LnBuZ1xcXCIgYWx0PVxcXCJ7e3R5cGUudmFsdWV9fVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57e3R5cGUuZGlzcGxheX19PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0PmNhbXBhaWduOiBjZW50ZXIgcG9wYXBwPC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keSBjYXJkc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWxsLWxlZnQgZ2x5cGhpY29uIGdseXBoaWNvbi1hcHBsZVxcXCI+aU9TPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5DQU1QQUlHTiAxPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjYXJkLXRpdGxlIHRleHQtY2VudGVyXFxcIj5QT1AgVVAgQ0VOVEVSIEE8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXBob25lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlLWNpcmNsZSBwdWxsLXJpZ2h0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2hvcHBpbmctY2FydFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkhlbGxvIEpvbjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib2R5XFxcIj5UaGlzIGlzIFBob3Rvc2hvcGBzIHZlcnNpb24gb2YgTG9yZW0gSXBzdW0uIFByb2luIGdyYXZpZGEgbmliaCB2ZWwgdmVsaXQgYXVjdG9yIGFsaXF1ZXQuIEFlbmVhbiBzb2xsaWNpdHVkaW4gbG9yZW0gcXVpcy48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPm5vLCB0aGFua3M8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+eWVzLCBwbGVhc2U8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5EZWxldGVcXFwiPmRlbGV0ZSBjYW1wYWlnbjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0bkVkaXRcXFwiPmVkaXQgY2FtcGFpZ248L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtbGVmdCBnbHlwaGljb24gZ2x5cGhpY29uLWFwcGxlXFxcIj5pT1M8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkNBTVBBSUdOIDI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcImNhcmQtdGl0bGUgdGV4dC1jZW50ZXJcXFwiPlBPUCBVUCBDRU5URVIgQjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpcGhvbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUtY2lyY2xlIHB1bGwtcmlnaHRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zaG9wcGluZy1jYXJ0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+SGVsbG8gSm9uPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJvZHlcXFwiPlRoaXMgaXMgUGhvdG9zaG9wYHMgdmVyc2lvbiBvZiBMb3JlbSBJcHN1bS4gUHJvaW4gZ3JhdmlkYSBuaWJoIHZlbCB2ZWxpdCBhdWN0b3IgYWxpcXVldC4gQWVuZWFuIHNvbGxpY2l0dWRpbiBsb3JlbSBxdWlzLjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+bm8sIHRoYW5rczwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj55ZXMsIHBsZWFzZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0bkRlbGV0ZVxcXCI+ZGVsZXRlIGNhbXBhaWduPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuRWRpdFxcXCI+ZWRpdCBjYW1wYWlnbjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1sZWZ0IGdseXBoaWNvbiBnbHlwaGljb24tYXBwbGVcXFwiPmlPUzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+Q0FNUEFJR04gMzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlclxcXCI+UE9QIFVQIENFTlRFUiBCPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlwaG9uZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZS1jaXJjbGUgcHVsbC1yaWdodFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNob3BwaW5nLWNhcnRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5IZWxsbyBKb248L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm9keVxcXCI+VGhpcyBpcyBQaG90b3Nob3BgcyB2ZXJzaW9uIG9mIExvcmVtIElwc3VtLiBQcm9pbiBncmF2aWRhIG5pYmggdmVsIHZlbGl0IGF1Y3RvciBhbGlxdWV0LiBBZW5lYW4gc29sbGljaXR1ZGluIGxvcmVtIHF1aXMuPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5ubywgdGhhbmtzPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPnllcywgcGxlYXNlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlciB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuRGVsZXRlXFxcIj5kZWxldGUgY2FtcGFpZ248L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5FZGl0XFxcIj5lZGl0IGNhbXBhaWduPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL215LWNhbXBhaWduL215LWNhbXBhaWduLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL215LWNhbXBhaWduLmNvbXBvbmVudC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL215LWNhbXBhaWduLmNvbXBvbmVudC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbXktY2FtcGFpZ24uY29tcG9uZW50LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvbXktY2FtcGFpZ24vbXktY2FtcGFpZ24uY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm15LWNhbXBhaWduLW1haW4tcGFuZWwgLnBhbmVsIHtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpOyB9XFxuICAubXktY2FtcGFpZ24tbWFpbi1wYW5lbCAucGFuZWwgLnBhbmVsLWJvZHkuY2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLm15LWNhbXBhaWduLW1haW4tcGFuZWwgLmNhcmQge1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBtYXJnaW46IDAgMTBweDsgfVxcbiAgLm15LWNhbXBhaWduLW1haW4tcGFuZWwgLmNhcmQgLmNhcmQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMjVweDtcXG4gICAgaGVpZ2h0OiAxOTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6ICMyMTEyNTc7IH1cXG4gICAgLm15LWNhbXBhaWduLW1haW4tcGFuZWwgLmNhcmQgLmNhcmQgLmhlYWRlciB7XFxuICAgICAgZm9udC1zaXplOiAxLjVlbTsgfVxcbiAgICAubXktY2FtcGFpZ24tbWFpbi1wYW5lbCAuY2FyZCAuY2FyZCAuZ2x5cGhpY29uLXJlbW92ZS1jaXJjbGUge1xcbiAgICAgIHBhZGRpbmc6IDNweDsgfVxcbiAgICAubXktY2FtcGFpZ24tbWFpbi1wYW5lbCAuY2FyZCAuY2FyZCAuYnV0dG9ucyB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDVweCAwOyB9XFxuICAgICAgLm15LWNhbXBhaWduLW1haW4tcGFuZWwgLmNhcmQgLmNhcmQgLmJ1dHRvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIGNvbG9yOiAjMDAwOyB9XFxuICAgICAgLm15LWNhbXBhaWduLW1haW4tcGFuZWwgLmNhcmQgLmNhcmQgLmJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiNjQ4OyB9XFxuICAubXktY2FtcGFpZ24tbWFpbi1wYW5lbCAuY2FyZDpmaXJzdC1vZi10eXBlIC5jYXJkIHtcXG4gICAgYmFja2dyb3VuZDogI2VlMjY0ZDsgfVxcbiAgICAubXktY2FtcGFpZ24tbWFpbi1wYW5lbCAuY2FyZDpmaXJzdC1vZi10eXBlIC5jYXJkIC5idXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgICAgYmFja2dyb3VuZDogIzE1MWFjYztcXG4gICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAubXktY2FtcGFpZ24tbWFpbi1wYW5lbCAuY2FyZDpmaXJzdC1vZi10eXBlIC5jYXJkIC5idXR0b25zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMDBiNjQ4OyB9XFxuICAubXktY2FtcGFpZ24tbWFpbi1wYW5lbCAuY2FyZDpsYXN0LW9mLXR5cGUgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kOiAjODA4MDgwOyB9XFxuICAgIC5teS1jYW1wYWlnbi1tYWluLXBhbmVsIC5jYXJkOmxhc3Qtb2YtdHlwZSAuY2FyZCAuYnV0dG9ucyBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICAgIGJhY2tncm91bmQ6IGJsdWU7XFxuICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLm15LWNhbXBhaWduLW1haW4tcGFuZWwgLmNhcmQ6bGFzdC1vZi10eXBlIC5jYXJkIC5idXR0b25zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMDBiNjQ4OyB9XFxuICAubXktY2FtcGFpZ24tbWFpbi1wYW5lbCAuY2FyZCAuY2FyZC1oZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gICAgcGFkZGluZzogMTBweDsgfVxcbiAgLm15LWNhbXBhaWduLW1haW4tcGFuZWwgLmNhcmQgLmNhcmQtZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7IH1cXG4gICAgLm15LWNhbXBhaWduLW1haW4tcGFuZWwgLmNhcmQgLmNhcmQtZm9vdGVyIC5idG5EZWxldGUge1xcbiAgICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlMjY0ZDtcXG4gICAgICBjb2xvcjogI2VlMjY0ZDtcXG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG4gICAgLm15LWNhbXBhaWduLW1haW4tcGFuZWwgLmNhcmQgLmNhcmQtZm9vdGVyIC5idG5FZGl0IHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZWUyNjRkO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZTI2NGQ7XFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICBwYWRkaW5nOiA3cHggMTVweDtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuICAubXktY2FtcGFpZ24tbWFpbi1wYW5lbCAuY2FyZCAuaXBob25lIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL3d3d3Jvb3QvYXNzZXRzL2ltZy9pcGhvbmUucG5nXCIpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL215LWNhbXBhaWduL215LWNhbXBhaWduLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFSMEFBQUpXQ0FZQUFBQmxIVk5KQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUEyUnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREl4SURjNUxqRTFORGt4TVN3Z01qQXhNeTh4TUM4eU9TMHhNVG8wTnpveE5pQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Y0UxTk9rOXlhV2RwYm1Gc1JHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEZOalU1TlRVME56SkdRekZGTmpFeE9UTXlOMFZFUkVOQ1FUYzBOVGhETVNJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvM1JUaEVRMFZGTmtNeE16a3hNVVUyUWpBeFJVVXlRakU1T1RCR01FVXdRU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG8zUlRoRVEwVkZOVU14TXpreE1VVTJRakF4UlVVeVFqRTVPVEJHTUVVd1FTSWdlRzF3T2tOeVpXRjBiM0pVYjI5c1BTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ1ExTTFJRmRwYm1SdmQzTWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBGTmpVNU5UVTBOekpHUXpGRk5qRXhPVE15TjBWRVJFTkNRVGMwTlRoRE1TSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEZOalU1TlRVME56SkdRekZGTmpFeE9UTXlOMFZFUkVOQ1FUYzBOVGhETVNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BnKzZzRkVBQUJGb1NVUkJWSGphN04xN2JKM25YY0R4SjY2VE9QYzJTUjJjcEcxQ1VuSnBROFZvMHFZckd1d2ZOb1pXQVVJREJxTUlrS0FEaEJBYll1SVBiaE93L2NFUUhaTVl0dzRrSkNZUUJSV1lOTGFTS2lXMFRVTlR1cVpaNGpUTnhXbVM1cDQ0ZG00OHYzT09oOG5zeEk2UGo4OTV6dWNqL2RSYkdwODh4L25tZmQvelhxWTk4OHd6cVFCZGVXWWxLTnVGUEFPdC9vdm9iSUhYdUNMUCtqeHI4bnhybm52eWRPZnB5VE0veisyK0Yya3paL0tjeTNNOFQxOXQ5dVhwemZONmJTNkl6dGpFMXNvamVkNlQ1NkU4bTBRRnZzbjgyaXpOOCswai9QZXJlYjZlNTcveWJNdnpiQzFFb2xNVEMvZFluZy9tK2U3YXJoSnc2enBxZXdZeEg2bjl1OE41L2pYUDAzbStuS2UvM2FJVFd6US9uT2NuYTFzMXQvaytnVW4vdy8ybmF4TzdaLytRNXkvemJKbUtJamJTWFhrK25lZGducWZ5dkZkd1lFcDJ6eDdQOHg5NVhzdnpjNm1CSDhRMEtqcXJhcEhabStkWDh5ejB2a05UaUE5cFBwZXFCNkkvbm1kMnEwZG5jWjdQcHVwQnJOaTNuTzQ5aHFhMEpNOGY1Tm1UNTJjbnN3MGRrL2p6L2tLcUhrRi9RbXlnWmNTcEtIK2FxcDk4ZldlclJDZU9tTWZCcVQ5T1B1NkdWdlZnTFR5ZnJQZEdRNzJqRTV0bEwrZDV0L2NNV2w1OHlQT0pWRDNYNTk1bWkwNmNXL05VYmJOc3R2Y0tpdkt1UEMvaytVQ3pSQ2YyQVo5Ti8zY1NFbENlT0ZRU0p4WitkS3Fqc3pyUDFsUzlaQUVvZjNmcnlWUTl6ak1sMFluUDk1L0xzOUo3QVcwbGp2TjhxdEhSaVlOS2NmM0d0MWgvYUVzZnkvTTdqWXJPOGp4ZlNkVmpPVUQ3K28wOFB6L1owWWxQcHA2cGhRZmdNNmw2MGZha1JlY3Ywc2ozN3dEYTA0dzhYeHpQaHNoNG92TkxlVDVrallIcjNKbm5DMm1NZDR3WWEzVHVUeE00V2cwVTczdnkvRXE5b2pPOVZyR1oxaFc0Z2Q5SzFkdllURGc2VWEvdnNKN0FUY1NOd0Q1N3N4OTBzOXVWTGt2Vmo4WGdHMWF0V3BXV0xGbVN6cHc1azNidDJwVXVYNzVzVVJqeXZYbStMOCsvM0dwMDRxWStjNjBqUTVZdlg1N1dyRmxUK2Z2YmI3ODlYYnQyTGIzMjJtc1dodUhpbHNSZnluTmx2THRYOGRINGoxby9ocHMzYjk0Ti94bFM5UktwVVQvcHZsRjBmak0xL3NidE5Ma2pSNDVVdG02R0hENTgyS0l3a2w4ZnJSK2o3VjdGMWVPUFdUZXVkL0xreWZUODg4K243dTd1ZFByMDZYVDA2RkdMd2tqaU5KdjNwK29WREdPS3pzZHM1VENhaUUwTTNNUVRJMFZucExERVR2cUhyUmN3UWU5TEk5ejZacVRveE1Iak9kWUxtS0RveTQrTkpUcVBXeXVnVGo1OHMrakVZMzhmdGs1QW5hekxzK0ZHMGZtaFBOT3NFMUJISDdoUmRENW9mWUJHUlNmdUN2aUk5UUhxTEE3WnpCa3BPbkhMUWJldkFPb3R6Z2Q4OTBqUmVkVGFBSlBrMFpHaTQ0RjVVMkRHakJtcG84UEozeFR2d2VHYlBVUHhlZEM2TkdoYnM3TXozWHZ2dlduWnNtV1Y2TVFGbEhGTjArN2R1OU9KRXljc0VDVjYxL1ZiT2l2eUxMQXVqUW5PNXMyYjA4cVZLeXZCQ2RPbVRVc0xGeTVNRHozMFVDVkVVS0FsdGZsR2ROWmJrOFpZdjM3OXFQZWdpZmhzMkxBaGRYVjFXU2hLOUczRGQ2OUVwMEZiT1V1WExyM2hqNG5qTzNGM3ZqMTc5a3o0NncxdFFjWE1uTm04SDB6RzdVNHZYTGhRdVZmUDRPQ2diNVJ5cmMzejNGQjBWbG1QeVRkbnpwd3hIVFNlUDMvK2hMOVdmSjJOR3plbVJZc1d0YzUzNU5xMTZhV1hYbkpjcTF5cmh1OWUzV1U5SnQvVnExZkg5T091WExreTRhODFhOWFzbGdyTzBKWmdUMCtQYjVSeUxSV2RCanQzN3R5WWRoL2lrNnlKT24vK2ZIcjk5ZGRiNmtrTng0NGRxOHR1SmMwZG5hSGRLMys4TkVCOE5ON2IyMXZaalJoTmYzOS9PblRvVUYyKzNyNTkrOUwrL2Z2VDdObXpLOGQwNGhoUE14bzZwdU40VHZHV0RZL09IZGFqTVNJNmMrZk9yUndzdnQ3QXdFRGxtRVk5ZHErRzc5TEZGbFlNVExFRlE5RzVQYmtmY2tQdDNMa3o5ZlgxVmM3SmlRREZuL1RIangrdmJKVmN1blRKQWxGOGRPWmJpOGFMNHhjeDBFYmlUaFl6WWd2SC9aQ0JScG5Wa1c3K2FHR0F1b25vdUQwcDBMQmRySWlPWXpwQW8wejNxUlhROE4wckFORUJSQWRBZEFEUkFSQWRRSFFBMFFFUUhVQjBBRVFIRUIwQTBRRkVCeEFkQU5FQlJBZEFkQURSQVVoMWVQeE1WMWRYV3JObVRlcm8wQzhvM2NtVEo5T2JiNzQ1dGRIcDd1NnVQQjRYS04vaXhZc25IQjJiSjhDWVRaczI4Y2ZraVE3UVVLSURpQTRnT2dDaUE0Z09nT2dBb2dPSURvRG9BS0lESURxQTZBQ0lEaUE2Z09nQWlBNGdPZ0NpQTRnT2dPZ0FvZ09JRG9Eb0FLSURJRHFBNkFDaUF5QTZnT2dBaUE0Z09nQ2lBNGdPSURvQW9nT0lEb0RvQUtJRElEcUE2QUNpQXlBNmdPZ0FpQTRnT2dDaUE0Z09JRG9Bb2dPSURvRG9BS0lEaUE2QTZBQ2lBeUE2Z09nQWlBNGdPb0RvQUlnT0lEb0FvZ09JRG9Eb0FLSURpQTZBNkFDaUF5QTZnT2dBb21NSkFORUJSQWRBZEFEUkFSQWRRSFFBMFFFUUhVQjBBRVFIRUIwQTBRRkVCeEFkQU5FQlJBZEFkQURSQVJBZFFIUUEwUUVRSFVCMEFFUUhFQjFBZEFCRUJ4QWRBTkVCUkFkQWRBRFJBVVFIUUhRQTBRRVFIVUIwQUVRSEVCMUFkQUJFQnhBZEFORUJSQWRBZEFEUkFVUUhRSFFBMFFFUUhVQjBBTkVCRUIxQWRBQkVCeEFkQU5FQlJBY1FIUURSQVVRSFFIUUEwUUVRSFVCMEFORUJFQjFBZEFCRUJ4QWRRSFFBUkFjUUhRRFJBVVFIUUhRQTBRRkVCMEIwQU5FQkVCMUFkQUJFQnhBZFFIUUFSQWNRSFFEUkFVUUhRSFFBMFFGRUIwQjBBTkVCRUIxQWRBRFJBUkFkUUhRQVJBY1FIUURSQVVRSEVCMEEwUUZFQjBCMEFORUJFQjFBZEFEUkFSQWRRSFFBUkFjUUhRRFJBVVFIRUIwQTBRRkVCMEIwQU5FQlJBZEFkQURSQVJBZFFIUUFSQWNRSFVCMEFFUUhFQjBBMFFGRUIwQjBBTkVCUkFkQWRBRFJBUkFkUUhRQTBRRVFIVUIwQUVRSEVCMEEwUUZFQnhBZEFORUJSQWRBZEFEUkFSQWRRSFFBMFFFUUhVQjBBRVFIRUIwQTBRRkVCeEFkQU5FQlJBZEFkQURSQVVRSFFIUUEwUUVRSFVCMEFFUUhFQjFBZEFCRUJ4QWRBTkVCUkFkQWRBRFJBVVFIUUhRQTBRRVFIVUIwQUVRSEVCMUFkQUJFQnhBZEFORUJSQWNRSFFEUkFVUUhRSFFBMFFFUUhVQjBBTkVCRUIxQWRBQkVCeEFkQU5FQlJBY1FIUURSQVVRSFFIUUEwUUZFQjBCMEFORUJFQjFBZEFCRUJ4QWRRSFFBUkFjUUhRRFJBVVFIUUhRQTBRRkVCMEIwQU5FQkVCMUFkQUJFQnhBZFFIUUFSQWNRSFFEUkFVUUhFQjBBMFFGRUIwQjBBTkVCRUIxQWRBRFJBUkFkUUhRQVJBY1FIUURSQVVRSEVCMEEwUUZFQjBCMEFORUJSTWNTQUtJRGlBNkE2QUNpQXlBNmdPZ0FvZ01nT29Eb0FJZ09JRG9Bb2dPSURpQTZBS0lEaUE2QTZBQ2lBeUE2Z09nQW9nTWdPb0RvQUlnT0lEcUE2QUNJRGlBNkFLSURpQTZBNkFDaUE0Z09nT2dBb2dNZ09vRG9BSWdPSURxQTZBQ0lEaUE2QUtJRGlBNkE2QUNpQTRnT2dPZ0FvZ01nT29Eb0FLSURJRHFBNkFDSURpQTZBS0lEaUE0Z09nQ2lBNGdPZ09nQW9nTWdPb0RvQUtJRElEcUE2QUNJRGlBNmdPZ0FpQTRnT2dDaUE0Z09nT2dBb2dPSURvRG9BS0lESURxQTZBQ0lEaUE2Z09nQWlBNGdPZ0NpQTRnT2dPZ0FvZ09JRG9Eb0FLSURJRHFBNkFDaUF5QTZnT2dBaUE0Z09nQ2lBNGdPSURvQW9nT0lEb0RvQUtJRElEcUE2QUNpQXlBNmdPZ0FpQTVRYUhRR0J3ZXRJclNKZ1lHQkNmOGNuUlA5Q1k0Y09aSzJiTm1TYnJ2dE51OElGSzYvdjMvcW94UE9uVHZuM1FBYXMzc0ZJRHFBNkFDSURpQTZnT2dBaUE0Z09nQ2lBNGdPSURvQW9nT0lEb0RvQUtJRE1MSk9TOEROekp3NU04MmJOeS9ObVRNbmRYVjFwYzdPempSdDJyUjArZkxsZE9YS2xYVCsvUG5LUFpYT25qMmJybDI3WnNFUUhjWnYvdno1YWRteVplbk9PKzlNYytmT0hkUC9FeEU2Y2VKRTVXNlNmWDE5bFNDQjZEQ3EySHBac21SSldyVnFWVnF3WU1INHY1bnlGbEIzZDNkbDdydnZ2blRnd0lIVTI5dWJMbDY4YUhFUkhmNi9PKzY0b3hLSzJNS3BoN2huOW9vVks5TGRkOTlkQ2MvZXZYdHQrU0E2VkxkdTFxNWRXd2xFL0gyOWRYUjBwTldyVjZlbFM1ZW1IVHQycE5PblQxdjBOdWZUcXpZV0I0ZzNiOTZjVnE1Y09TbkJHVzcyN05tVnIzWFBQZmRZZUZzNnRLT0l3S1pObXlwL2JkaWZjSG1ySjNiaDRoT3dOOTU0dzV2UXhsczY1eTFEZTRuZjlBOC8vSEJEZ3pOY0hLaU9vUzFkaStoY3RnN3RJdzd3YnR5NHNSS2VxYlJtelpxMGZQbHliMGo3T2VPWVRwdTUvLzc3S3lmNk5ZUFkxV3FXMTBKamQ2L09XSWIyME5QVFV6bmhyNW0ydWg1NDRJRkpQNGhOVXhtTTZKeTFEdVdMRS9mV3JWdlhkSzhyemd1S2ordHBDd041K2lNNnA2eEYrZUkzOWxRZnh4bE5uTWNUVWFSNHA0ZDJyNjdtT1drOXlqVjBkbkN6bWo1OXV2TjMyc09wb2VpRUk5YWpYSEVzWjhhTUdVMzlHdU55Q1lwM2RIaDBEbG1QY3JYQ1I5T3paczFLQ3hjdTlHYVZyVzk0ZE42eUhtV0tMWnk0bUxNVnhCWHVGRzMvOE9qc3RoNWxpcTJIVnZsSWV0R2lSZDZ3c3UwZEhoMFh3aFRxVnU2TE0xWGlSTUc0UG90aTdSNGVuYTlaanpMRkxVWmJSV3lSdGRMclpkemVHQjZkUGNtWnlVV2Fxb3M2MitYMU1tYkhVdTBEcTZIb3hMazYyNjFMZVZydHBEc25DUmJyNWFHL0diNER2YzI2bENkT0RQUjZhUUl2amhTZHIxcVg4bHk5ZXJXbFhxLzdLQmZydVpHaXN6VlZMOGlpSVBGWUdORmhpbDJxOWVXYm9uTWh6N1BXcHl6OS9mMWVMMVB0UDlPd081UmVmMUxFUDFxZnNzVFROMXRKUENtVTR2elQ4SCs0UGpwUHh4YXVOU3BIS3ozeUpZSmo5NnBJVDk4b09uRkIxcGV0VVRuZWVlZWRsbm10OFVoaWl2TlNxcDRIT0dwMHdsUFdxUndEQXdNdHM3Vno5T2hSYjFoNXZuRDl2eGdwT245ZjIrS2hFSWNPTmYrZFN3WUhCOU94WThlOFdXV0poOWovN1ZpaU01am56NjFYT1E0ZlB0ejB4MG9PSERpUXJsMjc1czBxeTkvbE9UNlc2SVFuVS9VamRBb1FXeEZ2dmRXOHQweUtJTzdidDg4YlZaN1BqUFF2UjR2TzIzbit4SnFWWSsvZXZlblNwVXROK2RvaU9CRkdpdkpNbmgzamlVNzRkSExsZVZGYk84MzQvUEFMRnk1VWdraHhmbnUwLzNDajZNUkhDWiswZHVXSTR5Yk5kTEEyanVIczNMblR1VG5sK1dLZUYyNGxPdUdQa2x1WkZpTitrNy95eWl2cDRzV0xUZkY2ZHUvZTdkeWM4c1EzMThkdjlBTnVGcDI0QVBSbjR2dlZXcGF6bS9YaWl5OU8rZkdkZ3djUDJxMHEwKy9tZVhNaTBRbHhTZnFUMXJJY1o4K2VUUys4OE1LVUhieU44NFplZmZWVmIwUjUvanZQcDI3Mmc4WjZGK3pZWEhyRm1wWWp6bExldG0xYjVVQnVJL1gyOWxhTzR6Z25wemp4amZRVHFYb2JpN3BFSi9iVFBwUnF6eUttREhHQjVkYXRXOVBiYjc4OTZWOHJkdWUyYjkrZWR1M2FKVGhsK3VVOC96T1dIemllNTMzRTU2MC9rbHlGWHBTaEdPellzV1BTRGpESEdkRmJ0bXhwU055WUVuK1c1L05qL2NIanZRdjJ2K1g1eGVURXdlTDA5ZlZWTHJoY3NXSkZaV2JPbkRuaG56Tit2amhZZlBMa1NRdGNycS9rK2VoNC9vZGJ1ZlgrNS9MRUU5eCt6M3FYSmM2WGlVakVHY0x4aU4rZW5wNjBlUEhpY1QyaElRNVNIemx5cEhLd3VOSEhpMmk0T0JmbkIxUDFlczFKalU3NC9kcGZoYWRBY1RQMzJQS0ppUWZneFZOQzQrbWI4U0M4cnE2dXloTWJZbUxYTE83QkhIR0pPeFRHT1RjdVoyZ2JjWitjOTZWYk9NNDdrWWNNUlhqaTNwSnhVWmZuaGhRcUR2cWVPbldxTWxEemJKN0gwaTFlSmpYUkIwZkgrVHMvVUlzUFVMNi95ZlArTklIck11dnh0UHAvenJNNXp5N3ZCeFFybm1VVTUrdkZ1VGdUK3Bpem8wNHZLRDZmMzVqYy9BdEt0RC9QZTFMMXpoTVQxbEhIRnhhN1dIR2QxdmZuT2VoOWdwWVhaM0hHcDlVYjhqeGZyNSswWXhKZWFOeThaMTJxWG9QaG93eG9UZHZ6UEpMbmlUeG42L2tUZDB6U0M0NnRubC9Mc3paVkR6eGQ5UjVDUzRoTC96K1NaMU9lYlpQeEJUb20rUmNRTjc2TkEwL3JVL1Y0ankwZmFFNXgyZi9qdFEyRnY1N01EWVdPQnYyQzRycXRPTjV6VjU1UDVPbjFIc09VaXoyU3Y4cnozandQcE9vejd5NVA5aGZ0YVBBdk1tNkJHbWN4cjg3emFLcGV3L1dtOXg0YUp2WTI0aHJLSDgvVG5lZW44bncxTmZCR2ZaMVQ5QXVQWCtEVzJxVGFKbDJjY0JTblZYOVhubG0rTjZCdXY5ZStsbWRMbm4vUDg2VTB4U2Z6ZGpiSnd1eXF6Ui9tbVo2cUg5RnRxbTN5cmF0RmFZbnZIN2lodUE3cTY3WGZTM0h1M1BiYU5OVmwvcDFOdUhCeDU3R1hhelBjN0R3cmEvSHB5VE12VmE5Mjc2ejkvWXc4YzN6ZlViQlR0UzJYdUFUaGZKNTM4c1RqUFE3bk9WRDc3MDN2ZndVWUFDQThQZHh5OWxzTkFBQUFBRWxGVGtTdVFtQ0NcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3d3cm9vdC9hc3NldHMvaW1nL2lwaG9uZS5wbmdcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC5ndWFyZCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9ndWFyZHMvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkge1xuICAgICAgICAgICAgLy8gbG9nZ2VkIGluIHNvIHJldHVybiB0cnVlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBub3QgbG9nZ2VkIGluIHNvIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2Ugd2l0aCB0aGUgcmV0dXJuIHVybFxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddLCB7IHF1ZXJ5UGFyYW1zOiB7IHJldHVyblVybDogc3RhdGUudXJsIH0gfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9ndWFyZHMvYXV0aC5ndWFyZC50cyIsImV4cG9ydCAqIGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbG9naW4ucm91dGVzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbG9naW4vaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UsIEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9wLWxvZ2luJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2xvZ2luLmNvbXBvbmVudC5zY3NzJykudG9TdHJpbmcoKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBtb2RlbDogYW55ID0ge307XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIHJldHVyblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIHJlc2V0IGxvZ2luIHN0YXR1c1xuICAgICAgICAvL3RoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpO1xuXG4gICAgICAgIC8vIGdldCByZXR1cm4gdXJsIGZyb20gcm91dGUgcGFyYW1ldGVycyBvciBkZWZhdWx0IHRvICcvJ1xuICAgICAgICB0aGlzLnJldHVyblVybCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3JldHVyblVybCddIHx8ICcvJztcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKHRoaXMubW9kZWwudXNlcm5hbWUsIHRoaXMubW9kZWwucGFzc3dvcmQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkL292ZXJ2aWV3J10pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJleHBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGknXHJcbmV4cG9ydCB7IENsaWVudFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9jbGllbnQudXNlci5zZXJ2aWNlJ1xyXG5leHBvcnQgeyBDYW1wYWlnblNlcnZpY2UgfSBmcm9tICcuL2NhbXBhaWduLnNlcnZpY2UnXHJcbmV4cG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vYWxlcnQuc2VydmljZSdcclxuZXhwb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJ1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9zaGFyZWQvc2VydmljZXMvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpJ1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50VXNlclNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgcGF0aDogc3RyaW5nID0gJy9hcGkvYWNjb3VudC90ZXN0J1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBnZXRVc2VycygpIDogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KHRoaXMucGF0aClcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3NoYXJlZC9zZXJ2aWNlcy9jbGllbnQudXNlci5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0J1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKVxyXG4gICAgcHJpdmF0ZSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0gZmFsc2VcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgLy9jbGVhciBhbGVydCBtZXNzYWdlIG9uIHJvdXRlIGNoYW5nZVxyXG4gICAgICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBrZWVwIGZvciBhIHNpbmdsZSBsb2NhdGlvbiBjaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NsZWFyIGFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5rZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0ga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZVxyXG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHsgdHlwZTogJ3N1Y2Nlc3MnLCB0ZXh0OiBtZXNzYWdlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlXHJcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQoeyB0eXBlOiAnZXJyb3InLCB0ZXh0OiBtZXNzYWdlIH0pXHJcbiAgICB9XHJcbiAgICBnZXRNZXNzYWdlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9zaGFyZWQvc2VydmljZXMvYWxlcnQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvU3ViamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvU3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpJ1xyXG5cblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBwYXRoOiBzdHJpbmcgPSAnL2FwaS9hdXRoZW50aWNhdGlvbidcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSkgeyB9XHJcblxyXG4gICAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmxvZ2luKHRoaXMucGF0aCwgdXNlcm5hbWUsIHBhc3N3b3JkKVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICAvLyByZW1vdmUgdXNlciBmcm9tIGxvY2FsIHN0b3JhZ2UgdG8gbG9nIHVzZXIgb3V0XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9zaGFyZWQvc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcXFwiPlxcclxcbiAgICA8cG9wLWFsZXJ0PjwvcG9wLWFsZXJ0PlxcclxcbiAgICA8aDI+TG9naW48L2gyPlxcclxcbiAgICA8Zm9ybSBuYW1lPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJmLmZvcm0udmFsaWQgJiYgbG9naW4oKVxcXCIgI2Y9XFxcIm5nRm9ybVxcXCIgbm92YWxpZGF0ZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieyAnaGFzLWVycm9yJzogZi5zdWJtaXR0ZWQgJiYgIXVzZXJuYW1lLnZhbGlkIH1cXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lXFxcIj5Vc2VybmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInVzZXJuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwudXNlcm5hbWVcXFwiICN1c2VybmFtZT1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmLnN1Ym1pdHRlZCAmJiAhdXNlcm5hbWUudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5Vc2VybmFtZSBpcyByZXF1aXJlZDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICFwYXNzd29yZC52YWxpZCB9XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC5wYXNzd29yZFxcXCIgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFwYXNzd29yZC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+TG9naW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwic21hbGwtbG9hZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbG9naW4uY29tcG9uZW50LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbG9naW4uY29tcG9uZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9sb2dpbi5jb21wb25lbnQuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuLnNtYWxsLWxvYWRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuICAuc21hbGwtbG9hZGVyIGRpdiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICNlZTI2NGQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IH1cXG4gICAgLnNtYWxsLWxvYWRlciBkaXY6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAzcHg7XFxuICAgICAgbGVmdDogM3B4O1xcbiAgICAgIHJpZ2h0OiAzcHg7XFxuICAgICAgYm90dG9tOiAzcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICM4NWNlYzU7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7IH1cXG4gICAgLnNtYWxsLWxvYWRlciBkaXY6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDhweDtcXG4gICAgICBsZWZ0OiA4cHg7XFxuICAgICAgcmlnaHQ6IDhweDtcXG4gICAgICBib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcXG4gICAgICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgTG9naW5Sb3V0ZXM6IFJvdXRlW10gPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gICAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbG9naW4vbG9naW4ucm91dGVzLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9lbnYuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5zY3NzJykudG9TdHJpbmcoKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICAvLyBZb3UgbmVlZCB0aGlzIHNtYWxsIGhhY2sgaW4gb3JkZXIgdG8gY2F0Y2ggYXBwbGljYXRpb24gcm9vdCB2aWV3IGNvbnRhaW5lciByZWZcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmlld0NvbnRhaW5lclJlZlxuICAgICAgICBjb25zb2xlLmxvZygnRW52aXJvbm1lbnQgY29uZmlnJylcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBtYWluLXBhZ2VcXFwiPlxcclxcbiAgICAgICAgPHBvcC1oZWFkZXI+PC9wb3AtaGVhZGVyPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWVudS1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJwYWRkaW5nLXRvcDo2MHB4O1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPHBvcC1uYXYtbWVudT48L3BvcC1uYXYtbWVudT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm9keS1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG48L2Rpdj4tLT5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lci1mbHVpZC5tYWluLXBhZ2Uge1xcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7IH1cXG4gIC5jb250YWluZXItZmx1aWQubWFpbi1wYWdlIC5ib2R5LWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAkbmF2LXdpZHRoKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLmNvbnRhaW5lci1mbHVpZC5tYWluLXBhZ2Uge1xcbiAgICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi8gfVxcbiAgICAgIC5jb250YWluZXItZmx1aWQubWFpbi1wYWdlIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xcbiAgICAuY29udGFpbmVyLWZsdWlkLm1haW4tcGFnZSAuYm9keS1jb250ZW50IHtcXG4gICAgICBtYXJnaW4tbGVmdDogNDBweDsgfSB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UsIEFsZXJ0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCdcbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2RpcmVjdGl2ZXMvaW5kZXgnXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnQsIEFsZXJ0Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbTG9naW5Db21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW0F1dGhlbnRpY2F0aW9uU2VydmljZSwgQWxlcnRTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9sb2dpbi9sb2dpbi5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgeyBIaWdobGlnaHREaXJlY3RpdmUgfSBmcm9tICcuL2hpZ2hsaWdodC5kaXJlY3RpdmUnXHJcbmV4cG9ydCB7IEFsZXJ0Q29tcG9uZW50fSBmcm9tICcuL2FsZXJ0LmNvbXBvbmVudCdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3NoYXJlZC9kaXJlY3RpdmVzL2luZGV4LnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2hpZ2hsaWdodF0nXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZlIHtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRDb2xvciA9ICdiZWlnZSc7XHJcbiAgICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnaGlnaGxpZ2h0JykgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KHRoaXMuaGlnaGxpZ2h0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcclxuICAgIH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWdobGlnaHQoY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3NoYXJlZC9kaXJlY3RpdmVzL2hpZ2hsaWdodC5kaXJlY3RpdmUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4J1xyXG5cclxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb3AtYWxlcnQnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cIm1lc3NhZ2VcIiBbbmdDbGFzc109XCJ7ICdhbGVydCc6IG1lc3NhZ2UsICdhbGVydC1zdWNjZXNzJzogbWVzc2FnZS50eXBlID09PSAnc3VjY2VzcycsICdhbGVydC1kYW5nZXInOiBtZXNzYWdlLnR5cGUgPT09ICdlcnJvcicgfVwiPnt7bWVzc2FnZS50ZXh0fX08L2Rpdj5gXG59KVxuXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQge1xuICAgIG1lc3NhZ2U6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmdldE1lc3NhZ2UoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7IHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7IH0pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3NoYXJlZC9kaXJlY3RpdmVzL2FsZXJ0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IE92ZXJ2aWV3TW9kdWxlIH0gZnJvbSAnLi9vdmVydmlldy9vdmVydmlldy5tb2R1bGUnXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCdcbmltcG9ydCB7IENhbXBhaWduQ29tcG9uZW50IH0gZnJvbSAnLi9jYW1wYWlnbi9jYW1wYWlnbi5jb21wb25lbnQnXG5pbXBvcnQgeyBHcm91cENvbXBvbmVudCB9IGZyb20gJy4vZ3JvdXAvZ3JvdXAuY29tcG9uZW50J1xuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC91c2Vycy91c2Vycy5jb21wb25lbnQnXG5pbXBvcnQgeyBNeUNhbXBhaWduQ29tcG9uZW50IH0gZnJvbSAnLi9teS1jYW1wYWlnbi9teS1jYW1wYWlnbi5jb21wb25lbnQnXG5cbmltcG9ydCB7IEFwaVNlcnZpY2UsIENsaWVudFVzZXJTZXJ2aWNlLCBDYW1wYWlnblNlcnZpY2UsIEFsZXJ0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCdcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBPdmVydmlld01vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgTmF2TWVudUNvbXBvbmVudCxcbiAgICAgICAgQ2FtcGFpZ25Db21wb25lbnQsXG4gICAgICAgIEdyb3VwQ29tcG9uZW50LFxuICAgICAgICBVc2Vyc0NvbXBvbmVudCxcbiAgICAgICAgTXlDYW1wYWlnbkNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW0Rhc2hib2FyZENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbQXBpU2VydmljZSwgQ2xpZW50VXNlclNlcnZpY2UsIENhbXBhaWduU2VydmljZSwgQWxlcnRTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVydmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW092ZXJ2aWV3Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbT3ZlcnZpZXdDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdNb2R1bGUgeyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9vdmVydmlldy9vdmVydmlldy5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb3AtaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2hlYWRlci5jb21wb25lbnQuc2NzcycpLnRvU3RyaW5nKCldLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZGF0ZTogRGF0ZVxuICAgIHByaXZhdGUgd2Vla0RheTogc3RyaW5nXG4gICAgcHVibGljIGlzU2Nyb2xsZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyBpc01lbnVDb2xsYXBzZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKVxuICAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICB0aGlzLndlZWtEYXkgPSBnZXRXZWVrRGF5KHRoaXMuZGF0ZSlcclxuICAgICAgICBmdW5jdGlvbiBnZXRXZWVrRGF5KGRhdGUpIHtcclxuICAgICAgICAgICAgdmFyIGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF5c1tkYXRlLmdldERheSgpXVxyXG4gICAgICAgIH1cclxuICAgIH1cbiAgICBzaWduT3V0KCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSlcclxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtdG9wXFxcIiBiYVNjcm9sbFBvc2l0aW9uIG1heEhlaWdodD1cXFwiNTBcXFwiIChzY3JvbGxDaGFuZ2UpPVxcXCJzY3JvbGxlZENoYW5nZWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgIFtuZ0NsYXNzXT1cXFwie3Njcm9sbGVkOiBpc1Njcm9sbGVkfVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHQgdXNlci1wcm9maWxlLW1lbnVcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGVcXFwiPnt7d2Vla0RheX19IHt7ZGF0ZSB8IGRhdGU6J2RkL01NL3l5eXknfX08L3NwYW4+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBpZD1cXFwidXNlci1wcm9maWxlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInVzZXJOYW1lXFxcIj5IZWxsbyB7e2N1cnJlbnRVc2VyLnVzZXJOYW1lfX0gPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tb3B0aW9uLXZlcnRpY2FsXFxcIj48L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ1c2VyLXByb2ZpbGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIj48YSByb2xlPVxcXCJtZW51aXRlbVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBocmVmPVxcXCIjXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXFxcIj48L3NwYW4+UHJvZmlsZTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIj48YSByb2xlPVxcXCJtZW51aXRlbVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBocmVmPVxcXCIjXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jb2dcXFwiPjwvc3Bhbj5TZXR0aW5nczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIiAoY2xpY2spPVxcXCJzaWduT3V0KClcXFwiPjxhIHJvbGU9XFxcIm1lbnVpdGVtXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1vdXRcXFwiPjwvc3Bhbj5TaWduIE91dDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vaGVhZGVyLmNvbXBvbmVudC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hlYWRlci5jb21wb25lbnQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hlYWRlci5jb21wb25lbnQuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZS10b3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlMjY0ZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJveC1zaGFkb3c6IDJweCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMHB4IDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHotaW5kZXg6IDk7XFxuICBtYXJnaW4tbGVmdDogMTg1cHg7IH1cXG5cXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmJsdXIgLnBhZ2UtdG9wLnNjcm9sbGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7IH1cXG5cXG4uZGF0ZSwgLnVzZXJOYW1lIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLnVzZXJOYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi51c2VyLXByb2ZpbGUtbWVudSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IHVuc2V0OyB9XFxuXFxuLmRyb3Bkb3duLW1lbnUgbGkgc3Bhbi5nbHlwaGljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG5cXG4uZHJvcGRvd24tbWVudSBsaSBhOmhvdmVyIC5nbHlwaGljb24ge1xcbiAgY29sb3I6ICNlZTI2NGQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb3AtbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LnNjc3MnKS50b1N0cmluZygpXSxcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignc2xpZGVJbk91dCcsIFtcclxuICAgICAgICAgICAgc3RhdGUoJ2luJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAlKSdcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBzdGF0ZSgnb3V0Jywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdpbiA9PiBvdXQnLCBhbmltYXRlKCc0MDBtcyBlYXNlLWluLW91dCcpKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignb3V0ID0+IGluJywgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbi1vdXQnKSlcclxuICAgICAgICBdKSxcclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7XG4gICAgbWVudVN0YXRlOiBzdHJpbmcgPSAnb3V0JztcclxuICAgIFxyXG4gICAgdG9nZ2xlTWVudShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5tZW51U3RhdGUgPSAnb3V0J1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudVN0YXRlID0gJ2luJ1xyXG4gICAgICAgIH1cclxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvc2hhcmVkL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvLWFyZWFcXFwiPlxcclxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uL2ltYWdlcy9sb2dvLnN2Z1xcXCIgYWx0PVxcXCJwb3BhcHBcXFwiIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8bmF2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWRlZmF1bHQgc2lkZWJhcicgcm9sZT1cXFwibmF2aWdhdGlvblxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNicy1zaWRlYmFyLW5hdmJhci1jb2xsYXBzZS0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIGZvci4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXFxcIiBpZD1cXFwiYnMtc2lkZWJhci1uYXZiYXItY29sbGFwc2UtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS1VTC0tPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IGRhc2hib2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImhpZGRlbi14cyBzaG93b3BhY2l0eVxcXCIgYWx0PVxcXCJlbmdhZ2VtZW50XFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9pY29ucy9kZXNrdG9wLnBuZ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImZvckFuaW1hdGVcXFwiIFtAc2xpZGVJbk91dF09XFxcIm1lbnVTdGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnb3ZlcnZpZXcnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3ZlcnZpZXdcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVxcXCJ0b2dnbGVNZW51KCRldmVudClcXFwiIGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcIlxcXCIgZGF0YS10b2dnbGU9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVOR0FHRU1FTlRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaGlkZGVuLXhzIHNob3dvcGFjaXR5XFxcIiBhbHQ9XFxcImVuZ2FnZW1lbnRcXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL2ljb25zL2xpbmsucG5nXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZm9yQW5pbWF0ZVxcXCIgW0BzbGlkZUluT3V0XT1cXFwibWVudVN0YXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWydncm91cCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcm91cHNcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWydjYW1wYWlnbiddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW1wYWlnblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJ215LWNhbXBhaWduJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IENhbXBhaWduXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5UcmlnZ2VyczwvYT48L2xpPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImhpZGRlbi14cyBzaG93b3BhY2l0eVxcXCIgYWx0PVxcXCJlbmdhZ2VtZW50XFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9pY29ucy9tYWlsLnBuZ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFpbCBPcHRpb25zXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVVMLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJmb3JBbmltYXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk1haWwgU2VuZGVyPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5TZW5kIEVtYWlsPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgKGNsaWNrKT1cXFwidG9nZ2xlTWVudSgkZXZlbnQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJoaWRkZW4teHMgc2hvd29wYWNpdHlcXFwiIGFsdD1cXFwiZW5nYWdlbWVudFxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvaWNvbnMvY29nLnBuZ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9wIGFwcCBzZXR0aW5nc1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1VTC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZm9yQW5pbWF0ZVxcXCIgW0BzbGlkZUluT3V0XT1cXFwibWVudVN0YXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPlBvcEFwcCBzZXR0aW5nczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+U3lzdGVtIHNldHRpbmdzPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5NYW5hZ2UgdXNlcnM8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk1hbmFnZSBwZXJtaXNzaW9uczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+TG9naW4gbG9nb3V0PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5DYW1wYWlnbiB0eXBlczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvbmF2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvc2hhcmVkL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbi1uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTA7IH1cXG5cXG4ubmF2YmFyLWRlZmF1bHQge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMzMzNDM0OyB9XFxuXFxuLnNlYXJjaCB7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDE2MnB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxMHB4IDAgMCAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7IH1cXG5cXG4uc2VhcmNoIGlucHV0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzOyB9XFxuXFxuLnNlYXJjaCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLnNlYXJjaCBzcGFuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBkaXYge1xcbiAgY29sb3I6ICM4NWNlYzU7IH1cXG5cXG4vKm5hdi5zaWRlYmFyIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyLCBuYXYuc2lkZWJhciAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjQ0NDO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59Ki9cXG4vKi5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcXG4gICAgY29sb3I6ICNDQ0M7XFxufSovXFxuLm5hdmJhci1uYXYgPiBsaSA+IGRpdiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxubmF2OmhvdmVyIC5mb3JBbmltYXRlIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmctbGVmdDogMTVweDsgfVxcblxcbi5sb2dvLWFyZWEge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZDogI2VlMjY0ZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4OyB9XFxuXFxuLmxvZ28tYXJlYSBpbWcge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG5cXG4ubGluay1hY3RpdmUge1xcbiAgLypUT0RPOiBhY3RpdmUgKi8gfVxcblxcbi8qbGkgdWwuZHJvcGRvd24tbWVudS5mb3JBbmltYXRlIGxpIGE6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGhlaWdodDogNDFweDtcXHJcXG4gICAgbGVmdDogM3B4O1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufSovXFxubGkgYSB7XFxuICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxuICAubWFpbi1uYXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAyMDBtcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gMjAwbXMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbiAyMDBtcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDIwMG1zIGVhc2Utb3V0OyB9XFxuICAvKm5hdi5zaWRlYmFyIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51IHtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgfSovXFxuICBuYXYuc2lkZWJhciAubmF2YmFyLWNvbGxhcHNlLCBuYXYuc2lkZWJhciAuY29udGFpbmVyLWZsdWlkIHtcXG4gICAgcGFkZGluZzogMCAwcHggMCAwcHg7IH1cXG4gIC8qLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBkaXYge1xcbiAgICAgICAgY29sb3I6ICM3Nzc7XFxuICAgIH0qL1xcbiAgbmF2LnNpZGViYXIge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNjBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDsgfVxcbiAgbmF2LnNpZGViYXIgbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNHB4IDA7IH1cXG4gIG5hdi5zaWRlYmFyOmhvdmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgfVxcbiAgLmZvckFuaW1hdGUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAubmF2Lm5hdmJhci1uYXYgbGkgZGl2IGltZyB7XFxuICAgIGZsb2F0OiByaWdodDsgfVxcbiAgLm5hdi5uYXZiYXItbmF2IGxpIGRpdiB7XFxuICAgIHBhZGRpbmc6IDEwcHggOHB4OyB9XFxuICB1bC5kYXNoYm9hcmQgPiBsaTpmaXJzdC1jaGlsZCBhIGltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDVweDsgfVxcbiAgLmdseXBoaWNvbi5nbHlwaGljb24tc2VhcmNoIHtcXG4gICAgZmxvYXQ6IHJpZ2h0OyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuICBuYXYuc2lkZWJhciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICBuYXYuc2lkZWJhciAuZm9yQW5pbWF0ZSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIC5uYXYubmF2YmFyLW5hdiBsaSBkaXYgaW1nIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cXG4gIC5uYXYubmF2YmFyLW5hdiBsaTpmaXJzdC1jaGlsZCBkaXYgaW1nIHtcXG4gICAgcGFkZGluZy1yaWdodDogMnB4OyB9XFxuICAuZ2x5cGhpY29uLmdseXBoaWNvbi1zZWFyY2gge1xcbiAgICBmbG9hdDogbGVmdDsgfVxcbiAgdWwuZGFzaGJvYXJkID4gbGk6Zmlyc3QtY2hpbGQgZGl2IGltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDVweDsgfVxcbiAgdWwgbGkgYSwgdWwgbGkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC8qdmVydGljYWwqL1xcbiAgdWwuZm9yQW5pbWF0ZSBsaSBhOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZWUyNjRkO1xcbiAgICBsZWZ0OiAtMjBweDsgfVxcbiAgLypob3Jpem9udGFsKi9cXG4gIHVsIGxpIGE6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZWUyNjRkO1xcbiAgICBsZWZ0OiAtMjBweDtcXG4gICAgYm90dG9tOiA3cHg7IH1cXG4gIC8qY2lyY2xlKi9cXG4gIHVsLmZvckFuaW1hdGUgbGk6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWUyNjRkO1xcbiAgICBsZWZ0OiAtNnB4O1xcbiAgICBib3R0b206IDExcHg7IH1cXG4gIHVsLmZvckFuaW1hdGUgbGkubGluay1hY3RpdmU6YWZ0ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCA0cHggI2VlMjY0ZDtcXG4gICAgYmFja2dyb3VuZDogI2Y3OTNhNjtcXG4gICAgLypiYWNrZ3JvdW5kOiAjZWI2Yzg1OyovIH1cXG4gIHVsLmZvckFuaW1hdGUgbGk6bGFzdC1vZi10eXBlIGE6YWZ0ZXIge1xcbiAgICBoZWlnaHQ6IDEwcHg7IH0gfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvZGFzaGJvYXJkL3NoYXJlZC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnXHJcbmltcG9ydCB7IENsaWVudFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NsaWVudC51c2VyLnNlcnZpY2UnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9wLXVzZXJzLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3VzZXJzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3VzZXJzLmNvbXBvbmVudC5zY3NzJykudG9TdHJpbmcoKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgdXNlcnM6IFNhbXBsZVVzZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIENsaWVudFVzZXJTZXJ2aWNlOiBDbGllbnRVc2VyU2VydmljZSkgeyB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLkNsaWVudFVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRVc2VycygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodXNlcnMgPT4gdGhpcy51c2VycyA9IHVzZXJzKVxyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU2FtcGxlVXNlciB7XG4gICAgdG90YWx1c2VyczogbnVtYmVyO1xuICAgIHRhcmdldGVkdXNlcnM6IG51bWJlcjtcbiAgICBlbWFpbGFibGU6IG51bWJlcjtcbiAgICBvbmxpbmU6IG51bWJlcjtcbiAgICBvZmZsaW5lOiBudW1iZXI7XG59XHJcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvdXNlcnMvdXNlcnMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbiAgICBcXHJcXG48cCAqbmdJZj1cXFwiIXVzZXJzXFxcIj48c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPjwvcD5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3cgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiICpuZ0lmPVxcXCJ1c2Vyc1xcXCI+XFxyXFxuICAgICAgICA8dWwgKm5nRm9yPVxcXCJsZXQgdXMgb2YgdXNlcnNcXFwiIGNsYXNzPVxcXCJ1c2Vyc1xcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLXRvdGFsLS0+XFxyXFxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXVzZXInPjwvc3Bhbj48YnIgLz48c3Bhbj57eyB1cy50b3RhbFVzZXJzIHwgbnVtYmVyfX08L3NwYW4+PGJyIC8+PHNwYW4+dG90YWwgdXNlcnM8L3NwYW4+PC9saT5cXHJcXG4gICAgICAgICAgICA8IS0tdGFyZ2V0LS0+XFxyXFxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXNjcmVlbnNob3QnPjwvc3Bhbj48YnIgLz48c3Bhbj57eyB1cy50YXJnZXRlZFVzZXJzIHwgbnVtYmVyfX08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJwZXJjZW50XFxcIj57eyB1cy50YXJnZXRlZFVzZXJzIC8gdXMudG90YWxVc2VycyB8IHBlcmNlbnQgOiAnMS4xLTInfX08L3NwYW4+IDxiciAvPjxzcGFuPnRhcmdldGVkIHVzZXJzPC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICAgICAgPCEtLWVtYWlsLS0+XFxyXFxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlJz48L3NwYW4+PGJyIC8+PHNwYW4+e3sgdXMuZW1haWxhYmxlIHwgbnVtYmVyfX08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJwZXJjZW50XFxcIj57eyB1cy5lbWFpbGFibGUgLyB1cy50b3RhbFVzZXJzIHwgcGVyY2VudCA6ICcxLjItMid9fTwvc3Bhbj4gPGJyIC8+PHNwYW4+ZW1haWxhYmxlIHVzZXJzPC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICAgICAgPCEtLW9ubGluZS0tPlxcclxcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1zaWduYWwnPjwvc3Bhbj48YnIgLz48c3Bhbj57eyB1cy5vbmxpbmUgfCBudW1iZXJ9fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInBlcmNlbnRcXFwiPnt7IHVzLm9ubGluZSAvIHVzLnRvdGFsVXNlcnMgfCBwZXJjZW50IDogJzEuMi0yJ319PC9zcGFuPiA8YnIgLz48c3Bhbj5vbmxpbmUgdXNlcnM8L3NwYW4+PC9saT5cXHJcXG4gICAgICAgICAgICA8IS0tb2ZmbGluZS0tPlxcclxcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1jaXJjbGUtYXJyb3ctcmlnaHQnPjwvc3Bhbj48YnIgLz48c3Bhbj57eyB1cy5vZmZsaW5lIHwgbnVtYmVyfX08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJwZXJjZW50XFxcIj57eyB1cy5vZmZsaW5lIC8gdXMudG90YWxVc2VycyB8IHBlcmNlbnQgOiAnMS4yLTInfX08L3NwYW4+IDxiciAvPjxzcGFuPm9mZmxpbmUgdXNlcnM8L3NwYW4+PC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvdXNlcnMvdXNlcnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlcnMuY29tcG9uZW50LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlcnMuY29tcG9uZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91c2Vycy5jb21wb25lbnQuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Rhc2hib2FyZC9zaGFyZWQvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidWwudXNlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIHVsLnVzZXJzIGxpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgYm94LXNoYWRvdzogNHB4IDNweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViOyB9XFxuICAgIHVsLnVzZXJzIGxpOmZpcnN0LWNoaWxkIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVjZWM1O1xcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7IH1cXG4gICAgICB1bC51c2VycyBsaTpmaXJzdC1jaGlsZCAuZ2x5cGhpY29uIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTsgfVxcbiAgICB1bC51c2VycyBsaTpub3QoOmZpcnN0LW9mLXR5cGUpIC5nbHlwaGljb24ge1xcbiAgICAgIGNvbG9yOiAjZWUyNjRkOyB9XFxuICAgIHVsLnVzZXJzIGxpOmxhc3QtY2hpbGQge1xcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDsgfVxcbiAgICB1bC51c2VycyBsaTpmaXJzdC1vZi10eXBlIHNwYW46bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIGNvbG9yOiAjZWUyNjRkOyB9XFxuICAgIHVsLnVzZXJzIGxpIHNwYW46bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIGZvbnQtc2l6ZTogMi41ZW07IH1cXG4gIHVsLnVzZXJzIC5wZXJjZW50IHtcXG4gICAgY29sb3I6ICNlZTI2NGQ7IH1cXG4gIHVsLnVzZXJzIC5nbHlwaGljb24ge1xcbiAgICBmb250LXNpemU6IDEuNmVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9kYXNoYm9hcmQvc2hhcmVkL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9