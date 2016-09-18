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