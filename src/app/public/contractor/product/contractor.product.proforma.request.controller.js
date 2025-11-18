/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorProductProformaRequestController', ContractorProductProformaRequestController);
    /*@ngNoInject*/
    function ContractorProductProformaRequestController($state, $rootScope, $stateParams, ContractorService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.contractor = {};
        vm.productProforma = {};
        vm.toggleRequestDescription = toggleRequestDescription;
        $rootScope.currentParentState = "contractorDashboard.productProforma";
        getContractorDetail($stateParams.contractorId);
        getProductProformaDetail($stateParams.proformaRequestId);

        function getContractorDetail(userId) {
            debugger;
            ContractorService.getContractorDetail(userId).then(function (response) {
                debugger;
                vm.contractor = response.data;
            }, function (error) {
                debugger;
            });

        }

        function getProductProformaDetail(proformaId) {
            debugger;
            ContractorService.getProductProformaDetail(proformaId).then(function (response) {
                debugger;
                vm.productProforma = response.data;
                vm.productProforma.userLogo = appConstant.imagePath + (vm.productProforma.user.data.file ? vm.productProforma.user.data.file.data.file_name : "uploads/profile/default_user.png");
                if (vm.productProforma.file) {
                    vm.productProforma.file.data.file_name = vm.productProforma.file.data.file_name ? appConstant.imagePath + vm.productProforma.file.data.file_name : '';

                }

            });
        }

        function toggleRequestDescription(description) {
            debugger;
            vm.currentDescription = description;
            if (vm.showDescription)
                vm.showDescription = false;
            else if (!vm.showDescription)
                vm.showDescription = true;

        }

    }

})();