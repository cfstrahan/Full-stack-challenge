angular.module('grocApp', []);


angular.module('grocApp').controller('MainController', function($scope){

  $scope.list = [];
  $scope.newGroc = '';
  $scope.show = true;

  $scope.submit = function() {
    $scope.list.push($scope.newGroc);
    $scope.newGroc = '';
    console.log($scope.list);
  }

  $scope.removeItem = function(completedItem) {
    var index = $scope.list.indexOf(completedItem);
    $scope.list.splice(index, 1);
    console.log(completedItem, index);
  }

  });






// angular.module('grocApp').controller('MainController', function($scope, DataService){
//   $scope.data = DataService.data;
//   $scope.submit = function(){
//     var sendData = {};
//     var foodArray = [];
//     foodArray = $scope.
//   }




  // $scope.delete = function ( idx ) {
  //   var food_to_delete = $scope.groceries[idx];
  //
  //   API.DeleteFood({ id: food_to_delete.id }, function (success) {
  //     $scope.groceries.splice(idx, 1);
  //   });
  // };

// })
