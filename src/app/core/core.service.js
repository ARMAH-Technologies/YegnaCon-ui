/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .service('CoreService', CoreService);
    /*@ngNoInject*/
    function CoreService(TokenRestangular, $sce, $rootScope, $state) {
        var service = {

            companyLevels: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'],
            contractorTypes: ['GC (General Contractors)', 'BC (Building Contractors)', ' RC (Road Contractors)', 'SC (Specialized Contractors)'],
            consultantTypes: ['GC (General  Consultants)', 'BC (Building Consultants)', ' RC (Road Consultants)', 'SC (Specialized Consultants)'],
            companyTypes: ['GC (General Contractors)', 'BC (Building Contractors)', ' RC (Road Contractors)', 'SC (Specialized Contractors)',
                'GC (General  Consultants)', 'BC (Building Consultants)', ' RC (Road Consultants)', 'SC (Specialized Consultants)'],
            professionalsEducation: ['Certificate', 'Diploma', 'BSc', 'BA', 'MSc', 'PHD'],
            professionalsExperience: ['Entry Level(Fresh Graduate)', 'Junior Level (1 - 2 Years', 'Mid Level (2 - 5 Years', 'Senior Level (5+ Years)'],
            locations: ['Addis Ababa', 'Adama', 'Awassa', 'Bahirdar', 'Dredawa', 'Dessie', 'Gambela', 'Jemma', 'Mekele'],
            units: ['pcs', 'quinta', 'm3', 'm2', 'm', 'mm', 'gallon', 'kg', 'g', 'lt'],
            city: ['Addis Ababa', 'Adama', 'Awassa', 'Bahirdar', 'Dredawa', 'Jimma', 'Mekele', 'Gambella', 'Dessie', 'Harar', 'Jijga'],
            contracts: ['Full time', 'Contract'],
            categories: ["Water Engineering Machinery", "Building and Finishing Materials",
                "Building Construction", "Road and Bridge Construction", "Architectural and Construction Design"],
            supplierCategories: ["Land and building development", "Aluminum", "Ceramics and Sanitaries", "H. Metal and industrial engineering",
                "Industrial safety equipment", "Road construction materials", "Electrical",
                "Communication equipments", "Building materials", "Mechanical (solar and sanitary)",
                "Construction machinery and equipment", "Geological", "Pre-engineering system", "Rental"],

            vacancyCategories: ["Admin, Secretarial and Clerical", "Agriculture", "Automotive", " Insurance and Banking", "Biotech and Pharmaceutical", "Business and Management", "Business Development", "Consultancy and Training", "Creative Arts", "Customer Service", "Economics", "Education", "Engineering and Construction", "Event Management ", "FMCG, Retail and Wholesale", "Health Care", "Hospitality ", "Human Resources ", "Information Technology ", "Inventory and Stock ",
                "Legal ", "Logistics and Transportation ", "Management  ", "Manufacturing ", "Sales and Marketing ", "Media and Journalism ", "Natural Resources and Environment ", "Natural Sciences  ", "Purchasing and Procurement ", "Quality Control and Safety  ", "Research  ", "Science and Technology  ", "Social Sciences and Community  ", "Telecommunications  ", "Water and Sanitation"],
            //Editor Options CKEDITOR
            editorOptions: {
                language: 'en',
                allowedContent: true,
                entities: false
            },
            projectOwnerTypes: ["Private", "Ngo", "Government"],
            professionalTitle: ["Electrical Engineering and related fields", "Mechanical Engineer and related fields", "Software Engineering and related fields", "Accountanting and related fields"],
            uploadFile: uploadFile,
            updateFile: updateFile,
            bindHtml: bindHtml,
            showDetail: showDetail,
            resetPassword: resetPassword,
        };
        return service;

        function uploadFile(file, item_type, item_id) {
            debugger;
            var fd = new FormData();
            fd.append('file', file, file.name);
            return TokenRestangular.all('file/' + item_type + '/' + item_id)
                .withHttpConfig({transformRequest: angular.identity})
                .customPOST(fd, '', undefined, {'Content-Type': undefined});
        }

        function updateFile(file, file_id) {
            debugger;
            var fd = new FormData();
            fd.append('file', file, file.name);
            return TokenRestangular.all('file/' + file_id)
                .withHttpConfig({transformRequest: angular.identity})
                .customPOST(fd, '', undefined, {'Content-Type': undefined});
        }

        function bindHtml(html) {
            return html;
        }

        function getSupplierCategories() {
            TokenRestangular.all('categories').customGET('').then(function (response) {
                var categories = [];
                for (var i = 0; i < response.data.length; i++) {
                    categories[i] = response.data[i].category;
                }
                return categories;
            });
        }

        function showDetail(userId, type, showButton) {
            if (showButton) {
                $rootScope.showButton = true;
            }
            debugger;
            if ($rootScope.currentUser && $rootScope.currentUser.status == "active") {
                var id = 0;
                if (type == 'projectOwner') {
                    id = type + "sId";
                } else {
                    id = type + "Id";
                }
                var param = {};
                param[id] = userId;
                $state.go("main.public." + type + "Detail", param);
            }
            else {
                $state.go("main.public.login");
            }
        }

        function resetPassword(userId, oldPassword, newPassword) {
            debugger;
            return TokenRestangular.all('users/' + userId + '/password/' + oldPassword + '/' + newPassword).customGET('');
        }



    }

})();
