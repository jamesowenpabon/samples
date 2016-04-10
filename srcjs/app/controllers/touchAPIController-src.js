//Touch API Controller

define(['app'], function(sampleApp){

sampleApp.register.controller('touchAPI', function($rootScope, $scope, exSrcConSrv, arryObjSrv)	{
	var ha = this;
	
	$rootScope.exSrcObj = new exSrcConSrv.exSrcCon(
    {
    	"html" : {	"label":"HTML", 
 				"src":"pages/htmlapi/drag-drop.html", 
 				"icon":"fa fa-html5"
	 	},
		"touchAPIController" : {
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

	ha.touchConfigObj = 
	{
	'droplist' : ['left1','left2','left3','right1','right2',
				'right3','r4c1','r4c2','r4c3','r4c4','r4c5','r4c6'],
	'touchFunction' : 'onTouchFunction',
	'localScope' : 'ha'
	};
	
	ha.dragConfigObj = {'dragFunction' : 'onDragFunction' , 'localScope' : 'ha'};
	ha.dropConfigObj = {'dropFunction' : 'onDropFunction' , 'localScope' : 'ha'};
					
	ha.onTouchFunction = function(scope,element,attrs)	{
	var attrsobj =	angular.fromJson(attrs.touchableItem);
	var dropList = attrsobj.droplist;
	
	element.on('touchstart',function(event){
		event.preventDefault() ;
		event.stopPropagation();
		var touchedElementId = event;
		var touchedElementText = touchedElementId.currentTarget.childNodes[0].nodeValue;
		var sourceContainerRow = event.target.parentElement.dataset.row;
		if(sourceContainerRow != 'homeRow')	{
	 		$( "#center" + sourceContainerRow).attr('class','box--noresult');
		}
		$( "body" ).append( "<span id='ghostDragElement' class='ghostdrag'>"+
		touchedElementText+"</span>" );
	});
	
	element.on('touchmove',function(event){
		event.preventDefault() ;
		event.stopPropagation();
		var xPos = event.originalEvent.changedTouches[0].pageX;
		var yPos = event.originalEvent.changedTouches[0].pageY;
		$("#ghostDragElement").offset({ top: yPos-25, left: xPos-35 });
		$("#ghostDragElement").addClass( "ghostdrag--moving" );
	});
	
	// Touch Events
	element.on('touchend',function(event){
		$("#ghostDragElement").remove();
		event.preventDefault() ;
		event.stopPropagation();
		var touchedElementId = event.target.id;
		var sourceContainer = event.target.parentElement;
		var sourceContainerId = event.target.parentElement.id;
		var sourceContainerRow = sourceContainer.dataset.row;
		var xPos = event.originalEvent.changedTouches[0].clientX;
		var yPos = event.originalEvent.changedTouches[0].clientY;
		var destinationContainer = document.elementFromPoint(xPos, yPos);
		var destinationContainerRow = destinationContainer.dataset.row;
		var destinationContainerId = destinationContainer.id != "" ? destinationContainer.id : 'noId';
		
		if (dropList.indexOf(destinationContainerId) != -1)	{
		    $( "#" + destinationContainerId).html(event.target);
		    $( "#" + destinationContainerId).removeClass( "box--empty" );
		  	$( "#" + destinationContainerId).addClass( "box" );
		  	$( "#" + sourceContainerId).removeClass( "box" );
			$( "#" + sourceContainerId).addClass( "box--empty" );
		}
		
		var matchRow = dropList.indexOf(destinationContainerId) != -1 ? 
		destinationContainerRow : sourceContainerRow;
		var left = $( "#left" + matchRow + " span:first-of-type" ).attr('data-match');
		var right = $( "#right" + matchRow + " span:first-of-type" ).attr('data-match');
		if(left != undefined && right != undefined)	{
			if(left == right)	{
				$( "#center" + matchRow).attr('class','box--match') 	;	
			}else if (left != right)	{
				$( "#center" + matchRow).attr('class','box--mismatch') 	;	
			}
		}
	});
	};
	
	ha.onDragFunction = function(scope,element,attrs)	{
	//Drag Events
	element.on('dragstart', function(event) {
		event.originalEvent.dataTransfer.effectAllowed='move';
		var sourceContainerId = event.target.parentElement.id;
		var sourceContainerRow = event.target.parentElement.dataset.row;
		event.originalEvent.dataTransfer.setData("text", event.target.id);
		if(sourceContainerRow != 'homeRow')	{
		 	$( "#center" + sourceContainerRow).attr('class','box--noresult');
		}
		$( "#" + sourceContainerId).removeClass( "box" );
		$( "#" + sourceContainerId).addClass( "box--empty" );
	});
	element.on('dragend', function(event)	{
		event.preventDefault();
		var destinationContainerId = event.target.parentElement.id;
		var destinationContainerRow = event.target.parentElement.dataset.row;
		$( "#" + destinationContainerId).removeClass( "box--empty" );
		$( "#" + destinationContainerId).addClass( "box" );
		var left = $( "#left" + destinationContainerRow + " span:first-of-type" ).attr('data-match');
		var right = $( "#right" + destinationContainerRow + " span:first-of-type" ).attr('data-match');
		if(left != undefined && right != undefined)	{
		    if(left == right)	{
		    	$( "#center" + destinationContainerRow).attr('class','box--match') 	;	
		    }else if (left != right)	{
		    	$( "#center" + destinationContainerRow).attr('class','box--mismatch') 	;	
		    }
		}
	});
	}
	
	ha.onDropFunction = function(scope,element,attrs)	{
		//Drag Events
		element.on('drop', function(event) {
			event.preventDefault();
			var draggableElement = event.target.draggable;
			var data = event.originalEvent.dataTransfer.getData("text");
			var destinationContainerId = event.target.id;
			var destinationContainerChild = $("#" + destinationContainerId + 
			" span:first-of-type").attr('id');
			if (!destinationContainerChild && !draggableElement)	{
				event.target.appendChild($('#'+data)[0]);
			}
		});
		element.on('dragover', function(event) {
			event.preventDefault();
			event.originalEvent.dataTransfer.dropEffect='move';
		});
	};

	console.log("-----ha Controller Scope-----");
	console.log(ha);
});
});