//Controllers Mod Definition//

define (function(){
angular.module('coreControllerMod', ['graphMod','dynamicdataMod','detectMod'])

//Controllers//
//Main Application Controller
.controller('AppCtrl', function($scope, $http, $window, srcCollection) {
	var ap = this;
	$scope.$on('$viewContentLoaded', function() {
		ap.modalCollection = srcCollection.getExSrcValue();
	 });
 	ap.modalSourceObject = 	{
 	'home' : 		{
 						"html" : "pages/home.html",
						"app" : "js/app/app.js",
						"main" : "js/app/main.js",
						"controllers" : "js/app/controllers/controllers.js",
						"directives" : "js/app/directives/directives.js",
						"services" : "js/app/services/services.js",
						"css" : "css/styles.css",
						undefined : "pages/home.html"	
 	},
 	'dynamicData':	{
 						"html"	: 	"pages/dynamicData.html",
						"app" : "js/app/app.js",
						"main" : "js/app/main.js",
						"controllers" : "js/app/controllers/controllers.js",
						"directives" : "js/app/directives/directives.js",
						"services" : "js/app/services/services.js",
						"css"	:	"css/dynamicData.css",
						undefined	:	"pages/dynamicData.html"
 	},
 	'responsive' :	{
			 			"html"	: 	"pages/responsive.html",
						"app" : "js/app/app.js",
						"main" : "js/app/main.js",
						"controllers" : "js/app/controllers/controllers.js",
						"directives" : "js/app/directives/directives.js",
						"services" : "js/app/services/services.js",
						"css"	:	"css/responsive.css",
						undefined	:	"pages/responsive.html"	
 	},
 	'svgPolyline' :	{
		 				"html"	: 	"pages/svgPolyline.html",
						"app" : "js/app/app.js",
						"main" : "js/app/main.js",
						"controllers" : "js/app/controllers/controllers.js",
						"directives" : "js/app/directives/directives.js",
						"services" : "js/app/services/services.js",
						"css"	:	"css/svgPolyline.css",
						undefined	:	"pages/svgPolyline.html"
 	},
 	'contact' :		{
		 				"html"	: 	"pages/contact.html",
						"app" : "js/app/app.js",
						"main" : "js/app/main.js",
						"controllers" : "js/app/controllers/controllers.js",
						"directives" : "js/app/directives/directives.js",
						"services" : "js/app/services/services.js",
						"css"	:	"css/contact.css",
						undefined	:	"pages/contact.html"
 	}
 	};
	 	
	console.log("--------$scope---------");
	console.log($scope);
	console.log("-----ap Controller Scope-----");
	console.log(ap);
	
})






});



	
	