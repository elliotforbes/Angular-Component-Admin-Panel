function DashboardUsersController($scope) {
  var ctrl = this;

  $scope.labels = ['-4 Week', '-3 Week', '-2 Week', '-1 Week'];
  $scope.series = ['New Users'];

  $scope.options = {
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  };

  $scope.data = [
    [6, 3, 4, 2]
  ];

  ctrl.$onInit = function() {
    console.log("Hey you guys");
  };

};

DashboardUsersController.$inject = ['$scope'];

angular.module('root')
  .controller('DashboardUsersController', DashboardUsersController);