//Application Definition// 

define (['bundle'], function(){ 
	var sampleApp = angular.module('codingExamples',  
	['ngRoute', 'ng.deviceDetector', 'servicesMod','directivesMod']);

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
//JavaScript Concepts
.when("/examples/js-concepts", {
	templateUrl: "pages/jsconcepts.html",
	resolve: {
	deps:function(lzLoadSvc, $q) {var d=$q.defer();lzLoadSvc.loadCtrl('jsconcepts', d);return d.promise;}
	},
	controller: 'jsconcepts',
	controllerAs: 'jc'
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
		templateUrl: "pages/layout/m-q-responsive.html",
		resolve: {
		deps:function(lzLoadSvc, $q) {var d=$q.defer();lzLoadSvc.loadCtrl('mqresponsive', d);return d.promise;}
		},
		controller: 'mqresponsive',
		controllerAs: 'mq'
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
	templateUrl: "pages/contact.html",
	resolve: {
		deps:function(lzLoadSvc, $q) {var d=$q.defer();lzLoadSvc.loadCtrl('contact', d);return d.promise;}
	},
	controller: 'contact',
	controllerAs: 'cc'
});

}]);

//Application Controller
sampleApp.controller('appCtrl', ['$rootScope', '$scope', 'exSrcConSrv', function($rootScope, $scope, exSrcConSrv) {
	var ap = this;
	$scope.exSrcType = 'html'; 
	
	$scope.changeSrcType = function (arg)	{
		$scope.exSrcType = arg;
	};
	
	console.log("--------$rootScope---------");
	console.log($rootScope);
	console.log("-----ap Controller Scope-----");
	console.log(ap);
}]);

return sampleApp;

});



	
	