(function(){

  angular.module('webForm')
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);

ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'items', 'imageTiming', 'imageCount', 'driftCalcTiming', 'downloadTime'];

//Controller for the modal instances that populates the data
//and creates a close function for the back button.
function ModalInstanceCtrl($scope, $uibModalInstance, items, imageTiming, imageCount, driftCalcTiming, downloadTime){
    $scope.items = items;
    $scope.imageTiming = imageTiming;
    $scope.imageCount = imageCount;
    $scope.driftCalcTiming = driftCalcTiming;
    $scope.downloadTime = downloadTime;

    $scope.ok = function () {
      $uibModalInstance.close();
    };
}

})();
