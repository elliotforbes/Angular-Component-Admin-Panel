var dashboardUsers = {
  templateUrl: './app/components/dashboard/dashboard-users/dashboard-users.html',
  controller: DashboardUsersController,
  bindings: {
    users: '=?'
  }
};

angular.module('root')
  .component('dashboardUsers', dashboardUsers);