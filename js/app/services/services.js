//Services Mod Definition//

define (function(){
angular.module('servicesMod', [])

//Services//
.factory('srcCollection', function() {
	var exSrcValue;
	return { 
		setExSrcValue : function(arg)	{
			exSrcValue = arg;	
		},
		getExSrcValue : function()	{
			return exSrcValue;		
		}
	};
})

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
}]);

});



	
	