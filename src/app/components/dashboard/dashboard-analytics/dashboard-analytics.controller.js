function DashboardAnalyticsController($scope) {
  var ctrl = this;

  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Visitors', 'Page Views'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  $scope.options = {
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  };

  ctrl.$onInit = function() {
    console.log("Hey you guys");
  };

};

DashboardAnalyticsController.$inject = ['$scope'];

angular.module('root')
  .controller('DashboardAnalyticsController', DashboardAnalyticsController);