//HTML API Controller

define (['angular-touch'], function(){
angular.module('htmlMod', ['ngTouch'])

//SVGPolyline Controller
.controller('htmlAPI', function($scope)	{
	var ha = this;

	ha.dropList=['left1','left2','left3',
				'right1','right2','right3',
				'r4c1','r4c2','r4c3','r4c4','r4c5','r4c6'
				];

		
/*	$scope.testvar = function()	{
		console.log("testfuncvalue");
	}
	
	ha.test = function(element)	{
		console.log(element);
	
	
	
		
	
	}*/
	
	
	console.log("-----ha Controller Scope-----");
	console.log(ha);
});
});