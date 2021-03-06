//Dynamic Data Controller

define (['app'], function(sampleApp){

sampleApp.register.controller('dynamicdata',function($rootScope, $scope, $http, exSrcConSrv, arryObjSrv){
	var dd = this;
	
	$rootScope.exSrcObj = exSrcConSrv;
	
	$rootScope.exSrcObj.exsrccon(
	{
		"html" : {	
		"label":"HTML", 
		"src":"pages/dynamicData.html", 
		"icon":"fa fa-html5"
		},
		"controller" : {
		"label":"DynamicDataCtrlr", 
		"src":"srcjs/app/controllers/dynamicdataController-src.js", 
		"icon":"fa fa-dot-circle-o"
		},
		"css" : {
		"label":"SCSS", 
		"src":"scss/app/dynamicData.scss", 
		"psrc":"css/app/dynamicData.css",
		"icon":"fa fa-css3"
		}
	});
	
	$rootScope.exSrcLinkArray = arryObjSrv.parseObj($rootScope.exSrcObj); 
	
	$scope.$on('$viewContentLoaded', function() { 
		dd.newDataItem = {
			name : '',
			rating : ''
		};
		dd.reverse = '';
		dd.selectedOrder = '';
		$scope.lastDisplayTarget = ''; 
	 });
	 
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
	};
	
	//Post Data
	dd.dataPoster = function(data,action)	{
		data.editState = undefined;
		data.name = (data.name.replace(/[^a-zA-Z0-9\s]/g, "")); 
		data.action = action;
		var dataString = 'data='+JSON.stringify(data);
		$http.post(
			"./dataList.php", 
			dataString, 
			{headers : {'Content-Type': 'application/x-www-form-urlencoded'}} 
		)
		.then(
			function (response) {
				if (action == "insert")	{
				var temp = dd.selectedOrder;
				dd.selectedOrder = '';
				dd.dataList.push({
					'ID':response.data,
					'name':data.name,
					'rating':parseInt(data.rating),
					'collection':data.collection
				});
				dd.selectedOrder = temp;
				dd.dataBoxResize('table-box--display-inner','table-box--display',(40));
				}
				if (action == "remove")	{
					var index = dd.dataList.indexOf(data);
					dd.dataList.splice(index, 1);
					dd.dataBoxResize('table-box--display-inner','table-box--display',(-32));
				}
			}, 
			function (rdata, status, header, config) {
				dd.ResponseDetails = rdata;
			}
		);
	};
	 
	//Order Data
	dd.orderController = function(arg)	{
		dd.reverse = (dd.selectedOrder === arg) ? !dd.reverse : false;
		dd.selectedOrder = arg;
	};
	
	//Cancell Action
	dd.cancelAction = function(data)	{
		var recordID = dd.dataList.indexOf(data);
		dd.dataList[recordID].name = data.editState.name;
		dd.dataList[recordID].rating = data.editState.rating;
		data.editState = undefined;
	};
	
	//Set Edit State
	dd.setEditState = function(data)	{
		data.editState = angular.copy(data);
	};
	
	//New Record
	dd.newRecord = function()	{
		dd.newDataItem = {
			name : '',
			rating : '',
			collection : dd.sqlTableName
		};
		dd.myForm.$setPristine();
		dd.myForm.$setUntouched();
	};
	
	//Resize Data Box
	dd.dataBoxResize = function(dataBox, containerBox, offset)	{
		offset = (!offset) ? 5 : offset;
		var dataBoxHeight = angular.element('#'+dataBox).prop('offsetHeight')+offset
		angular.element('#'+containerBox).css('height',dataBoxHeight);
	}
	
	dd.setForm = function (form) {
		dd.myForm = form;
	}
	
	console.log("-----Controller Scope-----");
	console.log($scope);
	
	console.log("-----dd Controller Scope-----");
	console.log(dd);
})

});