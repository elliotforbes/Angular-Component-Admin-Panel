function routeProvider($routeProvider){
    $routeProvider
      .when('/', {
          template: '<home></home>'
      });
}
routeProvider.$inject = ['$routeProvider'];
angular.module('myApp')
  .config(routeProvider);
