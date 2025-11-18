/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.vacancy')
        .controller('ConsultantVacancyCreateController', ConsultantVacancyCreateController);
    /*@ngNoInject*/
    function ConsultantVacancyCreateController($state, $stateParams, ConsultantVacancyService, CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.coreService = CoreService;
        vm.vacancy = [];
        vm.createVacancy = createVacancy;
        vm.updateSuccess = '';
        vm.editorOptions = CoreService.editorOptions;
        vm.professionalTitle = CoreService.professionalTitle;
        vm.locations = CoreService.locations;

        debugger;
        vm.vacancy_label = "Add Vacancy";
        if ($stateParams.edit){
            vm.vacancy_label = "Update Vacancy";
            getVacancy();
        }

        function getVacancy(){
            ConsultantVacancyService.getVacancy($stateParams.vacancyId).then(function(response){
                vm.vacancy = response.data;
                vm.vacancy.closing_date = new Date(vm.vacancy.closing_date);
            });
        }

        function createVacancy(isValid){
            if (isValid){
                if ($stateParams.edit){
                    updateVacancy();
                    return;
                }
                var vacancy = {
                    "vacancy": {
                        "title": vm.vacancy.title,
                        "category": vm.vacancy.category,
                        "contract": vm.vacancy.contract,
                        "education_level": vm.vacancy.education_level,
                        "experience": vm.vacancy.experience,
                        "salary": vm.vacancy.salary,
                        "work_place": vm.vacancy.work_place,
                        "description": vm.vacancy.description,
                        "closing_date": vm.vacancy.closing_date
                    },
                    "userId": $stateParams.consultantId
                };
                ConsultantVacancyService.createVacancy(vacancy).then(function(response){
                    debugger;
                    $state.go("main.public.consultantDashboard.vacancy");
                }, function(response){
                    debugger;
                });
            }
        }

        function updateVacancy(){
            var vacancy = {
                "vacancy": {
                    "id": vm.vacancy.id,
                    "title": vm.vacancy.title,
                    "category": vm.vacancy.category,
                    "contract": vm.vacancy.contract,
                    "education_level": vm.vacancy.education_level,
                    "experience": vm.vacancy.experience,
                    "salary": vm.vacancy.salary,
                    "work_place": vm.vacancy.work_place,
                    "description": vm.vacancy.description,
                    "closing_date": vm.vacancy.closing_date
                }
            };
            ConsultantVacancyService.editVacancy(vacancy).then(function (response) {
                debugger;
                vm.updateSuccess = "Update successful!"
            }, function (error) {
                debugger;
            });
        }

    }

})();