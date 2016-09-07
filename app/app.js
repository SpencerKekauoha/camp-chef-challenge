angular.module('campChef', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'components/home/homeTmpl.html'
    })
      .state('category', {
        url: '/category',
        templateUrl: 'components/category/catTmpl.html'
      })
      .state('product', {
        url: '/product-detail',
        templateUrl: 'components/productDetail/prodTmpl.html'
      })
      .state('sub', {
        url: '/sub-category',
        templateUrl: 'components/subCategory/subTmpl.html'
      });
      $urlRouterProvider
      .otherwise('/home');
  });
