(function() {
    'use strict';

    angular
        .module('openfoodfilter')
        .config(config);


    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        //For any unmatched url
        $urlRouterProvider.otherwise('home');

        //For state url
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'template/home.html',
                controller: 'ProductController',
                controllerAs: 'off'
            })
            .state('store', {
                url: '/store',
                templateUrl: 'template/store.html',
                controller: 'ProductController',
                controllerAs: 'off'
            })
            .state('detail', {
                url: '/store/:productID',
                templateUrl: 'template/detail.html',
                controller: 'ProductController',
                controllerAs: 'off'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'template/cart.html',
                controller: 'ProductController',
                controllerAs: 'off'
            })
            .state('cart.checkout', {
                url: '/checkout',
                templateUrl: 'template/checkout.html',
                controller: 'PaymentController'
//                controllerAs: 'off'
            })
            .state('thanks', {
                url: '/thanks',
                templateUrl: 'template/thanks.html',
                controller: 'ThanksController'
//                controllerAs: 'off'
            })
            .state('home.brands', {
                url: '/brands/:productCat',
                templateUrl: 'template/category.html',
                controller: 'ProductController',
                controllerAs: 'off'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'template/about.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'template/contact.html'
            })
            .state('faq', {
                url: '/faq',
                templateUrl: 'template/faq.html'
            })
            .state('conditions', {
                url: '/conditions',
                templateUrl: 'template/conditions.html'
            })
    }
})();
