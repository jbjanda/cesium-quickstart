(function(){

  angular.module('webForm')
        .controller('ModalDemoCtrl', ModalDemoCtrl);

  ModalDemoCtrl.$inject = ['$scope', '$uibModal', '$log', '$http', '$httpParamSerializerJQLike'];

//Controller that creates a POSt request in the open function that sends form data to python and if successful
//creates a modal instances with the necessary data.
  function ModalDemoCtrl($scope, $uibModal, $log, $http, $httpParamSerializerJQLike){
      $scope.open = function (size) {

        console.log("clicked");


 //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PREVIOUS CODE BELOW ORIGINALLY USED WITH OPEN LAYERS DEMO @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//           var loadingTemplate = "<div class='container'><br/><div class='col-md-6'><uib-progressbar class='progress-striped active' value='100'>Loading...</uib-progessbar></div></div>";
//           var loadingModal = $uibModal.open({
//             template: loadingTemplate,
//             animation: true,
//           });
//       $http({
//         url: "/cgi-bin/websar_readform.py",
//         method: 'POST',
//         data: $httpParamSerializerJQLike($scope.user),
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//        }).success(function(response) {
//             console.log($httpParamSerializerJQLike($scope.user))
//             // console.log(response);
//             loadingModal.close();
//             loadingModal.result.then(function(modalResponse){
//               var modalInstance = $uibModal.open({
//               templateUrl: 'myModalContent.html',
//               controller: 'ModalInstanceCtrl',
//               size: size,
//               animation: true,
//               resolve: {
//                 items: function () {
//                   return response.data;
//                 },
//                 imageTiming: function(){
//                   return response.imgCreationTime;
//                 },
//                 imageCount: function(){
//                   return response.imgNum;
//                 },
//                 driftCalcTiming: function(){
//                   return response.driftCalcTiming;
//                 },
//                 downloadTime: function(){
//                   return response.downloadTime;
//                 }
//               }
//             });
//          });
//       });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ END OLD CODE FOR BUTTON PUSH @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    };
   };

})();
