/**
 * Created by AddisY on 5/19/2017.
 */

(function () {
    'use strict';

    angular
        .module('app.public.contractor.employee')
        .controller('EmployeeCreateController', EmployeeCreateController);
    /*@ngNoInject*/
    function EmployeeCreateController(EmployeeService, $stateParams, $state, $window) {
        var vm = this;
        vm.contractorId = $stateParams.contractorId;
        vm.addEmployee = addEmployee;
        vm.openPopup = openPopup;

        function openPopup(){
            debugger;
            vm.popupOpened=true;
        }

        function addEmployee() {
            debugger;
            var employee = {
                "data" : {
                    "employment_title" : vm.title,
                    "employment_date" : vm.date,
                    "employer_id" : vm.contractorId,
                    "employment_type" : vm.type,

                    "user" : {
                        "name" : vm.name,
                        "email" : vm.email,
                        "password" : vm.password,
                        "profile_type" : "Employee",
                        "status" : "active",

                        "address" : {
                            "phone_number_1" : vm.phone,
                            "country" : "et",
                            "city" : vm.city,
                            "sub_city" : vm.subcity,
                            "house_no" : "1111"
                        }
                    },

                    "skills" : {
                        "1" : "php",
                        "2" : "html",
                        "3" : "css",
                        "4" : "js"
                    },

                    "experiences" : {
                        "1" : {
                            "company" : "company 1",
                            "position" : "positionm 1",
                            "description" : "description 1",
                            "started_date" : "2015-04-06",
                            "ended_date" : "2016-04-06"
                        },
                        "2" : {
                            "company" : "company 2",
                            "position" : "position 2",
                            "description" : "description 2",
                            "started_date" : "2015-04-06",
                            "ended_date" : "2016-04-06"
                        },
                        "3" : {
                            "company" : "company 3",
                            "position" : "position 3",
                            "description" : "description 3",
                            "started_date" : "2015-04-06",
                            "ended_date" : "2016-04-06"
                        }
                    },

                    "educations" : {
                        "1" : {
                            "study_field" : "study_field 1",
                            "grade_level" : "grade_level 1",
                            "school_name" : "school_name 1",
                            "started_date" : "2015-04-06",
                            "ended_date" : "2016-04-06"
                        },
                        "2" : {
                            "study_field" : "study_field 2",
                            "grade_level" : "grade_level 2",
                            "school_name" : "school_name 2",
                            "started_date" : "2015-04-06",
                            "ended_date" : "2016-04-06"
                        }
                    }
                }
            };

            EmployeeService.addEmployee($stateParams.contractorId,employee).then(function (response) {

                //$state.go("main.public.contractorDashboard.leaveSettings");
                $window.location.reload();
            });

        }

    }

})();