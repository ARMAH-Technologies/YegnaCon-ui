(function () {
    'use strict';

    angular
        .module('app.public.contractor.employee')
        .controller('EmployeeEditProfileController', EmployeeEditProfileController);
    /*@ngNoInject*/
    function EmployeeEditProfileController(EmployeeUserService, $stateParams, $state, $window) {
        var vm = this;
        vm.editEmployee = editEmployee;

        getEmployeeInfo();
        function getEmployeeInfo(){

            EmployeeUserService.getEmployeeInfo($stateParams.companyId,$stateParams.employeeId).then(function (data) {
                vm.employee = data;
            });
        }

        function editEmployee() {
            debugger;
            var employee = {
                "data" : {
                    //"employment_title" : vm.employee.employee.employment_title,
                    "employer_id" : $stateParams.companyId,
                    //"employment_date" : "employment_date",
                    //"employment_type" : vm.employee.employee.employment_type,

                    "user" : {
                        //"name" : vm.employee.employee.name,
                        "email" : vm.employee.employee.user.email,
                        /*"password" : "password",
                         "profile_type" : "profile_type",
                         "status" : "status",*/

                        "address" : {
                            "phone_number_1" : vm.employee.employee.user.address.phone_number_1,
                            //"country" : "country",
                            "city" : vm.employee.employee.user.address.city,
                            "sub_city" : vm.employee.employee.user.address.sub_city
                            //"house_no" : "house_no"
                        }
                    }

                    /*"skills" : {
                     "1" : "Skill 1",
                     "2" : "Skill 2",
                     "3" : "Skill 3",
                     "4" : "Skill 4"
                     },*/

                    /*"experiences" : {
                     "1" : {
                     "company" : "company 1",
                     "position" : "positionm 1",
                     "description" : "description 1",
                     "started_date" : "started_date",
                     "ended_date" : "ended_date"
                     },
                     "2" : {
                     "company" : "company 2",
                     "position" : "position 2",
                     "description" : "description 2",
                     "started_date" : "started_date",
                     "ended_date" : "ended_date"
                     },
                     "3" : {
                     "company" : "company 3",
                     "position" : "position 3",
                     "description" : "description 3",
                     "started_date" : "started_date",
                     "ended_date" : "ended_date"
                     }
                     },*/

                    /*"educations" : {
                     "1" : {
                     "study_field" : "study_field 1",
                     "grade_level" : "grade_level 1",
                     "school_name" : "school_name 1",
                     "started_date" : "started_date",
                     "ended_date" : "ended_date"
                     },
                     "2" : {
                     "study_field" : "study_field 2",
                     "grade_level" : "grade_level 2",
                     "school_name" : "school_name 2",
                     "started_date" : "started_date",
                     "ended_date" : "ended_date"
                     }
                     }*/
                }
            };

            EmployeeUserService.editEmployee($stateParams.companyId,$stateParams.employeeId,employee).then(function () {

                $window.location.reload();
            });

        }

    }

})();