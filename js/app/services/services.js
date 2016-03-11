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
});



	
	