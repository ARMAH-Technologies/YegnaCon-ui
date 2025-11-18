/**
 * Created by Job on 7/5/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.vacancy')
        .controller('VacancyEditController', VacancyEditController);

    function VacancyEditController($state,$stateParams,AdminVacancyService,CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.getVacancy = getVacancy;
        vm.updateVacancy = updateVacancy;
        vm.editorOptions = CoreService.editorOptions;

        vm.contracts = CoreService.contracts;
        vm.educationalLevel = CoreService.professionalsEducation;
        vm.experience = CoreService.professionalsExperience;

        getVacancy($stateParams.vacancyId);

        function getVacancy(vacancyId){
            debugger;
            AdminVacancyService.getVacancy(vacancyId).then(function(response){
                debugger;
                vm.vacancy = response.data;
                vm.vacancy.closing_date = new Date(vm.vacancy.closing_date);
            },function(error){
                debugger;
            });
        }
        function updateVacancy(){
            debugger;
            var vacancy = {
                'vacancy': {
                    'id': vm.vacancy.id,
                    "title": vm.vacancy.title,
                    "category":vm.vacancy.category,
                    "contract": vm.vacancy.contract,
                    "education_level": vm.vacancy.education_level,
                    "experience":vm.vacancy.experience,
                    "salary": vm.vacancy.education_level,
                    "work_place":vm.vacancy.work_place,
                    "description": vm.vacancy.description,
                    "closing_date": vm.vacancy.closing_date,
                }
            };
            debugger;
            AdminVacancyService.updateVacancy(vacancy).then(function(response){
                debugger;
                $state.go('main.admin.vacancy.list');
            },function(error){
                debugger;
            })

        }
    }

})();