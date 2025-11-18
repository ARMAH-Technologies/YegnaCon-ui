/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier')
        .controller('SupplierDashboardController', SupplierDashboardController);
    /*@ngNoInject*/
    function SupplierDashboardController($state, $rootScope, $stateParams) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.supplierId = $stateParams.supplierId;

        if ($rootScope.currentUser.subscriptions)
            vm.subscription = $rootScope.currentUser.subscriptions.data.package.data.package;


    }

})();