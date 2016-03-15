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
		element.find('td.dataListItem').on('click',  function (event) {
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
					console.log($('#'+event.target.id).parent().attr('id'));
					
					var sc = $('#'+event.target.id).parent().attr('id')
					
				var	targetSrcPrefix = sc.slice(0,2);
				var	targetSrcsuffix = sc.slice(2);
				
				console.log($('#'+event.target.id).parent().attr('id'));
					
				 event.originalEvent.dataTransfer.setData("text", event.target.id)
				 
				 if(targetSrcPrefix != 'r1')	{
				 	console.log('moved from column');
				 		$( "#c2" + targetSrcsuffix).attr('class','box--off') 	;
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
				
			    var data = event.originalEvent.dataTransfer.getData("text");
			    var targetDiv = event.target.id;
			    var tagetSuffix = targetDiv.slice(2);
			    
			    event.target.appendChild($('#'+data)[0]);
			    
			    console.log("Dragged Div: "+data);
			    console.log("Target Div: "+targetDiv);
			    console.log("Target Pre: "+tagetSuffix);
			      
			    var co = $( "#c1" + tagetSuffix + " span:first-of-type" ).attr('id');
			    var ct = $( "#c3" + tagetSuffix + " span:first-of-type" ).attr('id');
			    
			    var compairOne = co ? co.slice(0,1) : 'empty';
			   	var compairTwo = ct ? ct.slice(0,1) : 'empty';
		
			    console.log("compairOne Pre: "+compairOne);
			    console.log("compairTwo Pre: "+compairTwo);
			    
			    if(compairOne != "empty" && compairTwo != "empty")	{
			    
			    if(compairOne == compairTwo)	{
			    	console.log($( "#c2" + tagetSuffix).attr('class'));
			    	$( "#c2" + tagetSuffix).attr('class','box--match') 	;	
			    	console.log($( "#c2" + tagetSuffix).attr('class'));
			    }else if (compairOne != compairTwo)	{
			    	console.log($( "#c2" + tagetSuffix).attr('class'));
			    	$( "#c2" + tagetSuffix).attr('class','box--mismatch') 	;	
			    	console.log($( "#c2" + tagetSuffix).attr('class'));
			    }
			    
			    }
			    
			})
			element.on('dragover', function(event) {
				  event.preventDefault();
			})
		}
	}
	
})



});



	
	