/**
 * Created by Job on 7/3/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.vacancy')
        .controller('VacancyAddController', VacancyAddController);

    function VacancyAddController($state, AdminVacancyService,AdminService, CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.vacancy = {
            "vacancy": {
                "title": "",
                "category": "",
                "contract": "",
                "education_level": "",
                "experience": "",
                "salary": 0,
                "work_place": "",
                "description": "",
                "closing_date": new Date()
            },
            "userId": "",
            "company": {
                "name": "",
                "email": ""
            },
            "address": {
                "phone_number_1": "",
                "phone_number_2": "",
                "country": "",
                "city": "",
                "sub_city": "",
                "house_no": "",
                "specific_address": "",
                "latitude": 9.52147899,
                "longitude": 8.34578966,
                "website": "",
                "facebook_link": "",
                "twitter_link": "",
                "linkidin_link": "",
                "google_link": "",
                "instagram_link": ""
            }
        };
        vm.locations = CoreService.locations;
        vm.addVacancy = addVacancy;
        vm.salarySet = salarySet;
        vm.contracts = CoreService.contracts;
        vm.educationalLevel = CoreService.professionalsEducation;
        vm.experience = CoreService.professionalsExperience;

        //Editor Options CKEDITOR
        vm.editorOptions = {
            language: 'en',
            allowedContent: true,
            entities: false
        };

        //Company Form
        vm.companies = [];
        vm.companyType = "existingCompany";
        getCompanies();
        getCategoriesByType();


        //END Company Form
        function addVacancy() {
            debugger;
            var vacancy;
            if (vm.companyType == "newCompany") {
                vacancy = {
                    "vacancy": vm.vacancy.vacancy,
                    "company": vm.vacancy.company,
                    "address": vm.vacancy.address
                };

            } else {
                vacancy = {
                    "vacancy": vm.vacancy.vacancy,
                    "userId": vm.vacancy.userId
                };
            }

            AdminVacancyService.addVacancy(vacancy).then(function (response) {
                debugger;
                $state.go("main.admin.vacancy.list");
            }, function (error) {
                debugger;
            })
        }

        function getCompanies() {
            debugger;
            AdminVacancyService.getCompanies().then(function (response) {
                debugger;
                vm.companies = response.data;
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

        function getCategoriesByType(){
            vm.filteredTenders = [];
            debugger;
            AdminService.getCategoriesByType('Vacancy').then(function(response){
                debugger;
                vm.filteredTenders = response.data;
            });
        }

    }

})();