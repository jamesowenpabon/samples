//SVGPolyline Controller

define (['app'], function(sampleApp){

 sampleApp.register.controller('graphs', function()	{
	var pg = this;
	
	pg.graphData = (function()	{
	
		function graphdata(obj) {
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
		
		graphdata.prototype.dataFieldHeight = function() {
			return this.graphHeight - (this.headHeight + this.footHeight);
		};
		
		graphdata.prototype.dataFieldWidth = function() {
			return this.graphWidth - (this.leftMargin + this.rightMargin);
		};
		
		graphdata.prototype.ym = function() {
			return this.dataFieldHeight() / this.yMaxValue;
		};
		
		graphdata.prototype.transOffset = function() {
			return this.dataFieldHeight() + this.headHeight;
		};
		
		graphdata.prototype.xBoxWidth = function() {
			return this.dataFieldWidth() / this.xIncriment;
		};
				
		graphdata.prototype.yBoxHeight = function() {
			return this.dataFieldHeight() / this.yIncriment;
		};		
		
		return graphdata;
		
	})();
	
	
			
	pg.nflPassing = new pg.graphData(
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
	
	pg.nflSacks = new pg.graphData(
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
	
	pg.yourData = new pg.graphData(
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

});