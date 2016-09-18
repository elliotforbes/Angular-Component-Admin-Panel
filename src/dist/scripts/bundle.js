var myApp = angular
  .module('myApp', ['ngRoute', 'articles', 'home']);

function routeProvider($routeProvider){
    $routeProvider
      .when('/', {
          template: '<dashboard></dashboard>'
      });
}
routeProvider.$inject = ['$routeProvider'];
angular.module('myApp')
  .config(routeProvider);

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
    user: '=?'
  }
}

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
var dashboardAnalytics = {
  templateUrl: './components/dashboard/dashboard-analytics/dashboard-analytics.html',
  controller: DashboardAnalyticsController,
  bindings: {
    stats: '=?'
  }
}

angular.module('myApp')
  .component('dashboardAnalytics', dashboardAnalytics);
function DashboardAnalyticsController() {
  var ctrl = this;
}

angular.module('myApp')
  .controller('DashboardAnalyticsController', DashboardAnalyticsController);


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwcC5yb3V0ZXMuanMiLCJjb21tb24vbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5qcyIsImNvbW1vbi9sb2FkaW5nL2xvYWRpbmcuY29udHJvbGxlci5qcyIsImNvbW1vbi90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LmpzIiwiY29tbW9uL3RvcC1uYXYvdG9wLW5hdi5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS5zZXJ2aWNlLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWhvbWUvYXJ0aWNsZXMtaG9tZS5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtaG9tZS9hcnRpY2xlcy1ob21lLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtbmV3L2FydGljbGUtbmV3LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1uZXcvYXJ0aWNsZS1uZXcuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1hbmFseXRpY3MvZGFzaGJvYXJkLWFuYWx5dGljcy5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYW5hbHl0aWNzL2Rhc2hib2FyZC1hbmFseXRpY3MuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC11c2Vycy9kYXNoYm9hcmQtdXNlcnMuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXJzL2Rhc2hib2FyZC11c2Vycy5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQ0FBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBteUFwcCA9IGFuZ3VsYXJcbiAgLm1vZHVsZSgnbXlBcHAnLCBbJ25nUm91dGUnLCAnYXJ0aWNsZXMnLCAnaG9tZSddKTtcbiIsImZ1bmN0aW9uIHJvdXRlUHJvdmlkZXIoJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignLycsIHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxkYXNoYm9hcmQ+PC9kYXNoYm9hcmQ+J1xuICAgICAgfSk7XG59XG5yb3V0ZVByb3ZpZGVyLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAnKVxuICAuY29uZmlnKHJvdXRlUHJvdmlkZXIpO1xuIiwidmFyIGxvYWRpbmcgPSB7XG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24vbG9hZGluZy9sb2FkaW5nLmh0bWwnLFxuICBjb250cm9sbGVyOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICBpc0xvYWRpbmc6ICc9PydcbiAgfVxufTtcblxuYW5ndWxhci5tb2R1bGUoJ215QXBwJylcbiAgLmNvbXBvbmVudCgnbG9hZGluZycsIGxvYWRpbmcpOyIsImZ1bmN0aW9uIExvYWRpbmdDb250cm9sbGVyKCkge1xuICB2YXIgY3RybCA9IHRoaXM7XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAnKVxuICAuY29udHJvbGxlcignTG9hZGluZ0NvbnRyb2xsZXInLCBMb2FkaW5nQ29udHJvbGxlcik7IiwidmFyIHRvcE5hdiA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21tb24vdG9wLW5hdi90b3AtbmF2Lmh0bWwnLFxuICBjb250cm9sbGVyOiBUb3BOYXZDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIHVzZXI6ICc9PydcbiAgfVxufVxuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ215QXBwJylcbiAgLmNvbXBvbmVudCgndG9wTmF2JywgdG9wTmF2KTtcbiIsImZ1bmN0aW9uIFRvcE5hdkNvbnRyb2xsZXIoKSB7XG4gIHZhciBjdHJsID0gdGhpcztcbn07XG5cbmFuZ3VsYXIubW9kdWxlKCdteUFwcCcpXG4gIC5jb250cm9sbGVyKCdUb3BOYXZDb250cm9sbGVyJywgVG9wTmF2Q29udHJvbGxlcik7XG4gICIsImZ1bmN0aW9uIGFydGljbGVSb3V0ZVByb3ZpZGVyKCRyb3V0ZVByb3ZpZGVyKXtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgLndoZW4oJy9hcnRpY2xlcycse1xuICAgICAgICB0ZW1wbGF0ZTogJzxhcnRpY2xlcy1ob21lPjwvYXJ0aWNsZXMtaG9tZT4nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9hcnRpY2xlL25ldycsIHtcbiAgICAgICAgdGVtcGxhdGU6ICc8YXJ0aWNsZS1uZXc+PC9hcnRpY2xlLW5ldz4nXG4gICAgICB9KVxuICAgICAgLm90aGVyd2lzZSh7IFxuICAgICAgICB0ZW1wbGF0ZTogJzxoMT5Ob3QgRm91bmQ8L2gxPidcbiAgICAgIH0pO1xufTtcblxudmFyIGFydGljbGVzID0gYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJywgW10pO1xuXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKS5jb25maWcoYXJ0aWNsZVJvdXRlUHJvdmlkZXIpO1xuYXJ0aWNsZVJvdXRlUHJvdmlkZXIuJGluamVjdCA9IFsnJHJvdXRlUHJvdmlkZXInXTtcbiIsImZ1bmN0aW9uIEFydGljbGVTZXJ2aWNlKCRodHRwKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7XG4gICAgbmV3QXJ0aWNsZSA6IG5ld0FydGljbGUsXG4gICAgdXBkYXRlQXJ0aWNsZSA6IHVwZGF0ZUFydGljbGUsXG4gICAgZGVsZXRlQXJ0aWNsZSA6IGRlbGV0ZUFydGljbGUsXG4gICAgZ2V0QXJ0aWNsZSA6IGdldEFydGljbGVcbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcbiAgLy8vIERlZmluZSBcblxuICBmdW5jdGlvbiBuZXdBcnRpY2xlKGFydGljbGUpIHtcbiAgICAvLyBpbXBsZW1lbnRhdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQXJ0aWNsZShhcnRpY2xlKSB7XG4gICAgLy8gaW1wbGVtZW50YXRpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUFydGljbGUoaWQpIHtcbiAgICAvLyBpbXBsZW1lbnRhdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJ0aWNsZShpZCkge1xuICAgIC8vIGltcGxlbWVudGF0aW9uXG4gIH1cblxufVxuXG5BcnRpY2xlU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCddOyAgXG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgnYXJ0aWNsZXMnKVxuICAuZmFjdG9yeSgnQXJ0aWNsZVNlcnZpY2UnLCBBcnRpY2xlU2VydmljZSk7IiwiIiwiIiwidmFyIGFydGljbGVzSG9tZSA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtaG9tZS9hcnRpY2xlcy1ob21lLmh0bWwnLFxuICBjb250cm9sbGVyOiBBcnRpY2xlc0hvbWVDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIGFydGljbGVzOiAnPCdcbiAgfVxufTtcblxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcbiAgLmNvbXBvbmVudCgnYXJ0aWNsZXNIb21lJywgYXJ0aWNsZXNIb21lKTsiLCJmdW5jdGlvbiBBcnRpY2xlc0hvbWVDb250cm9sbGVyKCkge1xuICB2YXIgY3RybCA9IHRoaXM7XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKVxuICAuY29udHJvbGxlcignQXJ0aWNsZXNIb21lQ29udHJvbGxlcicsIEFydGljbGVzSG9tZUNvbnRyb2xsZXIpOyIsInZhciBhcnRpY2xlTmV3ID0ge1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1uZXcvYXJ0aWNsZS1uZXcuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IEFydGljbGVOZXdDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIGFydGljbGU6ICc9PydcbiAgfVxufTtcblxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcbiAgLmNvbXBvbmVudCgnYXJ0aWNsZU5ldycsIGFydGljbGVOZXcpOyIsImZ1bmN0aW9uIEFydGljbGVOZXdDb250cm9sbGVyKCkge1xuICB2YXIgY3RybCA9IHRoaXM7XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKVxuICAuY29udHJvbGxlcignQXJ0aWNsZU5ld0NvbnRyb2xsZXInLCBBcnRpY2xlTmV3Q29udHJvbGxlcik7IiwidmFyIGRhc2hib2FyZEFuYWx5dGljcyA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1hbmFseXRpY3MvZGFzaGJvYXJkLWFuYWx5dGljcy5odG1sJyxcbiAgY29udHJvbGxlcjogRGFzaGJvYXJkQW5hbHl0aWNzQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICBzdGF0czogJz0/J1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdteUFwcCcpXG4gIC5jb21wb25lbnQoJ2Rhc2hib2FyZEFuYWx5dGljcycsIGRhc2hib2FyZEFuYWx5dGljcyk7IiwiZnVuY3Rpb24gRGFzaGJvYXJkQW5hbHl0aWNzQ29udHJvbGxlcigpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xufVxuXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAnKVxuICAuY29udHJvbGxlcignRGFzaGJvYXJkQW5hbHl0aWNzQ29udHJvbGxlcicsIERhc2hib2FyZEFuYWx5dGljc0NvbnRyb2xsZXIpOyIsIiIsIiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
