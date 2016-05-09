//MQ Responsive Controller

define(['app'], function(sampleApp) {

sampleApp.register.controller('mqresponsive', function($rootScope, $scope, exSrcConSrv, arryObjSrv)    {
    var mq = this;
    
   	$rootScope.exSrcObj = exSrcConSrv;
	
	$rootScope.exSrcObj.exsrccon(
	{
		"html" : {	
		"label":"HTML", 
 		"src":"pages/layout/m-q-responsive.html",  
 		"icon":"fa fa-html5"
 	    },
		"controller" : {
		"label":"mqResponsiveCtrlr", 
		"src":"srcjs/app/controllers/mqResponsiveController-src.js", 
		"icon":"fa fa-dot-circle-o"
		},
		"css" : {
		"label":"SCSS", 
		"src":"scss/app/m-q-responsive.scss", 
		"psrc":"css/app/m-q-responsive.css", 
		"icon":"fa fa-css3"
	    }
	});
	
    $rootScope.exSrcLinkArray = arryObjSrv.parseObj($rootScope.exSrcObj); 
    
    console.log("-----Controller Scope-----");
	console.log($scope);
    
    console.log("-----mq Controller Scope-----");
	console.log(mq);
    
});
})