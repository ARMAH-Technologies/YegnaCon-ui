/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.product')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.product', {
                url: "/product",
                templateUrl: "app/public/product/product.html",
                controller: 'ProductController',
                controllerAs: 'vm'
            }).state('main.public.productDetail', {
                url: "/productdetail/{productId}",
                templateUrl: "app/public/product/product.detail.html",
                controller: 'ProductDetailController',
                controllerAs: 'vm'
            });


    }
})();