angular.module('demo', [])
.controller('GabeCtrl', function ($scope, $http) {
  // $scope.data.gabeAdj = 'Inattentive';
  $scope.submitTheInfo = function () {
    $http.post('/gabe', $scope.data)
    .then(function (response) {
      console.log(response);
    });
  };
});