/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier.tender')
        .controller('SupplierTenderController', SupplierTenderController);
    /*@ngNoInject*/
    function SupplierTenderController($state, $stateParams, $rootScope, SupplierTenderService, TenderService, PublicService) {
        var vm = this;
        $rootScope.currentParentState = "tender";
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 7;


        vm.totalItemsLatest = 0;
        vm.currentPageLatest = 1;
        vm.itemsPerPageLatest = 7;

        vm.tenders = [];
        vm.category = {};
        vm.deleteTender = deleteTender;
        vm.addTendersChoice = addTendersChoice;
        vm.getLatestTenders = getLatestTenders;
        vm.getTenders = getTenders;
        var j = 0;
        var k = 0;

        getTenders();
        getLatestTenders();
        getCategoriesByType();
        getUsersSelectedCategories();


        function getTenders() {
            SupplierTenderService.getTenders($stateParams.supplierId, vm.currentPage).then(function (response) {
                debugger;
                if (response.data) {
                    vm.tenders = response.data;
                    for (var i = 0; i < vm.tenders.length; i++) {
                        vm.tenders[i]["order"] = j + 1;
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
                console.log(response.meta.pagination);
            }, function (error) {
                debugger;
            });
        }

        function deleteTender(tenderId) {
            SupplierTenderService.deleteTender(tenderId).then(function (response) {
                getTenders();
            });
        }

        function getUsersSelectedCategories() {
            debugger;
            PublicService.getUsersSelectedCategories($stateParams.supplierId, 'Tender').then(function (response) {
                debugger;
                if (response.data) {
                    vm.category = response.data;
                }

            }, function (error) {
                debugger;
            });
        }

        function getLatestTenders() {
            debugger;
            k = vm.itemsPerPageLatest * vm.currentPageLatest - vm.itemsPerPageLatest;
            TenderService.getLatestTenders(vm.currentPageLatest).then(function (response) {
                debugger;
                if (response.data) {
                    vm.latestTenders = response.data;
                    for (var i = 0; i < vm.latestTenders.length; i++) {
                        vm.latestTenders[i]["order"] = k + 1;
                        k++;
                    }
                }

                vm.totalItemsLatest = response.meta.pagination.total;
                vm.itemsPerPageLatest = response.meta.pagination.per_page;

            }, function (error) {
                debugger;
            });
        }

        function getCategoriesByType() {
            vm.filteredTenders = [];
            debugger;
            PublicService.getCategoriesByType('Tender').then(function (response) {
                debugger;
                vm.filteredTenders = response.data;
            });
        }

        function addTendersChoice() {
            debugger;
            var categoryIds = [];
            for (var i = 0; i < vm.category.length; i++) {
                categoryIds.push(vm.category[i].id);
            }

            TenderService.addTenderChoices($rootScope.currentUser.id, {category_ids: categoryIds}).then(function (response) {
                debugger;
                getLatestTenders();
            });
        }

    }

})();