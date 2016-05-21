// define the ngCesium module
angular.module('ngCesium', [])
    //define the cesium directive
    .directive('cesiumDirective', function($interval, cesiumService){
    // return the directive definition object
    return {
      restrict: "EA",
      controllerAs: "cesiumCtrl",
      priority: 500,
      scope: {
        cesiumDirective: "="
      },
      bindToController: true,
      controller: function($scope, $element){
        this.cesiumViewer = new Cesium.Viewer($element[0], {
          baseLayerPicker: false,
          fullscreenButton: false,
          homeButton: false,
          sceneModePicker: false,
          selectionIndicator: false,
          timeline: true,
          animation: true,
          geocoder: false
        });

        // this makes sure our parent app gets its cesiumInstance back
        this.cesiumDirective.cesiumInstance = new cesiumService(this.cesiumViewer);
      },
      // define the "link" function
      link: function(scope, element, attr, ctrl){

      }
    };
  })
    // define the cesium factory
    .factory('cesiumService', function(){
        // constructor
        function cesiumService(viewer){
            this._viewer = viewer;
        };

        cesiumService.prototype = {
//             addEntity: function addEntity(options){
//                 return this._viewer.entities.add(options);
//             },
//             removeEntity: function removeEntity(id){
//                 this._viewer.entities.removeById(id);
//             },
//             setCallbackProperty: function(property){
//                 return new Cesium.CallbackProperty(function(){
//                     return property;
//                 }, false);
//             },
//             getEventHandler: function(){
//                 return new Cesium.ScreenSpaceEventHandler(this._viewer.scene.canvas);
//             },

           displayLatLon: function(){

           }

        };

        return cesiumService;
    })
    .controller('cesiumCtrl', ['$scope', function($scope) {

    }]);