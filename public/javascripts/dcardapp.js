var app = angular.module('dcard',[]);
var page = 1;
var arr = [];
app.controller('dcardCtrl',function($scope, $http){
	console.log("dcardCtrl executed!");
	
	$http({method: 'GET', url: '/api/dcard/1'}).
    success(function(data, status, headers, config) {
       	$scope.firstpage = data;
    }).
    error(function(data, status, headers, config) {
      console.log("error!");
    });

    $scope.next = function(){
		page++;
		$http({method: 'GET', url: '/api/dcard/'+String(page)}).
	    success(function(data, status, headers, config) {
	      $scope.firstpage = $scope.firstpage.concat(data);
  	    })
	    
	}
});
