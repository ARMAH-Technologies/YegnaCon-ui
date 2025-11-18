/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorProductProformaController', ContractorProductProformaController);
    /*@ngNoInject*/
    function ContractorProductProformaController($state, $stateParams, $rootScope, ContractorService) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.productProforma";
        vm.currentState = $state.current.name;
        vm.contractor = {};
        vm.productProformas = [];
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 10;
        vm.getProductProformas = getProductProformas;
        debugger;
        getContractorDetail($stateParams.contractorId);
        getProductProformas($stateParams.contractorId);

        function getContractorDetail(userId) {
            debugger;
            ContractorService.getContractorDetail(userId).then(function (response) {
                debugger;
                vm.contractor = response.data;
            });

        }

        function getProductProformas() {
            debugger;
            ContractorService.getProductProformas($stateParams.contractorId,vm.currentPage).then(function (response) {
                debugger;
                vm.productProformas = response.data;
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            });
        }

    }

})();