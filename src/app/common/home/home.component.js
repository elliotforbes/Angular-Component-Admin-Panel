var home = {
  templateUrl: './app/common/home/home.html',
  controller: HomeController,
  bindings: {
    user: '<'
  }
};

var home = angular.module('home', [])
  .component('home', home);
