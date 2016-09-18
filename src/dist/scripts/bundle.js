var myApp = angular
  .module('myApp', ['ngRoute', 'articles', 'home']);

function routeProvider($routeProvider){
    $routeProvider
      .when('/', {
          template: '<home></home>'
      });
}
routeProvider.$inject = ['$routeProvider'];
angular.module('myApp')
  .config(routeProvider);

var home = {
  templateUrl: './app/common/home/home.html',
  controller: HomeController,
  bindings: {
    user: '<'
  }
};

var home = angular.module('home', [])
  .component('home', home);

function HomeController() {
  var ctrl = this;
}

angular.module('home')
  .controller('HomeController', HomeController);
var loading = {
  templateUrl: './common/loading/loading.html',
  controller: LoadingController,
  bindings: {
    isLoading: '=?'
  }
};

angular.module('myApp')
  .component('loading', loading);
function LoadingController() {
  var ctrl = this;
};

angular.module('myApp')
  .controller('LoadingController', LoadingController);
var topNav = {
  templateUrl: './app/common/top-nav/top-nav.html',
  controller: TopNavController,
  bindings: {
    user: '<'
  }
};

angular
  .module('myApp')
  .component('topNav', topNav);

function TopNavController() {
  var ctrl = this;
};

angular.module('myApp')
  .controller('TopNavController', TopNavController);
  
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

function ArticleService($http) {

  var service = {
    newArticle : newArticle,
    updateArticle : updateArticle,
    deleteArticle : deleteArticle,
    getArticle : getArticle
  };

  return service;
  /// Define 

  function newArticle(article) {
    // implementation
  }

  function updateArticle(article) {
    // implementation
  }

  function deleteArticle(id) {
    // implementation
  }

  function getArticle(id) {
    // implementation
  }

}

ArticleService.$inject = ['$http'];  

angular
  .module('articles')
  .factory('ArticleService', ArticleService);
var articlesHome = {
  templateUrl: './app/components/articles/article-home/articles-home.html',
  controller: ArticlesHomeController,
  bindings: {
    articles: '<'
  }
};

angular.module('articles')
  .component('articlesHome', articlesHome);
function ArticlesHomeController() {
  var ctrl = this;
};

angular.module('articles')
  .controller('ArticlesHomeController', ArticlesHomeController);
var articleNew = {
  templateUrl: './app/components/articles/article-new/article-new.html',
  controller: ArticleNewController,
  bindings: {
    article: '=?'
  }
};

angular.module('articles')
  .component('articleNew', articleNew);
function ArticleNewController() {
  var ctrl = this;
};

angular.module('articles')
  .controller('ArticleNewController', ArticleNewController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwcC5yb3V0ZXMuanMiLCJjb21tb24vaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsImNvbW1vbi9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsImNvbW1vbi9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmpzIiwiY29tbW9uL2xvYWRpbmcvbG9hZGluZy5jb250cm9sbGVyLmpzIiwiY29tbW9uL3RvcC1uYXYvdG9wLW5hdi5jb21wb25lbnQuanMiLCJjb21tb24vdG9wLW5hdi90b3AtbmF2LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUucm91dGVzLmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLnNlcnZpY2UuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtaG9tZS9hcnRpY2xlcy1ob21lLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1ob21lL2FydGljbGVzLWhvbWUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1uZXcvYXJ0aWNsZS1uZXcuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLW5ldy9hcnRpY2xlLW5ldy5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBteUFwcCA9IGFuZ3VsYXJcbiAgLm1vZHVsZSgnbXlBcHAnLCBbJ25nUm91dGUnLCAnYXJ0aWNsZXMnLCAnaG9tZSddKTtcbiIsImZ1bmN0aW9uIHJvdXRlUHJvdmlkZXIoJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignLycsIHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxob21lPjwvaG9tZT4nXG4gICAgICB9KTtcbn1cbnJvdXRlUHJvdmlkZXIuJGluamVjdCA9IFsnJHJvdXRlUHJvdmlkZXInXTtcbmFuZ3VsYXIubW9kdWxlKCdteUFwcCcpXG4gIC5jb25maWcocm91dGVQcm92aWRlcik7XG4iLCJ2YXIgaG9tZSA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21tb24vaG9tZS9ob21lLmh0bWwnLFxuICBjb250cm9sbGVyOiBIb21lQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICB1c2VyOiAnPCdcbiAgfVxufTtcblxudmFyIGhvbWUgPSBhbmd1bGFyLm1vZHVsZSgnaG9tZScsIFtdKVxuICAuY29tcG9uZW50KCdob21lJywgaG9tZSk7XG4iLCJmdW5jdGlvbiBIb21lQ29udHJvbGxlcigpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xufVxuXG5hbmd1bGFyLm1vZHVsZSgnaG9tZScpXG4gIC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIEhvbWVDb250cm9sbGVyKTsiLCJ2YXIgbG9hZGluZyA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbW1vbi9sb2FkaW5nL2xvYWRpbmcuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IExvYWRpbmdDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIGlzTG9hZGluZzogJz0/J1xuICB9XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAnKVxuICAuY29tcG9uZW50KCdsb2FkaW5nJywgbG9hZGluZyk7IiwiZnVuY3Rpb24gTG9hZGluZ0NvbnRyb2xsZXIoKSB7XG4gIHZhciBjdHJsID0gdGhpcztcbn07XG5cbmFuZ3VsYXIubW9kdWxlKCdteUFwcCcpXG4gIC5jb250cm9sbGVyKCdMb2FkaW5nQ29udHJvbGxlcicsIExvYWRpbmdDb250cm9sbGVyKTsiLCJ2YXIgdG9wTmF2ID0ge1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbW1vbi90b3AtbmF2L3RvcC1uYXYuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IFRvcE5hdkNvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgdXNlcjogJzwnXG4gIH1cbn07XG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgnbXlBcHAnKVxuICAuY29tcG9uZW50KCd0b3BOYXYnLCB0b3BOYXYpO1xuIiwiZnVuY3Rpb24gVG9wTmF2Q29udHJvbGxlcigpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xufTtcblxuYW5ndWxhci5tb2R1bGUoJ215QXBwJylcbiAgLmNvbnRyb2xsZXIoJ1RvcE5hdkNvbnRyb2xsZXInLCBUb3BOYXZDb250cm9sbGVyKTtcbiAgIiwiZnVuY3Rpb24gYXJ0aWNsZVJvdXRlUHJvdmlkZXIoJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignL2FydGljbGVzJyx7XG4gICAgICAgIHRlbXBsYXRlOiAnPGFydGljbGVzLWhvbWU+PC9hcnRpY2xlcy1ob21lPidcbiAgICAgIH0pXG4gICAgICAud2hlbignL2FydGljbGUvbmV3Jywge1xuICAgICAgICB0ZW1wbGF0ZTogJzxhcnRpY2xlLW5ldz48L2FydGljbGUtbmV3PidcbiAgICAgIH0pXG4gICAgICAub3RoZXJ3aXNlKHsgXG4gICAgICAgIHRlbXBsYXRlOiAnPGgxPk5vdCBGb3VuZDwvaDE+J1xuICAgICAgfSk7XG59O1xuXG52YXIgYXJ0aWNsZXMgPSBhbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnLCBbXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpLmNvbmZpZyhhcnRpY2xlUm91dGVQcm92aWRlcik7XG5hcnRpY2xlUm91dGVQcm92aWRlci4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xuIiwiZnVuY3Rpb24gQXJ0aWNsZVNlcnZpY2UoJGh0dHApIHtcblxuICB2YXIgc2VydmljZSA9IHtcbiAgICBuZXdBcnRpY2xlIDogbmV3QXJ0aWNsZSxcbiAgICB1cGRhdGVBcnRpY2xlIDogdXBkYXRlQXJ0aWNsZSxcbiAgICBkZWxldGVBcnRpY2xlIDogZGVsZXRlQXJ0aWNsZSxcbiAgICBnZXRBcnRpY2xlIDogZ2V0QXJ0aWNsZVxuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuICAvLy8gRGVmaW5lIFxuXG4gIGZ1bmN0aW9uIG5ld0FydGljbGUoYXJ0aWNsZSkge1xuICAgIC8vIGltcGxlbWVudGF0aW9uXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBcnRpY2xlKGFydGljbGUpIHtcbiAgICAvLyBpbXBsZW1lbnRhdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlQXJ0aWNsZShpZCkge1xuICAgIC8vIGltcGxlbWVudGF0aW9uXG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnRpY2xlKGlkKSB7XG4gICAgLy8gaW1wbGVtZW50YXRpb25cbiAgfVxuXG59XG5cbkFydGljbGVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJ107ICBcblxuYW5ndWxhclxuICAubW9kdWxlKCdhcnRpY2xlcycpXG4gIC5mYWN0b3J5KCdBcnRpY2xlU2VydmljZScsIEFydGljbGVTZXJ2aWNlKTsiLCJ2YXIgYXJ0aWNsZXNIb21lID0ge1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1ob21lL2FydGljbGVzLWhvbWUuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IEFydGljbGVzSG9tZUNvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgYXJ0aWNsZXM6ICc8J1xuICB9XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKVxuICAuY29tcG9uZW50KCdhcnRpY2xlc0hvbWUnLCBhcnRpY2xlc0hvbWUpOyIsImZ1bmN0aW9uIEFydGljbGVzSG9tZUNvbnRyb2xsZXIoKSB7XG4gIHZhciBjdHJsID0gdGhpcztcbn07XG5cbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXG4gIC5jb250cm9sbGVyKCdBcnRpY2xlc0hvbWVDb250cm9sbGVyJywgQXJ0aWNsZXNIb21lQ29udHJvbGxlcik7IiwidmFyIGFydGljbGVOZXcgPSB7XG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLW5ldy9hcnRpY2xlLW5ldy5odG1sJyxcbiAgY29udHJvbGxlcjogQXJ0aWNsZU5ld0NvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgYXJ0aWNsZTogJz0/J1xuICB9XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKVxuICAuY29tcG9uZW50KCdhcnRpY2xlTmV3JywgYXJ0aWNsZU5ldyk7IiwiZnVuY3Rpb24gQXJ0aWNsZU5ld0NvbnRyb2xsZXIoKSB7XG4gIHZhciBjdHJsID0gdGhpcztcbn07XG5cbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXG4gIC5jb250cm9sbGVyKCdBcnRpY2xlTmV3Q29udHJvbGxlcicsIEFydGljbGVOZXdDb250cm9sbGVyKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
