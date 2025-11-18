/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantGroupListController', ConsultantGroupListController);
    /*@ngNoInject*/
    function ConsultantGroupListController($state, $rootScope, ConsultantService) {
        var vm = this;
        $rootScope.currentParentState = "consultantDashboard.group";
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 8;
        vm.groups = [];
        vm.getUserGroup = getUserGroup;
        vm.deleteGroup = deleteGroup;

        getUserGroup();

        function getUserGroup() {
            debugger;
            ConsultantService.getUserGroup(false, $rootScope.currentUser.id).then(function (response) {
                vm.groups = response.data
            });

        }

        function deleteGroup(groupId) {
            debugger;
            ConsultantService.deleteUser(groupId).then(function (response) {
                $state.reload();
            });

        }
    }

})();