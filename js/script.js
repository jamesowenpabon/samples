//Application Definition//

var app = angular.module('codingExamples', ['ngRoute','ng.deviceDetector'])

//Routes//

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		//Home Page
		.when("/",{
		  templateUrl: "pages/home.html", controller: 'detect', controllerAs: 'bd',
		})
		//Dynamic Data Example
		.when("/examples/dynamic-data",{
		  templateUrl: "pages/dynamicData.html", controller: 'dynamicdata', controllerAs: 'dd',
		})
		//Responsive Example
		.when("/examples/responsive",{
		  templateUrl: "pages/responsive.html", 
		})
		//SVGPolyline Example
		.when("/examples/svg-polyline",{
		  templateUrl: "pages/svgPolyline.html", controller: 'graphs', controllerAs: 'pg',
		})
		//Contact
		.when("/contact",{
		  templateUrl: "pages/contact.html",
		})
})

//Services//

app.factory('srcCollection', function() {
	return { 
		setExSrcValue : function(arg)	{
			exSrcValue = arg	
		},
		getExSrcValue : function()	{
			return exSrcValue;		
		}
	};

});

//Directives//

//siteNavigationButtons Directive
app.directive('siteNavigationButtons', function($location)	{
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
		var str = $location.path();
		if(str == "/")	{
			element.find('#home').addClass("active");
		} else if ( str.search("examples") != -1 )	{
			element.find('#examples').addClass("active");
		} else	{
			var searchID = str.slice(str.lastIndexOf("/")+1);
			element.find('#'+searchID).addClass("active");
		}		
	}
	}
})

//modalWindow Directive
app.directive('modalWindow', function() {
	return {
		templateUrl : "modalWindow.html"
	};
})

//exSrc Directive
app.directive('exSrc', ['srcCollection', function() {
	return{
		controller: function($scope, $element, $attrs, srcCollection)	{
			srcCollection.setExSrcValue($attrs.exSrc);
		}
	}
}])

//Dynamic Data OnLastRepeat Data Box Size Directive
app.directive('onLastRepeat', function() {
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
app.directive('dynamicSelectorList', function()	{
	return{
	link: function(scope,element,attrs)	{
		element.find('td.dataListItem').on('click',  function (event) {
			element.find('td.alt-active').removeClass('alt-active');
			angular.element(this).addClass('alt-active');
		});
	}
	}
})

//dynamicDisplayList Directive
app.directive('dynamicDisplayList', function()	{
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
	}
})

//Controllers//

//Main Application Controller
app.controller('AppCtrl', function($scope, $http, $window, srcCollection) {
	var ap = this;
	var modalCollection;
	
	$scope.$on('$viewContentLoaded', function() {
		modalCollection = srcCollection.getExSrcValue();
	 })
	
	//Get Template URL for Modal
	ap.getTemplateUrl = function(type) {
		switch(modalCollection)	{
			case 'home' :
				var srcOptions = {
					"html"	: 	"pages/home.html",
					"js"	:	"js/script.js",
					"css"	:	"css/styles.css",
					"none"	:	"pages/home.html"	
				}
				ap.codeSource = srcOptions[type] ? 
				srcOptions[type] : srcOptions["none"];
				break;
			case 'dynamicData' :
				var srcOptions = {
					"html"	: 	"pages/dynamicData.html",
					"js"	:	"js/script.js",
					"css"	:	"css/dynamicData.css",
					"none"	:	"pages/dynamicData.html"	
				}
				ap.codeSource = srcOptions[type] ? 
				srcOptions[type] : srcOptions["none"];
				break;
			case 'responsive' :
				var srcOptions = {
					"html"	: 	"pages/responsive.html",
					"js"	:	"js/script.js",
					"css"	:	"css/responsive.css",
					"none"	:	"pages/responsive.html"	
				}
				ap.codeSource = srcOptions[type] ? 
				srcOptions[type] : srcOptions["none"];
				break;
			case 'svgPolyline' :
				var srcOptions = {
					"html"	: 	"pages/svgPolyline.html",
					"js"	:	"js/script.js",
					"css"	:	"css/svgPolyline.css",
					"none"	:	"pages/svgPolyline.html"	
				}
				ap.codeSource = srcOptions[type] ? 
				srcOptions[type] : srcOptions["none"];
				break;
			case 'contact' :
				var srcOptions = {
					"html"	: 	"pages/contact.html",
					"js"	:	"js/script.js",
					"css"	:	"css/contact.css",
					"none"	:	"pages/contact.html"	
				}
				ap.codeSource = srcOptions[type] ? 
				srcOptions[type] : srcOptions["none"];
				break;
		}
		return ap.codeSource;
	}	
	
	console.log("--------$scope---------");
	console.log($scope);
	console.log("-----ap Controller Scope-----");
	console.log(ap);
	
})

//Dynamic Data Controller
app.controller('dynamicdata',function($scope, $http, $window, srcCollection){
	var dd = this;
	
	$scope.$on('$viewContentLoaded', function() {
		dd.newDataItem = {
			name : '',
			rating : ''
		}
		dd.reverse = '';
		dd.selectedOrder = '';
		dd.lastDisplayTarget = '';
	 })
	 
	//Load Data
	dd.dataLoader = function(arg)	{
		dd.sqlTableName = arg;
		dd.tableLoaded = true;
		$http.get("./dataList.php?dataSet="+arg).then(function(response) {
			dd.dataList = response.data.records;
			angular.forEach(dd.dataList, function(value, key) {
			  dd.dataList[key].collection = arg;
			});
			dd.newRecord();
		});
	}
	
	//Post Data
	dd.dataPoster = function(data,action)	{
		data.editState = undefined;
		data.name = (data.name.replace(/[^a-zA-Z0-9\s]/g, "")); 
		data.action = action;
		dataString = 'data='+JSON.stringify(data);
		$http({
			method : 'POST',
			url : './dataList.php',
			data: dataString,
			headers : {'Content-Type': 'application/x-www-form-urlencoded'}  
		})
		.success(function (rdata, status, headers, config) {
		dd.PostDataResponse = rdata;	
		if (action == "insert")	{
		dd.dataList.push({
			'ID':rdata,
			'name':data.name,
			'rating':parseInt(data.rating),
			'collection':data.collection
		});
		dd.dataBoxResize('innerTableDisplayBox','tableDisplayBox',(39));
		}
		if (action == "remove")	{
			var index = dd.dataList.indexOf(data);
			dd.dataList.splice(index, 1);
			dd.dataBoxResize('innerTableDisplayBox','tableDisplayBox',(-35));
		}
		})
		.error(function (rdata, status, header, config) {
			dd.ResponseDetails = rdata;
		});
	}
	 
	//Order Data
	dd.orderController = function(arg)	{
		dd.reverse = (dd.selectedOrder === arg) ? !dd.reverse : false;
		dd.selectedOrder = arg;
	}
	
	//Cancell Action
	dd.cancelAction = function(data)	{
		var recordID = dd.dataList.indexOf(data);
		dd.dataList[recordID].name = data.editState.name;
		dd.dataList[recordID].rating = data.editState.rating;
		data.editState = undefined;
	}
	
	//Set Edit State
	dd.setEditState = function(data)	{
		data.editState = angular.copy(data);
	}
	
	//New Record
	dd.newRecord = function()	{
		dd.newDataItem = {
			name : '',
			rating : '',
			collection : dd.sqlTableName
		}
		dd.myForm.$setPristine();
		dd.myForm.$setUntouched();
	}
	
	//Resize Data Box
	dd.dataBoxResize = function(dataBox, containerBox, offset)	{
		var offset = (!offset) ? -5 : offset;
		var dataBoxHeight = angular.element('#'+dataBox).prop('offsetHeight')+offset
		angular.element('#'+containerBox).css('height',dataBoxHeight);
	}
	
	dd.setForm = function (form) {
		dd.myForm = form;
	}
	console.log("-----dd Controller Scope-----");
	console.log(dd);
})

//Browser Detect Controller
app.controller('detect',['deviceDetector',function(deviceDetector){
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
	
}])

//SVGPolyline Controller
app.controller('graphs', function()	{
	var pg = this;
	
	function graphData(obj) {
	    this.graphTitle = obj.graphTitle;
		this.xTitle = obj.xTitle;
		this.yTitle = obj.yTitle;
		this.xLabels = obj.xLabels;
		this.yLabels = obj.yLabels;
		this.xIncriment = obj.xIncriment;
		this.yIncriment = obj.yIncriment;
		this.headHeight = obj.headHeight;
		this.footHeight = obj.footHeight;
		this.leftMargin = obj.leftMargin;
		this.rightMargin = obj.rightMargin;
		this.graphType = obj.graphType;
		this.yMinValue = obj.yMinValue;
		this.yMaxValue = obj.yMaxValue;
		this.ySetpVal = obj.ySetpVal;
		this.xMinValue = obj.xMinValue;
		this.xMaxValue = obj.xMaxValue;
		this.graphHeight = obj.graphHeight;
		this.graphWidth = obj.graphWidth;
		this.graphVisualColor = obj.graphVisualColor;
		this.graphStrokeWidth = obj.graphStrokeWidth;
		this.data = obj.data;
	}
	
	graphData.prototype.dataFieldHeight = function() {
		return this.graphHeight - (this.headHeight + this.footHeight);
	};
	
	graphData.prototype.dataFieldWidth = function() {
		return this.graphWidth - (this.leftMargin + this.rightMargin);
	};
	
	graphData.prototype.ym = function() {
		return this.dataFieldHeight() / this.yMaxValue;
	};
	
	graphData.prototype.transOffset = function() {
		return this.dataFieldHeight() + this.headHeight;
	};
	
	graphData.prototype.xBoxWidth = function() {
		return this.dataFieldWidth() / this.xIncriment;
	};
			
	graphData.prototype.yBoxHeight = function() {
		return this.dataFieldHeight() / this.yIncriment;
	};		
			
	pg.nflPassing = new graphData(
	{
		'graphTitle':'NFL Quarterback Passing Yards',
		'xTitle':'Year',
		'yTitle':'Sacks',
		'xLabels':['2011','2012','2013','2014','2015'],
		'yLabels':['0','20','40','60'],
		'xIncriment':4,
		'yIncriment':12,
		'headHeight':45,
		'footHeight':77,
		'leftMargin':90,
		'rightMargin':86,
		'graphType':'line',
		'yMinValue':0,
		'yMaxValue':6000,
		'ySetpVal':100,
		'xMinValue':'',
		'xMaxValue':'',
		'graphHeight':500,
		'graphWidth':800,
		'graphVisualColor':'orange',
		'graphStrokeWidth':'1',
		'data':[
				{
					'dataSetLabel':'New York Jets Passing Yards by Year',
					'dataLabels':['\'11','\'12','\'13','\'14','\'15'],
					'dataValues':[3297,2891,2932,2946,4057],
					'graphDataLabel':'Jets',
					'fieldName':'jets',
					'visualColor':'green',
					'strokeWidth':'4'
				},
				{
					'dataSetLabel':'League Best Passing Yards by Year',
					'dataLabels':['\'11','\'12','\'13','\'14','\'15'],
					'dataValues':[5347,4997,5444,4894,4970],
					'graphDataLabel':'Best',
					'fieldName':'best',
					'visualColor':'blue',
					'strokeWidth':'3'
				},
				{
					'dataSetLabel':'League Worst Passing Yards by Year',
					'dataLabels':['\'11','\'12','\'13','\'14','\'15'],
					'dataValues':[2179,2713,2820,2946,2805],
					'graphDataLabel':'Worst',
					'fieldName':'worst',
					'visualColor':'red',
					'strokeWidth':'3'
				},
				]
	}
	);
	
	pg.nflSacks = new graphData(
	{
		'graphTitle':'NFL Quarterback Sacks',
		'xTitle':'Year',
		'yTitle':'Sacks',
		'xLabels':['2011','2012','2013','2014','2015'],
		'yLabels':['0','20','40','60'],
		'xIncriment':4,
		'yIncriment':7,
		'headHeight':45,
		'footHeight':77,
		'leftMargin':90,
		'rightMargin':86,
		'graphType':'line',
		'yMinValue':0,
		'yMaxValue':70,
		'ySetpVal':1,
		'xMinValue':'',
		'xMaxValue':'',
		'graphHeight':500,
		'graphWidth':800,
		'graphVisualColor':'brown',
		'graphStrokeWidth':'1',
		'data':[
				{
					'dataSetLabel':'New York Jets Sack Count by Year',
					'dataLabels':['\'11','\'12','\'13','\'14','\'15'],
					'dataValues':[35,30,41,45,39],
					'graphDataLabel':'Jets',
					'fieldName':'jets',
					'visualColor':'green',
					'strokeWidth':'3'
				},
				{
					'dataSetLabel':'League Best Sack Count by Year',
					'dataLabels':['\'11','\'12','\'13','\'14','\'15'],
					'dataValues':[50,52,60,54,52],
					'graphDataLabel':'Best',
					'fieldName':'best',
					'visualColor':'blue',
					'strokeWidth':'2'
				},
				{
					'dataSetLabel':'League Worst Sack Count by Year',
					'dataLabels':['\'11','\'12','\'13','\'14','\'15'],
					'dataValues':[23,20,31,20,19],
					'graphDataLabel':'Worst',
					'fieldName':'worst',
					'visualColor':'red',
					'strokeWidth':'2'
				},
				{
					'dataSetLabel':'League Average Sack Count by Year',
					'dataLabels':['\'11','\'12','\'13','\'14','\'15'],
					'dataValues':[37,36,40,37,37],
					'graphDataLabel':'Average',
					'fieldName':'avg',
					'visualColor':'black',
					'strokeWidth':'2'
				}
				]
	}	
	);
	
	pg.yourData = new graphData(
	{
		'graphTitle':'Your Data Chart',
		'xTitle':'X-Axis',
		'yTitle':'Y-Axis',
		'xLabels':['A','B','C','D','E'],
		'yLabels':['0','20','40','60'],
		'xIncriment':4,
		'yIncriment':10,
		'headHeight':45,
		'footHeight':77,
		'leftMargin':90,
		'rightMargin':86,
		'graphType':'line',
		'yMinValue':0,
		'yMaxValue':10,
		'ySetpVal':1,
		'xMinValue':'',
		'xMaxValue':'',
		'graphHeight':500,
		'graphWidth':800,
		'graphVisualColor':'#ccc',
		'graphStrokeWidth':'2',
		'data':[
				{
					'dataSetLabel':'Green Line Data',
					'dataLabels':['(A)','(B)','(C)','(D)','(E)'],
					'dataValues':[1,1,1,1,1],
					'graphDataLabel':'Green',
					'fieldName':'green',
					'visualColor':'green',
					'strokeWidth':'3'
				},
				{
					'dataSetLabel':'Blue Line Data',
					'dataLabels':['(A)','(B)','(C)','(D)','(E)'],
					'dataValues':[2,2,2,2,2],
					'graphDataLabel':'Blue',
					'fieldName':'blue',
					'visualColor':'blue',
					'strokeWidth':'2'
				},
				{
					'dataSetLabel':'Red Line Data',
					'dataLabels':['(A)','(B)','(C)','(D)','(E)'],
					'dataValues':[3,3,3,3,3],
					'graphDataLabel':'Red',
					'fieldName':'red',
					'visualColor':'red',
					'strokeWidth':'2'
				},
				{
					'dataSetLabel':'Black Line Data',
					'dataLabels':['(A)','(B)','(C)','(D)','(E)'],
					'dataValues':[4,4,4,4,4],
					'graphDataLabel':'Black',
					'fieldName':'black',
					'visualColor':'black',
					'strokeWidth':'2'
				}
				]
	}	
	);
		
	pg.graphSwitch = function(obj)	{
		pg.graphData = obj;
	};
		
	var init = function()	{
		pg.graphSwitch(pg.yourData);
		console.log("-----pg Controller Scope-----");
		console.log(pg);
	};
	
	init();
	
});






	
	