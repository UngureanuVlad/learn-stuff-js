angular.module('learnstuff').directive(
  "errormarker",
  function() {
    return {
      restrict : "A",
      scope : {
        fieldData : '=',
        fieldType : '=',
        fieldId : '@'
      },
      link : function(scope, element, attrs) {
        // input
        console.log("validating : " + scope.fieldId);
        if (scope.fieldType === 'input') {
          element.bind('blur', function() {
            var invalid = false;
            if (!angular.isDefined(scope.fieldData)
            || scope.fieldData === '') {
              invalid = true;
            }
            element.toggleClass('error-marker', invalid);
          });
        }
      }
    }
})
