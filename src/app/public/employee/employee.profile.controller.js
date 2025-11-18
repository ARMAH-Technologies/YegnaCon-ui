/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.employee')
        .controller('EmployeeProfileController', EmployeeProfileController);
    /*@ngNoInject*/
    function EmployeeProfileController(EmployeeUserService,$state,$rootScope,$stateParams, PublicService, CoreService, appConstant) {
        var vm = this;
        $rootScope.currentParentState ="employeeDashboard.profile";
        vm.contractorId = $stateParams.contractorId;
        vm.employeeId = $stateParams.employeeId;



        getEmployeeInfo();
        function getEmployeeInfo() {
            debugger;
            EmployeeUserService.getEmployeeInfo($stateParams.companyId,$stateParams.employeeId).then(function (data) {
                vm.employee = data;
            });
        }
    }

})();