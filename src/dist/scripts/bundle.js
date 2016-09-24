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

angular.module('stats', []);
function statsRoutes($routeProvider){
    $routeProvider
      .when('/stats', {
          template: '<stats-index></stats-index>'
      });
};

statsRoutes.$inject = ['$routeProvider'];
angular.module('stats').config(statsRoutes);

angular.module('user', []);
function userRoutes($routeProvider){
    $routeProvider
      .when('/users', {
          template: '<user-index></user-index>'
      });
};
userRoutes.$inject = ['$routeProvider'];
angular.module('user').config(userRoutes);

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
var articleEdit = {
  templateUrl: './app/components/articles/article-edit/article-edit.html',
  controller: ArticleEditController,
  bindings: {
    article: '<'
  }
}

angular.module('articles')
  .component('articleEdit', articleEdit);
function ArticleEditController($log) {
  var ctrl = this;

  ctrl.article = {};

  ctrl.init = function() {
    ctrl.article = {
      title : "Test Article",
      description: "lorem ipsum",
      slug: "test_article",
      image: "test_image.jpg",
      body: "body"
    };
  };

  ctrl.save = function() {
    $log.log("Save any updates to the article");
  };

};

ArticleEditController.$inject = ['$log'];

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
var settingsIndex = {
  templateUrl: 'app/components/settings/settings-index/settings-index.html',
  controller: SettingsIndexController,
  bindings: {
    settings: '<'
  }
};

angular.module('settings')
  .component('settingsIndex', settingsIndex);
function SettingsIndexController(){
  var ctrl = this;

  ctrl.settings = {
    tagline: "High Quality Programming Tutorials",
    siteUrl: "https://tutorialedge.net",
    adminEmail: "admin@tutorialedge.net",
    meta: "| Tutorialedge.net"
  }

}

angular.module('settings')
  .controller('SettingsIndexController', SettingsIndexController);
var statsIndex = {
  templateUrl: 'app/components/stats/stats-index/stats-index.html'
}

angular.module('stats')
  .component('statsIndex', statsIndex);
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
var dashboardActions = {
    templateUrl: 'app/components/dashboard/dashboard-actions/dashboard-actions.html',
    controller: DashboardActionController
    
};

angular.module('dashboard')
    .component('dashboardActions', dashboardActions);
function DashboardActionController(){
    var ctrl = this;
}

angular.module('dashboard')
    .controller('DashboardActionController', DashboardActionController);
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
var dashboardComments = {
    templateUrl: 'app/components/dashboard/dashboard-comments/dashboard-comments.html',
    controller: DashboardCommentsController,
    bindings: {
        comments: '<'
    }
}

angular.module('dashboard')
    .component('dashboardComments', dashboardComments);
function DashboardCommentsController($scope){
    var ctrl = this;
}

DashboardCommentsController.$inject = ['$scope'];

angular.module('dashboard')
    .controller('DashboardCommentsController', DashboardCommentsController);
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

var dashboardAnalytics = {
  templateUrl: './app/components/dashboard/dashboard-analytics/dashboard-analytics.html',
  controller: DashboardAnalyticsController,
  bindings: {
    stats: '=?'
  }
};

angular.module('root')
  .component('dashboardAnalytics', dashboardAnalytics);
function DashboardAnalyticsController($scope, $log) {
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
    $log.log("This will perform the REST API call to google analytics on page load");
  };

};

DashboardAnalyticsController.$inject = ['$scope', '$log'];

angular.module('root')
  .controller('DashboardAnalyticsController', DashboardAnalyticsController);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhcHAucm91dGVzLmpzIiwiY29tbW9uL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuanMiLCJjb21tb24vbG9hZGluZy9sb2FkaW5nLmNvbnRyb2xsZXIuanMiLCJjb21tb24vdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5qcyIsImNvbW1vbi90b3AtbmF2L3RvcC1uYXYuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS5tb2R1bGUuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUucm91dGVzLmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLnNlcnZpY2UuanMiLCJjb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5tb2R1bGUuanMiLCJjb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5yb3V0ZXMuanMiLCJjb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Mucm91dGVzLmpzIiwiY29tcG9uZW50cy9zdGF0cy9zdGF0cy5tb2R1bGUuanMiLCJjb21wb25lbnRzL3N0YXRzL3N0YXRzLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvdXNlci91c2VyLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvdXNlci91c2VyLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1pbmRleC5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtaW5kZXguY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtZWRpdC9hcnRpY2xlLWVkaXQuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWVkaXQvYXJ0aWNsZS1lZGl0LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtaG9tZS9hcnRpY2xlcy1ob21lLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1ob21lL2FydGljbGVzLWhvbWUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1uZXcvYXJ0aWNsZS1uZXcuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLW5ldy9hcnRpY2xlLW5ldy5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtaW5kZXgvY29tbWVudC1pbmRleC5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLWluZGV4L3NldHRpbmdzLWluZGV4LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MtaW5kZXgvc2V0dGluZ3MtaW5kZXguY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvc3RhdHMvc3RhdHMtaW5kZXgvc3RhdHMtaW5kZXguY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy91c2VyL3VzZXItaW5kZXgvdXNlci1pbmRleC5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci1pbmRleC91c2VyLWluZGV4LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYWN0aW9ucy9kYXNoYm9hcmQtYWN0aW9ucy5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYWN0aW9ucy9kYXNoYm9hcmQtYWN0aW9ucy5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VyL3VzZXItbmV3L3VzZXItbmV3LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvdXNlci91c2VyLW5ldy91c2VyLW5ldy5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbW1lbnRzL2Rhc2hib2FyZC1jb21tZW50cy5jb21wb25lbnRzLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbW1lbnRzL2Rhc2hib2FyZC1jb21tZW50cy5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXJzL2Rhc2hib2FyZC11c2Vycy5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtdXNlcnMvZGFzaGJvYXJkLXVzZXJzLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtdXNlcnMvZGFzaGJvYXJkLXVzZXJzLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1hbmFseXRpY3MvZGFzaGJvYXJkLWFuYWx5dGljcy5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYW5hbHl0aWNzL2Rhc2hib2FyZC1hbmFseXRpY3MuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1hbmFseXRpY3MvZGFzaGJvYXJkLWFuYWx5dGljcy5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdyb290JywgW1xyXG4gICAgJ25nUm91dGUnLFxyXG4gICAgJ2FydGljbGVzJyxcclxuICAgICdkYXNoYm9hcmQnLFxyXG4gICAgJ3VzZXInLFxyXG4gICAgJ2NvbW1lbnQnLFxyXG4gICAgJ3N0YXRzJyxcclxuICAgICdzZXR0aW5ncydcclxuXSk7XHJcbiIsImZ1bmN0aW9uIHJvdXRlUHJvdmlkZXIoJHJvdXRlUHJvdmlkZXIpe1xyXG4gICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgLndoZW4oJy8nLCB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxkYXNoYm9hcmQ+PC9kYXNoYm9hcmQ+J1xyXG4gICAgICB9KTtcclxufVxyXG5yb3V0ZVByb3ZpZGVyLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXHJcbiAgLmNvbmZpZyhyb3V0ZVByb3ZpZGVyKTtcclxuIiwidmFyIGxvYWRpbmcgPSB7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbW1vbi9sb2FkaW5nL2xvYWRpbmcuaHRtbCcsXHJcbiAgY29udHJvbGxlcjogTG9hZGluZ0NvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIGlzTG9hZGluZzogJz0/J1xyXG4gIH1cclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdyb290JylcclxuICAuY29tcG9uZW50KCdsb2FkaW5nJywgbG9hZGluZyk7IiwiZnVuY3Rpb24gTG9hZGluZ0NvbnRyb2xsZXIoKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb250cm9sbGVyKCdMb2FkaW5nQ29udHJvbGxlcicsIExvYWRpbmdDb250cm9sbGVyKTsiLCJ2YXIgdG9wTmF2ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tbW9uL3RvcC1uYXYvdG9wLW5hdi5odG1sJyxcclxuICBjb250cm9sbGVyOiBUb3BOYXZDb250cm9sbGVyLFxyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICB1c2VyOiAnPT8nXHJcbiAgfVxyXG59O1xyXG5cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb21wb25lbnQoJ3RvcE5hdicsIHRvcE5hdik7XHJcbiIsImZ1bmN0aW9uIFRvcE5hdkNvbnRyb2xsZXIoKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb250cm9sbGVyKCdUb3BOYXZDb250cm9sbGVyJywgVG9wTmF2Q29udHJvbGxlcik7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycsIFtdKTsiLCJmdW5jdGlvbiBhcnRpY2xlUm91dGVQcm92aWRlcigkcm91dGVQcm92aWRlcil7XHJcbiAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAud2hlbignL2FydGljbGVzJyx7XHJcbiAgICAgICAgdGVtcGxhdGU6ICc8YXJ0aWNsZXMtaG9tZT48L2FydGljbGVzLWhvbWU+J1xyXG4gICAgICB9KVxyXG4gICAgICAud2hlbignL2FydGljbGUvbmV3Jywge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnPGFydGljbGUtbmV3PjwvYXJ0aWNsZS1uZXc+J1xyXG4gICAgICB9KVxyXG4gICAgICAud2hlbignL2FydGljbGUvZWRpdC86aWQnLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6ICc8YXJ0aWNsZS1lZGl0PjwvYXJ0aWNsZS1lZGl0PidcclxuICAgICAgfSlcclxuICAgICAgLm90aGVyd2lzZSh7IFxyXG4gICAgICAgIHRlbXBsYXRlOiAnPGgxPk5vdCBGb3VuZDwvaDE+J1xyXG4gICAgICB9KTtcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpLmNvbmZpZyhhcnRpY2xlUm91dGVQcm92aWRlcik7XHJcbmFydGljbGVSb3V0ZVByb3ZpZGVyLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcbiIsImZ1bmN0aW9uIEFydGljbGVTZXJ2aWNlKCRodHRwLCAkbG9nKSB7XHJcblxyXG4gIHZhciBzZXJ2aWNlID0ge1xyXG4gICAgbmV3QXJ0aWNsZSA6IG5ld0FydGljbGUsXHJcbiAgICB1cGRhdGVBcnRpY2xlIDogdXBkYXRlQXJ0aWNsZSxcclxuICAgIGRlbGV0ZUFydGljbGUgOiBkZWxldGVBcnRpY2xlLFxyXG4gICAgZ2V0QXJ0aWNsZSA6IGdldEFydGljbGVcclxuICB9O1xyXG5cclxuICByZXR1cm4gc2VydmljZTtcclxuICAvLy8gRGVmaW5lIFxyXG5cclxuICBmdW5jdGlvbiBuZXdBcnRpY2xlKGFydGljbGUpIHtcclxuICAgICRsb2cubG9nKFwiUGxhY2Vob2xkZXIgZm9yIHNhdmluZyBuZXcgQXJ0aWNsZVwiKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlQXJ0aWNsZShhcnRpY2xlKSB7XHJcbiAgICAkbG9nLmxvZyhcIlBsYWNlaG9sZGVyIGZvciB1cGRhdGluZyBuZXcgQXJ0aWNsZVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZUFydGljbGUoaWQpIHtcclxuICAgICRsb2cubG9nKFwiUGxhY2Vob2xkZXIgZm9yIGRlbGV0aW5nIGFuIGFydGljbGVcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRBcnRpY2xlKGlkKSB7XHJcbiAgICAkbG9nLmxvZyhcIlBsYWNlaG9sZGVyIGZvciByZXRyaWV2aW5nIGFuIGFydGljbGVcIik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQXJ0aWNsZVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZyddOyAgXHJcblxyXG5hbmd1bGFyXHJcbiAgLm1vZHVsZSgnYXJ0aWNsZXMnKVxyXG4gIC5mYWN0b3J5KCdBcnRpY2xlU2VydmljZScsIEFydGljbGVTZXJ2aWNlKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29tbWVudCcsIFtdKTsiLCJmdW5jdGlvbiBjb21tZW50Um91dGVzKCRyb3V0ZVByb3ZpZGVyKXtcclxuICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgIC53aGVuKCcvY29tbWVudHMnLCB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxjb21tZW50LWluZGV4PjwvY29tbWVudC1pbmRleD4nXHJcbiAgICAgIH0pO1xyXG59O1xyXG5jb21tZW50Um91dGVzLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcbmFuZ3VsYXIubW9kdWxlKCdjb21tZW50JykuY29uZmlnKGNvbW1lbnRSb3V0ZXMpO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnc2V0dGluZ3MnLFtdKTsiLCJmdW5jdGlvbiBzZXR0aW5nc1JvdXRlcygkcm91dGVQcm92aWRlcil7XHJcbiAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAud2hlbignL3NldHRpbmdzJywge1xyXG4gICAgICAgICAgdGVtcGxhdGU6ICc8c2V0dGluZ3MtaW5kZXg+PC9zZXR0aW5ncy1pbmRleD4nXHJcbiAgICAgIH0pO1xyXG59XHJcbnNldHRpbmdzUm91dGVzLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3NldHRpbmdzJylcclxuICAuY29uZmlnKHNldHRpbmdzUm91dGVzKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ3N0YXRzJywgW10pOyIsImZ1bmN0aW9uIHN0YXRzUm91dGVzKCRyb3V0ZVByb3ZpZGVyKXtcclxuICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgIC53aGVuKCcvc3RhdHMnLCB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxzdGF0cy1pbmRleD48L3N0YXRzLWluZGV4PidcclxuICAgICAgfSk7XHJcbn07XHJcblxyXG5zdGF0c1JvdXRlcy4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xyXG5hbmd1bGFyLm1vZHVsZSgnc3RhdHMnKS5jb25maWcoc3RhdHNSb3V0ZXMpO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgndXNlcicsIFtdKTsiLCJmdW5jdGlvbiB1c2VyUm91dGVzKCRyb3V0ZVByb3ZpZGVyKXtcclxuICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgIC53aGVuKCcvdXNlcnMnLCB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZTogJzx1c2VyLWluZGV4PjwvdXNlci1pbmRleD4nXHJcbiAgICAgIH0pO1xyXG59O1xyXG51c2VyUm91dGVzLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcbmFuZ3VsYXIubW9kdWxlKCd1c2VyJykuY29uZmlnKHVzZXJSb3V0ZXMpO1xyXG4iLCJ2YXIgZGFzaGJvYXJkID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWluZGV4Lmh0bWwnLFxyXG4gIGNvbnRyb2xsZXI6IERhc2hib2FyZENvbnRyb2xsZXJcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdyb290JylcclxuICAuY29tcG9uZW50KCdkYXNoYm9hcmQnLCBkYXNoYm9hcmQpOyIsImZ1bmN0aW9uIERhc2hib2FyZENvbnRyb2xsZXIoKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgRGFzaGJvYXJkQ29udHJvbGxlcik7IiwiYW5ndWxhci5tb2R1bGUoJ2Rhc2hib2FyZCcsIFsnY2hhcnQuanMnXSk7IiwidmFyIGFydGljbGVFZGl0ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWVkaXQvYXJ0aWNsZS1lZGl0Lmh0bWwnLFxyXG4gIGNvbnRyb2xsZXI6IEFydGljbGVFZGl0Q29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgYXJ0aWNsZTogJzwnXHJcbiAgfVxyXG59XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKVxyXG4gIC5jb21wb25lbnQoJ2FydGljbGVFZGl0JywgYXJ0aWNsZUVkaXQpOyIsImZ1bmN0aW9uIEFydGljbGVFZGl0Q29udHJvbGxlcigkbG9nKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG5cclxuICBjdHJsLmFydGljbGUgPSB7fTtcclxuXHJcbiAgY3RybC5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjdHJsLmFydGljbGUgPSB7XHJcbiAgICAgIHRpdGxlIDogXCJUZXN0IEFydGljbGVcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc2x1ZzogXCJ0ZXN0X2FydGljbGVcIixcclxuICAgICAgaW1hZ2U6IFwidGVzdF9pbWFnZS5qcGdcIixcclxuICAgICAgYm9keTogXCJib2R5XCJcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY3RybC5zYXZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkbG9nLmxvZyhcIlNhdmUgYW55IHVwZGF0ZXMgdG8gdGhlIGFydGljbGVcIik7XHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5BcnRpY2xlRWRpdENvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcclxuICAuY29udHJvbGxlcignQXJ0aWNsZUVkaXRDb250cm9sbGVyJywgQXJ0aWNsZUVkaXRDb250cm9sbGVyKTsiLCJ2YXIgYXJ0aWNsZXNIb21lID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWhvbWUvYXJ0aWNsZXMtaG9tZS5odG1sJyxcclxuICBjb250cm9sbGVyOiBBcnRpY2xlc0hvbWVDb250cm9sbGVyLFxyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBhcnRpY2xlczogJzwnXHJcbiAgfVxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcclxuICAuY29tcG9uZW50KCdhcnRpY2xlc0hvbWUnLCBhcnRpY2xlc0hvbWUpOyIsImZ1bmN0aW9uIEFydGljbGVzSG9tZUNvbnRyb2xsZXIoKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcclxuICAuY29udHJvbGxlcignQXJ0aWNsZXNIb21lQ29udHJvbGxlcicsIEFydGljbGVzSG9tZUNvbnRyb2xsZXIpOyIsInZhciBhcnRpY2xlTmV3ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLW5ldy9hcnRpY2xlLW5ldy5odG1sJyxcclxuICBjb250cm9sbGVyOiBBcnRpY2xlTmV3Q29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgYXJ0aWNsZTogJz0/J1xyXG4gIH1cclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXHJcbiAgLmNvbXBvbmVudCgnYXJ0aWNsZU5ldycsIGFydGljbGVOZXcpOyIsImZ1bmN0aW9uIEFydGljbGVOZXdDb250cm9sbGVyKEFydGljbGVTZXJ2aWNlLCAkbG9nKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG5cclxuICBjdHJsLnNhdmUgPSBmdW5jdGlvbihhcnRpY2xlKSB7XHJcbiAgICAkbG9nLmxvZyhcIlNhdmluZyBOZXcgQXJ0aWNsZVwiKTtcclxuICAgIEFydGljbGVTZXJ2aWNlLm5ld0FydGljbGUoYXJ0aWNsZSk7XHJcbiAgfTsgIFxyXG5cclxufTtcclxuXHJcbkFydGljbGVOZXdDb250cm9sbGVyLiRpbmplY3QgPSBbJ0FydGljbGVTZXJ2aWNlJywgJyRsb2cnXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXHJcbiAgLmNvbnRyb2xsZXIoJ0FydGljbGVOZXdDb250cm9sbGVyJywgQXJ0aWNsZU5ld0NvbnRyb2xsZXIpOyIsInZhciBjb21tZW50SW5kZXggPSB7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1pbmRleC9jb21tZW50LWluZGV4Lmh0bWwnXHJcbiAgXHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdjb21tZW50JylcclxuICAuY29tcG9uZW50KCdjb21tZW50SW5kZXgnLCBjb21tZW50SW5kZXgpOyIsInZhciBzZXR0aW5nc0luZGV4ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MtaW5kZXgvc2V0dGluZ3MtaW5kZXguaHRtbCcsXHJcbiAgY29udHJvbGxlcjogU2V0dGluZ3NJbmRleENvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHNldHRpbmdzOiAnPCdcclxuICB9XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc2V0dGluZ3MnKVxyXG4gIC5jb21wb25lbnQoJ3NldHRpbmdzSW5kZXgnLCBzZXR0aW5nc0luZGV4KTsiLCJmdW5jdGlvbiBTZXR0aW5nc0luZGV4Q29udHJvbGxlcigpe1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxuXHJcbiAgY3RybC5zZXR0aW5ncyA9IHtcclxuICAgIHRhZ2xpbmU6IFwiSGlnaCBRdWFsaXR5IFByb2dyYW1taW5nIFR1dG9yaWFsc1wiLFxyXG4gICAgc2l0ZVVybDogXCJodHRwczovL3R1dG9yaWFsZWRnZS5uZXRcIixcclxuICAgIGFkbWluRW1haWw6IFwiYWRtaW5AdHV0b3JpYWxlZGdlLm5ldFwiLFxyXG4gICAgbWV0YTogXCJ8IFR1dG9yaWFsZWRnZS5uZXRcIlxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdzZXR0aW5ncycpXHJcbiAgLmNvbnRyb2xsZXIoJ1NldHRpbmdzSW5kZXhDb250cm9sbGVyJywgU2V0dGluZ3NJbmRleENvbnRyb2xsZXIpOyIsInZhciBzdGF0c0luZGV4ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvc3RhdHMvc3RhdHMtaW5kZXgvc3RhdHMtaW5kZXguaHRtbCdcclxufVxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3N0YXRzJylcclxuICAuY29tcG9uZW50KCdzdGF0c0luZGV4Jywgc3RhdHNJbmRleCk7IiwidmFyIHVzZXJJbmRleCA9IHtcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWluZGV4L3VzZXItaW5kZXguaHRtbCcsXHJcbiAgY29udHJvbGxlcjogVXNlckluZGV4Q29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgdXNlcnM6ICc9PydcclxuICB9XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgndXNlcicpXHJcbiAgLmNvbXBvbmVudCgndXNlckluZGV4JywgdXNlckluZGV4KTsiLCJmdW5jdGlvbiBVc2VySW5kZXhDb250cm9sbGVyKCkge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCd1c2VyJylcclxuICAuY29udHJvbGxlcignVXNlckluZGV4Q29udHJvbGxlcicsIFVzZXJJbmRleENvbnRyb2xsZXIpOyIsInZhciBkYXNoYm9hcmRBY3Rpb25zID0ge1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWFjdGlvbnMvZGFzaGJvYXJkLWFjdGlvbnMuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBEYXNoYm9hcmRBY3Rpb25Db250cm9sbGVyXHJcbiAgICBcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnKVxyXG4gICAgLmNvbXBvbmVudCgnZGFzaGJvYXJkQWN0aW9ucycsIGRhc2hib2FyZEFjdGlvbnMpOyIsImZ1bmN0aW9uIERhc2hib2FyZEFjdGlvbkNvbnRyb2xsZXIoKXtcclxuICAgIHZhciBjdHJsID0gdGhpcztcclxufVxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2Rhc2hib2FyZCcpXHJcbiAgICAuY29udHJvbGxlcignRGFzaGJvYXJkQWN0aW9uQ29udHJvbGxlcicsIERhc2hib2FyZEFjdGlvbkNvbnRyb2xsZXIpOyIsInZhciB1c2VyTmV3ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItbmV3L3VzZXItbmV3Lmh0bWwnLFxyXG4gIGNvbnRyb2xsZXI6IFVzZXJOZXdDb250cm9sbGVyLFxyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICB1c2VyOiAnPT8nXHJcbiAgfVxyXG59XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgndXNlcicpXHJcbiAgLmNvbXBvbmVudCgndXNlck5ldycsIHVzZXJOZXcpOyIsImZ1bmN0aW9uIFVzZXJOZXdDb250cm9sbGVyKCl7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3VzZXInKVxyXG4gIC5jb250cm9sbGVyKCdVc2VyTmV3Q29udHJvbGxlcicsIFVzZXJOZXdDb250cm9sbGVyKTsiLCJ2YXIgZGFzaGJvYXJkQ29tbWVudHMgPSB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tbWVudHMvZGFzaGJvYXJkLWNvbW1lbnRzLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogRGFzaGJvYXJkQ29tbWVudHNDb250cm9sbGVyLFxyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBjb21tZW50czogJzwnXHJcbiAgICB9XHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnKVxyXG4gICAgLmNvbXBvbmVudCgnZGFzaGJvYXJkQ29tbWVudHMnLCBkYXNoYm9hcmRDb21tZW50cyk7IiwiZnVuY3Rpb24gRGFzaGJvYXJkQ29tbWVudHNDb250cm9sbGVyKCRzY29wZSl7XHJcbiAgICB2YXIgY3RybCA9IHRoaXM7XHJcbn1cclxuXHJcbkRhc2hib2FyZENvbW1lbnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZENvbW1lbnRzQ29udHJvbGxlcicsIERhc2hib2FyZENvbW1lbnRzQ29udHJvbGxlcik7IiwidmFyIGRhc2hib2FyZFVzZXJzID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXJzL2Rhc2hib2FyZC11c2Vycy5odG1sJyxcclxuICBjb250cm9sbGVyOiBEYXNoYm9hcmRVc2Vyc0NvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHVzZXJzOiAnPT8nXHJcbiAgfVxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb21wb25lbnQoJ2Rhc2hib2FyZFVzZXJzJywgZGFzaGJvYXJkVXNlcnMpOyIsImZ1bmN0aW9uIERhc2hib2FyZFVzZXJzQ29udHJvbGxlcigkc2NvcGUpIHtcclxuICB2YXIgY3RybCA9IHRoaXM7XHJcblxyXG4gICRzY29wZS5sYWJlbHMgPSBbJy00IFdlZWsnLCAnLTMgV2VlaycsICctMiBXZWVrJywgJy0xIFdlZWsnXTtcclxuICAkc2NvcGUuc2VyaWVzID0gWydOZXcgVXNlcnMnXTtcclxuXHJcbiAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmRhdGEgPSBbXHJcbiAgICBbNiwgMywgNCwgMl1cclxuICBdO1xyXG5cclxuICBjdHJsLiRvbkluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiSGV5IHlvdSBndXlzXCIpO1xyXG4gIH07XHJcblxyXG59O1xyXG5cclxuRGFzaGJvYXJkVXNlcnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRVc2Vyc0NvbnRyb2xsZXInLCBEYXNoYm9hcmRVc2Vyc0NvbnRyb2xsZXIpOyIsIiIsInZhciBkYXNoYm9hcmRBbmFseXRpY3MgPSB7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYW5hbHl0aWNzL2Rhc2hib2FyZC1hbmFseXRpY3MuaHRtbCcsXHJcbiAgY29udHJvbGxlcjogRGFzaGJvYXJkQW5hbHl0aWNzQ29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgc3RhdHM6ICc9PydcclxuICB9XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXHJcbiAgLmNvbXBvbmVudCgnZGFzaGJvYXJkQW5hbHl0aWNzJywgZGFzaGJvYXJkQW5hbHl0aWNzKTsiLCJmdW5jdGlvbiBEYXNoYm9hcmRBbmFseXRpY3NDb250cm9sbGVyKCRzY29wZSwgJGxvZykge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFsnMjAwNicsICcyMDA3JywgJzIwMDgnLCAnMjAwOScsICcyMDEwJywgJzIwMTEnLCAnMjAxMiddO1xyXG4gICRzY29wZS5zZXJpZXMgPSBbJ1Zpc2l0b3JzJywgJ1BhZ2UgVmlld3MnXTtcclxuXHJcbiAgJHNjb3BlLmRhdGEgPSBbXHJcbiAgICBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDBdLFxyXG4gICAgWzI4LCA0OCwgNDAsIDE5LCA4NiwgMjcsIDkwXVxyXG4gIF07XHJcblxyXG4gICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGN0cmwuJG9uSW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJGxvZy5sb2coXCJUaGlzIHdpbGwgcGVyZm9ybSB0aGUgUkVTVCBBUEkgY2FsbCB0byBnb29nbGUgYW5hbHl0aWNzIG9uIHBhZ2UgbG9hZFwiKTtcclxuICB9O1xyXG5cclxufTtcclxuXHJcbkRhc2hib2FyZEFuYWx5dGljc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdyb290JylcclxuICAuY29udHJvbGxlcignRGFzaGJvYXJkQW5hbHl0aWNzQ29udHJvbGxlcicsIERhc2hib2FyZEFuYWx5dGljc0NvbnRyb2xsZXIpOyIsIiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
