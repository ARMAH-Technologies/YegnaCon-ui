/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.projectOwner')
        .controller('ProjectOwnerDashboardController', ProjectOwnerDashboardController);
    /*@ngNoInject*/
    function ProjectOwnerDashboardController($state,$stateParams,ProjectOwnerService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.projectOwnersId = $stateParams.projectOwnersId;


    }

})();