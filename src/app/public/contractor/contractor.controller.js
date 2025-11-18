/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorController', ContractorController);
    /*@ngNoInject*/
    function ContractorController($state,ContractorService,$rootScope, CoreService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentStateName = $state.current.name;
        vm.getContractors = getContractors;
        vm.contractors = {};
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage =  8;
        vm.coreService = CoreService;
        vm.showDetail = CoreService.showDetail;
        vm.level = "";
        vm.type = "";
        vm.search = "";

        getContractors();

        function getContractors(){
            debugger;
            ContractorService.getContractors(vm.currentPage, vm.level, vm.type, vm.search).then(function(response){
                debugger;
                vm.contractors = response.data;
                if (response.data){
                    for (var i = 0; i < response.data.length; i++){
                        vm.contractors[i] = response.data[i];
                        vm.contractors[i]["image"] = appConstant.imagePath + (response.data[i].file ? response.data[i].file.data.file_name : "uploads/profile/default_company.png");
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;

            });
        }


    }

})();