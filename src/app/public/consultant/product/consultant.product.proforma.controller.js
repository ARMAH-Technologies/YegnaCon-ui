/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantProductProformaController', ConsultantProductProformaController);
    /*@ngNoInject*/
    function ConsultantProductProformaController($state,$rootScope, $stateParams, ConsultantService) {
        var vm = this;
        $rootScope.currentParentState = "consultantDashboard.productProforma";
        vm.currentState = $state.current.name;
        vm.consultant = {};
        vm.productProformas = [];


        getConsultantDetail($stateParams.consultantId);
        getProductProformas($stateParams.consultantId);

        function getConsultantDetail(userId) {
            debugger;
            ConsultantService.getConsultantDetail(userId).then(function (response) {
                debugger;
                vm.consultant = response.data;
            });

        }

        function getProductProformas(userId) {
            debugger;
            ConsultantService.getProductProformas(userId).then(function (response) {
                debugger;
                vm.productProformas = response.data;

            }, function (error) {
                debugger;
            });
        }

    }

})();