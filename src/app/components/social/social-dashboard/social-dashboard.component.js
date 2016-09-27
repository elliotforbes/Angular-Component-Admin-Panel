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