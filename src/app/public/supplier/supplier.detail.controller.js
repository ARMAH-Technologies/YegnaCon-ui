/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier')
        .controller('SupplierDetailController', SupplierDetailController);
    /*@ngNoInject*/
    function SupplierDetailController($state,$stateParams,SupplierService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.supplier = {};
        getSupplierDetail($stateParams.supplierId);
        vm.products = [];
        getSupplierProducts($stateParams.supplierId);
        vm.dumpHTML = function (html) {
            return html;
        };
        function getSupplierDetail(userId){
            debugger;
            SupplierService.getSupplierDetail(userId).then(function(response){
                debugger;
                vm.supplier = response.data;
                vm.supplier["logo"] = appConstant.imagePath + (vm.supplier.file ? vm.supplier.file.data.file_name : "uploads/profile/default_user.png");
            });

        }
        function getSupplierProducts(userId){
            debugger;
            SupplierService.getSupplierProducts(userId).then(function(response){
                vm.products = response.data;
                if (vm.products){
                    for (var i = 0; i < vm.products.length; i++){
                        vm.products[i]["logo"] = appConstant.imagePath + (vm.products[i].file ? vm.products[i].file.data.file_name : "uploads/profile/default_company.png");
                    }
                }
                debugger;
            });
        }
    }

})();