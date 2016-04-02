//Application Definition//

define (['angular-route','ng-device-detector'], function(){
	var sampleApp = angular.module('codingExamples', 
	['ngRoute', 'ng.deviceDetector', 'servicesMod','directivesMod'])

//Routes//
sampleApp.config(['$routeProvider', '$controllerProvider', '$locationProvider', 
function($routeProvider, $controllerProvider, $locationProvider){
	
sampleApp.register = {controller: $controllerProvider.register};
            
$routeProvider
//Home Page
.when("/",{
	templateUrl: "pages/home.html", 
	resolve:{
	deps:function(lzLoadSvc, $q) {var d=$q.defer();lzLoadSvc.loadCtrl('detect', d);return d.promise;}
	},
	controller: 'detect', 
	controllerAs: 'bd'
})
//Drag & Drop Example
.when("/examples/htmlapi/drag-drop",{
	templateUrl: "pages/htmlapi/drag-drop.html", 
	resolve:{
	deps:function(lzLoadSvc, $q) {var d=$q.defer();lzLoadSvc.loadCtrl('touchAPI', d);return d.promise;}
	},
	controller: 'touchAPI', 
	controllerAs: 'ha'
})
//Geolocate Example
.when("/examples/htmlapi/geolocate",{
	templateUrl: "pages/htmlapi/geolocate.html",
	resolve:{
	deps:function(lzLoadSvc, $q) {var d=$q.defer();lzLoadSvc.loadCtrl('geoAPI', d);return d.promise;}
	},
	controller: 'geoAPI', 
	controllerAs: 'gl'
})
//Dynamic Data Example
.when("/examples/dynamic-data",{
	templateUrl: "pages/dynamicData.html", 
	resolve:{
	deps:function(lzLoadSvc, $q) {var d=$q.defer();lzLoadSvc.loadCtrl('dynamicdata', d);return d.promise;}
	},
	controller: 'dynamicdata', 
	controllerAs: 'dd'
})
//MQ Responsive Example
.when("/examples/layout/m-q-responsive",{
		templateUrl: "pages/layout/m-q-responsive.html"
})
//RJS Responsive Example
.when("/examples/layout/r-js-responsive",{
		templateUrl: "pages/layout/r-js-responsive.html",
		resolve:{
		deps:function(lzLoadSvc, $q) {var d=$q.defer();lzLoadSvc.loadCtrl('rjsresponsive', d);return d.promise;}
		},
		controller: 'rjsresponsive', 
		controllerAs: 'rr'
})
//SVGPolyline Example
.when("/examples/svg-polyline",{
	templateUrl: "pages/svgPolyline.html",
	resolve:{
	deps:function(lzLoadSvc, $q) {var d=$q.defer();lzLoadSvc.loadCtrl('graphs', d);return d.promise;}
	},
	controller: 'graphs',
	controllerAs: 'pg'
})
//Contact
.when("/contact",{
		templateUrl: "pages/contact.html"
});
}])

//Application Controller
sampleApp.controller('appCtrl', function($scope, $http, $window, srcCollection) {
	var ap = this;
	$scope.exSrcType = 'html';
	$scope.$on('$viewContentLoaded', function() {
		ap.modalCollection = srcCollection.getExSrcValue();
	});

 	ap.modalSourceObject = 	{
 	'home' : {
 	"html" : {	"label":"HTML", 
 				"src":"pages/home.html", 
 				"icon":"fa fa-html5"
 	},
 	"main" : {	"label":"MainJS", 
 				"src":"js/app/main.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
 	"app" : {	"label":"AppJS", 
 				"src":"js/app/app.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
	"coreController" : {	
				"label":"CoreCtrlr", 
				"src":"js/app/controllers/coreController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"detectController" : {
				"label":"DetectCtrlr", 
				"src":"js/app/controllers/detectController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"directives" : {
				"label":"Directives", 
				"src":"js/app/directives/directives.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"services" : {
				"label":"Services", 
				"src":"js/app/services/services.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"css" : {
				"label":"SCSS", 
				"src":"scss/home.scss", 
				"psrc":"css/home.css",
				"icon":"fa fa-css3"
	}
 	},
 	'dragDrop':	{
 	"html" : {	"label":"HTML", 
 				"src":"pages/htmlapi/drag-drop.html", 
 				"icon":"fa fa-html5"
 	},
 	"main" : {	"label":"MainJS", 
 				"src":"js/app/main.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
 	"app" : {	"label":"AppJS", 
 				"src":"js/app/app.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
	"coreController" : {	
				"label":"CoreCtrlr", 
				"src":"js/app/controllers/coreController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"touchAPIController" : {
				"label":"TouchAPICtrlr", 
				"src":"js/app/controllers/touchAPIController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"directives" : {
				"label":"Directives", 
				"src":"js/app/directives/directives.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"services" : {
				"label":"Services", 
				"src":"js/app/services/services.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"css" : {
				"label":"SCSS", 
				"src":"scss/dragDrop.scss", 
				"psrc":"css/dragDrop.css",
				"icon":"fa fa-css3"
	}
 	},
 	'geolocate':	{
 	"html" : {	"label":"HTML", 
 				"src":"pages/htmlapi/geolocate.html", 
 				"icon":"fa fa-html5"
 	},
 	"main" : {	"label":"MainJS", 
 				"src":"js/app/main.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
 	"app" : {	"label":"AppJS", 
 				"src":"js/app/app.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
	"coreController" : {	
				"label":"CoreCtrlr", 
				"src":"js/app/controllers/coreController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"geoAPIController" : {
				"label":"geoAPICtrlr", 
				"src":"js/app/controllers/geoAPIController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"directives" : {
				"label":"Directives", 
				"src":"js/app/directives/directives.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"services" : {
				"label":"Services", 
				"src":"js/app/services/services.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"css" : {
				"label":"SCSS", 
				"src":"scss/geolocate.scss", 
				"psrc":"css/geolocate.css",
				"icon":"fa fa-css3"
	}
 	},
 	'dynamicData':	{
 	"html" : {	"label":"HTML", 
 				"src":"pages/dynamicData.html", 
 				"icon":"fa fa-html5"
 	},
 	"main" : {	"label":"MainJS", 
 				"src":"js/app/main.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
 	"app" : {	"label":"AppJS", 
 				"src":"js/app/app.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
	"coreController" : {	
				"label":"CoreCtrlr", 
				"src":"js/app/controllers/coreController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"dynamicDataController" : {
				"label":"DynamicDataCtrlr", 
				"src":"js/app/controllers/dynamicdataController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"directives" : {
				"label":"Directives", 
				"src":"js/app/directives/directives.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"services" : {
				"label":"Services", 
				"src":"js/app/services/services.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"css" : {
				"label":"SCSS", 
				"src":"scss/dynamicData.scss", 
				"psrc":"css/dynamicData.css",
				"icon":"fa fa-css3"
	}
 	},
 	'mQResponsive' :	{
 	"html" : {	"label":"HTML", 
 				"src":"pages/layout/m-q-responsive.html", 
 				"icon":"fa fa-html5"
 	},
 	"main" : {	"label":"MainJS", 
 				"src":"js/app/main.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
 	"app" : {	"label":"AppJS", 
 				"src":"js/app/app.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
	"coreController" : {	
				"label":"CoreCtrlr", 
				"src":"js/app/controllers/coreController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"directives" : {
				"label":"Directives", 
				"src":"js/app/directives/directives.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"services" : {
				"label":"Services", 
				"src":"js/app/services/services.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"css" : {
				"label":"SCSS", 
				"src":"scss/m-q-responsive.scss", 
				"psrc":"css/m-q-responsive.css", 
				"icon":"fa fa-css3"
	}
 	},
 	'rJsResponsive' :	{
 	"html" : {	"label":"HTML", 
 				"src":"pages/layout/r-js-responsive.html", 
 				"icon":"fa fa-html5"
 	},
 	"main" : {	"label":"MainJS", 
 				"src":"js/app/main.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
 	"app" : {	"label":"AppJS", 
 				"src":"js/app/app.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
	"coreController" : {	
				"label":"CoreCtrlr", 
				"src":"js/app/controllers/coreController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"directives" : {
				"label":"Directives", 
				"src":"js/app/directives/directives.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"services" : {
				"label":"Services", 
				"src":"js/app/services/services.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"css" : {
				"label":"SCSS", 
				"src":"scss/r-js-responsive.scss", 
				"psrc":"css/r-js-responsive.css", 
				"icon":"fa fa-css3"
	}
 	},
 	'svgPolyline' :	{
 	"html" : {	"label":"HTML", 
 				"src":"pages/svgPolyline.html", 
 				"icon":"fa fa-html5"
 	},
 	"main" : {	"label":"MainJS", 
 				"src":"js/app/main.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
 	"app" : {	"label":"AppJS", 
 				"src":"js/app/app.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
	"coreController" : {	
				"label":"CoreCtrlr", 
				"src":"js/app/controllers/coreController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"graphController" : {	
				"label":"GraphCtrlr", 
				"src":"js/app/controllers/graphController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"directives" : {
				"label":"Directives", 
				"src":"js/app/directives/directives.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"services" : {
				"label":"Services", 
				"src":"js/app/services/services.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"css" : {
				"label":"SCSS", 
				"src":"scss/svgPolyline.scss", 
				"psrc":"css/svgPolyline.css",
				"icon":"fa fa-css3"
	}
 	},
 	'contact' :		{
 	"html" : {	"label":"HTML", 
 				"src":"pages/contact.html", 
 				"icon":"fa fa-html5"
 	},
 	"main" : {	"label":"MainJS", 
 				"src":"js/app/main.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
 	"app" : {	"label":"AppJS", 
 				"src":"js/app/app.js", 
 				"icon":"fa fa-dot-circle-o"
 	},
	"coreController" : {	
				"label":"CoreCtrlr", 
				"src":"js/app/controllers/coreController.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"directives" : {
				"label":"Directives", 
				"src":"js/app/directives/directives.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"services" : {
				"label":"Services", 
				"src":"js/app/services/services.js", 
				"icon":"fa fa-dot-circle-o"
	},
	"css" : {
				"label":"SCSS", 
				"src":"scss/contact.scss", 
				"psrc":"css/contact.css", 
				"icon":"fa fa-css3"
	}
 	}
 	};
 	
    ap.getMyCtrlScope = function() {
    	return $scope;
    }
	 	
	console.log("--------$scope---------");
	console.log($scope);
	console.log("-----ap Controller Scope-----");
	console.log(ap);
	
})

return sampleApp;

});



	
	