/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantDashboardController', ConsultantDashboardController);
    /*@ngNoInject*/
    function ConsultantDashboardController($state,$rootScope, $stateParams) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.consultantId = $stateParams.consultantId;

        if ($rootScope.currentUser.subscriptions)
            vm.subscription = $rootScope.currentUser.subscriptions.data.package.data.package;



    }

})();