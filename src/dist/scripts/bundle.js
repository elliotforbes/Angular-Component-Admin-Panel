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
    isLoading: '<'
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
    user: '<'
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

angular.module('stats', ['chart.js']);
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
      })
      .when('/user/edit/:id', {
        template: '<user-edit></user-edit>'  
      })
      .when('/user/new', {
        template: '<user-new></user-new>'
      });
};

userRoutes.$inject = ['$routeProvider'];
angular.module('user').config(userRoutes);

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
var articleNew = {
  templateUrl: './app/components/articles/article-new/article-new.html',
  controller: ArticleNewController,
  bindings: {
    article: '<'
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
var commentIndex = {
  templateUrl: './app/components/comment/comment-index/comment-index.html'
  
}

angular.module('comment')
  .component('commentIndex', commentIndex);
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
var dashboardAnalytics = {
  templateUrl: './app/components/dashboard/dashboard-analytics/dashboard-analytics.html',
  controller: DashboardAnalyticsController,
  bindings: {
    series: '<',
    labels: '<',
    data: '<',
    options: '<'
  }
};

angular.module('root')
  .component('dashboardAnalytics', dashboardAnalytics);
function DashboardAnalyticsController($log) {
  var ctrl = this;

  ctrl.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  ctrl.series = ['Visitors', 'Page Views'];

  ctrl.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  ctrl.options = {
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

DashboardAnalyticsController.$inject = ['$log'];

angular.module('root')
  .controller('DashboardAnalyticsController', DashboardAnalyticsController);

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
    series: '<',
    labels: '<',
    data: '<',
    options: '<'
  }
};

angular.module('root')
  .component('dashboardUsers', dashboardUsers);
function DashboardUsersController() {
  var ctrl = this;

  ctrl.labels = ['-4 Week', '-3 Week', '-2 Week', '-1 Week'];
  ctrl.series = ['New Users'];

  ctrl.options = {
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  };

  ctrl.data = [
    [6, 3, 4, 2]
  ];

  ctrl.$onInit = function() {
    console.log("Hey you guys");
  };

};

angular.module('root')
  .controller('DashboardUsersController', DashboardUsersController);

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
  templateUrl: 'app/components/stats/stats-index/stats-index.html',
  controller: StatsIndexController,
  bindings: {
    stats: '<'
  }
}

angular.module('stats')
  .component('statsIndex', statsIndex);
function StatsIndexController($scope) {
    var ctrl = this;

    ctrl.stats = {};

    ctrl.stats.series = ['Visitors', 'Page Views'];

    ctrl.stats.realtimeLabels = ['Mobile', 'Tablet', 'Desktop', 'Other']
    ctrl.stats.todayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   
    ctrl.stats.realtime = [
        65, 59, 108, 23
    ];

    ctrl.stats.today = [
        [340, 543, 512, 543, 493, 444, 439]
    ];

    ctrl.stats.barOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };

    ctrl.stats.pieOptions = {
        legend: {
            display: true
        }
    };

}
StatsIndexController.$inject = ['$scope'];
angular.module('stats')
    .controller('StatsIndexController', StatsIndexController);
var userEdit = {
  templateUrl: 'app/components/user/user-edit/user-edit.html',
  controller: UserEditController,
  bindings: {
    user: '<'
  }
}

angular.module('user')
  .component('userEdit', userEdit);
function UserEditController() {
  var ctrl = this;
}

angular.module('user')
  .controller('UserEditController', UserEditController);
var userIndex = {
  templateUrl: './app/components/user/user-index/user-index.html',
  controller: UserIndexController,
  bindings: {
    users: '<'
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
    user: '<'
  }
}

angular.module('user')
  .component('userNew', userNew);
function UserNewController(){
  var ctrl = this;
};

angular.module('user')
  .controller('UserNewController', UserNewController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhcHAucm91dGVzLmpzIiwiY29tbW9uL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuanMiLCJjb21tb24vbG9hZGluZy9sb2FkaW5nLmNvbnRyb2xsZXIuanMiLCJjb21tb24vdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5qcyIsImNvbW1vbi90b3AtbmF2L3RvcC1uYXYuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS5tb2R1bGUuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUucm91dGVzLmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLnNlcnZpY2UuanMiLCJjb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5tb2R1bGUuanMiLCJjb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5yb3V0ZXMuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtaW5kZXguY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWluZGV4LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUuanMiLCJjb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvc3RhdHMvc3RhdHMubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zdGF0cy9zdGF0cy5yb3V0ZXMuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci5tb2R1bGUuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci5yb3V0ZXMuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtZWRpdC9hcnRpY2xlLWVkaXQuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWVkaXQvYXJ0aWNsZS1lZGl0LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtbmV3L2FydGljbGUtbmV3LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1uZXcvYXJ0aWNsZS1uZXcuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1ob21lL2FydGljbGVzLWhvbWUuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWhvbWUvYXJ0aWNsZXMtaG9tZS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtaW5kZXgvY29tbWVudC1pbmRleC5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYWN0aW9ucy9kYXNoYm9hcmQtYWN0aW9ucy5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYWN0aW9ucy9kYXNoYm9hcmQtYWN0aW9ucy5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWFuYWx5dGljcy9kYXNoYm9hcmQtYW5hbHl0aWNzLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1hbmFseXRpY3MvZGFzaGJvYXJkLWFuYWx5dGljcy5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWFuYWx5dGljcy9kYXNoYm9hcmQtYW5hbHl0aWNzLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb21tZW50cy9kYXNoYm9hcmQtY29tbWVudHMuY29tcG9uZW50cy5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb21tZW50cy9kYXNoYm9hcmQtY29tbWVudHMuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC11c2Vycy9kYXNoYm9hcmQtdXNlcnMuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXJzL2Rhc2hib2FyZC11c2Vycy5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXJzL2Rhc2hib2FyZC11c2Vycy5tb2R1bGUuanMiLCJjb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLWluZGV4L3NldHRpbmdzLWluZGV4LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MtaW5kZXgvc2V0dGluZ3MtaW5kZXguY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvc3RhdHMvc3RhdHMtaW5kZXgvc3RhdHMtaW5kZXguY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9zdGF0cy9zdGF0cy1pbmRleC9zdGF0cy1pbmRleC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VyL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy91c2VyL3VzZXItZWRpdC91c2VyLWVkaXQuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvdXNlci91c2VyLWluZGV4L3VzZXItaW5kZXguY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy91c2VyL3VzZXItaW5kZXgvdXNlci1pbmRleC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VyL3VzZXItbmV3L3VzZXItbmV3LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvdXNlci91c2VyLW5ldy91c2VyLW5ldy5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ3Jvb3QnLCBbXHJcbiAgICAnbmdSb3V0ZScsXHJcbiAgICAnYXJ0aWNsZXMnLFxyXG4gICAgJ2Rhc2hib2FyZCcsXHJcbiAgICAndXNlcicsXHJcbiAgICAnY29tbWVudCcsXHJcbiAgICAnc3RhdHMnLFxyXG4gICAgJ3NldHRpbmdzJ1xyXG5dKTtcclxuIiwiZnVuY3Rpb24gcm91dGVQcm92aWRlcigkcm91dGVQcm92aWRlcil7XHJcbiAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAud2hlbignLycsIHtcclxuICAgICAgICAgIHRlbXBsYXRlOiAnPGRhc2hib2FyZD48L2Rhc2hib2FyZD4nXHJcbiAgICAgIH0pO1xyXG59XHJcbnJvdXRlUHJvdmlkZXIuJGluamVjdCA9IFsnJHJvdXRlUHJvdmlkZXInXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdyb290JylcclxuICAuY29uZmlnKHJvdXRlUHJvdmlkZXIpO1xyXG4iLCJ2YXIgbG9hZGluZyA9IHtcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tbW9uL2xvYWRpbmcvbG9hZGluZy5odG1sJyxcclxuICBjb250cm9sbGVyOiBMb2FkaW5nQ29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgaXNMb2FkaW5nOiAnPCdcclxuICB9XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXHJcbiAgLmNvbXBvbmVudCgnbG9hZGluZycsIGxvYWRpbmcpOyIsImZ1bmN0aW9uIExvYWRpbmdDb250cm9sbGVyKCkge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdyb290JylcclxuICAuY29udHJvbGxlcignTG9hZGluZ0NvbnRyb2xsZXInLCBMb2FkaW5nQ29udHJvbGxlcik7IiwidmFyIHRvcE5hdiA9IHtcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbW1vbi90b3AtbmF2L3RvcC1uYXYuaHRtbCcsXHJcbiAgY29udHJvbGxlcjogVG9wTmF2Q29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgdXNlcjogJzwnXHJcbiAgfVxyXG59O1xyXG5cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb21wb25lbnQoJ3RvcE5hdicsIHRvcE5hdik7XHJcbiIsImZ1bmN0aW9uIFRvcE5hdkNvbnRyb2xsZXIoKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb250cm9sbGVyKCdUb3BOYXZDb250cm9sbGVyJywgVG9wTmF2Q29udHJvbGxlcik7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycsIFtdKTsiLCJmdW5jdGlvbiBhcnRpY2xlUm91dGVQcm92aWRlcigkcm91dGVQcm92aWRlcil7XHJcbiAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAud2hlbignL2FydGljbGVzJyx7XHJcbiAgICAgICAgdGVtcGxhdGU6ICc8YXJ0aWNsZXMtaG9tZT48L2FydGljbGVzLWhvbWU+J1xyXG4gICAgICB9KVxyXG4gICAgICAud2hlbignL2FydGljbGUvbmV3Jywge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnPGFydGljbGUtbmV3PjwvYXJ0aWNsZS1uZXc+J1xyXG4gICAgICB9KVxyXG4gICAgICAud2hlbignL2FydGljbGUvZWRpdC86aWQnLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6ICc8YXJ0aWNsZS1lZGl0PjwvYXJ0aWNsZS1lZGl0PidcclxuICAgICAgfSlcclxuICAgICAgLm90aGVyd2lzZSh7IFxyXG4gICAgICAgIHRlbXBsYXRlOiAnPGgxPk5vdCBGb3VuZDwvaDE+J1xyXG4gICAgICB9KTtcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpLmNvbmZpZyhhcnRpY2xlUm91dGVQcm92aWRlcik7XHJcbmFydGljbGVSb3V0ZVByb3ZpZGVyLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcbiIsImZ1bmN0aW9uIEFydGljbGVTZXJ2aWNlKCRodHRwLCAkbG9nKSB7XHJcblxyXG4gIHZhciBzZXJ2aWNlID0ge1xyXG4gICAgbmV3QXJ0aWNsZSA6IG5ld0FydGljbGUsXHJcbiAgICB1cGRhdGVBcnRpY2xlIDogdXBkYXRlQXJ0aWNsZSxcclxuICAgIGRlbGV0ZUFydGljbGUgOiBkZWxldGVBcnRpY2xlLFxyXG4gICAgZ2V0QXJ0aWNsZSA6IGdldEFydGljbGVcclxuICB9O1xyXG5cclxuICByZXR1cm4gc2VydmljZTtcclxuICAvLy8gRGVmaW5lIFxyXG5cclxuICBmdW5jdGlvbiBuZXdBcnRpY2xlKGFydGljbGUpIHtcclxuICAgICRsb2cubG9nKFwiUGxhY2Vob2xkZXIgZm9yIHNhdmluZyBuZXcgQXJ0aWNsZVwiKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlQXJ0aWNsZShhcnRpY2xlKSB7XHJcbiAgICAkbG9nLmxvZyhcIlBsYWNlaG9sZGVyIGZvciB1cGRhdGluZyBuZXcgQXJ0aWNsZVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZUFydGljbGUoaWQpIHtcclxuICAgICRsb2cubG9nKFwiUGxhY2Vob2xkZXIgZm9yIGRlbGV0aW5nIGFuIGFydGljbGVcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRBcnRpY2xlKGlkKSB7XHJcbiAgICAkbG9nLmxvZyhcIlBsYWNlaG9sZGVyIGZvciByZXRyaWV2aW5nIGFuIGFydGljbGVcIik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQXJ0aWNsZVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZyddOyAgXHJcblxyXG5hbmd1bGFyXHJcbiAgLm1vZHVsZSgnYXJ0aWNsZXMnKVxyXG4gIC5mYWN0b3J5KCdBcnRpY2xlU2VydmljZScsIEFydGljbGVTZXJ2aWNlKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29tbWVudCcsIFtdKTsiLCJmdW5jdGlvbiBjb21tZW50Um91dGVzKCRyb3V0ZVByb3ZpZGVyKXtcclxuICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgIC53aGVuKCcvY29tbWVudHMnLCB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxjb21tZW50LWluZGV4PjwvY29tbWVudC1pbmRleD4nXHJcbiAgICAgIH0pO1xyXG59O1xyXG5jb21tZW50Um91dGVzLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcbmFuZ3VsYXIubW9kdWxlKCdjb21tZW50JykuY29uZmlnKGNvbW1lbnRSb3V0ZXMpO1xyXG4iLCJ2YXIgZGFzaGJvYXJkID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWluZGV4Lmh0bWwnLFxyXG4gIGNvbnRyb2xsZXI6IERhc2hib2FyZENvbnRyb2xsZXJcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdyb290JylcclxuICAuY29tcG9uZW50KCdkYXNoYm9hcmQnLCBkYXNoYm9hcmQpOyIsImZ1bmN0aW9uIERhc2hib2FyZENvbnRyb2xsZXIoKSB7XHJcbiAgdmFyIGN0cmwgPSB0aGlzO1xyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgRGFzaGJvYXJkQ29udHJvbGxlcik7IiwiYW5ndWxhci5tb2R1bGUoJ2Rhc2hib2FyZCcsIFsnY2hhcnQuanMnXSk7IiwiYW5ndWxhci5tb2R1bGUoJ3NldHRpbmdzJyxbXSk7IiwiZnVuY3Rpb24gc2V0dGluZ3NSb3V0ZXMoJHJvdXRlUHJvdmlkZXIpe1xyXG4gICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgLndoZW4oJy9zZXR0aW5ncycsIHtcclxuICAgICAgICAgIHRlbXBsYXRlOiAnPHNldHRpbmdzLWluZGV4Pjwvc2V0dGluZ3MtaW5kZXg+J1xyXG4gICAgICB9KTtcclxufVxyXG5zZXR0aW5nc1JvdXRlcy4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xyXG5cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdzZXR0aW5ncycpXHJcbiAgLmNvbmZpZyhzZXR0aW5nc1JvdXRlcyk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdzdGF0cycsIFsnY2hhcnQuanMnXSk7IiwiZnVuY3Rpb24gc3RhdHNSb3V0ZXMoJHJvdXRlUHJvdmlkZXIpe1xyXG4gICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgLndoZW4oJy9zdGF0cycsIHtcclxuICAgICAgICAgIHRlbXBsYXRlOiAnPHN0YXRzLWluZGV4Pjwvc3RhdHMtaW5kZXg+J1xyXG4gICAgICB9KTtcclxufTtcclxuXHJcbnN0YXRzUm91dGVzLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcbmFuZ3VsYXIubW9kdWxlKCdzdGF0cycpLmNvbmZpZyhzdGF0c1JvdXRlcyk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCd1c2VyJywgW10pOyIsImZ1bmN0aW9uIHVzZXJSb3V0ZXMoJHJvdXRlUHJvdmlkZXIpe1xyXG4gICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgLndoZW4oJy91c2VycycsIHtcclxuICAgICAgICAgIHRlbXBsYXRlOiAnPHVzZXItaW5kZXg+PC91c2VyLWluZGV4PidcclxuICAgICAgfSlcclxuICAgICAgLndoZW4oJy91c2VyL2VkaXQvOmlkJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnPHVzZXItZWRpdD48L3VzZXItZWRpdD4nICBcclxuICAgICAgfSlcclxuICAgICAgLndoZW4oJy91c2VyL25ldycsIHtcclxuICAgICAgICB0ZW1wbGF0ZTogJzx1c2VyLW5ldz48L3VzZXItbmV3PidcclxuICAgICAgfSk7XHJcbn07XHJcblxyXG51c2VyUm91dGVzLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcbmFuZ3VsYXIubW9kdWxlKCd1c2VyJykuY29uZmlnKHVzZXJSb3V0ZXMpO1xyXG4iLCJ2YXIgYXJ0aWNsZUVkaXQgPSB7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtZWRpdC9hcnRpY2xlLWVkaXQuaHRtbCcsXHJcbiAgY29udHJvbGxlcjogQXJ0aWNsZUVkaXRDb250cm9sbGVyLFxyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBhcnRpY2xlOiAnPCdcclxuICB9XHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXHJcbiAgLmNvbXBvbmVudCgnYXJ0aWNsZUVkaXQnLCBhcnRpY2xlRWRpdCk7IiwiZnVuY3Rpb24gQXJ0aWNsZUVkaXRDb250cm9sbGVyKCRsb2cpIHtcclxuICB2YXIgY3RybCA9IHRoaXM7XHJcblxyXG4gIGN0cmwuYXJ0aWNsZSA9IHt9O1xyXG5cclxuICBjdHJsLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGN0cmwuYXJ0aWNsZSA9IHtcclxuICAgICAgdGl0bGUgOiBcIlRlc3QgQXJ0aWNsZVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzbHVnOiBcInRlc3RfYXJ0aWNsZVwiLFxyXG4gICAgICBpbWFnZTogXCJ0ZXN0X2ltYWdlLmpwZ1wiLFxyXG4gICAgICBib2R5OiBcImJvZHlcIlxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjdHJsLnNhdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICRsb2cubG9nKFwiU2F2ZSBhbnkgdXBkYXRlcyB0byB0aGUgYXJ0aWNsZVwiKTtcclxuICB9O1xyXG5cclxufTtcclxuXHJcbkFydGljbGVFZGl0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKVxyXG4gIC5jb250cm9sbGVyKCdBcnRpY2xlRWRpdENvbnRyb2xsZXInLCBBcnRpY2xlRWRpdENvbnRyb2xsZXIpOyIsInZhciBhcnRpY2xlTmV3ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLW5ldy9hcnRpY2xlLW5ldy5odG1sJyxcclxuICBjb250cm9sbGVyOiBBcnRpY2xlTmV3Q29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgYXJ0aWNsZTogJzwnXHJcbiAgfVxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcclxuICAuY29tcG9uZW50KCdhcnRpY2xlTmV3JywgYXJ0aWNsZU5ldyk7IiwiZnVuY3Rpb24gQXJ0aWNsZU5ld0NvbnRyb2xsZXIoQXJ0aWNsZVNlcnZpY2UsICRsb2cpIHtcclxuICB2YXIgY3RybCA9IHRoaXM7XHJcblxyXG4gIGN0cmwuc2F2ZSA9IGZ1bmN0aW9uKGFydGljbGUpIHtcclxuICAgICRsb2cubG9nKFwiU2F2aW5nIE5ldyBBcnRpY2xlXCIpO1xyXG4gICAgQXJ0aWNsZVNlcnZpY2UubmV3QXJ0aWNsZShhcnRpY2xlKTtcclxuICB9OyAgXHJcblxyXG59O1xyXG5cclxuQXJ0aWNsZU5ld0NvbnRyb2xsZXIuJGluamVjdCA9IFsnQXJ0aWNsZVNlcnZpY2UnLCAnJGxvZyddO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcclxuICAuY29udHJvbGxlcignQXJ0aWNsZU5ld0NvbnRyb2xsZXInLCBBcnRpY2xlTmV3Q29udHJvbGxlcik7IiwidmFyIGFydGljbGVzSG9tZSA9IHtcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1ob21lL2FydGljbGVzLWhvbWUuaHRtbCcsXHJcbiAgY29udHJvbGxlcjogQXJ0aWNsZXNIb21lQ29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgYXJ0aWNsZXM6ICc8J1xyXG4gIH1cclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXHJcbiAgLmNvbXBvbmVudCgnYXJ0aWNsZXNIb21lJywgYXJ0aWNsZXNIb21lKTsiLCJmdW5jdGlvbiBBcnRpY2xlc0hvbWVDb250cm9sbGVyKCkge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXHJcbiAgLmNvbnRyb2xsZXIoJ0FydGljbGVzSG9tZUNvbnRyb2xsZXInLCBBcnRpY2xlc0hvbWVDb250cm9sbGVyKTsiLCJ2YXIgY29tbWVudEluZGV4ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtaW5kZXgvY29tbWVudC1pbmRleC5odG1sJ1xyXG4gIFxyXG59XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnY29tbWVudCcpXHJcbiAgLmNvbXBvbmVudCgnY29tbWVudEluZGV4JywgY29tbWVudEluZGV4KTsiLCJ2YXIgZGFzaGJvYXJkQWN0aW9ucyA9IHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1hY3Rpb25zL2Rhc2hib2FyZC1hY3Rpb25zLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogRGFzaGJvYXJkQWN0aW9uQ29udHJvbGxlclxyXG4gICAgXHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZGFzaGJvYXJkJylcclxuICAgIC5jb21wb25lbnQoJ2Rhc2hib2FyZEFjdGlvbnMnLCBkYXNoYm9hcmRBY3Rpb25zKTsiLCJmdW5jdGlvbiBEYXNoYm9hcmRBY3Rpb25Db250cm9sbGVyKCl7XHJcbiAgICB2YXIgY3RybCA9IHRoaXM7XHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZEFjdGlvbkNvbnRyb2xsZXInLCBEYXNoYm9hcmRBY3Rpb25Db250cm9sbGVyKTsiLCJ2YXIgZGFzaGJvYXJkQW5hbHl0aWNzID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWFuYWx5dGljcy9kYXNoYm9hcmQtYW5hbHl0aWNzLmh0bWwnLFxyXG4gIGNvbnRyb2xsZXI6IERhc2hib2FyZEFuYWx5dGljc0NvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHNlcmllczogJzwnLFxyXG4gICAgbGFiZWxzOiAnPCcsXHJcbiAgICBkYXRhOiAnPCcsXHJcbiAgICBvcHRpb25zOiAnPCdcclxuICB9XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXHJcbiAgLmNvbXBvbmVudCgnZGFzaGJvYXJkQW5hbHl0aWNzJywgZGFzaGJvYXJkQW5hbHl0aWNzKTsiLCJmdW5jdGlvbiBEYXNoYm9hcmRBbmFseXRpY3NDb250cm9sbGVyKCRsb2cpIHtcclxuICB2YXIgY3RybCA9IHRoaXM7XHJcblxyXG4gIGN0cmwubGFiZWxzID0gWycyMDA2JywgJzIwMDcnLCAnMjAwOCcsICcyMDA5JywgJzIwMTAnLCAnMjAxMScsICcyMDEyJ107XHJcbiAgY3RybC5zZXJpZXMgPSBbJ1Zpc2l0b3JzJywgJ1BhZ2UgVmlld3MnXTtcclxuXHJcbiAgY3RybC5kYXRhID0gW1xyXG4gICAgWzY1LCA1OSwgODAsIDgxLCA1NiwgNTUsIDQwXSxcclxuICAgIFsyOCwgNDgsIDQwLCAxOSwgODYsIDI3LCA5MF1cclxuICBdO1xyXG5cclxuICBjdHJsLm9wdGlvbnMgPSB7XHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgfTtcclxuXHJcbiAgY3RybC4kb25Jbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkbG9nLmxvZyhcIlRoaXMgd2lsbCBwZXJmb3JtIHRoZSBSRVNUIEFQSSBjYWxsIHRvIGdvb2dsZSBhbmFseXRpY3Mgb24gcGFnZSBsb2FkXCIpO1xyXG4gIH07XHJcblxyXG59O1xyXG5cclxuRGFzaGJvYXJkQW5hbHl0aWNzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXHJcbiAgLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZEFuYWx5dGljc0NvbnRyb2xsZXInLCBEYXNoYm9hcmRBbmFseXRpY3NDb250cm9sbGVyKTsiLCIiLCJ2YXIgZGFzaGJvYXJkQ29tbWVudHMgPSB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tbWVudHMvZGFzaGJvYXJkLWNvbW1lbnRzLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogRGFzaGJvYXJkQ29tbWVudHNDb250cm9sbGVyLFxyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBjb21tZW50czogJzwnXHJcbiAgICB9XHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnKVxyXG4gICAgLmNvbXBvbmVudCgnZGFzaGJvYXJkQ29tbWVudHMnLCBkYXNoYm9hcmRDb21tZW50cyk7IiwiZnVuY3Rpb24gRGFzaGJvYXJkQ29tbWVudHNDb250cm9sbGVyKCRzY29wZSl7XHJcbiAgICB2YXIgY3RybCA9IHRoaXM7XHJcbn1cclxuXHJcbkRhc2hib2FyZENvbW1lbnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZENvbW1lbnRzQ29udHJvbGxlcicsIERhc2hib2FyZENvbW1lbnRzQ29udHJvbGxlcik7IiwidmFyIGRhc2hib2FyZFVzZXJzID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXJzL2Rhc2hib2FyZC11c2Vycy5odG1sJyxcclxuICBjb250cm9sbGVyOiBEYXNoYm9hcmRVc2Vyc0NvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHNlcmllczogJzwnLFxyXG4gICAgbGFiZWxzOiAnPCcsXHJcbiAgICBkYXRhOiAnPCcsXHJcbiAgICBvcHRpb25zOiAnPCdcclxuICB9XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXHJcbiAgLmNvbXBvbmVudCgnZGFzaGJvYXJkVXNlcnMnLCBkYXNoYm9hcmRVc2Vycyk7IiwiZnVuY3Rpb24gRGFzaGJvYXJkVXNlcnNDb250cm9sbGVyKCkge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxuXHJcbiAgY3RybC5sYWJlbHMgPSBbJy00IFdlZWsnLCAnLTMgV2VlaycsICctMiBXZWVrJywgJy0xIFdlZWsnXTtcclxuICBjdHJsLnNlcmllcyA9IFsnTmV3IFVzZXJzJ107XHJcblxyXG4gIGN0cmwub3B0aW9ucyA9IHtcclxuICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICB9O1xyXG5cclxuICBjdHJsLmRhdGEgPSBbXHJcbiAgICBbNiwgMywgNCwgMl1cclxuICBdO1xyXG5cclxuICBjdHJsLiRvbkluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiSGV5IHlvdSBndXlzXCIpO1xyXG4gIH07XHJcblxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxyXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRVc2Vyc0NvbnRyb2xsZXInLCBEYXNoYm9hcmRVc2Vyc0NvbnRyb2xsZXIpOyIsIiIsInZhciBzZXR0aW5nc0luZGV4ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MtaW5kZXgvc2V0dGluZ3MtaW5kZXguaHRtbCcsXHJcbiAgY29udHJvbGxlcjogU2V0dGluZ3NJbmRleENvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHNldHRpbmdzOiAnPCdcclxuICB9XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc2V0dGluZ3MnKVxyXG4gIC5jb21wb25lbnQoJ3NldHRpbmdzSW5kZXgnLCBzZXR0aW5nc0luZGV4KTsiLCJmdW5jdGlvbiBTZXR0aW5nc0luZGV4Q29udHJvbGxlcigpe1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxuXHJcbiAgY3RybC5zZXR0aW5ncyA9IHtcclxuICAgIHRhZ2xpbmU6IFwiSGlnaCBRdWFsaXR5IFByb2dyYW1taW5nIFR1dG9yaWFsc1wiLFxyXG4gICAgc2l0ZVVybDogXCJodHRwczovL3R1dG9yaWFsZWRnZS5uZXRcIixcclxuICAgIGFkbWluRW1haWw6IFwiYWRtaW5AdHV0b3JpYWxlZGdlLm5ldFwiLFxyXG4gICAgbWV0YTogXCJ8IFR1dG9yaWFsZWRnZS5uZXRcIlxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdzZXR0aW5ncycpXHJcbiAgLmNvbnRyb2xsZXIoJ1NldHRpbmdzSW5kZXhDb250cm9sbGVyJywgU2V0dGluZ3NJbmRleENvbnRyb2xsZXIpOyIsInZhciBzdGF0c0luZGV4ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvc3RhdHMvc3RhdHMtaW5kZXgvc3RhdHMtaW5kZXguaHRtbCcsXHJcbiAgY29udHJvbGxlcjogU3RhdHNJbmRleENvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHN0YXRzOiAnPCdcclxuICB9XHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdzdGF0cycpXHJcbiAgLmNvbXBvbmVudCgnc3RhdHNJbmRleCcsIHN0YXRzSW5kZXgpOyIsImZ1bmN0aW9uIFN0YXRzSW5kZXhDb250cm9sbGVyKCRzY29wZSkge1xyXG4gICAgdmFyIGN0cmwgPSB0aGlzO1xyXG5cclxuICAgIGN0cmwuc3RhdHMgPSB7fTtcclxuXHJcbiAgICBjdHJsLnN0YXRzLnNlcmllcyA9IFsnVmlzaXRvcnMnLCAnUGFnZSBWaWV3cyddO1xyXG5cclxuICAgIGN0cmwuc3RhdHMucmVhbHRpbWVMYWJlbHMgPSBbJ01vYmlsZScsICdUYWJsZXQnLCAnRGVza3RvcCcsICdPdGhlciddXHJcbiAgICBjdHJsLnN0YXRzLnRvZGF5TGFiZWxzID0gWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JywgJ1N1bmRheSddO1xyXG4gICBcclxuICAgIGN0cmwuc3RhdHMucmVhbHRpbWUgPSBbXHJcbiAgICAgICAgNjUsIDU5LCAxMDgsIDIzXHJcbiAgICBdO1xyXG5cclxuICAgIGN0cmwuc3RhdHMudG9kYXkgPSBbXHJcbiAgICAgICAgWzM0MCwgNTQzLCA1MTIsIDU0MywgNDkzLCA0NDQsIDQzOV1cclxuICAgIF07XHJcblxyXG4gICAgY3RybC5zdGF0cy5iYXJPcHRpb25zID0ge1xyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY3RybC5zdGF0cy5waWVPcHRpb25zID0ge1xyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbn1cclxuU3RhdHNJbmRleENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbmFuZ3VsYXIubW9kdWxlKCdzdGF0cycpXHJcbiAgICAuY29udHJvbGxlcignU3RhdHNJbmRleENvbnRyb2xsZXInLCBTdGF0c0luZGV4Q29udHJvbGxlcik7IiwidmFyIHVzZXJFZGl0ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWVkaXQvdXNlci1lZGl0Lmh0bWwnLFxyXG4gIGNvbnRyb2xsZXI6IFVzZXJFZGl0Q29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgdXNlcjogJzwnXHJcbiAgfVxyXG59XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgndXNlcicpXHJcbiAgLmNvbXBvbmVudCgndXNlckVkaXQnLCB1c2VyRWRpdCk7IiwiZnVuY3Rpb24gVXNlckVkaXRDb250cm9sbGVyKCkge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxufVxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3VzZXInKVxyXG4gIC5jb250cm9sbGVyKCdVc2VyRWRpdENvbnRyb2xsZXInLCBVc2VyRWRpdENvbnRyb2xsZXIpOyIsInZhciB1c2VySW5kZXggPSB7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci1pbmRleC91c2VyLWluZGV4Lmh0bWwnLFxyXG4gIGNvbnRyb2xsZXI6IFVzZXJJbmRleENvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHVzZXJzOiAnPCdcclxuICB9XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgndXNlcicpXHJcbiAgLmNvbXBvbmVudCgndXNlckluZGV4JywgdXNlckluZGV4KTsiLCJmdW5jdGlvbiBVc2VySW5kZXhDb250cm9sbGVyKCkge1xyXG4gIHZhciBjdHJsID0gdGhpcztcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCd1c2VyJylcclxuICAuY29udHJvbGxlcignVXNlckluZGV4Q29udHJvbGxlcicsIFVzZXJJbmRleENvbnRyb2xsZXIpOyIsInZhciB1c2VyTmV3ID0ge1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItbmV3L3VzZXItbmV3Lmh0bWwnLFxyXG4gIGNvbnRyb2xsZXI6IFVzZXJOZXdDb250cm9sbGVyLFxyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICB1c2VyOiAnPCdcclxuICB9XHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCd1c2VyJylcclxuICAuY29tcG9uZW50KCd1c2VyTmV3JywgdXNlck5ldyk7IiwiZnVuY3Rpb24gVXNlck5ld0NvbnRyb2xsZXIoKXtcclxuICB2YXIgY3RybCA9IHRoaXM7XHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgndXNlcicpXHJcbiAgLmNvbnRyb2xsZXIoJ1VzZXJOZXdDb250cm9sbGVyJywgVXNlck5ld0NvbnRyb2xsZXIpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
