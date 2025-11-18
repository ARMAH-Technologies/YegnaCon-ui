/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.product')
        .controller('ProductDetailController', ProductDetailController);
    /*@ngNoInject*/
    function ProductDetailController($state, $stateParams, ProductService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.product = {};
        vm.getProductDetail = getProductDetail;

        vm.dumpHTML = function (html) {
            return html;
        };
        getProductDetail($stateParams.productId);

        function getProductDetail(productId) {
            debugger;
            ProductService.getProductDetail(productId).then(function (response) {
                debugger;
                vm.product = response.data;
                vm.product["logo"] = appConstant.imagePath + (vm.product.file ? vm.product.file.data.file_name : "uploads/product/default_product.png");
                getSupplierProducts(vm.product.supplier.data.supplier_id);
            });

        }

        function getSupplierProducts(supplierId) {
            debugger;
            ProductService.getSupplierProducts(supplierId).then(function (response) {
                debugger;
                vm.relatedProducts = [];
                var data = response.data;
                if (data.length < 3) {
                    for (var i = 0; i < data.length; i++) {
                        vm.relatedProducts[i] = data[i];
                        vm.relatedProducts[i]["logo"] = appConstant.imagePath + (vm.relatedProducts.file ? vm.relatedProducts.file.data.file_name : "uploads/product/default_product.png");
                    }
                }
                else {
                    for (var i = 0; i < 3; i++) {
                        vm.relatedProducts[i] = data[i];
                        vm.relatedProducts[i]["logo"] = appConstant.imagePath + (vm.relatedProducts.file ? vm.relatedProducts.file.data.file_name : "uploads/product/default_product.png");
                    }
                }

            });
        }
    }

})();