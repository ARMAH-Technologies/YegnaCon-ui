(function () {
    'use strict';

    angular
        .module('app.public.employee')
        .controller('LeavesController', LeavesController);
    /*@ngNoInject*/
    function LeavesController(EmployeeUserService,$state,$rootScope,$stateParams, PublicService, CoreService, appConstant) {
        var vm = this;
        $rootScope.currentParentState = "employeeDashboard.leaves";

        getLeaveBalances();
        function getLeaveBalances(){
            EmployeeUserService.getLeaveBalances($stateParams.companyId,$stateParams.employeeId).then(function (data) {
                vm.balances = data;
            })
        }

        getLeaveRequests();
        function getLeaveRequests(){
            EmployeeUserService.getLeaveRequests($stateParams.companyId,$stateParams.employeeId).then(function (data) {
                vm.requests = data;
            })
        }
    }

})();