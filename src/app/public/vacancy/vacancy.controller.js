/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.vacancy')
        .controller('VacancyController', VacancyController);
    /*@ngNoInject*/
    function VacancyController($state, VacancyService,$rootScope,PublicService, CoreService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentStateName = $state.current.name;
        vm.getVacancies = getVacancies;
        vm.vacancies = [];
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 8;
        vm.coreService = CoreService;
        vm.getVacancies = getVacancies;
        vm.today = new Date();
        vm.showDetail = CoreService.showDetail;
        vm.field = "";
        vm.location = "";
        vm.search = "";

        getVacancies();
        getCategoriesByType();

        function getVacancies() {
            VacancyService.getVacancies(vm.currentPage, vm.field, vm.location, vm.search).then(function (response) {
                debugger;
                vm.vacancies = response.data;
                if (response.data){
                    for (var i = 0; i < response.data.length; i++){
                        vm.vacancies[i] = response.data[i];
                        vm.vacancies[i]["image"] = appConstant.imagePath + (response.data[i].file ? response.data[i].file.data.file_name : "uploads/project/project-default.jpg");
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            });

        }


        function getCategoriesByType(){
            vm.filteredTenders = [];
            debugger;
            PublicService.getCategoriesByType('Vacancy').then(function(response){
                debugger;
                vm.filteredVacancy = response.data;
            });
        }

    }

})();