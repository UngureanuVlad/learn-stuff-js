app.controller('directivesController', function($scope, $http) {

  $scope.confirmPopup = function() {
    $scope.$emit('showDecisionPopupEvent',
    {
      message : 'Are you sure you want to save ?',
      title : 'Confirm',
      value : 'Some value'
    });
  };

  $scope.confirmSelection = function(value) {
    $scope.hideDecisionPopup();
  };

  $scope.product = {name:"productName", type: "input"};

 $scope.selected = {};
  $scope.quantities =  [
                 { "quantity" : "Quantity #1" },
                 { "quantity" : "Quantity #2" },
                 { "quantity" : "Quantity #3" }
             ];
});
