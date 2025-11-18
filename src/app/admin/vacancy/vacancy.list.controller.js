/**
 * Created by Job on 7/5/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.vacancy')
        .controller('VacancyListController', VacancyListController);

    function VacancyListController($state, AdminVacancyService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.getVacancies = getVacancies;
        vm.vacancies = [];
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 10;
        vm.deleteVacancy = deleteVacancy;

        getVacancies();
        function getVacancies() {
            debugger;
            AdminVacancyService.getVacancies(vm.currentPage).then(function (response) {
                debugger;
                vm.vacancies = response.data;
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            }, function (error) {
                debugger;
            });
        }

        function deleteVacancy(vacancyId) {
            debugger;
            AdminVacancyService.deleteVacancy(vacancyId).then(function () {
                debugger;
                getVacancies();
            });
        }
    }

})();