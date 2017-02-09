var marxBlog = angular.module('marxBlog', ['ngMaterial']);

marxBlog.config(['$locationProvider', function ($locationProvider) {
    // $locationProvider.html5Mode({
    //     enabled: false
    // })
}])
marxBlog.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 100;   // always scroll by 50 extra pixels
}])

