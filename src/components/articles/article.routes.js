function articleRouteProvider($routeProvider){
    $routeProvider
      .when('/articles',{
          template: '<articles-home></articles-home>'
      })
      .when('/article/new', {
        template: '<article-new></article-new>'
      })
      .otherwise({ 
        template: '<h1>Not Found</h1>'
      });
};

var articles = angular.module('articles', []);
angular.module('articles').config(articleRouteProvider);
articleRouteProvider.$inject = ['$routeProvider'];
