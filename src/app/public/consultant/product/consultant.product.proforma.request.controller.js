/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantProductProformaRequestController', ConsultantProductProformaRequestController);
    /*@ngNoInject*/
    function ConsultantProductProformaRequestController($state, $stateParams, ConsultantService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.consultant = {};
        vm.productProforma = {};
        vm.toggleRequestDescription = toggleRequestDescription;
        debugger;
        getConsultantDetail($stateParams.consultantId);
        getProductProformaDetail($stateParams.proformaRequestId);

        function getConsultantDetail(userId) {
            debugger;
            ConsultantService.getConsultantDetail(userId).then(function (response) {
                debugger;
                vm.consultant = response.data;
            }, function (error) {
                debugger;
            });

        }

        function getProductProformaDetail(proformaId) {
            debugger;
            ConsultantService.getProductProformaDetail(proformaId).then(function (response) {
                debugger;
                vm.productProforma = response.data;
                vm.productProforma.userLogo = appConstant.imagePath + (vm.productProforma.user.data.file ? vm.productProforma.user.data.file.data.file_name : "uploads/profile/default_user.png");
                vm.productProforma.file.data.file_name = appConstant.imagePath + vm.productProforma.file.data.file_name;
            }, function (error) {
                debugger;

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