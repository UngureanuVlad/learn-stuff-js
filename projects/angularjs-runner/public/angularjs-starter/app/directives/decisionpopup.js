angular.module('learnstuff').directive("decisionpopup", function () {
  return {
    restrict: "E",
    templateUrl: "/angularjs-starter/app/directives/templates/decisionpopup.html",
    controller: function ($scope) {
      $scope.popupMessage = 'Message';
      $scope.popupTitle = 'Confirm';
      $scope.popupValue = '';
      $scope.confirm = $scope.confirmSelection;

      $scope.$on('showDecisionPopupEvent', function(event, payload) {
        $scope.popupMessage = payload['message'];
        $scope.popupTitle = payload['title'];
        $scope.popupValue = payload['value'];
        $scope.showDecisionPopup();
      });

      $scope.getTitle = function(){
        return $scope.popupTitle;
      };

      $scope.getMessage = function(){
        return $scope.popupMessage;
      };

      // popup control
      $scope.showDecisionPopup = function() {
        angular.element('#decision-popup').removeClass('hidden');
      };

      $scope.hideDecisionPopup = function() {
        angular.element('#decision-popup').addClass('hidden');
      };
    }
  };
});
