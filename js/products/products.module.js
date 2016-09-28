(function() {
    'use strict';

    angular
        .module('openfoodfilter.products', [
        'products.controllers',
        'products.services',
        'products.filters'
        ]);

    angular
        .module('products.controllers', []);

    angular
        .module('products.services', []);

    angular
        .module('products.filters', []);

})();
