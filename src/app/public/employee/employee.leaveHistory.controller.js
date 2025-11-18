(function () {
    'use strict';

    angular
        .module('app.public.employee')
        .controller('LeaveHistoryController', LeaveHistoryController);
    /*@ngNoInject*/
    function LeaveHistoryController(EmployeeUserService,$stateParams,$rootScope) {
        var vm = this;
        $rootScope.currentParentState = "employeeDashboard.leaveHistory";
        vm.employeeId=$stateParams.employeeId;

        getLeaveRequests();
        function getLeaveRequests(){
            debugger;
            EmployeeUserService.getLeaveRequests($stateParams.companyId,
            $stateParams.employeeId).then(function (data) {
                vm.requests = data;
            });
        }
    }

})();