var dashboardAnalytics = {
  templateUrl: './components/dashboard/dashboard-analytics/dashboard-analytics.html',
  controller: DashboardAnalyticsController,
  bindings: {
    stats: '=?'
  }
};

angular.module('myApp')
  .component('dashboardAnalytics', dashboardAnalytics);