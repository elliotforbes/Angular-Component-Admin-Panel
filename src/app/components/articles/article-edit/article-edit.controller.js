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