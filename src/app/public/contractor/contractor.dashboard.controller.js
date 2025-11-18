/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorDashboardController', ContractorDashboardController);
    /*@ngNoInject*/
    function ContractorDashboardController($state,$rootScope, $stateParams,ContractorService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.contractorId = $stateParams.contractorId;

        if ($rootScope.currentUser.subscriptions)
            vm.subscription = $rootScope.currentUser.subscriptions.data.package.data.package;


    }

})();