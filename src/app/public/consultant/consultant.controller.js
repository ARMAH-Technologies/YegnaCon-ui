/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantController', ConsultantController);
    /*@ngNoInject*/
    function ConsultantController($state,$rootScope,ConsultantService,CoreService, appConstant) {
        var vm = this;
        $rootScope.currentStateName = $state.current.name;
        vm.currentState = $state.current.name;
        vm.getConsultants = getConsultants;
        vm.consultants = {};
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage =  8;
        vm.coreService = CoreService;
        vm.level = "";
        vm.type = "";
        vm.search = "";

        getConsultants();
        vm.showDetail = CoreService.showDetail;

        function getConsultants(){
            debugger;
            ConsultantService.getConsultants(vm.currentPage, vm.level, vm.type, vm.search).then(function(response){
                debugger;
                vm.consultants = response.data;
                if (response.data){
                    for (var i = 0; i < response.data.length; i++){
                        vm.consultants[i] = response.data[i];
                        vm.consultants[i]["image"] = appConstant.imagePath + (response.data[i].file ? response.data[i].file.data.file_name : "uploads/profile/default_company.png");
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;

            });
        }




    }

})();