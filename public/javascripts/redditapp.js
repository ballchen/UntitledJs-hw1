function redditCtrl ($scope, $http){
	console.log("redditCtrl executed!");
	
	$http({method: 'GET', url: '/api/reddit'}).
    success(function(data, status, headers, config) {
    console.log(data);
      $scope.firstpage = data.data.children;
      console.log(data);
      if(data.data.after != null){
      	$scope.end = false;
      	$scope.after = data.data.after;
      }
      
    }).
    error(function(data, status, headers, config) {
      console.log("error!");
    });

    $scope.next = function(){
		if($scope.after){
			$http({method: 'GET', url: '/api/reddit/'+$scope.after}).
		    success(function(data, status, headers, config) {
		      $scope.firstpage = $scope.firstpage.concat(data.data.children);
		      if(data.data.after != null){
	      	$scope.end = false;
	      	$scope.after = data.data.after;
	      }
		    });
		}else{
			$scope.end = true;
		}	

	    
	}
}
