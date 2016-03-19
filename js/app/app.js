//Application Definition//

define (['angular-route','angular-touch'], function(){
angular.module('codingExamples', 
				['ngRoute',
				'ngTouch',
				'ng.deviceDetector',
				'coreControllerMod',
				'servicesMod', 
				'directivesMod',
				'htmlMod'])

//Routes//
.config(function($routeProvider, $locationProvider){
	$routeProvider
		//Home Page
		.when("/",{
		  templateUrl: "pages/home.html", controller: 'detect', controllerAs: 'bd'
		})
		//Drag & Drop Example
		.when("/examples/htmlapi/drag-drop",{
		  templateUrl: "pages/htmlapi/drag-drop.html", controller: 'htmlAPI', controllerAs: 'ha'
		})
		//Dynamic Data Example
		.when("/examples/dynamic-data",{
		  templateUrl: "pages/dynamicData.html", controller: 'dynamicdata', controllerAs: 'dd'
		})
		//Responsive Example
		.when("/examples/responsive",{
		  templateUrl: "pages/responsive.html" 
		})
		//SVGPolyline Example
		.when("/examples/svg-polyline",{
		  templateUrl: "pages/svgPolyline.html", controller: 'graphs', controllerAs: 'pg'
		})
		//Contact
		.when("/contact",{
		  templateUrl: "pages/contact.html"
		});
})
});



	
	