var app = angular.module('grocApp', []);

app.controller('MainController', function($scope, $http){
  $scope.showError = false;


  function handleGrocSuccess(response) {
    // $scope.people = response.data.rows;
    console.log('Success', response);
  }
  function handleGrocFailure(response) {
    console.log('Failure', response);
  }
})
