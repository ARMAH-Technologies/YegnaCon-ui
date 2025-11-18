/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier')
        .controller('SupplierProformaController', SupplierProformaController);
    /*@ngNoInject*/
    function SupplierProformaController($state,$rootScope,$stateParams, SupplierService) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentParentState = "proforma";
        vm.getProformaRequest = getProformaRequest;
        vm.proforma = [];

        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 7;


        getProformaRequest();

        function getProformaRequest() {
            debugger;
            SupplierService.getSupplierProforma($rootScope.currentUser.id,vm.currentPage).then(function (response) {
                debugger;
                vm.proforma = response.data;
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            });
        }
    }

})();