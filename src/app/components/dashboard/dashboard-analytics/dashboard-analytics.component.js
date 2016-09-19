var dashboardAnalytics = {
  templateUrl: './app/components/dashboard/dashboard-analytics/dashboard-analytics.html',
  controller: DashboardAnalyticsController,
  bindings: {
    stats: '=?'
  }
};

angular.module('root')
  .component('dashboardAnalytics', dashboardAnalytics);