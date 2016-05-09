//ResponseJS Controller

define (['app'] , function(sampleApp)    { 
    
    sampleApp.register.controller('rjsresponsive', function($rootScope, $scope, exSrcConSrv, arryObjSrv)   {
    var rr = this;
    
    $rootScope.exSrcObj = exSrcConSrv;
	
	$rootScope.exSrcObj.exsrccon(
    {
        "html" : {	
        "label":"HTML", 
        "src":"pages/layout/r-js-responsive.html",  
        "icon":"fa fa-html5"
        },
        "controller" : {
        "label":"rjsResponsiveCtrlr", 
        "src":"srcjs/app/controllers/rjsResponsiveController-src.js", 
        "icon":"fa fa-dot-circle-o"
        },
        "css" : {
        "label":"SCSS", 
        "src":"scss/app/r-js-responsive.scss", 
        "psrc":"css/app/r-js-responsive.css", 
        "icon":"fa fa-css3"
        }
    });
    
    $rootScope.exSrcLinkArray = arryObjSrv.parseObj($rootScope.exSrcObj);
    
    Response.ready(function($) {
        Response.create({
            prop: "width",
            prefix: "r",
            breakpoints : [0, 768, 992]
        });
        
    })
    
    console.log("-----Controller Scope-----");
	console.log($scope);
    
    console.log("-----rr Controller Scope-----");
    console.log(rr);
    })
    
    })