/**
 * Created by Job on 7/3/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.tender')
        .controller('TenderAddController', TenderAddController);
    /*@ngNoInject*/
    function TenderAddController($state, AdminTenderService,AdminService, CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.tender = {
            "tender": {
                "title": "",
                "category": "",
                "document_price": 0,
                "bid_bond": 0,
                "opening_date": new Date(),
                "closing_date": new Date(),
                "description": ""
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
        vm.addTender = addTender;


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
        function addTender() {
            debugger;
            var tender;
            if (vm.companyType == "newCompany") {
                tender = {
                    "tender": vm.tender.tender,
                    "company": vm.tender.company,
                    "address": vm.tender.address
                };

            } else {
                tender = {
                    "tender": vm.tender.tender,
                    "userId": vm.tender.userId
                };
            }



            AdminTenderService.addTender(tender).then(function (response) {
                debugger;
                $state.go("main.admin.tender.list");
            }, function (error) {
                debugger;
            })
        }

        function getCompanies() {
            debugger;
            AdminTenderService.getCompanies().then(function (response) {
                debugger;
                vm.companies = response.data;
            }, function (error) {
                debugger;
            });
        }

        function getCategoriesByType(){
            vm.filteredTenders = [];
            debugger;
            AdminService.getCategoriesByType('Tender').then(function(response){
                debugger;
                vm.filteredTenders = response.data;
            });
        }

    }

})();