//Browser Detect Controller

define(['app'], function(sampleApp)   {

sampleApp.register.controller('detect',['deviceDetector',function(deviceDetector){
	var bd = this;
	data = deviceDetector;
	allData = JSON.stringify(data, null, 2);
	
	browserMatch = function()	{
		var isBrowserMatch = (data.browser == "chrome" || data.browser == "ie" || 
		data.browser == "firefox" ? true : false)
		return isBrowserMatch;
	}
	
	browserVersionMatch = function()	{
	var isVersionMatch = ((data.browser == "chrome" && data.browser_version >= "48.0.2564") ||
		(data.browser == "ie" && data.browser_version >= "11.0") ||
		(data.browser == "firefox" && data.browser_version >= "44.0") 
		? true : false);		
	return isVersionMatch;
	}
	
	osMatch = function()	{
		var isOsMatch = (data.os == "windows" || data.os == "android" ? true : false)
		return isOsMatch;
	}
	
	compatibilityResult = function()	{
		if(!browserMatch())	{
		return "Your browser does not match. Display and functions may not work correctly.";
		} else if (!browserVersionMatch() )	{
		return "The version of your browser is older than that tested.\nDisplay and functions" + 
		" may not work correctly.";
		} else if(!osMatch())	{
		return "This application was not tested on your OS.\n It is unlikely but display and" +
		" functions may not work correctly.";
		} else{
		return "Everything should function as designed.";
		}
	}
	
	var browserName = (data.browser == "ie") ? (data.browser).toUpperCase():
	(data.browser).charAt(0).toUpperCase() + (data.browser).substr(1).toLowerCase();
	
	var osName = (data.os).charAt(0).toUpperCase() + (data.os).substr(1).toLowerCase();
	
	bd.message = "This site has been tested for Chrome (48.0.2564) \n"+
	"FireFox (44.0.2) | IE (11) on Windows (7) & Chrome (48.0.2564) for Android.\n\n"+
	"You are viewing this in "+browserName+" ("+data.browser_version+") on "+
	osName+" ("+data.os_version+")"+
	"\n\n" + compatibilityResult();
	
	console.log("-----bd Controller Scope-----");
	console.log(bd);
	
}]);
});

