/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorGroupCreateController', ContractorGroupCreateController);
    /*@ngNoInject*/
    function ContractorGroupCreateController($state, $rootScope, $stateParams, ContractorService, PublicService, SupplierService, lodash) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.group";
        vm.types = [
            {
                name: "Supplier Category",
                type: "supplier"
            },
            {
                name: "Location",
                type: "city"
            }];
        vm.categories = [];
        vm.getCategories = getCategories;
        vm.getSuppliersByCategory = getSuppliersByCategory;
        vm.suppliers = [];
        vm.suppliersSelected = [];
        vm.suppliersSelectedId = [];
        vm.suppliersSelectedName = [];
        vm.category = {};
        vm.updateSuccess = '';
        vm.addGroup = addGroup;
        vm.checkArrayDuplicates = checkArrayDuplicates;
        vm.enableEditGroup = enableEditGroup;
        vm.clearList = clearList;

        if ($stateParams.groupId) {

            vm.newGroup = false;
            getGroupDetail();
            vm.disabled = true;
        }
        else {
            debugger;
            vm.newGroup = true;
        }

        function getCategories(type) {
            debugger;
            PublicService.getCategoriesByType(type).then(function (response) {
                vm.categories = response.data;
            });
        }

        function getSuppliersByCategory(categoryID) {
            debugger;
            vm.suppliers = [];
            SupplierService.getSupplierByCategory(categoryID).then(function (response) {
                vm.suppliers = response.data;
            });
        }

        function addGroup(isValid) {
            debugger;
            var data = {
                group: {
                    name: vm.group.name,
                    type: "Proforma Group"
                }
            };
            var suppliers = {
                users: lodash.uniq(vm.suppliersSelectedId)
            };
            if (isValid) {
                if (vm.newGroup) {
                    ContractorService.postUserGroup(data).then(function (response) {
                        debugger;
                        var groupId = response.data.original.id;
                        ContractorService.addMembersToGroup(groupId, suppliers).then(function (response) {
                            vm.updateSuccess = "Group Saved ";
                            $state.go('main.public.contractorDashboard.groupList');
                        });
                    });
                }
                else {
                    var updatedGroup = {
                        group: {
                            name: vm.group.name,
                            type: "Proforma Group"
                        },
                        users: lodash.uniq(vm.suppliersSelectedId)
                    };
                    ContractorService.updateGroup($stateParams.groupId, updatedGroup).then(function (response) {
                        vm.updateSuccess = "Group Saved ";
                        $state.go('main.public.contractorDashboard.groupList');
                    });
                }

            }
        }

        function checkArrayDuplicates() {
            debugger;
            for (var i = 0; i < vm.suppliersSelected.length; i++) {
                vm.suppliersSelectedId.push(vm.suppliersSelected[i].id);
                vm.suppliersSelectedName.push(vm.suppliersSelected[i].name);
            }
            vm.suppliersSelectedName = lodash.uniq(vm.suppliersSelectedName);
            vm.suppliersSelectedId = lodash.uniq(vm.suppliersSelectedId);
        }

        function getGroupDetail() {
            debugger;
            ContractorService.getGroupDetail($stateParams.groupId).then(function (response) {
                vm.group = response.data;
                for (var i = 0; i < vm.group.users.length; i++) {
                    vm.suppliersSelectedName.push(vm.group.users[i].name);
                }
            });

        }

        function enableEditGroup() {
            debugger;
            vm.disabled = false;
        }

        function clearList() {
            debugger;
            vm.suppliersSelectedName = [];
            vm.suppliersSelectedId = [];
        }
    }


})();