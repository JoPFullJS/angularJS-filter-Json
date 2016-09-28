'use strict';
// test unitaire sur le service Product
describe('Service: Product', function () {

    // on charge le module du service
    beforeEach(module('products.services'));

    // instantiate service
    var product, httpBackend;
    beforeEach(inject(function (_product_, _$httpBackend_) {
        product = _product_;
        httpBackend = _$httpBackend_;
    }));

    it('should make a request to the URL when callling product.all function', function () {
        product.product.all();

        httpBackend.expectGET('http://127.0.0.1:8080/products.json').respond({});

        httpBackend.flush();

    });


});
