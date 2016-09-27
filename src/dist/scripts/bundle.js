angular.module('root', [
    'ngRoute',
    'articles',
    'dashboard',
    'user',
    'comment',
    'stats',
    'settings',
    'social'
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

  function newArticle(article) {
    console.log(article);
    $log.log("Placeholder for saving new Article");
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

  var service = {
    newArticle : newArticle,
    updateArticle : updateArticle,
    deleteArticle : deleteArticle,
    getArticle : getArticle
  };

  return service;

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

function CommentService($log){

    function deleteComment(commentId) {
        $log.log("Deleting a comment with id: " + commentId);
    }

    var service = {
        deleteComment : deleteComment
    };

    return service;
}
CommentService.$inject = ['$log'];

angular.module('comment')
    .factory('CommentService', CommentService);
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


angular.module('social', []);
function socialRoutes($routeProvider){
    $routeProvider
      .when('/social', {
          template: '<social-dashboard></social-dashboard>'
      });
}
socialRoutes.$inject = ['$routeProvider'];

angular.module('social')
  .config(socialRoutes);


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

function UserService($log) {

    function newUser(user) {
        $log.log("Adding New User");
    }

    var service = {
        newUser: newUser
    };

    return service;
};

UserService.$inject = ['$log'];

angular.module('user')
    .factory('UserService', UserService);
var articleEdit = {
  templateUrl: './app/components/articles/article-edit/article-edit.html',
  controller: ArticleEditController,
  bindings: {
    article: '<'
  }
}

angular.module('articles')
  .component('articleEdit', articleEdit);
function ArticleEditController($log, ArticleService) {
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

  ctrl.save = function(article) {
    $log.log("Save any updates to the article");
    ArticleService.updateArticle(article);
  };

};

ArticleEditController.$inject = ['$log', 'ArticleService'];

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
    article: '<'
  }
};

angular.module('articles')
  .component('articleNew', articleNew);
function ArticleNewController(ArticleService, $log) {
  var ctrl = this;

  ctrl.article = {};

  ctrl.save = function(article) {
    ArticleService.newArticle(article);
  };  

};

ArticleNewController.$inject = ['ArticleService', '$log'];

angular.module('articles')
  .controller('ArticleNewController', ArticleNewController);
var commentIndex = {
  templateUrl: './app/components/comment/comment-index/comment-index.html',
  controller: CommentIndexController
  
}

angular.module('comment')
  .component('commentIndex', commentIndex);
function CommentIndexController(CommentService){
    var ctrl = this;

    ctrl.deleteComment = function(commentId){
        CommentService.deleteComment(commentId);
    }
}

CommentIndexController.$inject = ['CommentService'];

angular.module('comment')
    .controller('CommentIndexController', CommentIndexController);
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

var socialDashboard = {
  templateUrl: 'app/components/social/social-dashboard/social-dashboard.html',
  controller: SocialDashboardController,
  bindings: {
    twitterFollowers: '<',
    facebookFollowers: '<',
    youtubeSubscribers: '<',
    googlePlusFollowers: '<'
  }
}

angular.module('social')
  .component('socialDashboard', socialDashboard);
function SocialDashboardController(){
  var ctrl = this;
}
angular.module('social')
  .controller('SocialDashboardController', SocialDashboardController);

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
function UserNewController(UserService){
  var ctrl = this;

  ctrl.newUser = function(user){
    UserService.newUser(user);
  };

};

UserNewController.$inject = ['UserService'];

angular.module('user')
  .controller('UserNewController', UserNewController);
var facebookWidget = {
  templateUrl: 'app/components/social/social-widgets/facebook-widget/facebook-widget.html'
}

angular.module('social')
  .component('facebookWidget', facebookWidget);
  
var twitterWidget = {
  templateUrl: 'app/components/social/social-widgets/twitter-widget/twitter-widget.html',
  controller: SocialTwitterController
}

angular.module('social')
  .component('twitterWidget', twitterWidget);
function SocialTwitterController(){
  var ctrl = this;
}

angular.module('social')
  .controller('SocialTwitterController', SocialTwitterController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhcHAucm91dGVzLmpzIiwiY29tbW9uL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuanMiLCJjb21tb24vbG9hZGluZy9sb2FkaW5nLmNvbnRyb2xsZXIuanMiLCJjb21tb24vdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5qcyIsImNvbW1vbi90b3AtbmF2L3RvcC1uYXYuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS5tb2R1bGUuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUucm91dGVzLmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLnNlcnZpY2UuanMiLCJjb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5tb2R1bGUuanMiLCJjb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5yb3V0ZXMuanMiLCJjb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5zZXJ2aWNlLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWluZGV4LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1pbmRleC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5yb3V0ZXMuanMiLCJjb21wb25lbnRzL3NvY2lhbC9nb29nbGVQbHVzLnNlcnZpY2UuanMiLCJjb21wb25lbnRzL3NvY2lhbC9zb2NpYWwubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zb2NpYWwvc29jaWFsLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvc29jaWFsL3lvdXR1YmUuc2VydmljZS5qcyIsImNvbXBvbmVudHMvc3RhdHMvc3RhdHMubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zdGF0cy9zdGF0cy5yb3V0ZXMuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci5tb2R1bGUuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci5yb3V0ZXMuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWVkaXQvYXJ0aWNsZS1lZGl0LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1lZGl0L2FydGljbGUtZWRpdC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWhvbWUvYXJ0aWNsZXMtaG9tZS5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtaG9tZS9hcnRpY2xlcy1ob21lLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2FydGljbGVzL2FydGljbGUtbmV3L2FydGljbGUtbmV3LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1uZXcvYXJ0aWNsZS1uZXcuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWluZGV4L2NvbW1lbnQtaW5kZXguY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtaW5kZXgvY29tbWVudC1pbmRleC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWFjdGlvbnMvZGFzaGJvYXJkLWFjdGlvbnMuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWFjdGlvbnMvZGFzaGJvYXJkLWFjdGlvbnMuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1hbmFseXRpY3MvZGFzaGJvYXJkLWFuYWx5dGljcy5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYW5hbHl0aWNzL2Rhc2hib2FyZC1hbmFseXRpY3MuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1hbmFseXRpY3MvZGFzaGJvYXJkLWFuYWx5dGljcy5tb2R1bGUuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tbWVudHMvZGFzaGJvYXJkLWNvbW1lbnRzLmNvbXBvbmVudHMuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tbWVudHMvZGFzaGJvYXJkLWNvbW1lbnRzLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtdXNlcnMvZGFzaGJvYXJkLXVzZXJzLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC11c2Vycy9kYXNoYm9hcmQtdXNlcnMuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC11c2Vycy9kYXNoYm9hcmQtdXNlcnMubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy1pbmRleC9zZXR0aW5ncy1pbmRleC5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLWluZGV4L3NldHRpbmdzLWluZGV4LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3NvY2lhbC9mYWNlYm9vay1kYXNoL2ZhY2Vib29rLnNlcnZpY2UuanMiLCJjb21wb25lbnRzL3NvY2lhbC9zb2NpYWwtZGFzaGJvYXJkL3NvY2lhbC1kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9zb2NpYWwvc29jaWFsLWRhc2hib2FyZC9zb2NpYWwtZGFzaGJvYXJkLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3NvY2lhbC90d2l0dGVyLWRhc2gvdHdpdHRlci5zZXJ2aWNlLmpzIiwiY29tcG9uZW50cy9zdGF0cy9zdGF0cy1pbmRleC9zdGF0cy1pbmRleC5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL3N0YXRzL3N0YXRzLWluZGV4L3N0YXRzLWluZGV4LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci1lZGl0L3VzZXItZWRpdC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VyL3VzZXItaW5kZXgvdXNlci1pbmRleC5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci1pbmRleC91c2VyLWluZGV4LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3VzZXIvdXNlci1uZXcvdXNlci1uZXcuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy91c2VyL3VzZXItbmV3L3VzZXItbmV3LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3NvY2lhbC9zb2NpYWwtd2lkZ2V0cy9mYWNlYm9vay13aWRnZXQvZmFjZWJvb2std2lkZ2V0LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvc29jaWFsL3NvY2lhbC13aWRnZXRzL3R3aXR0ZXItd2lkZ2V0L3R3aXR0ZXItd2lkZ2V0LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvc29jaWFsL3NvY2lhbC13aWRnZXRzL3R3aXR0ZXItd2lkZ2V0L3R3aXR0ZXItd2lkZ2V0LmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ3Jvb3QnLCBbXG4gICAgJ25nUm91dGUnLFxuICAgICdhcnRpY2xlcycsXG4gICAgJ2Rhc2hib2FyZCcsXG4gICAgJ3VzZXInLFxuICAgICdjb21tZW50JyxcbiAgICAnc3RhdHMnLFxuICAgICdzZXR0aW5ncycsXG4gICAgJ3NvY2lhbCdcbl0pO1xuIiwiZnVuY3Rpb24gcm91dGVQcm92aWRlcigkcm91dGVQcm92aWRlcil7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvJywge1xuICAgICAgICAgIHRlbXBsYXRlOiAnPGRhc2hib2FyZD48L2Rhc2hib2FyZD4nXG4gICAgICB9KTtcbn1cbnJvdXRlUHJvdmlkZXIuJGluamVjdCA9IFsnJHJvdXRlUHJvdmlkZXInXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29uZmlnKHJvdXRlUHJvdmlkZXIpO1xuIiwidmFyIGxvYWRpbmcgPSB7XG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24vbG9hZGluZy9sb2FkaW5nLmh0bWwnLFxuICBjb250cm9sbGVyOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICBpc0xvYWRpbmc6ICc8J1xuICB9XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ2xvYWRpbmcnLCBsb2FkaW5nKTsiLCJmdW5jdGlvbiBMb2FkaW5nQ29udHJvbGxlcigpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xufTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignTG9hZGluZ0NvbnRyb2xsZXInLCBMb2FkaW5nQ29udHJvbGxlcik7IiwidmFyIHRvcE5hdiA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21tb24vdG9wLW5hdi90b3AtbmF2Lmh0bWwnLFxuICBjb250cm9sbGVyOiBUb3BOYXZDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIHVzZXI6ICc8J1xuICB9XG59O1xuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ3Jvb3QnKVxuICAuY29tcG9uZW50KCd0b3BOYXYnLCB0b3BOYXYpO1xuIiwiZnVuY3Rpb24gVG9wTmF2Q29udHJvbGxlcigpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xufTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignVG9wTmF2Q29udHJvbGxlcicsIFRvcE5hdkNvbnRyb2xsZXIpO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJywgW10pOyIsImZ1bmN0aW9uIGFydGljbGVSb3V0ZVByb3ZpZGVyKCRyb3V0ZVByb3ZpZGVyKXtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgLndoZW4oJy9hcnRpY2xlcycse1xuICAgICAgICB0ZW1wbGF0ZTogJzxhcnRpY2xlcy1ob21lPjwvYXJ0aWNsZXMtaG9tZT4nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9hcnRpY2xlL25ldycsIHtcbiAgICAgICAgdGVtcGxhdGU6ICc8YXJ0aWNsZS1uZXc+PC9hcnRpY2xlLW5ldz4nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9hcnRpY2xlL2VkaXQvOmlkJywge1xuICAgICAgICB0ZW1wbGF0ZTogJzxhcnRpY2xlLWVkaXQ+PC9hcnRpY2xlLWVkaXQ+J1xuICAgICAgfSlcbiAgICAgIC5vdGhlcndpc2UoeyBcbiAgICAgICAgdGVtcGxhdGU6ICc8aDE+Tm90IEZvdW5kPC9oMT4nXG4gICAgICB9KTtcbn07XG5cbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpLmNvbmZpZyhhcnRpY2xlUm91dGVQcm92aWRlcik7XG5hcnRpY2xlUm91dGVQcm92aWRlci4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xuIiwiZnVuY3Rpb24gQXJ0aWNsZVNlcnZpY2UoJGh0dHAsICRsb2cpIHtcblxuICBmdW5jdGlvbiBuZXdBcnRpY2xlKGFydGljbGUpIHtcbiAgICBjb25zb2xlLmxvZyhhcnRpY2xlKTtcbiAgICAkbG9nLmxvZyhcIlBsYWNlaG9sZGVyIGZvciBzYXZpbmcgbmV3IEFydGljbGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBcnRpY2xlKGFydGljbGUpIHtcbiAgICAkbG9nLmxvZyhcIlBsYWNlaG9sZGVyIGZvciB1cGRhdGluZyBuZXcgQXJ0aWNsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUFydGljbGUoaWQpIHtcbiAgICAkbG9nLmxvZyhcIlBsYWNlaG9sZGVyIGZvciBkZWxldGluZyBhbiBhcnRpY2xlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJ0aWNsZShpZCkge1xuICAgICRsb2cubG9nKFwiUGxhY2Vob2xkZXIgZm9yIHJldHJpZXZpbmcgYW4gYXJ0aWNsZVwiKTtcbiAgfVxuXG4gIHZhciBzZXJ2aWNlID0ge1xuICAgIG5ld0FydGljbGUgOiBuZXdBcnRpY2xlLFxuICAgIHVwZGF0ZUFydGljbGUgOiB1cGRhdGVBcnRpY2xlLFxuICAgIGRlbGV0ZUFydGljbGUgOiBkZWxldGVBcnRpY2xlLFxuICAgIGdldEFydGljbGUgOiBnZXRBcnRpY2xlXG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuQXJ0aWNsZVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZyddOyAgXG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgnYXJ0aWNsZXMnKVxuICAuZmFjdG9yeSgnQXJ0aWNsZVNlcnZpY2UnLCBBcnRpY2xlU2VydmljZSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbW1lbnQnLCBbXSk7IiwiZnVuY3Rpb24gY29tbWVudFJvdXRlcygkcm91dGVQcm92aWRlcil7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvY29tbWVudHMnLCB7XG4gICAgICAgICAgdGVtcGxhdGU6ICc8Y29tbWVudC1pbmRleD48L2NvbW1lbnQtaW5kZXg+J1xuICAgICAgfSk7XG59O1xuY29tbWVudFJvdXRlcy4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xuYW5ndWxhci5tb2R1bGUoJ2NvbW1lbnQnKS5jb25maWcoY29tbWVudFJvdXRlcyk7XG4iLCJmdW5jdGlvbiBDb21tZW50U2VydmljZSgkbG9nKXtcblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUNvbW1lbnQoY29tbWVudElkKSB7XG4gICAgICAgICRsb2cubG9nKFwiRGVsZXRpbmcgYSBjb21tZW50IHdpdGggaWQ6IFwiICsgY29tbWVudElkKTtcbiAgICB9XG5cbiAgICB2YXIgc2VydmljZSA9IHtcbiAgICAgICAgZGVsZXRlQ29tbWVudCA6IGRlbGV0ZUNvbW1lbnRcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG59XG5Db21tZW50U2VydmljZS4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdjb21tZW50JylcbiAgICAuZmFjdG9yeSgnQ29tbWVudFNlcnZpY2UnLCBDb21tZW50U2VydmljZSk7IiwidmFyIGRhc2hib2FyZCA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtaW5kZXguaHRtbCcsXG4gIGNvbnRyb2xsZXI6IERhc2hib2FyZENvbnRyb2xsZXJcbn07XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgnZGFzaGJvYXJkJywgZGFzaGJvYXJkKTsiLCJmdW5jdGlvbiBEYXNoYm9hcmRDb250cm9sbGVyKCkge1xuICB2YXIgY3RybCA9IHRoaXM7XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgRGFzaGJvYXJkQ29udHJvbGxlcik7IiwiYW5ndWxhci5tb2R1bGUoJ2Rhc2hib2FyZCcsIFsnY2hhcnQuanMnXSk7IiwiYW5ndWxhci5tb2R1bGUoJ3NldHRpbmdzJyxbXSk7IiwiZnVuY3Rpb24gc2V0dGluZ3NSb3V0ZXMoJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignL3NldHRpbmdzJywge1xuICAgICAgICAgIHRlbXBsYXRlOiAnPHNldHRpbmdzLWluZGV4Pjwvc2V0dGluZ3MtaW5kZXg+J1xuICAgICAgfSk7XG59XG5zZXR0aW5nc1JvdXRlcy4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xuXG5cbmFuZ3VsYXIubW9kdWxlKCdzZXR0aW5ncycpXG4gIC5jb25maWcoc2V0dGluZ3NSb3V0ZXMpO1xuIiwiIiwiYW5ndWxhci5tb2R1bGUoJ3NvY2lhbCcsIFtdKTsiLCJmdW5jdGlvbiBzb2NpYWxSb3V0ZXMoJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignL3NvY2lhbCcsIHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxzb2NpYWwtZGFzaGJvYXJkPjwvc29jaWFsLWRhc2hib2FyZD4nXG4gICAgICB9KTtcbn1cbnNvY2lhbFJvdXRlcy4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xuXG5hbmd1bGFyLm1vZHVsZSgnc29jaWFsJylcbiAgLmNvbmZpZyhzb2NpYWxSb3V0ZXMpO1xuIiwiIiwiYW5ndWxhci5tb2R1bGUoJ3N0YXRzJywgWydjaGFydC5qcyddKTsiLCJmdW5jdGlvbiBzdGF0c1JvdXRlcygkcm91dGVQcm92aWRlcil7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvc3RhdHMnLCB7XG4gICAgICAgICAgdGVtcGxhdGU6ICc8c3RhdHMtaW5kZXg+PC9zdGF0cy1pbmRleD4nXG4gICAgICB9KTtcbn07XG5cbnN0YXRzUm91dGVzLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XG5hbmd1bGFyLm1vZHVsZSgnc3RhdHMnKS5jb25maWcoc3RhdHNSb3V0ZXMpO1xuIiwiYW5ndWxhci5tb2R1bGUoJ3VzZXInLCBbXSk7IiwiZnVuY3Rpb24gdXNlclJvdXRlcygkcm91dGVQcm92aWRlcil7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvdXNlcnMnLCB7XG4gICAgICAgICAgdGVtcGxhdGU6ICc8dXNlci1pbmRleD48L3VzZXItaW5kZXg+J1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvdXNlci9lZGl0LzppZCcsIHtcbiAgICAgICAgdGVtcGxhdGU6ICc8dXNlci1lZGl0PjwvdXNlci1lZGl0PicgIFxuICAgICAgfSlcbiAgICAgIC53aGVuKCcvdXNlci9uZXcnLCB7XG4gICAgICAgIHRlbXBsYXRlOiAnPHVzZXItbmV3PjwvdXNlci1uZXc+J1xuICAgICAgfSk7XG59O1xuXG51c2VyUm91dGVzLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XG5hbmd1bGFyLm1vZHVsZSgndXNlcicpLmNvbmZpZyh1c2VyUm91dGVzKTtcbiIsImZ1bmN0aW9uIFVzZXJTZXJ2aWNlKCRsb2cpIHtcblxuICAgIGZ1bmN0aW9uIG5ld1VzZXIodXNlcikge1xuICAgICAgICAkbG9nLmxvZyhcIkFkZGluZyBOZXcgVXNlclwiKTtcbiAgICB9XG5cbiAgICB2YXIgc2VydmljZSA9IHtcbiAgICAgICAgbmV3VXNlcjogbmV3VXNlclxuICAgIH07XG5cbiAgICByZXR1cm4gc2VydmljZTtcbn07XG5cblVzZXJTZXJ2aWNlLiRpbmplY3QgPSBbJyRsb2cnXTtcblxuYW5ndWxhci5tb2R1bGUoJ3VzZXInKVxuICAgIC5mYWN0b3J5KCdVc2VyU2VydmljZScsIFVzZXJTZXJ2aWNlKTsiLCJ2YXIgYXJ0aWNsZUVkaXQgPSB7XG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLWVkaXQvYXJ0aWNsZS1lZGl0Lmh0bWwnLFxuICBjb250cm9sbGVyOiBBcnRpY2xlRWRpdENvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgYXJ0aWNsZTogJzwnXG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ2FydGljbGVzJylcbiAgLmNvbXBvbmVudCgnYXJ0aWNsZUVkaXQnLCBhcnRpY2xlRWRpdCk7IiwiZnVuY3Rpb24gQXJ0aWNsZUVkaXRDb250cm9sbGVyKCRsb2csIEFydGljbGVTZXJ2aWNlKSB7XG4gIHZhciBjdHJsID0gdGhpcztcblxuICBjdHJsLmFydGljbGUgPSB7fTtcblxuICBjdHJsLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBjdHJsLmFydGljbGUgPSB7XG4gICAgICB0aXRsZSA6IFwiVGVzdCBBcnRpY2xlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJsb3JlbSBpcHN1bVwiLFxuICAgICAgc2x1ZzogXCJ0ZXN0X2FydGljbGVcIixcbiAgICAgIGltYWdlOiBcInRlc3RfaW1hZ2UuanBnXCIsXG4gICAgICBib2R5OiBcImJvZHlcIlxuICAgIH07XG4gIH07XG5cbiAgY3RybC5zYXZlID0gZnVuY3Rpb24oYXJ0aWNsZSkge1xuICAgICRsb2cubG9nKFwiU2F2ZSBhbnkgdXBkYXRlcyB0byB0aGUgYXJ0aWNsZVwiKTtcbiAgICBBcnRpY2xlU2VydmljZS51cGRhdGVBcnRpY2xlKGFydGljbGUpO1xuICB9O1xuXG59O1xuXG5BcnRpY2xlRWRpdENvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZycsICdBcnRpY2xlU2VydmljZSddO1xuXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKVxuICAuY29udHJvbGxlcignQXJ0aWNsZUVkaXRDb250cm9sbGVyJywgQXJ0aWNsZUVkaXRDb250cm9sbGVyKTsiLCJ2YXIgYXJ0aWNsZXNIb21lID0ge1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZS1ob21lL2FydGljbGVzLWhvbWUuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IEFydGljbGVzSG9tZUNvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgYXJ0aWNsZXM6ICc8J1xuICB9XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKVxuICAuY29tcG9uZW50KCdhcnRpY2xlc0hvbWUnLCBhcnRpY2xlc0hvbWUpOyIsImZ1bmN0aW9uIEFydGljbGVzSG9tZUNvbnRyb2xsZXIoKSB7XG4gIHZhciBjdHJsID0gdGhpcztcbn07XG5cbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXG4gIC5jb250cm9sbGVyKCdBcnRpY2xlc0hvbWVDb250cm9sbGVyJywgQXJ0aWNsZXNIb21lQ29udHJvbGxlcik7IiwidmFyIGFydGljbGVOZXcgPSB7XG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlLW5ldy9hcnRpY2xlLW5ldy5odG1sJyxcbiAgY29udHJvbGxlcjogQXJ0aWNsZU5ld0NvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgYXJ0aWNsZTogJzwnXG4gIH1cbn07XG5cbmFuZ3VsYXIubW9kdWxlKCdhcnRpY2xlcycpXG4gIC5jb21wb25lbnQoJ2FydGljbGVOZXcnLCBhcnRpY2xlTmV3KTsiLCJmdW5jdGlvbiBBcnRpY2xlTmV3Q29udHJvbGxlcihBcnRpY2xlU2VydmljZSwgJGxvZykge1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5hcnRpY2xlID0ge307XG5cbiAgY3RybC5zYXZlID0gZnVuY3Rpb24oYXJ0aWNsZSkge1xuICAgIEFydGljbGVTZXJ2aWNlLm5ld0FydGljbGUoYXJ0aWNsZSk7XG4gIH07ICBcblxufTtcblxuQXJ0aWNsZU5ld0NvbnRyb2xsZXIuJGluamVjdCA9IFsnQXJ0aWNsZVNlcnZpY2UnLCAnJGxvZyddO1xuXG5hbmd1bGFyLm1vZHVsZSgnYXJ0aWNsZXMnKVxuICAuY29udHJvbGxlcignQXJ0aWNsZU5ld0NvbnRyb2xsZXInLCBBcnRpY2xlTmV3Q29udHJvbGxlcik7IiwidmFyIGNvbW1lbnRJbmRleCA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1pbmRleC9jb21tZW50LWluZGV4Lmh0bWwnLFxuICBjb250cm9sbGVyOiBDb21tZW50SW5kZXhDb250cm9sbGVyXG4gIFxufVxuXG5hbmd1bGFyLm1vZHVsZSgnY29tbWVudCcpXG4gIC5jb21wb25lbnQoJ2NvbW1lbnRJbmRleCcsIGNvbW1lbnRJbmRleCk7IiwiZnVuY3Rpb24gQ29tbWVudEluZGV4Q29udHJvbGxlcihDb21tZW50U2VydmljZSl7XG4gICAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gICAgY3RybC5kZWxldGVDb21tZW50ID0gZnVuY3Rpb24oY29tbWVudElkKXtcbiAgICAgICAgQ29tbWVudFNlcnZpY2UuZGVsZXRlQ29tbWVudChjb21tZW50SWQpO1xuICAgIH1cbn1cblxuQ29tbWVudEluZGV4Q29udHJvbGxlci4kaW5qZWN0ID0gWydDb21tZW50U2VydmljZSddO1xuXG5hbmd1bGFyLm1vZHVsZSgnY29tbWVudCcpXG4gICAgLmNvbnRyb2xsZXIoJ0NvbW1lbnRJbmRleENvbnRyb2xsZXInLCBDb21tZW50SW5kZXhDb250cm9sbGVyKTsiLCJ2YXIgZGFzaGJvYXJkQWN0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtYWN0aW9ucy9kYXNoYm9hcmQtYWN0aW9ucy5odG1sJyxcbiAgICBjb250cm9sbGVyOiBEYXNoYm9hcmRBY3Rpb25Db250cm9sbGVyXG4gICAgXG59O1xuXG5hbmd1bGFyLm1vZHVsZSgnZGFzaGJvYXJkJylcbiAgICAuY29tcG9uZW50KCdkYXNoYm9hcmRBY3Rpb25zJywgZGFzaGJvYXJkQWN0aW9ucyk7IiwiZnVuY3Rpb24gRGFzaGJvYXJkQWN0aW9uQ29udHJvbGxlcigpe1xuICAgIHZhciBjdHJsID0gdGhpcztcbn1cblxuYW5ndWxhci5tb2R1bGUoJ2Rhc2hib2FyZCcpXG4gICAgLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZEFjdGlvbkNvbnRyb2xsZXInLCBEYXNoYm9hcmRBY3Rpb25Db250cm9sbGVyKTsiLCJ2YXIgZGFzaGJvYXJkQW5hbHl0aWNzID0ge1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC1hbmFseXRpY3MvZGFzaGJvYXJkLWFuYWx5dGljcy5odG1sJyxcbiAgY29udHJvbGxlcjogRGFzaGJvYXJkQW5hbHl0aWNzQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICBzZXJpZXM6ICc8JyxcbiAgICBsYWJlbHM6ICc8JyxcbiAgICBkYXRhOiAnPCcsXG4gICAgb3B0aW9uczogJzwnXG4gIH1cbn07XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgnZGFzaGJvYXJkQW5hbHl0aWNzJywgZGFzaGJvYXJkQW5hbHl0aWNzKTsiLCJmdW5jdGlvbiBEYXNoYm9hcmRBbmFseXRpY3NDb250cm9sbGVyKCRsb2cpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIGN0cmwubGFiZWxzID0gWycyMDA2JywgJzIwMDcnLCAnMjAwOCcsICcyMDA5JywgJzIwMTAnLCAnMjAxMScsICcyMDEyJ107XG4gIGN0cmwuc2VyaWVzID0gWydWaXNpdG9ycycsICdQYWdlIFZpZXdzJ107XG5cbiAgY3RybC5kYXRhID0gW1xuICAgIFs2NSwgNTksIDgwLCA4MSwgNTYsIDU1LCA0MF0sXG4gICAgWzI4LCA0OCwgNDAsIDE5LCA4NiwgMjcsIDkwXVxuICBdO1xuXG4gIGN0cmwub3B0aW9ucyA9IHtcbiAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gIH07XG5cbiAgY3RybC4kb25Jbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvZy5sb2coXCJUaGlzIHdpbGwgcGVyZm9ybSB0aGUgUkVTVCBBUEkgY2FsbCB0byBnb29nbGUgYW5hbHl0aWNzIG9uIHBhZ2UgbG9hZFwiKTtcbiAgfTtcblxufTtcblxuRGFzaGJvYXJkQW5hbHl0aWNzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZEFuYWx5dGljc0NvbnRyb2xsZXInLCBEYXNoYm9hcmRBbmFseXRpY3NDb250cm9sbGVyKTsiLCIiLCJ2YXIgZGFzaGJvYXJkQ29tbWVudHMgPSB7XG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbW1lbnRzL2Rhc2hib2FyZC1jb21tZW50cy5odG1sJyxcbiAgICBjb250cm9sbGVyOiBEYXNoYm9hcmRDb21tZW50c0NvbnRyb2xsZXIsXG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgY29tbWVudHM6ICc8J1xuICAgIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ2Rhc2hib2FyZCcpXG4gICAgLmNvbXBvbmVudCgnZGFzaGJvYXJkQ29tbWVudHMnLCBkYXNoYm9hcmRDb21tZW50cyk7IiwiZnVuY3Rpb24gRGFzaGJvYXJkQ29tbWVudHNDb250cm9sbGVyKCRzY29wZSl7XG4gICAgdmFyIGN0cmwgPSB0aGlzO1xufVxuXG5EYXNoYm9hcmRDb21tZW50c0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnKVxuICAgIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDb21tZW50c0NvbnRyb2xsZXInLCBEYXNoYm9hcmRDb21tZW50c0NvbnRyb2xsZXIpOyIsInZhciBkYXNoYm9hcmRVc2VycyA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQtdXNlcnMvZGFzaGJvYXJkLXVzZXJzLmh0bWwnLFxuICBjb250cm9sbGVyOiBEYXNoYm9hcmRVc2Vyc0NvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgc2VyaWVzOiAnPCcsXG4gICAgbGFiZWxzOiAnPCcsXG4gICAgZGF0YTogJzwnLFxuICAgIG9wdGlvbnM6ICc8J1xuICB9XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ2Rhc2hib2FyZFVzZXJzJywgZGFzaGJvYXJkVXNlcnMpOyIsImZ1bmN0aW9uIERhc2hib2FyZFVzZXJzQ29udHJvbGxlcigpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIGN0cmwubGFiZWxzID0gWyctNCBXZWVrJywgJy0zIFdlZWsnLCAnLTIgV2VlaycsICctMSBXZWVrJ107XG4gIGN0cmwuc2VyaWVzID0gWydOZXcgVXNlcnMnXTtcblxuICBjdHJsLm9wdGlvbnMgPSB7XG4gICAgc2NhbGVzOiB7XG4gICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICB9O1xuXG4gIGN0cmwuZGF0YSA9IFtcbiAgICBbNiwgMywgNCwgMl1cbiAgXTtcblxuICBjdHJsLiRvbkluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhleSB5b3UgZ3V5c1wiKTtcbiAgfTtcblxufTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignRGFzaGJvYXJkVXNlcnNDb250cm9sbGVyJywgRGFzaGJvYXJkVXNlcnNDb250cm9sbGVyKTsiLCIiLCJ2YXIgc2V0dGluZ3NJbmRleCA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy1pbmRleC9zZXR0aW5ncy1pbmRleC5odG1sJyxcbiAgY29udHJvbGxlcjogU2V0dGluZ3NJbmRleENvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgc2V0dGluZ3M6ICc8J1xuICB9XG59O1xuXG5hbmd1bGFyLm1vZHVsZSgnc2V0dGluZ3MnKVxuICAuY29tcG9uZW50KCdzZXR0aW5nc0luZGV4Jywgc2V0dGluZ3NJbmRleCk7IiwiZnVuY3Rpb24gU2V0dGluZ3NJbmRleENvbnRyb2xsZXIoKXtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIGN0cmwuc2V0dGluZ3MgPSB7XG4gICAgdGFnbGluZTogXCJIaWdoIFF1YWxpdHkgUHJvZ3JhbW1pbmcgVHV0b3JpYWxzXCIsXG4gICAgc2l0ZVVybDogXCJodHRwczovL3R1dG9yaWFsZWRnZS5uZXRcIixcbiAgICBhZG1pbkVtYWlsOiBcImFkbWluQHR1dG9yaWFsZWRnZS5uZXRcIixcbiAgICBtZXRhOiBcInwgVHV0b3JpYWxlZGdlLm5ldFwiXG4gIH1cblxufVxuXG5hbmd1bGFyLm1vZHVsZSgnc2V0dGluZ3MnKVxuICAuY29udHJvbGxlcignU2V0dGluZ3NJbmRleENvbnRyb2xsZXInLCBTZXR0aW5nc0luZGV4Q29udHJvbGxlcik7IiwiIiwidmFyIHNvY2lhbERhc2hib2FyZCA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9zb2NpYWwvc29jaWFsLWRhc2hib2FyZC9zb2NpYWwtZGFzaGJvYXJkLmh0bWwnLFxuICBjb250cm9sbGVyOiBTb2NpYWxEYXNoYm9hcmRDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIHR3aXR0ZXJGb2xsb3dlcnM6ICc8JyxcbiAgICBmYWNlYm9va0ZvbGxvd2VyczogJzwnLFxuICAgIHlvdXR1YmVTdWJzY3JpYmVyczogJzwnLFxuICAgIGdvb2dsZVBsdXNGb2xsb3dlcnM6ICc8J1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdzb2NpYWwnKVxuICAuY29tcG9uZW50KCdzb2NpYWxEYXNoYm9hcmQnLCBzb2NpYWxEYXNoYm9hcmQpOyIsImZ1bmN0aW9uIFNvY2lhbERhc2hib2FyZENvbnRyb2xsZXIoKXtcbiAgdmFyIGN0cmwgPSB0aGlzO1xufVxuYW5ndWxhci5tb2R1bGUoJ3NvY2lhbCcpXG4gIC5jb250cm9sbGVyKCdTb2NpYWxEYXNoYm9hcmRDb250cm9sbGVyJywgU29jaWFsRGFzaGJvYXJkQ29udHJvbGxlcik7IiwiIiwidmFyIHN0YXRzSW5kZXggPSB7XG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvc3RhdHMvc3RhdHMtaW5kZXgvc3RhdHMtaW5kZXguaHRtbCcsXG4gIGNvbnRyb2xsZXI6IFN0YXRzSW5kZXhDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIHN0YXRzOiAnPCdcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgnc3RhdHMnKVxuICAuY29tcG9uZW50KCdzdGF0c0luZGV4Jywgc3RhdHNJbmRleCk7IiwiZnVuY3Rpb24gU3RhdHNJbmRleENvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gICAgY3RybC5zdGF0cyA9IHt9O1xuXG4gICAgY3RybC5zdGF0cy5zZXJpZXMgPSBbJ1Zpc2l0b3JzJywgJ1BhZ2UgVmlld3MnXTtcblxuICAgIGN0cmwuc3RhdHMucmVhbHRpbWVMYWJlbHMgPSBbJ01vYmlsZScsICdUYWJsZXQnLCAnRGVza3RvcCcsICdPdGhlciddXG4gICAgY3RybC5zdGF0cy50b2RheUxhYmVscyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXTtcbiAgIFxuICAgIGN0cmwuc3RhdHMucmVhbHRpbWUgPSBbXG4gICAgICAgIDY1LCA1OSwgMTA4LCAyM1xuICAgIF07XG5cbiAgICBjdHJsLnN0YXRzLnRvZGF5ID0gW1xuICAgICAgICBbMzQwLCA1NDMsIDUxMiwgNTQzLCA0OTMsIDQ0NCwgNDM5XVxuICAgIF07XG5cbiAgICBjdHJsLnN0YXRzLmJhck9wdGlvbnMgPSB7XG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY3RybC5zdGF0cy5waWVPcHRpb25zID0ge1xuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWVcbiAgICAgICAgfVxuICAgIH07XG5cbn1cblN0YXRzSW5kZXhDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xuYW5ndWxhci5tb2R1bGUoJ3N0YXRzJylcbiAgICAuY29udHJvbGxlcignU3RhdHNJbmRleENvbnRyb2xsZXInLCBTdGF0c0luZGV4Q29udHJvbGxlcik7IiwidmFyIHVzZXJFZGl0ID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci1lZGl0L3VzZXItZWRpdC5odG1sJyxcbiAgY29udHJvbGxlcjogVXNlckVkaXRDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIHVzZXI6ICc8J1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd1c2VyJylcbiAgLmNvbXBvbmVudCgndXNlckVkaXQnLCB1c2VyRWRpdCk7IiwiZnVuY3Rpb24gVXNlckVkaXRDb250cm9sbGVyKCkge1xuICB2YXIgY3RybCA9IHRoaXM7XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd1c2VyJylcbiAgLmNvbnRyb2xsZXIoJ1VzZXJFZGl0Q29udHJvbGxlcicsIFVzZXJFZGl0Q29udHJvbGxlcik7IiwidmFyIHVzZXJJbmRleCA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci1pbmRleC91c2VyLWluZGV4Lmh0bWwnLFxuICBjb250cm9sbGVyOiBVc2VySW5kZXhDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIHVzZXJzOiAnPCdcbiAgfVxufTtcblxuYW5ndWxhci5tb2R1bGUoJ3VzZXInKVxuICAuY29tcG9uZW50KCd1c2VySW5kZXgnLCB1c2VySW5kZXgpOyIsImZ1bmN0aW9uIFVzZXJJbmRleENvbnRyb2xsZXIoKSB7XG4gIHZhciBjdHJsID0gdGhpcztcblxufTtcblxuYW5ndWxhci5tb2R1bGUoJ3VzZXInKVxuICAuY29udHJvbGxlcignVXNlckluZGV4Q29udHJvbGxlcicsIFVzZXJJbmRleENvbnRyb2xsZXIpOyIsInZhciB1c2VyTmV3ID0ge1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLW5ldy91c2VyLW5ldy5odG1sJyxcbiAgY29udHJvbGxlcjogVXNlck5ld0NvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgdXNlcjogJzwnXG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3VzZXInKVxuICAuY29tcG9uZW50KCd1c2VyTmV3JywgdXNlck5ldyk7IiwiZnVuY3Rpb24gVXNlck5ld0NvbnRyb2xsZXIoVXNlclNlcnZpY2Upe1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5uZXdVc2VyID0gZnVuY3Rpb24odXNlcil7XG4gICAgVXNlclNlcnZpY2UubmV3VXNlcih1c2VyKTtcbiAgfTtcblxufTtcblxuVXNlck5ld0NvbnRyb2xsZXIuJGluamVjdCA9IFsnVXNlclNlcnZpY2UnXTtcblxuYW5ndWxhci5tb2R1bGUoJ3VzZXInKVxuICAuY29udHJvbGxlcignVXNlck5ld0NvbnRyb2xsZXInLCBVc2VyTmV3Q29udHJvbGxlcik7IiwidmFyIGZhY2Vib29rV2lkZ2V0ID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3NvY2lhbC9zb2NpYWwtd2lkZ2V0cy9mYWNlYm9vay13aWRnZXQvZmFjZWJvb2std2lkZ2V0Lmh0bWwnXG59XG5cbmFuZ3VsYXIubW9kdWxlKCdzb2NpYWwnKVxuICAuY29tcG9uZW50KCdmYWNlYm9va1dpZGdldCcsIGZhY2Vib29rV2lkZ2V0KTtcbiAgIiwidmFyIHR3aXR0ZXJXaWRnZXQgPSB7XG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvc29jaWFsL3NvY2lhbC13aWRnZXRzL3R3aXR0ZXItd2lkZ2V0L3R3aXR0ZXItd2lkZ2V0Lmh0bWwnLFxuICBjb250cm9sbGVyOiBTb2NpYWxUd2l0dGVyQ29udHJvbGxlclxufVxuXG5hbmd1bGFyLm1vZHVsZSgnc29jaWFsJylcbiAgLmNvbXBvbmVudCgndHdpdHRlcldpZGdldCcsIHR3aXR0ZXJXaWRnZXQpOyIsImZ1bmN0aW9uIFNvY2lhbFR3aXR0ZXJDb250cm9sbGVyKCl7XG4gIHZhciBjdHJsID0gdGhpcztcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3NvY2lhbCcpXG4gIC5jb250cm9sbGVyKCdTb2NpYWxUd2l0dGVyQ29udHJvbGxlcicsIFNvY2lhbFR3aXR0ZXJDb250cm9sbGVyKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
