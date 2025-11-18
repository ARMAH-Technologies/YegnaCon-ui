/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier')
        .controller('SupplierProductController', SupplierProductController);
    /*@ngNoInject*/
    function SupplierProductController($state,$rootScope, $stateParams,SupplierService) {
        var vm = this;
        $rootScope.currentParentState = "myProducts";
        vm.currentState = $state.current.name;
        vm.supplier = {};
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage =  8;
        vm.deleteProduct = deleteProduct;

        //Text editor options
        vm.options= {
            language: 'en',
            allowedContent: true,
            entities: false
        };
        vm.onReady =function () {

        };


        //vm.getSupplierProducts = getSupplierProducts;
        getSupplierDetail($stateParams.supplierId);
        vm.products = [];
        getSupplierProducts();

        function getSupplierDetail(userId){
            debugger;
            SupplierService.getSupplierDetail(userId).then(function(response){
                debugger;
                vm.supplier = response.data;
            });

        }
        function getSupplierProducts(){
            debugger;
            SupplierService.getSupplierProducts($stateParams.supplierId, vm.currentPage).then(function(response){
                debugger;
                if (response.data) {
                    vm.products = response.data;
                    for (var i = 0; i < vm.products.length; i++){
                        vm.products[i]["order"] = i+1;
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            });
        }

        function deleteProduct(productId){
            SupplierService.deleteProduct(productId).then(function(response){
               getSupplierProducts();
            });
        }

    }

})();