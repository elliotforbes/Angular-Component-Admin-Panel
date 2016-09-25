var articleNew = {
  templateUrl: './app/components/articles/article-new/article-new.html',
  controller: ArticleNewController,
  bindings: {
    article: '<'
  }
};

angular.module('articles')
  .component('articleNew', articleNew);