/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.vacancy')
        .controller('ConsultantVacancyController', ConsultantVacancyController);
    /*@ngNoInject*/
    function ConsultantVacancyController($state,$stateParams,$rootScope,ConsultantVacancyService) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentParentState = "consultantDashboard.vacancy";
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 8;
        vm.vacancies = [];
        vm.deleteVacancy = deleteVacancy;

        vm.getVacancies = getVacancies;
        getVacancies();
        function getVacancies(){
            ConsultantVacancyService.getVacancies($stateParams.consultantId, vm.currentPage).then(function(response){
               debugger;
                if (response.data){
                    vm.vacancies = response.data;
                    for (var i = 0; i < vm.vacancies.length; i++) {
                        vm.vacancies[i]["order"] = i + 1;
                    }
                }

                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;

            }, function(error){
                debugger;
            });
        }

        function deleteVacancy(vacancyId){
            ConsultantVacancyService.deleteVacancy(vacancyId).then(function(response){
                getVacancies();
            });
        }

    }

})();