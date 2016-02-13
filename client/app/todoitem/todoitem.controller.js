'use strict';

angular.module('toDoApp')
    .controller('TodoitemCtrl', function ($scope,todoService,$rootScope,Auth,$location) {
    $scope.isLoggedIn = Auth.isLoggedIn;

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
    	$scope.model.location=$scope.model.location.formatted_address;
    	$scope.model.active = true;
    	todoService.add($scope.model).then(function(data){
    		console.log(data,'data is here');
    	})
    }
    $scope.getList = function(){
    	todoService.get().then(function(data){
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
