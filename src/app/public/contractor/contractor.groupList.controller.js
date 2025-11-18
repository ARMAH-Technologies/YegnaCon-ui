/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorGroupListController', ContractorGroupListController);
    /*@ngNoInject*/
    function ContractorGroupListController($state, $rootScope, ContractorService) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.group";
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 8;
        vm.groups = [];
        vm.getUserGroup = getUserGroup;
        vm.deleteGroup = deleteGroup;

        getUserGroup();

        function getUserGroup() {
            debugger;
            ContractorService.getUserGroup(false, $rootScope.currentUser.id).then(function (response) {
                vm.groups = response.data
            });

        }

        function deleteGroup(groupId) {
            debugger;
            ContractorService.deleteUser(groupId).then(function (response) {
                $state.reload();
            });

        }
    }

})();