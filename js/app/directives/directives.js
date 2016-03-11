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
		element.find('div.data-display-header').on('click',  function (event) {
			if(scope.dd.reverse == false)	{
				event.currentTarget.querySelector('.buttonBox')
				.className = "dropdown buttonBox";
			}
			else if(scope.dd.reverse == true)	{
				event.currentTarget.querySelector('.buttonBox')
				.className = "dropup buttonBox";
			}
			event.currentTarget.querySelector('.caretBox')
			.className = "caret caretBox";
			if(scope.dd.lastDisplayTarget != '' && scope.dd.lastDisplayTarget 
			!= event.currentTarget)	{
				scope.dd.lastDisplayTarget.querySelector('.buttonBox')
				.className = "buttonBox";
				scope.dd.lastDisplayTarget.querySelector('.caretBox')
				.className = "caretBox";
			}
			scope.dd.lastDisplayTarget = event.currentTarget;
		});
	}
	};
});
});



	
	