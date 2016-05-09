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
	this.exsrccon = function (obj)	{
		this.html = obj.html;
		this.controller = obj.controller;
		this.css = obj.css;
		this.style =  {
			"label":"MainStyle", 
			"src":"scss/app/styles.scss", 
			"icon":"fa fa-css3"
		};
		this.main =  {
			"label":"MainJS", 
 			"src":"srcjs/app/main-src.js", 
 			"icon":"fa fa-dot-circle-o"	
		};
		this.app =  {	
			"label":"AppJS", 
			"src":"srcjs/app/app-src.js",
			"icon":"fa fa-dot-circle-o"
	 	};
	 	this.directives =  {
			"label":"Directives", 
			"src":"srcjs/app/directives/directives-src.js",  
			"icon":"fa fa-dot-circle-o"
		};
		this.services =  {
			"label":"Services", 
			"src":"srcjs/app/services/services-src.js", 
			"icon":"fa fa-dot-circle-o"
		};
	};
})

.factory('arryObjSrv', function()	{ 

	function parseObj(obj)	{
		var value;
		var key;
		for (key in obj){
			value = obj[key];
		}
	 return  obj;	
	}
	
	return { parseObj:parseObj,};
});

});
