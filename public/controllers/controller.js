var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    
    	var refresh=function(){
    	$http.get('/contactlist').then(doneCallbacks,failCallbacks);
    	
    		};

    	refresh();	
    	function doneCallbacks(res){
    		console.log("Data received");
    		$scope.contactlist=res.data;

    	}

    	function failCallbacks(err){
    		console.log(err.message);
    	}

    	$scope.addContact=function(){
    		console.log($scope.contact)
    		$http.post('/contactlist',$scope.contact).then(doneCallbacks,failCallbacks);
    		refresh();	
    		$scope.contact="";
    		function doneCallbacks(res){
    			console.log(res);
    		}		
 			
 			function failCallbacks(err){
 				console.log(err.message);
 			}
    	};

    	$scope.remove=function(id){
    		console.log(id);
    		$http.delete('/contactlist/'+id).then(doneCallbacks,failCallbacks);
    		refresh();
    		function doneCallbacks(res){
    			console.log(res.data);
    		}
    			function failCallbacks(err){
 				console.log(err.message);
 			}
    	};

    	$scope.edit=function(id){
    		console.log(id);
    			$http.get('/contactlist/'+id).then(doneCallbacks,failCallbacks);
    	 		

    	//refresh();	
    	function doneCallbacks(res){
    		console.log(res);
    		$scope.contact=res.data;

    	}

    	function failCallbacks(err){
    		console.log(err.message);
    	}
	};


    $scope.update=function(){
        console.log($scope.contact._id);
        $http.put('/contactlist/'+$scope.contact._id,$scope.contact).then(doneCallbacks,failCallbacks);
                

        //refresh();    
        function doneCallbacks(res){
            // console.log(res);
            // $scope.contact=res.data;
                refresh();
        }

        function failCallbacks(err){
            console.log(err.message);
        }
    };
    	$scope.deselect=function(){
            $scope.contact="";
        }
    

  
}]);

