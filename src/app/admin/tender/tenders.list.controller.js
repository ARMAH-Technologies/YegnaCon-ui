/**
 * Created by Job on 7/3/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.tender')
        .controller('TendersListController', TendersListController);
    /*@ngNoInject*/
    function TendersListController($state,AdminTenderService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.getTenders = getTenders;
        vm.deleteTender = deleteTender;
        vm.tenders = [];
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 10;
        getTenders();
        function getTenders(){
            debugger;
            AdminTenderService.getTenders(vm.currentPage).then(function(response){
                debugger;
                vm.tenders = response.data;
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            },function(error){
                debugger;
            });
        }

        function deleteTender(tenderId){
            debugger;
            AdminTenderService.deleteTender(tenderId).then(function () {
                debugger;
                getTenders();
            });
        }
    }

})();