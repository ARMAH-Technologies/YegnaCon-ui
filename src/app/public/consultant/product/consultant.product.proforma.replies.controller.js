/**
 * Created by acer1 on 8/2/2016.
 */

(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantProductProformaRepliesController', ConsultantProductProformaRepliesController);
    /*@ngNoInject*/
    function ConsultantProductProformaRepliesController($state, $stateParams, ConsultantService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.consultant = [];
        vm.productProformas = [];
        debugger;


        getProformaReplies($stateParams.proformaRequestId);
        getProformaComparison($stateParams.proformaRequestId);


        function getProformaReplies(proformaId) {
            debugger;
            ConsultantService.getProformaReplies(proformaId).then(function (response) {
                debugger;
                vm.ProformaRelies = response.data;
            });
        }

        function getProformaComparison(proformaId) {
            debugger;
            ConsultantService.getProformaComparison(proformaId).then(function (response) {
                debugger;
                vm.productReplies = response.data;
            });
        }

    }

})();