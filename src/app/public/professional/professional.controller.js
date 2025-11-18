/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.professional')
        .controller('ProfessionalController', ProfessionalController);
    /*@ngNoInject*/
    function ProfessionalController($state,$rootScope,ProfessionalService,CoreService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentStateName = $state.current.name;
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage =  10;
        vm.itemsPerPage =  10;
        vm.professionals = [];
        vm.coreService = CoreService;
        vm.getProfessionals = getProfessionals;
        vm.showDetail = CoreService.showDetail;
        vm.field = "";
        vm.experience = "";
        vm.search = "";

        getProfessionals();

        function getProfessionals() {
            debugger;
            ProfessionalService.getProfessionals(vm.currentPage, vm.field, vm.experience, vm.search).then(function (response){
                debugger;
                vm.professionals = response.data;
                if (response.data) {
                    for (var i = 0; i < response.data.length; i++) {
                        vm.professionals[i] = response.data[i];
                        vm.professionals[i]["image"] = appConstant.imagePath + (response.data[i].file ? response.data[i].file.data.file_name : "uploads/profile/default_user.png");
                    }

                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            });
        }


    }

})();