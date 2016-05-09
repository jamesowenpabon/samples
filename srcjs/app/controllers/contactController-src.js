// Contact Controller

define(['app'], function(sampleApp) {
    
sampleApp.register.controller('contact', function($rootScope, $scope, exSrcConSrv, arryObjSrv) {
    var cc = this;

    $rootScope.exSrcObj = exSrcConSrv;
	
	$rootScope.exSrcObj.exsrccon(
	{
        "html" : {	
        "label":"HTML", 
        "src":"pages/contact.html", 
        "icon":"fa fa-html5"
        },
        "controller" : {
        "label":"ContactCtrlr", 
        "src":"srcjs/app/controllers/contactController-src.js", 
        "icon":"fa fa-dot-circle-o"
        },
        "css" : {
        "label":"SCSS", 
        "src":"scss/app/contact.scss", 
        "psrc":"css/app/contact.css", 
        "icon":"fa fa-css3"
        }
	});
	
	$rootScope.exSrcLinkArray = arryObjSrv.parseObj($rootScope.exSrcObj); 
	
	console.log("-----Controller Scope-----");
	console.log($scope);
	
	console.log("-----cc Controller Scope-----"); 
	console.log(cc);

});
})