/**
 * Created by acer1 on 8/3/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorProductProformaRepliesController', ContractorProductProformaRepliesController);
    /*@ngNoInject*/
    function ContractorProductProformaRepliesController($state,$rootScope, $stateParams, ContractorService) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.productProforma";
        vm.currentState = $state.current.name;
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 10;
        vm.getProformaReplies = getProformaReplies;

        getProformaReplies();
        getProformaComparison($stateParams.proformaRequestId);


        function getProformaReplies() {
            debugger;
            ContractorService.getProformaReplies($stateParams.proformaRequestId, vm.currentPage).then(function (response) {
                debugger;
                vm.proformaReplies = response.data;
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            });
        }

        function getProformaComparison(proformaId) {
            debugger;
            ContractorService.getProformaComparison(proformaId).then(function (response) {
                debugger;
                vm.productReplies = response.data;
            });
        }
    }

})();

