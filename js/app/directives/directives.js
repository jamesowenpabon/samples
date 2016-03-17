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

// draggableItem Directive
.directive('draggableItem', ['$document', function($document){
	return	{
		link: function(scope,element,attrs)	{
			element.on('dragstart', function(event) {
				event.originalEvent.dataTransfer.effectAllowed='move';
				var wordHomeRow = 'r4';
				var dragTargetParentId = $('#'+event.target.id).parent().attr('id');
				var	dragStartListRegion = dragTargetParentId.slice(0,2);
				var	dragStartListLocation = dragTargetParentId.slice(2);
				event.originalEvent.dataTransfer.setData("text", event.target.id);
				if(dragStartListRegion != wordHomeRow)	{
				 	$( "#c2" + dragStartListLocation).attr('class','box--noresult');
				}
				$( "#" + dragTargetParentId).removeClass( "box" );
				$( "#" + dragTargetParentId).addClass( "box--empty" );
      		});
      		element.on('dragend', function(event)	{
				event.preventDefault();
				var dropTargetId = event.target.id;
			    var dragTargetParentId = $('#'+dropTargetId).parent().attr('id');
			    var dropTargetRow = dragTargetParentId.slice(2);
			    $( "#" + dragTargetParentId).removeClass( "box--empty" );
      			$( "#" + dragTargetParentId).addClass( "box" );
      			var compairOneId = $( "#c1" + dropTargetRow + " span:first-of-type" ).attr('id');
			    var compairThreeId = $( "#c3" + dropTargetRow + " span:first-of-type" ).attr('id');
			    var compairOne = compairOneId ? compairOneId.slice(0,2) : 'empty';
			   	var compairThree = compairThreeId ? compairThreeId.slice(0,2) : 'empty';
			    if(compairOne != "empty" && compairThree != "empty")	{
			    if(compairOne == compairThree)	{
			    	$( "#c2" + dropTargetRow).attr('class','box--match') 	;	
			    }else if (compairOne != compairThree)	{
			    	$( "#c2" + dropTargetRow).attr('class','box--mismatch') 	;	
			    }
			    }
      		});
		}
	};
}])

// draggableItem Directive
.directive('dropableItem', function(){
	return	{
		link: function(scope,element,attrs)	{
			element.on('drop', function(event) {
				event.preventDefault();
				var draggableElement = 'd';
				var data = event.originalEvent.dataTransfer.getData("text");
			    var dropTargetId = event.target.id;
			    var dropTargetRow = dropTargetId.slice(2);
			    var dropTarget = dropTargetId.substring(0, 1);
			    var dropTargetChild = $("#" + dropTargetId + " span:first-of-type").attr('id');
			    if (!dropTargetChild && dropTarget != draggableElement)	{
			    	event.target.appendChild($('#'+data)[0]);
			    }
			});
			element.on('dragover', function(event) {
				  event.preventDefault();
				  event.originalEvent.dataTransfer.dropEffect='move';
			})
		}
	}
})
});



	
	