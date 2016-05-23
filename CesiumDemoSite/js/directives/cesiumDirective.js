app.directive('cesiumDirective', function($interval){
  return{
    restrict: 'E',
    controllerAs: 'CesiumController',
    scope: {
      data: "="
    },
    controller: function($scope){

    },
    link: function(scope, element, attr, ctrl){

      console.log("here");
      ctrl.viewer = new Cesium.Viewer(element[0]);
    }
  }
});