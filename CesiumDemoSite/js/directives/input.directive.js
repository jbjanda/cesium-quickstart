//Directive restricts the values produce by the slider element to int so that 2-way data-binding
//between input range and input number works
angular.module('webForm')
      .directive('input', function () {
        return {
            restrict: 'E',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                if (attrs.type.toLowerCase() !== 'number') {
                    return;
                } //only augment number input!
                ctrl.$formatters.push(function (value) {
                    return value ? parseFloat(value) : null;
                });
            }
        };
      });
