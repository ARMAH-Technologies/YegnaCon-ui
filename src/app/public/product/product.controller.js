/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.product')
        .controller('ProductController', ProductController);
    /*@ngNoInject*/
    function ProductController($state, $rootScope, ProductService, appConstant,CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentStateName = $state.current.name;
        vm.products = {};
        vm.getProducts = getProducts;
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage =  10;
        vm.coreService = CoreService;
        vm.showDetail = CoreService.showDetail;
        vm.category = "";
        vm.search = "";

        getProducts();

        function getProducts(){
            debugger;
            ProductService.getProducts(vm.currentPage, vm.category, vm.search).then(function(response){
                debugger;
                vm.products = response.data;
                if (response.data) {
                    for (var i =0; i < response.data.length; i++){
                        vm.products[i] = response.data[i];
                        vm.products[i]["logo"] = appConstant.imagePath + (response.data[i].file ? response.data[i].file.data.file_name : "uploads/product/default_product.png");
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;

            });
        }


    }

})();