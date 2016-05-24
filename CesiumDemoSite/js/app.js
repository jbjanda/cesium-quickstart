// define the ngCesium module
angular.module('ngCesium', [])
    //define the cesium directive
    .directive('cesiumDirective', function($interval, cesiumService){
    // return the directive definition object
    return {
      restrict: "EA",
      controllerAs: "cesiumCtrl",
      priority: 500,
      bindToController: true,
      controller: function($scope, $element){

      },
      // define the "link" function
      link: function(scope, element, attr, ctrl){
        ctrl.cesiumViewer = new Cesium.Viewer(element[0], {
              baseLayerPicker: false,
              fullscreenButton: false,
              homeButton: false,
              sceneModePicker: false,
              selectionIndicator: false,
              timeline: true,
              animation: true,
              geocoder: false
            });

        var entity = ctrl.cesiumViewer.entities.add({
        label : {
            show : false
        }
        });

        // Start of Picker function Note: longitudeString and latitudeString used in click event function below.
        var cartesian;
        var cartographic;
        var longitudeString; // value of the longitude displayed in the viewer
        var latitudeString;  // value of the latitude displayed in the viewer

        var scene = ctrl.cesiumViewer.scene;
       // console.log(scene);
        var cam=ctrl.cesiumViewer.camera;
       // console.log(cam);
        var demoStarted=false; // checks if the demo is started
    // Mouse over the globe to see the cartographic position
    // This function is taken from the code examples in the Cesium Sandcastle under Picker
    handlerMove = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handlerMove.setInputAction(function(movement) {
        cartesian = cam.pickEllipsoid(movement.endPosition, scene.globe.ellipsoid);
      console.log(cartesian);
        if (cartesian && !demoStarted) {
            cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
            latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);

        entity.position = cartesian;
        entity.label.show = true;
        entity.label.text = '(' + longitudeString + ', ' + latitudeString + ')';

        } else {
            entity.label.show = false;
        }

        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

 // End picker function.


     // Click event function captures the latitude and longitude displayed on the viewer and
     // passes the values to the latitude and longitude on the form.
        ctrl.cesiumViewer.canvas.addEventListener('click', function(){
           cesiumService.user.latlong.lon = parseFloat(longitudeString);
           cesiumService.user.latlong.lat = parseFloat(latitudeString);
          console.log(cesiumService.user);
          scope.$apply();
              });
            }
          };
        })

    // define the cesium factory
    .factory('cesiumService', function(){
         var service = {};
         service.user = {
           latlong: {
             lon: 10,
             lat: 10
           }
         };

        return service;
    })

  .controller('cesiumCtrl', function($scope){

});