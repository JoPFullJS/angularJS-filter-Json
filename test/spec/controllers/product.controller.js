'use strict';

describe('Controller: ProductController', function () {

    // chargement du module controller
    beforeEach(module('products.controllers'));

    var ProductController,scope,product,filter;

    // Initialisation du contoller et des moks
    beforeEach(inject(function ($controller, scope, $http, $filter, $stateParams, _product_) {
        scope = $stateParams.$new();
        product = _product_;

        ProductController = $controller('ProductController', {
            $scope: off,
            product: product
        });

    }));
	
    it('should set Product.all and off.itemsPerPage when calling off.products', function () {
        spyOn(product, 'All').andCallFake(function () {
            return{
                success: function (callback) {
                    callback({"results": [
                        {}
                    ], "itemsPerPage": 9})
                }
            }
        });

        Product.all();

        expect(off.itemsPerPage).toEqual(9);
        expect(off.products).toEqual([
            {}
        ]);
    });
	
});
