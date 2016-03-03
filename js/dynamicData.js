//Application Definition//

angular.module('fedeApp')

//DynamicDataCtrl Data Fetch and Display Controller
.controller('dynamicDataCtrl', function($scope, $http) {
	$scope.lastDisplayTarget = '';
	$scope.lastListTarget = '';
	$scope.reverse = 'none';
	$scope.selectedOrder = '';
	
	//Load Data
	$scope.dataLoader = function(arg)	{
		$http.get("./dataList.php?dataSet="+arg).then(function(response) {
			$scope.dataList = response.data.records;
		});
	}
	
	//Order Data
	$scope.orderController = function($event, arg)	{
		$scope.reverse = ($scope.selectedOrder === arg) ? !$scope.reverse : false;
		$scope.selectedOrder = arg;
	}
	
	//CSS Controls
	$scope.styleSwap = function($event, switchTarget)	{
		switch(switchTarget)	{
			case 'dataDisplay' :
				if($scope.reverse == false)	{
					$event.currentTarget.querySelector('.buttonBox')
					.className = "dropdown buttonBox";
				}
				else if($scope.reverse == true)	{
					$event.currentTarget.querySelector('.buttonBox')
					.className = "dropup buttonBox";
				}
				$event.currentTarget.querySelector('.caretBox')
				.className = "caret caretBox";
				if($scope.lastDisplayTarget != '' && $scope.lastDisplayTarget 
				!= $event.currentTarget)	{
					$scope.lastDisplayTarget.querySelector('.buttonBox')
					.className = "buttonBox";
					$scope.lastDisplayTarget.querySelector('.caretBox')
					.className = "caretBox";
				}
				$scope.lastDisplayTarget = $event.currentTarget;
				break;	
			case 'dataListItem' :
				$event.currentTarget.className = "dataListItem strong";
				if($scope.lastListTarget != '' && $scope.lastListTarget 
				!= $event.currentTarget)	{
					$scope.lastListTarget.className = "dataListItem";
				}
				$scope.lastListTarget = $event.currentTarget;
				break;
		}	
		
	}
})