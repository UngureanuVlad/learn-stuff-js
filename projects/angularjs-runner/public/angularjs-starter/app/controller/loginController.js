app.controller('loginController', function($scope, $http) {
  $scope.credentials = {email: "", password: ""};

  $scope.login = function(){
    console.log("login");
  }
});
