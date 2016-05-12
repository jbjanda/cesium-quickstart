(function(){
  angular.module('webForm')
        .controller('WebsarController', WebsarController);

  WebsarController.$inject = ['$scope', '$http','ObjectService']

  function WebsarController($scope, $http, ObjectService) {
    //Object structure to store all categories of objects with the associated flags, icons, and values.
    //Values are coded with id numbers and name/description
    $scope.objects = ObjectService.objects;
//   $scope.map = MapService.getMap();
//     $scope.user = MapService.user;
      $scope.user = {};
    //Watches for changes in form values for longitudue and re-centers map
//     $scope.$watch('user.latlong', function(oldValue, newValue) {
//         console.log($scope.user)
//         $scope.map.getView().setCenter(ol.proj.fromLonLat([$scope.user.latlong.lon, $scope.user.latlong.lat]));
//       });

    // //Watches for changes in form values for latitude and re-centers map
    // $scope.$watch('user.latlong.lat', function(oldValue, newValue) {
    //   $scope.map.getView().setCenter(ol.proj.fromLonLat([$scope.user.latlong.lon, $scope.user.latlong.lat]));
    // });

    //Pattern used for validating 4 digit military from 0000 to 2359
    $scope.patterns = {
      militaryTime: /^(0\d|1\d|2[0-3])([0-5]\d)$/
    };

    //Function to open uib-datepicker pop-up
    $scope.open = function($event) {
      $scope.status.opened = true;
    };

    //Variable used for uib-datepicker pop-up to display/hide.
    $scope.status = {
      opened: false
    };

    //Toggle function to turn off other collapsable divs if the a new button is clicked and resets object input.
   //Extra check to make sure the object is reset if a different button is clicked.
   $scope.toggle = function (object) {
     $scope.objects.map(function(item){
       item.isCollapsed = true;
       item.values.forEach(function(val){
         val.isHidden = true;
       })
     });
     var objs = $scope.objects.filter(function(o){
       return o === object;
     });
     objs.map(function(obj){
       obj.isCollapsed = false;
       $scope.user.objectID = '';
     });

   };




   //Toggle function to expand and collapse sub radio button menus if they exisit.
   $scope.toggle2 = function (items) {
     $scope.objects.map(function(obj){
       obj.values.map(function(val){
         if(val === items && val.sub){
           if(val.isHidden){
             val.isHidden = false;
           }
         } else {
           val.isHidden = true;
         }
       });

    
       
   });
 };



  };
})()
