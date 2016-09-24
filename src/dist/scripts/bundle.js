angular.module('root', [
    'ngRoute',
    'articles',
    'dashboard',
    'user',
    'comment',
    'stats',
    'settings'
]);

function routeProvider($routeProvider){
    $routeProvider
      .when('/', {
          template: '<dashboard></dashboard>'
      });
}
routeProvider.$inject = ['$routeProvider'];

angular.module('root')
  .config(routeProvider);

var loading = {
  templateUrl: './common/loading/loading.html',
  controller: LoadingController,
  bindings: {
    isLoading: '=?'
  }
};

angular.module('root')
  .component('loading', loading);
function LoadingController() {
  var ctrl = this;
};

angular.module('root')
  .controller('LoadingController', LoadingController);
var topNav = {
  templateUrl: './app/common/top-nav/top-nav.html',
  controller: TopNavController,
  bindings: {
    user: '=?'
  }
};

angular
  .module('root')
  .component('topNav', topNav);

function TopNavController() {
  var ctrl = this;
};

angular.module('root')
  .controller('TopNavController', TopNavController);

angular.module('articles', []);
function articleRouteProvider($routeProvider){
    $routeProvider
      .when('/articles',{
        template: '<articles-home></articles-home>'
      })
      .when('/article/new', {
        template: '<article-new></article-new>'
      })
      .when('/article/edit/:id', {
        template: '<article-edit></article-edit>'
      })
      .otherwise({ 
        template: '<h1>Not Found</h1>'
      });
};

angular.module('articles').config(articleRouteProvider);
articleRouteProvider.$inject = ['$routeProvider'];

function ArticleService($http, $log) {

  var service = {
    newArticle : newArticle,
    updateArticle : updateArticle,
    deleteArticle : deleteArticle,
    getArticle : getArticle
  };

  return service;
  /// Define 

  function newArticle(article) {
    $log.log("Placeholder for saving new Article")
  }

  function updateArticle(article) {
    $log.log("Placeholder for updating new Article");
  }

  function deleteArticle(id) {
    $log.log("Placeholder for deleting an article");
  }

  function getArticle(id) {
    $log.log("Placeholder for retrieving an article");
  }

}

ArticleService.$inject = ['$http', '$log'];  

angular
  .module('articles')
  .factory('ArticleService', ArticleService);
angular.module('comment', []);
function commentRoutes($routeProvider){
    $routeProvider
      .when('/comments', {
          template: '<comment-index></comment-index>'
      });
};
commentRoutes.$inject = ['$routeProvider'];
angular.module('comment').config(commentRoutes);

var dashboard = {
  templateUrl: './app/components/dashboard/dashboard-index.html',
  controller: DashboardController
};

angular.module('root')
  .component('dashboard', dashboard);
function DashboardController() {
  var ctrl = this;
};

angular.module('root')
  .controller('DashboardController', DashboardController);
angular.module('dashboard', ['chart.js']);
angular.module('settings',[]);
function settingsRoutes($routeProvider){
    $routeProvider
      .when('/settings', {
          template: '<settings-index></settings-index>'
      });
}
settingsRoutes.$inject = ['$routeProvider'];


angular.module('settings')
  .config(settingsRoutes);

angular.module('user', []);
function userRoutes($routeProvider){
    $routeProvider
      .when('/users', {
          template: '<user-index></user-index>'
      });
};
userRoutes.$inject = ['$routeProvider'];
angular.module('user').config(userRoutes);

angular.module('stats', []);
function statsRoutes($routeProvider){
    $routeProvider
      .when('/stats', {
          template: '<stats-index></stats-index>'
      });
};

statsRoutes.$inject = ['$routeProvider'];
angular.module('stats').config(statsRoutes);

var articleEdit = {
  templateUrl: './app/components/articles/article-edit/article-edit.html',
  controller: ArticleEditController,
  bindings: {
    article: '<'
  }
}

angular.module('articles')
  .component('articleEdit', articleEdit);
function ArticleEditController() {
  var ctrl = this;
};

angular.module('articles')
  .controller('ArticleEditController', ArticleEditController);
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
function ArticleNewController(ArticleService, $log) {
  var ctrl = this;

  ctrl.save = function(article) {
    $log.log("Saving New Article");
    ArticleService.newArticle(article);
  };  

};

ArticleNewController.$inject = ['ArticleService', '$log'];

angular.module('articles')
  .controller('ArticleNewController', ArticleNewController);
var commentIndex = {
  templateUrl: './app/components/comment/comment-index/comment-index.html'
  
}

angular.module('comment')
  .component('commentIndex', commentIndex);
var dashboardAnalytics = {
  templateUrl: './app/components/dashboard/dashboard-analytics/dashboard-analytics.html',
  controller: DashboardAnalyticsController,
  bindings: {
    stats: '=?'
  }
};

angular.module('root')
  .component('dashboardAnalytics', dashboardAnalytics);
function DashboardAnalyticsController($scope) {
  var ctrl = this;

  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Visitors', 'Page Views'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  $scope.options = {
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  };

  ctrl.$onInit = function() {
    console.log("Hey you guys");
  };

};

DashboardAnalyticsController.$inject = ['$scope'];

angular.module('root')
  .controller('DashboardAnalyticsController', DashboardAnalyticsController);

var dashboardUsers = {
  templateUrl: './app/components/dashboard/dashboard-users/dashboard-users.html',
  controller: DashboardUsersController,
  bindings: {
    users: '=?'
  }
};

angular.module('root')
  .component('dashboardUsers', dashboardUsers);
function DashboardUsersController($scope) {
  var ctrl = this;

  $scope.labels = ['-4 Week', '-3 Week', '-2 Week', '-1 Week'];
  $scope.series = ['New Users'];

  $scope.options = {
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  };

  $scope.data = [
    [6, 3, 4, 2]
  ];

  ctrl.$onInit = function() {
    console.log("Hey you guys");
  };

};

DashboardUsersController.$inject = ['$scope'];

angular.module('root')
  .controller('DashboardUsersController', DashboardUsersController);

var settingsIndex = {
  templateUrl: 'app/components/settings/settings-index/settings-index.html'
}

angular.module('settings')
  .component('settingsIndex', settingsIndex);
function SettingsIndexController(){
  var ctrl = this;
}

angular.module('settings')
  .controller('SettingsIndexController', SettingsIndexController);
var userIndex = {
  templateUrl: './app/components/user/user-index/user-index.html',
  controller: UserIndexController,
  bindings: {
    users: '=?'
  }
};

angular.module('user')
  .component('userIndex', userIndex);
function UserIndexController() {
  var ctrl = this;
};

angular.module('user')
  .controller('UserIndexController', UserIndexController);
var userNew = {
  templateUrl: './app/components/user/user-new/user-new.html',
  controller: UserNewController,
  bindings: {
    user: '=?'
  }
}

angular.module('user')
  .component('userNew', userNew);
function UserNewController(){
  var ctrl = this;
};

angular.module('user')
  .controller('UserNewController', UserNewController);
var statsIndex = {
  templateUrl: 'app/components/stats/stats-index/stats-index.html'
}

angular.module('stats')
  .component('statsIndex', statsIndex);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhcHAucm91dGVzLmpzIiwiY29tbW9uL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuanMiLCJjb21tb24vbG9hZGluZy9sb2FkaW5nLmNvbnRyb2xsZXIuanMiLCJjb21tb24vdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5qcyIsImNvbW1vbi90b3AtbmF2L3RvcC1uYXYuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS5tb2R1bGUuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUucm91dGVzLmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLnNlcnZpY2UuanMiLCJjb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5tb2R1bGUuanMiLCJjb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5yb3V0ZXMuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtaW5kZXguY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWluZGV4LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUuanMiLCJjb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvdXNlci91c2VyLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvdXNlci91c2VyLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvc3RhdHMvc3RhdHMubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zdGF0cy9zdGF0cy5yb3V0ZXMuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtZWRpdC9hcnRpY2xlLWVkaXQuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWVkaXQvYXJ0aWNsZS1lZGl0LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtaG9tZS9hcnRpY2xlcy1ob21lLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1ob21lL2FydGljbGVzLWhvbWUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1uZXcvYXJ0aWNsZS1uZXcuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLW5ldy9hcnRpY2xlLW5ldy5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtaW5kZXgvY29tbWVudC1pbmRleC5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYW5hbHl0aWNzL2Rhc2hib2FyZC1hbmFseXRpY3MuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWFuYWx5dGljcy9kYXNoYm9hcmQtYW5hbHl0aWNzLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYW5hbHl0aWNzL2Rhc2hib2FyZC1hbmFseXRpY3MubW9kdWxlLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXJzL2Rhc2hib2FyZC11c2Vycy5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtdXNlcnMvZGFzaGJvYXJkLXVzZXJzLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtdXNlcnMvZGFzaGJvYXJkLXVzZXJzLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MtaW5kZXgvc2V0dGluZ3MtaW5kZXguY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy1pbmRleC9zZXR0aW5ncy1pbmRleC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VyL3VzZXItaW5kZXgvdXNlci1pbmRleC5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci1pbmRleC91c2VyLWluZGV4LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci1uZXcvdXNlci1uZXcuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy91c2VyL3VzZXItbmV3L3VzZXItbmV3LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3N0YXRzL3N0YXRzLWluZGV4L3N0YXRzLWluZGV4LmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgncm9vdCcsIFtcclxuICAgICduZ1JvdXRlJyxcclxuICAgICdhcnRpY2xlcycsXHJcbiAgICAnZGFzaGJvYXJkJyxcclxuICAgICd1c2VyJyxcclxuICAgICdjb21tZW50JyxcclxuICAgICdzdGF0cycsXHJcbiAgICAnc2V0dGluZ3MnXHJcbl0pO1xyXG4iLCJmdW5jdGlvbiByb3V0ZVByb3ZpZGVyKCRyb3V0ZVByb3ZpZGVyKXtcclxuICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgIC53aGVuKCcvJywge1xyXG4gICAgICAgICAgdGVtcGxhdGU6ICc8ZGFzaGJvYXJkPjwvZGFzaGJvYXJkPidcclxuICAgICAgfSk7XHJcbn1cclxucm91dGVQcm92aWRlci4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb25maWcocm91dGVQcm92aWRlcik7XHJcbiIsInZhciBsb2FkaW5nID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24vbG9hZGluZy9sb2FkaW5nLmh0bWwnLFxyXG4gIGNvbnRyb2xsZXI6IExvYWRpbmdDb250cm9sbGVyLFxyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBpc0xvYWRpbmc6ICc9PydcclxuICB9XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXHJcbiAgLmNvbXBvbmVudCgnbG9hZGluZycsIGxvYWRpbmcpOyIsImZ1bmN0aW9uIExvYWRpbmdDb250cm9sbGVyKCkge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdyb290JylcclxuICAuY29udHJvbGxlcignTG9hZGluZ0NvbnRyb2xsZXInLCBMb2FkaW5nQ29udHJvbGxlcik7IiwidmFyIHRvcE5hdiA9IHtcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbW1vbi90b3AtbmF2L3RvcC1uYXYuaHRtbCcsXHJcbiAgY29udHJvbGxlcjogVG9wTmF2Q29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgdXNlcjogJz0/J1xyXG4gIH1cclxufTtcclxuXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKCdyb290JylcclxuICAuY29tcG9uZW50KCd0b3BOYXYnLCB0b3BOYXYpO1xyXG4iLCJmdW5jdGlvbiBUb3BOYXZDb250cm9sbGVyKCkge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdyb290JylcclxuICAuY29udHJvbGxlcignVG9wTmF2Q29udHJvbGxlcicsIFRvcE5hdkNvbnRyb2xsZXIpO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnLCBbXSk7IiwiZnVuY3Rpb24gYXJ0aWNsZVJvdXRlUHJvdmlkZXIoJHJvdXRlUHJvdmlkZXIpe1xyXG4gICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgLndoZW4oJy9hcnRpY2xlcycse1xyXG4gICAgICAgIHRlbXBsYXRlOiAnPGFydGljbGVzLWhvbWU+PC9hcnRpY2xlcy1ob21lPidcclxuICAgICAgfSlcclxuICAgICAgLndoZW4oJy9hcnRpY2xlL25ldycsIHtcclxuICAgICAgICB0ZW1wbGF0ZTogJzxhcnRpY2xlLW5ldz48L2FydGljbGUtbmV3PidcclxuICAgICAgfSlcclxuICAgICAgLndoZW4oJy9hcnRpY2xlL2VkaXQvOmlkJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnPGFydGljbGUtZWRpdD48L2FydGljbGUtZWRpdD4nXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vdGhlcndpc2UoeyBcclxuICAgICAgICB0ZW1wbGF0ZTogJzxoMT5Ob3QgRm91bmQ8L2gxPidcclxuICAgICAgfSk7XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKS5jb25maWcoYXJ0aWNsZVJvdXRlUHJvdmlkZXIpO1xyXG5hcnRpY2xlUm91dGVQcm92aWRlci4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xyXG4iLCJmdW5jdGlvbiBBcnRpY2xlU2VydmljZSgkaHR0cCwgJGxvZykge1xyXG5cclxuICB2YXIgc2VydmljZSA9IHtcclxuICAgIG5ld0FydGljbGUgOiBuZXdBcnRpY2xlLFxyXG4gICAgdXBkYXRlQXJ0aWNsZSA6IHVwZGF0ZUFydGljbGUsXHJcbiAgICBkZWxldGVBcnRpY2xlIDogZGVsZXRlQXJ0aWNsZSxcclxuICAgIGdldEFydGljbGUgOiBnZXRBcnRpY2xlXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHNlcnZpY2U7XHJcbiAgLy8vIERlZmluZSBcclxuXHJcbiAgZnVuY3Rpb24gbmV3QXJ0aWNsZShhcnRpY2xlKSB7XHJcbiAgICAkbG9nLmxvZyhcIlBsYWNlaG9sZGVyIGZvciBzYXZpbmcgbmV3IEFydGljbGVcIilcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUFydGljbGUoYXJ0aWNsZSkge1xyXG4gICAgJGxvZy5sb2coXCJQbGFjZWhvbGRlciBmb3IgdXBkYXRpbmcgbmV3IEFydGljbGVcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVBcnRpY2xlKGlkKSB7XHJcbiAgICAkbG9nLmxvZyhcIlBsYWNlaG9sZGVyIGZvciBkZWxldGluZyBhbiBhcnRpY2xlXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QXJ0aWNsZShpZCkge1xyXG4gICAgJGxvZy5sb2coXCJQbGFjZWhvbGRlciBmb3IgcmV0cmlldmluZyBhbiBhcnRpY2xlXCIpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkFydGljbGVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnXTsgIFxyXG5cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoJ2FydGljbGVzJylcclxuICAuZmFjdG9yeSgnQXJ0aWNsZVNlcnZpY2UnLCBBcnRpY2xlU2VydmljZSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbW1lbnQnLCBbXSk7IiwiZnVuY3Rpb24gY29tbWVudFJvdXRlcygkcm91dGVQcm92aWRlcil7XHJcbiAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAud2hlbignL2NvbW1lbnRzJywge1xyXG4gICAgICAgICAgdGVtcGxhdGU6ICc8Y29tbWVudC1pbmRleD48L2NvbW1lbnQtaW5kZXg+J1xyXG4gICAgICB9KTtcclxufTtcclxuY29tbWVudFJvdXRlcy4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xyXG5hbmd1bGFyLm1vZHVsZSgnY29tbWVudCcpLmNvbmZpZyhjb21tZW50Um91dGVzKTtcclxuIiwidmFyIGRhc2hib2FyZCA9IHtcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1pbmRleC5odG1sJyxcclxuICBjb250cm9sbGVyOiBEYXNoYm9hcmRDb250cm9sbGVyXHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXHJcbiAgLmNvbXBvbmVudCgnZGFzaGJvYXJkJywgZGFzaGJvYXJkKTsiLCJmdW5jdGlvbiBEYXNoYm9hcmRDb250cm9sbGVyKCkge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdyb290JylcclxuICAuY29udHJvbGxlcignRGFzaGJvYXJkQ29udHJvbGxlcicsIERhc2hib2FyZENvbnRyb2xsZXIpOyIsImFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnLCBbJ2NoYXJ0LmpzJ10pOyIsImFuZ3VsYXIubW9kdWxlKCdzZXR0aW5ncycsW10pOyIsImZ1bmN0aW9uIHNldHRpbmdzUm91dGVzKCRyb3V0ZVByb3ZpZGVyKXtcclxuICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgIC53aGVuKCcvc2V0dGluZ3MnLCB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxzZXR0aW5ncy1pbmRleD48L3NldHRpbmdzLWluZGV4PidcclxuICAgICAgfSk7XHJcbn1cclxuc2V0dGluZ3NSb3V0ZXMuJGluamVjdCA9IFsnJHJvdXRlUHJvdmlkZXInXTtcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc2V0dGluZ3MnKVxyXG4gIC5jb25maWcoc2V0dGluZ3NSb3V0ZXMpO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgndXNlcicsIFtdKTsiLCJmdW5jdGlvbiB1c2VyUm91dGVzKCRyb3V0ZVByb3ZpZGVyKXtcclxuICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgIC53aGVuKCcvdXNlcnMnLCB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZTogJzx1c2VyLWluZGV4PjwvdXNlci1pbmRleD4nXHJcbiAgICAgIH0pO1xyXG59O1xyXG51c2VyUm91dGVzLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcbmFuZ3VsYXIubW9kdWxlKCd1c2VyJykuY29uZmlnKHVzZXJSb3V0ZXMpO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnc3RhdHMnLCBbXSk7IiwiZnVuY3Rpb24gc3RhdHNSb3V0ZXMoJHJvdXRlUHJvdmlkZXIpe1xyXG4gICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgLndoZW4oJy9zdGF0cycsIHtcclxuICAgICAgICAgIHRlbXBsYXRlOiAnPHN0YXRzLWluZGV4Pjwvc3RhdHMtaW5kZXg+J1xyXG4gICAgICB9KTtcclxufTtcclxuXHJcbnN0YXRzUm91dGVzLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcbmFuZ3VsYXIubW9kdWxlKCdzdGF0cycpLmNvbmZpZyhzdGF0c1JvdXRlcyk7XHJcbiIsInZhciBhcnRpY2xlRWRpdCA9IHtcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1lZGl0L2FydGljbGUtZWRpdC5odG1sJyxcclxuICBjb250cm9sbGVyOiBBcnRpY2xlRWRpdENvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIGFydGljbGU6ICc8J1xyXG4gIH1cclxufVxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcclxuICAuY29tcG9uZW50KCdhcnRpY2xlRWRpdCcsIGFydGljbGVFZGl0KTsiLCJmdW5jdGlvbiBBcnRpY2xlRWRpdENvbnRyb2xsZXIoKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcclxuICAuY29udHJvbGxlcignQXJ0aWNsZUVkaXRDb250cm9sbGVyJywgQXJ0aWNsZUVkaXRDb250cm9sbGVyKTsiLCJ2YXIgYXJ0aWNsZXNIb21lID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWhvbWUvYXJ0aWNsZXMtaG9tZS5odG1sJyxcclxuICBjb250cm9sbGVyOiBBcnRpY2xlc0hvbWVDb250cm9sbGVyLFxyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBhcnRpY2xlczogJzwnXHJcbiAgfVxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcclxuICAuY29tcG9uZW50KCdhcnRpY2xlc0hvbWUnLCBhcnRpY2xlc0hvbWUpOyIsImZ1bmN0aW9uIEFydGljbGVzSG9tZUNvbnRyb2xsZXIoKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcclxuICAuY29udHJvbGxlcignQXJ0aWNsZXNIb21lQ29udHJvbGxlcicsIEFydGljbGVzSG9tZUNvbnRyb2xsZXIpOyIsInZhciBhcnRpY2xlTmV3ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLW5ldy9hcnRpY2xlLW5ldy5odG1sJyxcclxuICBjb250cm9sbGVyOiBBcnRpY2xlTmV3Q29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgYXJ0aWNsZTogJz0/J1xyXG4gIH1cclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXHJcbiAgLmNvbXBvbmVudCgnYXJ0aWNsZU5ldycsIGFydGljbGVOZXcpOyIsImZ1bmN0aW9uIEFydGljbGVOZXdDb250cm9sbGVyKEFydGljbGVTZXJ2aWNlLCAkbG9nKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG5cclxuICBjdHJsLnNhdmUgPSBmdW5jdGlvbihhcnRpY2xlKSB7XHJcbiAgICAkbG9nLmxvZyhcIlNhdmluZyBOZXcgQXJ0aWNsZVwiKTtcclxuICAgIEFydGljbGVTZXJ2aWNlLm5ld0FydGljbGUoYXJ0aWNsZSk7XHJcbiAgfTsgIFxyXG5cclxufTtcclxuXHJcbkFydGljbGVOZXdDb250cm9sbGVyLiRpbmplY3QgPSBbJ0FydGljbGVTZXJ2aWNlJywgJyRsb2cnXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXHJcbiAgLmNvbnRyb2xsZXIoJ0FydGljbGVOZXdDb250cm9sbGVyJywgQXJ0aWNsZU5ld0NvbnRyb2xsZXIpOyIsInZhciBjb21tZW50SW5kZXggPSB7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1pbmRleC9jb21tZW50LWluZGV4Lmh0bWwnXHJcbiAgXHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdjb21tZW50JylcclxuICAuY29tcG9uZW50KCdjb21tZW50SW5kZXgnLCBjb21tZW50SW5kZXgpOyIsInZhciBkYXNoYm9hcmRBbmFseXRpY3MgPSB7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYW5hbHl0aWNzL2Rhc2hib2FyZC1hbmFseXRpY3MuaHRtbCcsXHJcbiAgY29udHJvbGxlcjogRGFzaGJvYXJkQW5hbHl0aWNzQ29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgc3RhdHM6ICc9PydcclxuICB9XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXHJcbiAgLmNvbXBvbmVudCgnZGFzaGJvYXJkQW5hbHl0aWNzJywgZGFzaGJvYXJkQW5hbHl0aWNzKTsiLCJmdW5jdGlvbiBEYXNoYm9hcmRBbmFseXRpY3NDb250cm9sbGVyKCRzY29wZSkge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFsnMjAwNicsICcyMDA3JywgJzIwMDgnLCAnMjAwOScsICcyMDEwJywgJzIwMTEnLCAnMjAxMiddO1xyXG4gICRzY29wZS5zZXJpZXMgPSBbJ1Zpc2l0b3JzJywgJ1BhZ2UgVmlld3MnXTtcclxuXHJcbiAgJHNjb3BlLmRhdGEgPSBbXHJcbiAgICBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDBdLFxyXG4gICAgWzI4LCA0OCwgNDAsIDE5LCA4NiwgMjcsIDkwXVxyXG4gIF07XHJcblxyXG4gICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGN0cmwuJG9uSW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJIZXkgeW91IGd1eXNcIik7XHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5EYXNoYm9hcmRBbmFseXRpY3NDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRBbmFseXRpY3NDb250cm9sbGVyJywgRGFzaGJvYXJkQW5hbHl0aWNzQ29udHJvbGxlcik7IiwiIiwidmFyIGRhc2hib2FyZFVzZXJzID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXJzL2Rhc2hib2FyZC11c2Vycy5odG1sJyxcclxuICBjb250cm9sbGVyOiBEYXNoYm9hcmRVc2Vyc0NvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHVzZXJzOiAnPT8nXHJcbiAgfVxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb21wb25lbnQoJ2Rhc2hib2FyZFVzZXJzJywgZGFzaGJvYXJkVXNlcnMpOyIsImZ1bmN0aW9uIERhc2hib2FyZFVzZXJzQ29udHJvbGxlcigkc2NvcGUpIHtcclxuICB2YXIgY3RybCA9IHRoaXM7XHJcblxyXG4gICRzY29wZS5sYWJlbHMgPSBbJy00IFdlZWsnLCAnLTMgV2VlaycsICctMiBXZWVrJywgJy0xIFdlZWsnXTtcclxuICAkc2NvcGUuc2VyaWVzID0gWydOZXcgVXNlcnMnXTtcclxuXHJcbiAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmRhdGEgPSBbXHJcbiAgICBbNiwgMywgNCwgMl1cclxuICBdO1xyXG5cclxuICBjdHJsLiRvbkluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiSGV5IHlvdSBndXlzXCIpO1xyXG4gIH07XHJcblxyXG59O1xyXG5cclxuRGFzaGJvYXJkVXNlcnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRVc2Vyc0NvbnRyb2xsZXInLCBEYXNoYm9hcmRVc2Vyc0NvbnRyb2xsZXIpOyIsIiIsInZhciBzZXR0aW5nc0luZGV4ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MtaW5kZXgvc2V0dGluZ3MtaW5kZXguaHRtbCdcclxufVxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3NldHRpbmdzJylcclxuICAuY29tcG9uZW50KCdzZXR0aW5nc0luZGV4Jywgc2V0dGluZ3NJbmRleCk7IiwiZnVuY3Rpb24gU2V0dGluZ3NJbmRleENvbnRyb2xsZXIoKXtcclxuICB2YXIgY3RybCA9IHRoaXM7XHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdzZXR0aW5ncycpXHJcbiAgLmNvbnRyb2xsZXIoJ1NldHRpbmdzSW5kZXhDb250cm9sbGVyJywgU2V0dGluZ3NJbmRleENvbnRyb2xsZXIpOyIsInZhciB1c2VySW5kZXggPSB7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci1pbmRleC91c2VyLWluZGV4Lmh0bWwnLFxyXG4gIGNvbnRyb2xsZXI6IFVzZXJJbmRleENvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHVzZXJzOiAnPT8nXHJcbiAgfVxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3VzZXInKVxyXG4gIC5jb21wb25lbnQoJ3VzZXJJbmRleCcsIHVzZXJJbmRleCk7IiwiZnVuY3Rpb24gVXNlckluZGV4Q29udHJvbGxlcigpIHtcclxuICB2YXIgY3RybCA9IHRoaXM7XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgndXNlcicpXHJcbiAgLmNvbnRyb2xsZXIoJ1VzZXJJbmRleENvbnRyb2xsZXInLCBVc2VySW5kZXhDb250cm9sbGVyKTsiLCJ2YXIgdXNlck5ldyA9IHtcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLW5ldy91c2VyLW5ldy5odG1sJyxcclxuICBjb250cm9sbGVyOiBVc2VyTmV3Q29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgdXNlcjogJz0/J1xyXG4gIH1cclxufVxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3VzZXInKVxyXG4gIC5jb21wb25lbnQoJ3VzZXJOZXcnLCB1c2VyTmV3KTsiLCJmdW5jdGlvbiBVc2VyTmV3Q29udHJvbGxlcigpe1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCd1c2VyJylcclxuICAuY29udHJvbGxlcignVXNlck5ld0NvbnRyb2xsZXInLCBVc2VyTmV3Q29udHJvbGxlcik7IiwidmFyIHN0YXRzSW5kZXggPSB7XHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9zdGF0cy9zdGF0cy1pbmRleC9zdGF0cy1pbmRleC5odG1sJ1xyXG59XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3RhdHMnKVxyXG4gIC5jb21wb25lbnQoJ3N0YXRzSW5kZXgnLCBzdGF0c0luZGV4KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
