(function() {
    'use strict';

    angular
        .module('products.controllers')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$scope', '$http', '$filter', '$stateParams', '$state', 'Product'];

    function ProductController($scope, $http, $filter, $stateParams, $state, Product) {
        var off = this;


        //Pagination
        off.currentPage = 1;
        off.itemsPerPage=9;

        off._id = $stateParams.productID;
        off.brands = $stateParams.productCat;
        off.state = $state.current.name;


        //Filter Quantity
         off.quantityFilter = {
                minValue: 0,
                maxValue: 1000,
                options: {
                    floor: 0,
                    ceil: 1000,
                    step: 1,
                    getPointerColor: function() {
                        return '#417C81';
                    },
                    getSelectionBarColor: function() {
                        return '#417C81';
                    },
                    translate: function(value) {
                      return value + 'g';
                    }
                }
        };

        //Reset quantity
        off.resetQuantity = function(obj) {
            obj.minValue = 0;
            obj.maxValue = 1000;
            return obj;
        }

        //Filter Sugr
         off.sucreFilter = {
                minValue: 0,
                maxValue: 100,
                options: {
                    floor: 0,
                    ceil: 100,
                    step: 1,
                    getPointerColor: function() {
                        return '#417C81';
                    },
                    getSelectionBarColor: function() {
                        return '#417C81';
                    },
                    translate: function(value) {
                      return value + 'g';
                    }
                }
        };

        //Reset suqar
        off.resetSucre = function(obj) {
            obj.minValue = 0;
            obj.maxValue = 100;
            return obj;
        }

        //Filter matière grasse
         off.fatFilter = {
                minValue: 0,
                maxValue: 50,
                options: {
                    floor: 0,
                    ceil: 50,
                    step: 1,
                    getPointerColor: function() {
                        return '#417C81';
                    },
                    getSelectionBarColor: function() {
                        return '#417C81';
                    },
                    translate: function(value) {
                      return value + 'g';
                    }
                }
        };

        //Reset matière grasse
        off.resetFat = function(obj) {
            obj.minValue = 0;
            obj.maxValue = 50;
            return obj;
        }

        //Filtering product by price range.
        off.filterRange = function(obj) {
            return obj.quantity > off.quantityFilter.minValue && obj.quantity <= off.quantityFilter.maxValue && obj.nutriments.sugars > off.sucreFilter.minValue && obj.nutriments.sugars <= off.sucreFilter.maxValue && obj.nutriments.fat > off.fatFilter.minValue && obj.nutriments.fat <= off.fatFilter.maxValue;
        };


        Product.all(function(data) {
            off.products = data.data;
            off.categories = data.data;
            off.product = $filter('filter')(off.products, {_id: off._id})[0];
            off.catProduct = $filter('filter')(off.products, {brands: off.brands});
            console.log(off.catProduct);
            off.temp = $filter('filter')(off.products, {brands: off.product.brands});
            off.relatedProduct = off.temp.filter(
                function(elem, index){
                    return elem._id != off.product._id;
                }
            );

            console.log(off.catProduct);
            off.items2 = off.products;
            off.cat2 = off.catProduct;
            $scope.$watch('off.search', function(val)
            {
                off.products = $filter('filter')(off.items2, val);
                off.catProduct = $filter('filter')(off.cat2, val);


            });
        });

    }

})();
