//Application Definition//

define (['angular-route'], function(){
angular.module('codingExamples', 
				['ngRoute',
				'ng.deviceDetector',
				'controllersMod',
				'servicesMod', 
				'directivesMod'])

//Routes//
.config(function($routeProvider, $locationProvider){
	$routeProvider
		//Home Page
		.when("/",{
		  templateUrl: "pages/home.html", controller: 'detect', controllerAs: 'bd',
		})
		//Dynamic Data Example
		.when("/examples/dynamic-data",{
		  templateUrl: "pages/dynamicData.html", controller: 'dynamicdata', controllerAs: 'dd',
		})
		//Responsive Example
		.when("/examples/responsive",{
		  templateUrl: "pages/responsive.html", 
		})
		//SVGPolyline Example
		.when("/examples/svg-polyline",{
		  templateUrl: "pages/svgPolyline.html", controller: 'graphs', controllerAs: 'pg',
		})
		//Contact
		.when("/contact",{
		  templateUrl: "pages/contact.html",
		});
})
});



	
	