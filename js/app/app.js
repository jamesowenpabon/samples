define(["bundle"],function(){var sampleApp=angular.module("codingExamples",["ngRoute","ng.deviceDetector","servicesMod","directivesMod"]);return sampleApp.config(["$routeProvider","$controllerProvider","$locationProvider",function($routeProvider,$controllerProvider,$locationProvider){sampleApp.register={controller:$controllerProvider.register},$routeProvider.when("/",{templateUrl:"pages/home.html",resolve:{deps:function(lzLoadSvc,$q){var d=$q.defer();return lzLoadSvc.loadCtrl("detect",d),d.promise}},controller:"detect",controllerAs:"bd"}).when("/examples/htmlapi/drag-drop",{templateUrl:"pages/htmlapi/drag-drop.html",resolve:{deps:function(lzLoadSvc,$q){var d=$q.defer();return lzLoadSvc.loadCtrl("touchAPI",d),d.promise}},controller:"touchAPI",controllerAs:"ha"}).when("/examples/htmlapi/geolocate",{templateUrl:"pages/htmlapi/geolocate.html",resolve:{deps:function(lzLoadSvc,$q){var d=$q.defer();return lzLoadSvc.loadCtrl("geoAPI",d),d.promise}},controller:"geoAPI",controllerAs:"gl"}).when("/examples/dynamic-data",{templateUrl:"pages/dynamicData.html",resolve:{deps:function(lzLoadSvc,$q){var d=$q.defer();return lzLoadSvc.loadCtrl("dynamicdata",d),d.promise}},controller:"dynamicdata",controllerAs:"dd"}).when("/examples/layout/m-q-responsive",{templateUrl:"pages/layout/m-q-responsive.html"}).when("/examples/layout/r-js-responsive",{templateUrl:"pages/layout/r-js-responsive.html",resolve:{deps:function(lzLoadSvc,$q){var d=$q.defer();return lzLoadSvc.loadCtrl("rjsresponsive",d),d.promise}},controller:"rjsresponsive",controllerAs:"rr"}).when("/examples/svg-polyline",{templateUrl:"pages/svgPolyline.html",resolve:{deps:function(lzLoadSvc,$q){var d=$q.defer();return lzLoadSvc.loadCtrl("graphs",d),d.promise}},controller:"graphs",controllerAs:"pg"}).when("/contact",{templateUrl:"pages/contact.html"})}]),sampleApp.controller("appCtrl",function($scope,$http,$window,srcCollection){var ap=this;$scope.exSrcType="html",$scope.$on("$viewContentLoaded",function(){ap.modalCollection=srcCollection.getExSrcValue()}),ap.modalSourceObject={home:{html:{label:"HTML",src:"pages/home.html",icon:"fa fa-html5"},main:{label:"MainJS",src:"srcjs/app/main-src.js",icon:"fa fa-dot-circle-o"},app:{label:"AppJS",src:"srcjs/app/app-src.js",icon:"fa fa-dot-circle-o"},detectController:{label:"DetectCtrlr",src:"srcjs/app/controllers/detectController-src.js",icon:"fa fa-dot-circle-o"},directives:{label:"Directives",src:"srcjs/app/directives/directives-src.js",icon:"fa fa-dot-circle-o"},services:{label:"Services",src:"srcjs/app/services/services-src.js",icon:"fa fa-dot-circle-o"},css:{label:"SCSS",src:"scss/app/home.scss",psrc:"css/app/home.css",icon:"fa fa-css3"}},dragDrop:{html:{label:"HTML",src:"pages/htmlapi/drag-drop.html",icon:"fa fa-html5"},main:{label:"MainJS",src:"srcjs/app/main-src.js",icon:"fa fa-dot-circle-o"},app:{label:"AppJS",src:"srcjs/app/app-src.js",icon:"fa fa-dot-circle-o"},touchAPIController:{label:"TouchAPICtrlr",src:"srcjs/app/controllers/touchAPIController-src.js",icon:"fa fa-dot-circle-o"},directives:{label:"Directives",src:"srcjs/app/directives/directives-src.js",icon:"fa fa-dot-circle-o"},services:{label:"Services",src:"srcjs/app/services/services-src.js",icon:"fa fa-dot-circle-o"},css:{label:"SCSS",src:"scss/app/dragDrop.scss",psrc:"css/app/dragDrop.css",icon:"fa fa-css3"}},geolocate:{html:{label:"HTML",src:"pages/htmlapi/geolocate.html",icon:"fa fa-html5"},main:{label:"MainJS",src:"srcjs/app/main-src.js",icon:"fa fa-dot-circle-o"},app:{label:"AppJS",src:"srcjs/app/app-src.js",icon:"fa fa-dot-circle-o"},geoAPIController:{label:"geoAPICtrlr",src:"srcjs/app/controllers/geoAPIController-src.js",icon:"fa fa-dot-circle-o"},directives:{label:"Directives",src:"srcjs/app/directives/directives-src.js",icon:"fa fa-dot-circle-o"},services:{label:"Services",src:"srcjs/app/services/services-src.js",icon:"fa fa-dot-circle-o"},css:{label:"SCSS",src:"scss/app/geolocate.scss",psrc:"css/app/geolocate.css",icon:"fa fa-css3"}},dynamicData:{html:{label:"HTML",src:"pages/dynamicData.html",icon:"fa fa-html5"},main:{label:"MainJS",src:"srcjs/app/main-src.js",icon:"fa fa-dot-circle-o"},app:{label:"AppJS",src:"srcjs/app/app-src.js",icon:"fa fa-dot-circle-o"},dynamicDataController:{label:"DynamicDataCtrlr",src:"srcjs/app/controllers/dynamicdataController-src.js",icon:"fa fa-dot-circle-o"},directives:{label:"Directives",src:"srcjs/app/directives/directives-src.js",icon:"fa fa-dot-circle-o"},services:{label:"Services",src:"srcjs/app/services/services-src.js",icon:"fa fa-dot-circle-o"},css:{label:"SCSS",src:"scss/app/dynamicData.scss",psrc:"css/app/dynamicData.css",icon:"fa fa-css3"}},mQResponsive:{html:{label:"HTML",src:"pages/layout/m-q-responsive.html",icon:"fa fa-html5"},main:{label:"MainJS",src:"srcjs/app/main-src.js",icon:"fa fa-dot-circle-o"},app:{label:"AppJS",src:"srcjs/app/app-src.js",icon:"fa fa-dot-circle-o"},directives:{label:"Directives",src:"srcjs/app/directives/directives-src.js",icon:"fa fa-dot-circle-o"},services:{label:"Services",src:"srcjs/app/services/services-src.js",icon:"fa fa-dot-circle-o"},css:{label:"SCSS",src:"scss/app/m-q-responsive.scss",psrc:"css/app/m-q-responsive.css",icon:"fa fa-css3"}},rJsResponsive:{html:{label:"HTML",src:"pages/layout/r-js-responsive.html",icon:"fa fa-html5"},main:{label:"MainJS",src:"srcjs/app/main-src.js",icon:"fa fa-dot-circle-o"},app:{label:"AppJS",src:"srcjs/app/app-src.js",icon:"fa fa-dot-circle-o"},rjsResponsiveController:{label:"rjsResponsiveCtrlr",src:"srcjs/app/controllers/rjsResponsiveController-src.js",icon:"fa fa-dot-circle-o"},directives:{label:"Directives",src:"srcjs/app/directives/directives-src.js",icon:"fa fa-dot-circle-o"},services:{label:"Services",src:"srcjs/app/services/services-src.js",icon:"fa fa-dot-circle-o"},css:{label:"SCSS",src:"scss/app/r-js-responsive.scss",psrc:"css/app/r-js-responsive.css",icon:"fa fa-css3"}},svgPolyline:{html:{label:"HTML",src:"pages/svgPolyline.html",icon:"fa fa-html5"},main:{label:"MainJS",src:"srcjs/app/main-src.js",icon:"fa fa-dot-circle-o"},app:{label:"AppJS",src:"srcjs/app/app-src.js",icon:"fa fa-dot-circle-o"},graphController:{label:"GraphCtrlr",src:"srcjs/app/controllers/graphController-src.js",icon:"fa fa-dot-circle-o"},directives:{label:"Directives",src:"srcjs/app/directives/directives-src.js",icon:"fa fa-dot-circle-o"},services:{label:"Services",src:"srcjs/app/services/services-src.js",icon:"fa fa-dot-circle-o"},css:{label:"SCSS",src:"scss/app/svgPolyline.scss",psrc:"css/app/svgPolyline.css",icon:"fa fa-css3"}},contact:{html:{label:"HTML",src:"pages/contact.html",icon:"fa fa-html5"},main:{label:"MainJS",src:"srcjs/app/main-src.js",icon:"fa fa-dot-circle-o"},app:{label:"AppJS",src:"srcjs/app/app-src.js",icon:"fa fa-dot-circle-o"},directives:{label:"Directives",src:"srcjs/app/directives/directives-src.js",icon:"fa fa-dot-circle-o"},services:{label:"Services",src:"srcjs/app/services/services-src.js",icon:"fa fa-dot-circle-o"},css:{label:"SCSS",src:"scss/app/contact.scss",psrc:"css/app/contact.css",icon:"fa fa-css3"}}},ap.getMyCtrlScope=function(){return $scope},console.log("--------$scope---------"),console.log($scope),console.log("-----ap Controller Scope-----"),console.log(ap)}),sampleApp});
//# sourceMappingURL=maps/app.js.map
