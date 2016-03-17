//Controllers Mod Definition//

define (function(){
angular.module('coreControllerMod', ['graphMod','dynamicdataMod','detectMod','htmlMod'])

//Controllers//
//Main Application Controller
.controller('AppCtrl', function($scope, $http, $window, srcCollection) {
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
	"htmlAPIController" : {
				"label":"htmlAPICtrlr", 
				"src":"js/app/controllers/htmlAPIController.js", 
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
 	'responsive' :	{
 	"html" : {	"label":"HTML", 
 				"src":"pages/responsive.html", 
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
				"src":"scss/responsive.scss", 
				"psrc":"css/responsive.css", 
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
});



	
	