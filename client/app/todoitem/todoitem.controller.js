'use strict';

angular.module('toDoApp')
<<<<<<< HEAD
    .controller('TodoitemCtrl', function ($scope,todoService,$rootScope,Auth,$location,$state,$window,$http) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.model={}
    var _user = Auth.getCurrentUser();
=======
    .controller('TodoitemCtrl', function ($scope,todoService,$rootScope,Auth,$location) {
    $scope.isLoggedIn = Auth.isLoggedIn;
>>>>>>> 4d659d1b0a6388d6e0375e673949a2afd3c99549

    if(Object.keys(Auth.getCurrentUser()).length == 0){
         $location.path('/login');
    }
    $scope.dates = new Date();

    $scope.open =false;


    $scope.dateOptions = {
        showWeeks: false,
        startingDay: 1
    };

    $scope.timeOptions = {
        readonlyInput: false,
        showMeridian: false
    };

    $scope.dateModeOptions = {
        minMode: 'year',
        maxMode: 'year'
    };

    $scope.openCalendar = function(e) {
        $scope.open = true;
    };
    $scope.submit = function(){
<<<<<<< HEAD
        if($scope.model.location.formatted_address)
    	   $scope.model.location=$scope.model.location.formatted_address;
    	$scope.model.active = true;
        $scope.model.userEmail = _user.email
    	todoService.add($scope.model).then(function(data){
            $state.go($state.current, {}, {reload: true});
=======
    	$scope.model.location=$scope.model.location.formatted_address;
    	$scope.model.active = true;
    	todoService.add($scope.model).then(function(data){
    		console.log(data,'data is here');
>>>>>>> 4d659d1b0a6388d6e0375e673949a2afd3c99549
    	})
    }
    $scope.getList = function(){
    	todoService.get().then(function(data){
<<<<<<< HEAD
            $scope.todos = data
    	})
    }
    $scope.getList();
    $scope.update = function(ind,opt){
        if(opt=='s'){
            var currentValue = new Date($scope.todos[ind].time+'');
         currentValue.setDate(currentValue.getDate() + 1);
         $scope.todos[ind].time = currentValue
        }
        if(opt=='c'){
             $scope.todos[ind].active = false
        }
         todoService.update($scope.todos[ind]).then(function(data){
            $state.go($state.current, {}, {reload: true});
         })
    }

    $scope.supportsGeo = $window.navigator;
    $scope.position = null;
     $scope.doTest1 = function(){
        window.navigator.geolocation.getCurrentPosition(function(position) {
        console.log('position',position);
        var request = new XMLHttpRequest();
         var method = 'GET';
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=true';
        var async = true;

        request.open(method, url, async);
        request.onreadystatechange = function(){
          if(request.readyState == 4 && request.status == 200){
            var data = JSON.parse(request.responseText);
            var address = data.results[0];
            console.log('addressssss',address.formatted_address);
            
            $scope.model.location = address.formatted_address
          }
        };
        request.send()
            $scope.$apply(function() {
                $scope.position = position;
                //$scope.model.location = $scope.model.location
            });
        }, function(error) {
            alert(error);
        });
     }
      $scope.doTest1()
    

    });


   
=======
    		//console.log('list data',data);
            $scope.todos = data
            //console.log(Auth.getCurrentUser(),'useeeeeeeee');
    	})
    }
    $scope.getList();
    $scope.update = function(ind){
        var currentValue = new Date($scope.todos[ind].time+'');
         currentValue.setDate(currentValue.getDate() + 1);
         $scope.todos[ind].time = currentValue
         todoService.update($scope.todos[ind])
    }
    });
>>>>>>> 4d659d1b0a6388d6e0375e673949a2afd3c99549
