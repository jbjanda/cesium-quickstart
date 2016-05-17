

"use strict";

  angular.module('ngCesium', [])

  .directive('cesiumDirective', function($interval){
    return {
      restrict: "EA",
      controllerAs: "cesiumCtrl",
      scope: {
        data: "="
      },
      controller: function($scope){

      },
      link: function(scope, element, attr, ctrl){

        ctrl.cesium = new Cesium.Viewer(element[0], {
          baseLayerPicker: false,
          fullscreenButton: false,
          homeButton: false,
          sceneModePicker: false,
          selectionIndicator: false,
          timeline: false,
          animation: false,
          geocoder: false
        });


        //Grand Island, Nebraska in radians
        var startingLocation = {
            centerLong: (-98.343286 * Math.PI / 180),
            centerLat: (40.923664 * Math.PI / 180)
        };

        ctrl.cesium.camera.flyTo({
            destination: new Cesium.Cartesian3.fromDegrees(startingLocation.centerLong * 180/Math.PI, startingLocation.centerLat * 180/Math.PI, 5000000)
        });

        ctrl.cesium.entities.add({
          position: new Cesium.Cartesian3.fromDegrees(startingLocation.centerLong * 180/Math.PI, startingLocation.centerLat * 180/Math.PI, 500),
          point: {
            pixelSize: 32
          }
        });
      }
    };
  })

  .controller('appCtrl', ['$scope', function($scope) {

  }]);
