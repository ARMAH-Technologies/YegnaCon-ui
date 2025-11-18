/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier.vacancy')
        .controller('SupplierVacancyCreateController', SupplierVacancyCreateController);
    /*@ngNoInject*/
    function SupplierVacancyCreateController($state, $stateParams, SupplierVacancyService, CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.coreService = CoreService;
        vm.vacancy = [];
        vm.createVacancy = createVacancy;
        vm.updateSuccess = '';
        vm.salarySet = salarySet;
        vm.coreService = CoreService;

        debugger;
        vm.vacancy_label = "Post Vacancy";
        if ($stateParams.edit){
            vm.vacancy_label = "Update";
            getVacancy();
        }

        function getVacancy(){
            SupplierVacancyService.getVacancy($stateParams.vacancyId).then(function(response){
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
                    "userId": $stateParams.supplierId
                };
                SupplierVacancyService.createVacancy(vacancy).then(function(response){
                    debugger;
                    $state.go("main.public.supplierDashboard.vacancy");
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
            SupplierVacancyService.editVacancy(vacancy).then(function (response) {
                debugger;
                vm.updateSuccess = "Update successful!"
            }, function (error) {
                debugger;
            });
        }

        function salarySet() {
            if (vm.salary == 'Negotiable') {
                debugger;
                vm.salaryDisable = true;
                vm.vacancy.vacancy.salary = 0;
            }
            else {
                debugger;
                vm.salaryDisable = false;
            }

        }

    }

})();