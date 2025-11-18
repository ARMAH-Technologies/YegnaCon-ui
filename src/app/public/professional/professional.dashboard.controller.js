/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.professional')
        .controller('ProfessionalDashboardController', ProfessionalDashboardController);
    /*@ngNoInject*/
    function ProfessionalDashboardController($state,$stateParams,ProfessionalService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.professionalId = $stateParams.professionalId;


    }

})();