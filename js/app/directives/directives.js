define(function(){angular.module("directivesMod",[]).directive("siteNavigationButtons",function($location){return{link:function(scope,element,attrs){element.find("a.site-nav-link").on("click",function(event){element.find("button.active").removeClass("active"),angular.element(this).addClass("active").siblings().removeClass("active")}),element.find("a.site-nav-link-dropdown").on("click",function(event){element.find("a.site-nav-link").removeClass("active"),element.find("button.dropdown-toggle").addClass("active"),angular.element(this).addClass("active").siblings().removeClass("active")}),scope.$on("$viewContentLoaded",function(){var str=$location.path();if("/"==str)element.find("#home").addClass("active");else if(-1!=str.search("examples"))element.find("#examples").addClass("active");else{var searchID=str.slice(str.lastIndexOf("/")+1);element.find("#"+searchID).addClass("active")}})}}}).directive("modalWindow",function(){return{scope:!1,templateUrl:"modalWindow.html"}}).directive("onLastRepeat",function(){return{link:function(scope,element,attrs){if(scope.$last){var targetArray=scope.$eval(attrs.onLastRepeat),dataBox=targetArray[0],containerBox=targetArray[1];scope.dd.dataBoxResize(dataBox,containerBox)}}}}).directive("dynamicSelectorList",function(){return{link:function(scope,element,attrs){element.find("td.table-datalist-item").on("click",function(event){element.find("td.alt-active").removeClass("alt-active"),angular.element(this).addClass("alt-active")})}}}).directive("dynamicDisplayList",function(){return{link:function(scope,element,attrs){element.find("div.table-data-display-header").on("click",function(event){0==scope.dd.reverse?event.currentTarget.querySelector(".button-box").className="dropdown button-box":1==scope.dd.reverse&&(event.currentTarget.querySelector(".button-box").className="dropup button-box"),event.currentTarget.querySelector(".caret-box").className="caret caret-box",""!=scope.dd.lastDisplayTarget&&scope.dd.lastDisplayTarget!=event.currentTarget&&(scope.dd.lastDisplayTarget.querySelector(".button-box").className="button-box",scope.dd.lastDisplayTarget.querySelector(".caret-box").className="caret-box"),scope.dd.lastDisplayTarget=event.currentTarget})}}}).directive("touchableItem",function(){return{link:function(scope,element,attrs){var attrsobj=angular.fromJson(attrs.touchableItem),touchFunction=attrsobj.touchFunction,localScope=attrsobj.localScope;localScope?scope[localScope][touchFunction](scope,element,attrs):scope[touchFunction](scope,element,attrs)}}}).directive("draggableItem",function(){return{link:function(scope,element,attrs){var attrsobj=angular.fromJson(attrs.draggableItem),dragFunction=attrsobj.dragFunction,localScope=attrsobj.localScope;localScope?scope[localScope][dragFunction](scope,element,attrs):scope[dragFunction](scope,element,attrs)}}}).directive("dropableItem",function(){return{link:function(scope,element,attrs){var attrsobj=angular.fromJson(attrs.dropableItem),dopFunction=attrsobj.dropFunction,localScope=attrsobj.localScope;localScope?scope[localScope][dopFunction](scope,element,attrs):scope[dopFunction](scope,element,attrs)}}}).directive("templateContent",function($compile){return{link:function(scope,element,attrs){var source=$("#"+attrs.templateContent),sourceHTML=source.html(),compiledSrc=$compile(sourceHTML),newElem=compiledSrc(scope);$(element).html(newElem)}}}).directive("cg",function(){return{restrict:"E",link:function(scope,element){angular.element(element).css("color","green")}}}).directive("cm",function(){return{restrict:"E",link:function(scope,element){angular.element(element).css("color","red")}}}).directive("co",function(){return{restrict:"E",link:function(scope,element){angular.element(element).css("color","orange")}}}).directive("cb",function(){return{restrict:"E",link:function(scope,element){angular.element(element).css("color","blue")}}}).directive("cp",function(){return{restrict:"E",link:function(scope,element){angular.element(element).css("color","purple")}}})});
//# sourceMappingURL=../maps/directives/directives.js.map
