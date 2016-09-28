(function () {
    'use strict';

    angular
        .module('products.services')
        .factory('Product', Product);

    Product.$inject = ['$http'];

    function Product($http) {
        var Product = {
            all: all
        };

        return Product;

        function all(callback) {
           return $http.get('products.json').then(callback, errorFn);

            function errorFn(data, status, config, header) {
                console.log('Error');
            }
        }
    }
})();