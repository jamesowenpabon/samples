define (function(){
angular.module('dynamicdataMod', [])

//Dynamic Data Controller
.controller('dynamicdata',function($scope, $http, $window, srcCollection){
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
		console.log('before call');
		dd.dataBoxResize('table-box--display-inner','table-box--display');
		console.log('after call');
		}
		if (action == "remove")	{
			var index = dd.dataList.indexOf(data);
			dd.dataList.splice(index, 1);
			dd.dataBoxResize('table-box--display-inner','table-box--display',(-30));
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
		var offset = (!offset) ? 5 : offset;
		var dataBoxHeight = angular.element('#'+dataBox).prop('offsetHeight')+offset
		angular.element('#'+containerBox).css('height',dataBoxHeight);
	}
	
	dd.setForm = function (form) {
		dd.myForm = form;
	}
	console.log("-----dd Controller Scope-----");
	console.log(dd);
})

});