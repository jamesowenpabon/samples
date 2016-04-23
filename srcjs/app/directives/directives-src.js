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
		scope: false,
		templateUrl : "modalWindow.html"
	};
})

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
.directive('touchableItem', function(){
	return	{
	link: function(scope,element,attrs)	{
		var attrsobj =	angular.fromJson(attrs.touchableItem);
		var touchFunction = attrsobj.touchFunction;
		var localScope = attrsobj.localScope;
		if(localScope)	{
			scope[localScope][touchFunction](scope,element,attrs);
		} else {
			scope[touchFunction](scope,element,attrs);
		}
	}
	};
})

// draggableItem Directive
.directive('draggableItem', function(){
	return	{
	link: function(scope,element,attrs)	{
		var attrsobj =	angular.fromJson(attrs.draggableItem);
		var dragFunction = attrsobj.dragFunction;
		var localScope = attrsobj.localScope;
		if(localScope)	{
			scope[localScope][dragFunction](scope,element,attrs);
		} else {
			scope[dragFunction](scope,element,attrs);
		}
	}
	};
})

// dropableItem Directive
.directive('dropableItem', function(){
	return	{
	link: function(scope,element,attrs)	{
		
		var attrsobj =	angular.fromJson(attrs.dropableItem);
		var dopFunction = attrsobj.dropFunction;
		var localScope = attrsobj.localScope;
		if(localScope)	{
			scope[localScope][dopFunction](scope,element,attrs);
		} else {
			scope[dopFunction](scope,element,attrs);
		}
	}
	};
})


.directive('templateContent', function($compile)	{
	return {
		link: function(scope, element, attrs)	{
			var source = $("#"+attrs.templateContent);
			var sourceHTML = source.html();
			//console.log(sourceHTML);
			var compiledSrc = $compile(sourceHTML);
			var newElem = compiledSrc(scope);
			//console.log(newElem);
			$(element).html(newElem); 
		}
	}
})


.directive('cg', function(){
	return {
		restrict : "E",
		link: function(scope,element) {
			angular.element(element).css('color' , 'green' );
		}
	}
})

.directive('cm', function(){
	return {
		restrict : "E",
		link: function(scope,element) {
			angular.element(element).css('color' , 'red' );
		}
	}
})

.directive('co', function(){
	return {
		restrict : "E",
		link: function(scope,element) {
			angular.element(element).css('color' , 'orange' );
		}
	}
})

.directive('cb', function(){
	return {
		restrict : "E",
		link: function(scope,element) {
			angular.element(element).css('color' , 'blue' );
		}
	}
})

.directive('cp', function(){
	return {
		restrict : "E",
		link: function(scope,element) {
			angular.element(element).css('color' , 'purple' );
		}
	}
});


});



	
	