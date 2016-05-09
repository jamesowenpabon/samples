//Touch API Controller

define(['app'], function(sampleApp){

sampleApp.register.controller('touchAPI', function($rootScope, $scope, exSrcConSrv, arryObjSrv)	{
	var ha = this;
	
	$rootScope.exSrcObj = exSrcConSrv;
	
	$rootScope.exSrcObj.exsrccon(
    {
		"html" : {	
		"label":"HTML", 
		"src":"pages/htmlapi/drag-drop.html", 
		"icon":"fa fa-html5"
		},
		"controller" : {
		"label":"TouchAPICtrlr", 
		"src":"srcjs/app/controllers/touchAPIController-src.js",  
		"icon":"fa fa-dot-circle-o"
		},
		"css" : {
		"label":"SCSS", 
		"src":"scss/app/dragDrop.scss", 
		"psrc":"css/app/dragDrop.css",
		"icon":"fa fa-css3"
		}
    });
    
    $rootScope.exSrcLinkArray = arryObjSrv.parseObj($rootScope.exSrcObj);

	// Custom Controller for specific DOM Manipulation after  
	// use of reusable Drag Drop Touch Directives
	$scope.initCallback = function(interface){
      this.interface = interface;
    }
	
	
	$scope.onStart = function(sourceContainerId, sourceContainerRow, element) {
		this.interface.replace("center" + sourceContainerRow, "class", "box--noresult")
		this.interface.remove(sourceContainerId, "box");
		this.interface.add(sourceContainerId, "box--empty");
	}
	
	$scope.onMove = function(xPos,yPos,event) {
		//	Custom Code Here
	}
	
	$scope.onEnd = function(destinationContainerId, destinationContainerRow, event)	{
		this.interface.remove(destinationContainerId, "box--empty")
		this.interface.add (destinationContainerId,  "box")
		var left = $( "#left" + destinationContainerRow + " span" ).attr('data-match');
		var right = $( "#right" + destinationContainerRow + " span" ).attr('data-match');
		if(left != undefined && right != undefined)	{
		    if(left == right)	{
		    	this.interface.replace( "center" + destinationContainerRow, 'class', 'box--match') 	;	
		    }else if (left != right)	{
		    	this.interface.replace( "center" + destinationContainerRow, 'class', 'box--mismatch') 	;	
		    }
		}
	}

	console.log("-----Controller Scope-----");
	console.log($scope);

	console.log("-----ha Controller Scope-----");
	console.log(ha);
});

});