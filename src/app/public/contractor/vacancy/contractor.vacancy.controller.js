/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.vacancy')
        .controller('ContractorVacancyController', ContractorVacancyController);
    /*@ngNoInject*/
    function ContractorVacancyController($state,$stateParams,$rootScope, ContractorVacancyService) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.vacancy";
        vm.currentState = $state.current.name;
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage =  8;
        vm.vacancies = [];
        vm.deleteVacancy = deleteVacancy;

        vm.getVacancies = getVacancies;
        getVacancies();
        function getVacancies(){
            ContractorVacancyService.getVacancies($stateParams.contractorId, vm.currentPage).then(function(response){
               debugger;
                if (response.data){
                    vm.vacancies = response.data;
                    for (var i = 0; i < vm.vacancies.length; i++){
                        vm.vacancies[i]["order"] = i+1;
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;

            }, function(error){
                debugger;
            });
        }

        function deleteVacancy(vacancyId){
            ContractorVacancyService.deleteVacancy(vacancyId).then(function(response){
                getVacancies();
            });
        }

    }

})();