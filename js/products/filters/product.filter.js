(function(){
    'use strict';

    angular
        .module('products.filters')
        .filter("filterById",function(){
            return function(objArr, id){
                var i= 0, len = objArr.length;
                for (; i<len; i++){
                    if(+objArr[i].id==+id){
                        return objArr[i];
                    }
                }
                return null;
            }
        });
})();