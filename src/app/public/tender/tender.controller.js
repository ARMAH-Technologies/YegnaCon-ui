/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.tender')
        .controller('TenderController', TenderController);
    /*@ngNoInject*/
    function TenderController($rootScope,$state, CoreService,PublicService, TenderService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentStateName = $state.current.name;
        vm.getTenders = getTenders;
        vm.tenders = [];
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 8;
        vm.category = "";
        vm.status = "";
        vm.search = "";

        getTenders();
        getCategoriesByType();
        vm.showDetail = CoreService.showDetail;

        function getTenders() {
            debugger;
            TenderService.getTenders(vm.currentPage, vm.category, vm.status, vm.search).then(function (response) {
                debugger;
                vm.tenders = response.data;
                if (response.data){
                    for (var i = 0; i < response.data.length; i++){
                        vm.tenders[i] = response.data[i];
                        vm.tenders[i]["image"] = appConstant.imagePath + (response.data[i].file ? response.data[i].file.data.file_name : "uploads/project/project-default.jpg");
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;

            });
        }

        function getCategoriesByType(){
            vm.filteredTenders = [];
            debugger;
            PublicService.getCategoriesByType('Tender').then(function(response){
                debugger;
                vm.filteredTenders = response.data;
            });
        }


    }

})();