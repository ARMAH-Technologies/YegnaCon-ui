/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier')
        .controller('SupplierController', SupplierController);
    /*@ngNoInject*/
    function SupplierController($state, $rootScope, SupplierService, appConstant, CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentStateName = $state.current.name;
        vm.getSuppliers = getSuppliers;
        vm.suppliers = {};
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 10;
        vm.locations = CoreService.locations;
        vm.showDetail = CoreService.showDetail;
        vm.location = "";
        vm.category = "";
        vm.search = "";

        getSuppliers();
        getCategories();

        function getSuppliers(){
            debugger;
            SupplierService.getSuppliers(vm.currentPage, vm.category, vm.location, vm.search).then(function(response){
                debugger;
                vm.suppliers = response.data;
                if (response.data) {
                    for (var i =0; i < response.data.length; i++){
                        vm.suppliers[i] = response.data[i];
                        vm.suppliers[i]["image"] = appConstant.imagePath + (response.data[i].file ? response.data[i].file.data.file_name : "uploads/profile/default_company.png");
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;

            });
        }

        function getCategories(){
            SupplierService.getCategories().then(function(response){
                vm.categories = [];
                for (var i = 0; i < response.data.length; i++){
                    vm.categories[i] = response.data[i];
                }
            });
        }


    }

})();