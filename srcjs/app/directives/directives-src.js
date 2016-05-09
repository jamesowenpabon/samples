//Directives Mod Definition// 

define (function(){
angular.module('directivesMod', [])

//Directives//

// Toggle all siblings 
//[for toggling between main nav items]
.directive('toggleSibs', function()	{
	var swapActive = function (e,a) {
		a = a.toggleSibs;
		e.siblings().removeClass(a);
		e.addClass(a); 
	};
	var link = function(scope,element,attrs)	{
		element.bind('click', function() {swapActive(element,attrs)});
	};
	return{
		restrinct : "A",
		link : link
	};
})

// Toggle previous sibling 
//[for toggling main nav item of sub menu]
.directive('togglePrev', function()	{
	var swapActive = function (e,a) {
		a = a.togglePrev;
		e.siblings().removeClass(a);
		e.prev().addClass(a); 
	};
	var link = function(scope,element,attrs)	{
		element.bind('click', function() {swapActive(element,attrs)});
	};
	return{
		restrinct : "A",
		link : link
	};
})

//siteNavigationButtons Directive 
//[for loading inital nav state based on location]
.directive('setLoadActive', function($location)	{
	var link = function(scope,element,attrs)	{
		var path = ($location.path().substr(1)).split("/");
		var id = path[0] != "" ? path[0] : "home";
		element.find("#" + id).addClass(attrs.setLoadActive);
	};
	return{
		restrict : "A",
		link : link
	};
})

//dynamicDisplayList Directive
//[For toggling column head order directional caret]
.directive('toggleCaret', function()	{
	var orderToggle = function (s,e,a) {
		var lt = s.lastDisplayTarget;
		if(lt == '')	{
			// .caret is a bootstrap class
			e.find("."+a.toggleCaret).toggleClass("caret");
		}
		if(lt != '' && lt != e)	{
			// .caret & .dropup are bootstrap classes
			lt.find("."+a.toggleCaret).toggleClass("caret");
			lt.removeClass("dropup");
			e.find("."+a.toggleCaret).toggleClass("caret");
		}
		// .dropup is a bootstrap class
		e.toggleClass("dropup");
		s.lastDisplayTarget = e;
	};
	var link = function(scope,element,attrs) {
		element.bind('click', function(){orderToggle(scope,element,attrs)} );
	};
	return{
		restrict : "A",
		link : link
	};
})

// touchable Directive
.directive('ddtItem', function() {
	var onddtFunction = function(scope,element,attrs)	{
		
	element.bind('touchstart',function(event){
		event.preventDefault() ;
		event.stopPropagation();
		var sourceContainerId = event.target.parentElement.id;
		var touchedElementText = event.currentTarget.childNodes[0].nodeValue;
		var sourceContainerRow = event.target.parentElement.dataset.row;
		var touchedElement = event.target;
		//Creates ghostDragElement for touch event
		$( "body" ).append( "<span id='ghostDragElement' class='ghostdrag'>"+
		touchedElementText+"</span>" );
		
		//Controller function name provided for customization of case specific functionality
		scope.onStart(sourceContainerId, sourceContainerRow, touchedElement);
		
	});
	
	element.bind('touchmove',function(event){
		
		event.preventDefault() ;
		event.stopPropagation();
		var xPos = event.originalEvent.changedTouches[0].pageX;
		var yPos = event.originalEvent.changedTouches[0].pageY;
		
		// #ghostDragElement is created by onTouchStart
		$("#ghostDragElement").offset({ top: yPos-25, left: xPos-35 });
		// ghostdrag--moving class name provided to style #ghostDragElement
		$("#ghostDragElement").addClass( "ghostdrag--moving" );
		
		//Controller function name provided for customization of case specific functionality
		scope.onMove(xPos,yPos,event);

	});
	
	element.bind('touchend',function(event){
		
		// #ghostDragElement is created by onTouchStart
		$("#ghostDragElement").remove();
		event.preventDefault() ;
		event.stopPropagation();
		var sourceContainerId = event.target.parentElement.id;
		var sourceContainerRow = event.target.parentElement.dataset.row;
		var xPos = event.originalEvent.changedTouches[0].pageX;
		var yPos = event.originalEvent.changedTouches[0].pageY;
		var xyElem = document.elementFromPoint(xPos, yPos)
		var destinationContainer = xyElem ? xyElem : event.target.parentElement;
		var destinationContainerRow = destinationContainer.dataset.row;
		var destinationContainerId = destinationContainer.id != "" 
			? destinationContainer.id : sourceContainerId;
		var dropTest = $("#"+destinationContainerId).attr('dropable-item')
		var isDropBox = (!dropInSelf && !srcEqDest && typeof dropTest !== typeof undefined 
			&& dropTest !== false);
		var dropInSelf = event.target.id === destinationContainerId ? true : false;
		var srcEqDest = sourceContainerId === destinationContainerId ? true : false;
		
		if (!dropInSelf && !srcEqDest && isDropBox) {
			$( "#" + destinationContainerId).html(event.target)
		} else {
			destinationContainerId = sourceContainerId;
			destinationContainerRow = sourceContainerRow;
		}
		
		//Controller function name provided for customization of case specific functionality
		scope.onEnd(destinationContainerId, destinationContainerRow, event);
		
	});
	
	element.bind('dragstart', function(event) {
		
		event.originalEvent.dataTransfer.effectAllowed='move';
		var sourceContainerId = event.target.parentElement.id;
		var sourceContainerRow = event.target.parentElement.dataset.row;
		event.originalEvent.dataTransfer.setData("text", event.target.id);
		
		//Controller function name provided for customization of case specific functionality
		scope.onStart(sourceContainerId, sourceContainerRow);
	
	});
	
	element.bind('dragend', function(event)	{
		event.preventDefault();
		var destinationContainerId = event.target.parentElement.id;
		var destinationContainerRow = event.target.parentElement.dataset.row;
		
		//Controller function name provided for customization of case specific functionality
		scope.onEnd(destinationContainerId, destinationContainerRow, event);
		
	});
	
	};
	
	var link = function(scope,element,attrs)	{
		onddtFunction(scope,element,attrs);
	}

	return	{
		restrict : "A",
		link : link
	};
})

// dropableItem Directive
.directive('dropableItem', function() {
	var onDropFunction = function(scope,element,attrs)	{
		//Drag Events
		element.bind('drop', function(event) {
			event.preventDefault();
			var draggableElement = event.target.draggable;
			var data = event.originalEvent.dataTransfer.getData("text");
			if (!draggableElement)	{
				event.target.appendChild($('#'+data)[0]);
			}
		});
		element.bind('dragover', function(event) {
			event.preventDefault();
			event.originalEvent.dataTransfer.dropEffect='move';
			var xPos = event.originalEvent.pageX;
			var yPos = event.originalEvent.pageY;
		});
	};
	var link = function(scope,element,attrs)	{
		onDropFunction(scope,element,attrs);
	};
	return {
		restrict : "A",
		link : link
	};
})


.directive("domMod",function(){
	
	var link = function(scope){
      	scope.remove = function(elementId, className)	{
			$( "#" + elementId).removeClass(className);
		}
		scope.add = function(elementId, className) {
			$( "#" + elementId).addClass(className);
		}
		scope.replace = function(elementId, attrName, attrValue) { 
			$( "#" + elementId).attr(attrName,attrValue);
		}
      	
      	scope.onInit({interface: {
      		remove:scope.remove,
      		add:scope.add,
      		replace:scope.replace
      	}});
  	}
	
    return{
    	scope:{onInit : "&onInit"},
		restrict : "A",
      	link : link
    }
})

//ngRepeat OnLastRepeat Directive
.directive('onLastRepeat', function() {
	return  {
	scope:{
		onLastRepeat : "&onLastRepeat",
		last : "@last"
	},
	restrict:"A",
	link : function(scope, element, attrs)  {	
		if (scope.last) {
			scope.onLastRepeat();
		}
	}		
	};
})

//modalWindow Directive
.directive('modalWindow', function() {
	return {
		scope: false,
		templateUrl : "modalWindow.html"
	};
})

.directive('cg', function() {
	return {
		restrict : "E",
		link: function(scope,element) {
			angular.element(element).css('color' , 'green' );
		}
	};
})

.directive('cm', function() {
	return {
		restrict : "E",
		link: function(scope,element) {
			angular.element(element).css('color' , 'red' );
		}
	};
})

.directive('co', function() {
	return {
		restrict : "E",
		link: function(scope,element) {
			angular.element(element).css('color' , 'orange' );
		}
	};
})

.directive('cb', function() {
	return {
		restrict : "E",
		link: function(scope,element) {
			angular.element(element).css('color' , 'blue' );
		}
	};
})

.directive('cp', function() {
	return {
		restrict : "E",
		link: function(scope,element) {
			angular.element(element).css('color' , 'purple' );
		}
	};
});

});

