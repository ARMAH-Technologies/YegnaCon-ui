/**
 * Created by Nejib on 11/27/2016.
 */

(function () {
    'use strict';

    angular
        .module('app.public.home')
        .controller('OtherServicesController', OtherServicesController).filter();

    function OtherServicesController($state, $rootScope,CoreService,SupplierService,appConstant) {
        var vm = this;
        vm.showDetail = CoreService.showDetail;
        vm.suppliers = [];
        vm.banksCategory = "cee4285c-c6f8-44a9-85c8-23cbf56623c9"; //banks
        vm.insuranceCategory = "00f95d78-ecf3-45f8-9829-ce418482ccac"; //banks
        vm.currentPage = 1;
        vm.location ='';
        vm.search = '';
        vm.getOtherService = getOtherService;


        getOtherService(vm.banksCategory);

        function getOtherService(category) {
            debugger;
            vm.suppliers = [];
            SupplierService.getSuppliers(vm.currentPage, category, vm.location, vm.search).then(function (response) {
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
    }

})();