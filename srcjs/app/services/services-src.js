//Services Mod Definition// 

define (function(){
angular.module('servicesMod', [])

//Services//

.factory('geolocateSvc', ['$q', '$window', function($q, $window)	{
	function getCurrentGPS()	{
		var deferred = $q.defer();
		if (!$window.navigator.geolocation)  {
			deferred.reject('Geo Locate Not Supported');
		} else {
			$window.navigator.geolocation.getCurrentPosition(
				function (position)	{
					deferred.resolve(position);
				},
				function (err)	{
					deferred.reject(err);
				}
			);
		}
		return deferred.promise;
	}
	return {
		getCurrentGPS : getCurrentGPS
	};
}])

.factory('lzLoadSvc', function() {
	function loadCtrl(arg, promise)	{
		require([arg], function()	{
			promise.resolve();
		});
	}
	return { loadCtrl:loadCtrl };
})

.service('exSrcConSrv', function()	{
	
	var exSrcCon = (function ()	{
		
		function exsrccon(obj)	{
			this.html = obj.html;
			this.controller = obj.controller;
			this.css = obj.css;
		} 
		
		exsrccon.prototype.style =  {
			"label":"MainStyle", 
			"src":"scss/app/styles.scss", 
			"icon":"fa fa-css3"
		};
		
		exsrccon.prototype.main =  {
			"label":"MainJS", 
 			"src":"srcjs/app/main-src.js", 
 			"icon":"fa fa-dot-circle-o"	
		};
		
		exsrccon.prototype.app =  {	
			"label":"AppJS", 
			"src":"srcjs/app/app-src.js",
			"icon":"fa fa-dot-circle-o"
	 	};
	 	
	 	exsrccon.prototype.directives =  {
			"label":"Directives", 
			"src":"srcjs/app/directives/directives-src.js",  
			"icon":"fa fa-dot-circle-o"
		};
		
		exsrccon.prototype.services =  {
			"label":"Services", 
			"src":"srcjs/app/services/services-src.js", 
			"icon":"fa fa-dot-circle-o"
		};
		
		return exsrccon;
		
	})();
	
		
	return { exSrcCon:exSrcCon }
	
})

.factory('arryObjSrv', function()	{ 

	function parseObj(obj)	{
		var value;
		var key;
		for (key in obj){
			value = obj[key];
			obj[key]=value;
		}
	 return  obj;	
	}
	
	return { parseObj:parseObj,};
})



});



	
	