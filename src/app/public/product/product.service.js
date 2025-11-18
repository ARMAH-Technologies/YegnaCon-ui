/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.product')
        .service('ProductService', ProductService);
    /*@ngNoInject*/
    function ProductService(TokenRestangular) {
        var service = {
            getProducts: getProducts,
            getProductDetail: getProductDetail,
            getSupplierProducts:getSupplierProducts
        };

        return service;
        function getProducts(currentPage, category, search) {
            debugger;
            return TokenRestangular.all('products?page=' + currentPage + '&category=' + category + '&search=' + search).customGET('');
        }

        function getProductDetail(productId) {
            debugger;
            return TokenRestangular.all('products/' + productId).customGET('');
        }

        function getSupplierProducts(userId) {
            debugger;
            return TokenRestangular.all('users/' + userId + '/products').customGET('');
        }


    }

})();