var home = {
  templateUrl: './components/home/home.html',
  controller: HomeController,
  bindings: {
    user: '<'
  }
};

var home = angular.module('home', [])
  .component('home', home);
