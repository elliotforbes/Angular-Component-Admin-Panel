var topnav = {
  bindings: {
    user: '<'
  },
  templateUrl: './common/top-nav/top-nav.html'
}

angular
  .module('myApp')
  .component('topnav', topnav);