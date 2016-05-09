//Browser Detect Controller

define(['app'], function(sampleApp)   {

sampleApp.register.controller('detect', function($rootScope, $scope, deviceDetector, exSrcConSrv, arryObjSrv){
	var bd = this;
	
	$rootScope.exSrcObj = exSrcConSrv;
	
	$rootScope.exSrcObj.exsrccon(
	{
		"html" : {	
		"label":"HTML", 
		"src":"pages/home.html", 
		"icon":"fa fa-html5"
		},
		"controller" : {
		"label":"DetectCtrlr", 
		"src":"srcjs/app/controllers/detectController-src.js", 
		"icon":"fa fa-dot-circle-o"
		},
		"css" : {
		"label":"SCSS", 
		"src":"scss/app/home.scss", 
		"psrc":"css/app/home.css", 
		"icon":"fa fa-css3"
		}
	});
	
	
	$rootScope.exSrcLinkArray = arryObjSrv.parseObj($rootScope.exSrcObj); 

	bd.data = deviceDetector;
	
	bd.supported = { 
		browsers : {
			chrome : {
				version: "48.0.2564",
				label: "Chrome"
			},
			ie : {
				version : "11.0",
				label : "IE"
			},
			firefox : {
				version : "44.0",
				label : "FireFox"
			},
			other : {
				version : "",
				label : "Unknown Browser"
			}
		},
		os : {
			windows : {
				version : "7",
				label : "Windows"
			},
			android : {
				version : "",
				label : "Android"
			},
			other : {
				version : "",
				label : "Unknown OS"
			}
		}
	};
	
	bd.browserProp 	= bd.supported.browsers.hasOwnProperty(bd.data.browser) 
					? bd.data.browser : "other";
	bd.osProp 		= bd.supported.os.hasOwnProperty(bd.data.os) 
					? bd.data.os : "other";
	
	var compatibility = {
		browser : {
			test : bd.data.browser in bd.supported.browsers,
			message : "Your browser does not match. Display and functions may not work correctly."
		},
		browserVersion : {
			test : bd.data.browser_version >= bd.supported.browsers[bd.browserProp].version,
			message : 	"The version of your browser is older than that tested.\nDisplay and functions " + 
						"may not work correctly."
		},
		os : {
			test: bd.data.os in bd.supported.os,
			message : 	"This application was not tested on your OS.\n It is unlikely but display and " +
						"functions may not work correctly."
		}
	};
	
	for (var test in compatibility) {
		if (compatibility[test].test !== true) {
			console.log("in here");
			bd.compatibilityResult = compatibility[test].message;
			break;
		}
			bd.compatibilityResult = "Everything should function as designed.";
	}
	
	bd.browserName = bd.supported.browsers[bd.browserProp].label;
	bd.osName = bd.supported.os[bd.osProp].label;
	
	bd.message = "This site has been tested for Chrome (48.0.2564) \n"+
	"FireFox (44.0.2) | IE (11) on Windows (7) & Chrome (48.0.2564) for Android.\n\n"+
	"You are viewing this in "+bd.browserName+" ("+bd.data.browser_version+") on "+
	bd.osName+" ("+bd.data.os_version+")"+
	"\n\n" + bd.compatibilityResult;
	
	console.log("-----Controller Scope-----");
	console.log($scope);
	
	console.log("-----bd Controller Scope-----");
	console.log(bd);
	
});
});

