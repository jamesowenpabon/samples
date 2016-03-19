//Directives Mod Definition//

define (function(){
angular.module('directivesMod', [])

//Directives//
//siteNavigationButtons Directive
.directive('siteNavigationButtons', function($location)	{
	return{
	link: function(scope,element,attrs)	{
		element.find('a.site-nav-link').on('click',  function (event) {
			element.find('button.active').removeClass('active');
			angular.element(this).addClass('active').siblings()
			.removeClass('active');
		});
		element.find('a.site-nav-link-dropdown').on('click',  function (event) {
			element.find('a.site-nav-link').removeClass('active');
			element.find('button.dropdown-toggle').addClass("active");
			angular.element(this).addClass('active').siblings()
			.removeClass('active');
		});
		scope.$on('$viewContentLoaded', function() {
			var str = $location.path();
			
			if(str == "/")	{
				element.find('#home').addClass("active");
			} else if ( str.search("examples") != -1 )	{
				element.find('#examples').addClass("active");
			} else	{
				var searchID = str.slice(str.lastIndexOf("/")+1);
				element.find('#'+searchID).addClass("active");
			}	
		});		
	}
	};
})

//modalWindow Directive
.directive('modalWindow', function() {
	return {
		templateUrl : "modalWindow.html"
	};
})

//exSrc Directive
.directive('exSrc', ['srcCollection', function() {
	return{
		controller: function($scope, $element, $attrs, srcCollection)	{
			srcCollection.setExSrcValue($attrs.exSrc);
		}
	};
}])

//Dynamic Data OnLastRepeat Data Box Size Directive
.directive('onLastRepeat', function() {
	return  {
	link : function(scope, element, attrs)  {	
		if (scope.$last) {
			var targetArray = scope.$eval(attrs.onLastRepeat);
			var dataBox = targetArray[0];
			var containerBox = targetArray[1];
			scope.dd.dataBoxResize(dataBox, containerBox);
		}
	}		
	};
})

//dynamicSelectorList Directive
.directive('dynamicSelectorList', function()	{
	return{
	link: function(scope,element,attrs)	{
		element.find('td.table-datalist-item').on('click',  function (event) {
			element.find('td.alt-active').removeClass('alt-active');
			angular.element(this).addClass('alt-active');
		});
	}
	};
})

//dynamicDisplayList Directive
.directive('dynamicDisplayList', function()	{
	return{
	link: function(scope,element,attrs)	{
		element.find('div.table-data-display-header').on('click',  function (event) {
			if(scope.dd.reverse == false)	{
				event.currentTarget.querySelector('.button-box')
				.className = "dropdown button-box";
			}
			else if(scope.dd.reverse == true)	{
				event.currentTarget.querySelector('.button-box')
				.className = "dropup button-box";
			}
			event.currentTarget.querySelector('.caret-box')
			.className = "caret caret-box";
			if(scope.dd.lastDisplayTarget != '' && scope.dd.lastDisplayTarget 
			!= event.currentTarget)	{
				scope.dd.lastDisplayTarget.querySelector('.button-box')
				.className = "button-box";
				scope.dd.lastDisplayTarget.querySelector('.caret-box')
				.className = "caret-box";
			}
			scope.dd.lastDisplayTarget = event.currentTarget;
		});
	}
	};
})





// touchable Directive
.directive('touchableItem', ['$document','$swipe', function($document,$swipe){
	return	{
	link: function(scope,element,attrs)	{
		
	var dropArray =	attrs.touchableItem;

	
		// Touch Events
		element.on('touchstart',function(event){
			event.preventDefault() ;
			event.stopPropagation();
			var sourceContainerId = event.target.parentElement.id; 
			var sourceContainerRow = event.target.parentElement.dataset.row;
			if(sourceContainerRow != 'homeRow')	{
		 	$( "#center" + sourceContainerRow).attr('class','box--noresult');
			}
		});
		
		element.on('touchmove',function(event){
  			event.preventDefault() ;
  			event.stopPropagation();
		});
		
		// Touch Events
		element.on('touchend',function(event){
  			event.preventDefault() ;
  			event.stopPropagation();
		    
		    var touchedElementId = event.target.id;
		    
		    var sourceContainer = event.target.parentElement;
		    var sourceContainerId = event.target.parentElement.id;
		    var sourceContainerRow = sourceContainer.dataset.row;
		    console.log(touchedElementId);
		    
		    var xPos = event.originalEvent.changedTouches[0].pageX;
		    var yPos = event.originalEvent.changedTouches[0].pageY;
		    var destinationContainer = document.elementFromPoint(xPos, yPos);
			var destinationContainerRow = destinationContainer.dataset.row;
			var destinationContainerId = destinationContainer.id != "" ? destinationContainer.id : 'noId';
			
			console.log(destinationContainerId);
			//console.log(dropArray.indexOf(destinationContainerId));
			

			if (dropArray.indexOf(destinationContainerId) != -1)	{
			    $( "#" + destinationContainerId).html(event.target);
			    $( "#" + destinationContainerId).removeClass( "box--empty" );
	  			$( "#" + destinationContainerId).addClass( "box" );
	  			$( "#" + sourceContainerId).removeClass( "box" );
				$( "#" + sourceContainerId).addClass( "box--empty" );
				
			}
			
			if (touchedElementId != destinationContainerId && destinationContainerId != 'noId') {
			
				var left = $( "#left" + destinationContainerRow + " span:first-of-type" ).attr('data-match');
				var right = $( "#right" + destinationContainerRow + " span:first-of-type" ).attr('data-match');
				
				//console.log(left);
				//console.log(right);
				
				if(left != undefined && right != undefined)	{
				    if(left == right)	{
				    	$( "#center" + destinationContainerRow).attr('class','box--match') 	;	
				    }else if (left != right)	{
				    	$( "#center" + destinationContainerRow).attr('class','box--mismatch') 	;	
				    }
				}
			
			} else {
				var left = $( "#left" + sourceContainerRow + " span:first-of-type" ).attr('data-match');
				var right = $( "#right" + sourceContainerRow + " span:first-of-type" ).attr('data-match');
				
				
				if(left != undefined && right != undefined)	{
				    if(left == right)	{
				    	$( "#center" + sourceContainerRow).attr('class','box--match') 	;	
				    }else if (left != right)	{
				    	$( "#center" + sourceContainerRow).attr('class','box--mismatch') 	;	
				    }
				}
				
				console.log("#center" + sourceContainerRow);
				
			}
		});
		
		
		
	}
	};
}])






// draggableItem Directive
.directive('draggableItem', ['$document','$swipe', function($document,$swipe){
	return	{
	link: function(scope,element,attrs)	{
		
	
	//console.log($swipe.bind(element, "mouse"));
		
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
	};
}])

// dropableItem Directive
.directive('dropableItem', ['$document', function($document){
	return	{
	link: function(scope,element,attrs)	{
		
		
		
		//Drag Events
		element.on('drop', function(event) {
		event.preventDefault();
		var draggableElement = event.target.draggable;
		var data = event.originalEvent.dataTransfer.getData("text");
	    var destinationContainerId = event.target.id;
	    var destinationContainerChild = $("#" + destinationContainerId + " span:first-of-type").attr('id');
	    if (!destinationContainerChild && !draggableElement)	{
	    	event.target.appendChild($('#'+data)[0]);
	    }
		});
		element.on('dragover', function(event) {
		event.preventDefault();
		event.originalEvent.dataTransfer.dropEffect='move';
		});
	}
	};
}]);
});



	
	