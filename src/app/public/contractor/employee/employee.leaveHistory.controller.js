(function () {
    'use strict';

    angular
        .module('app.public.contractor.employee')
        .controller('EmployeesLeaveHistoryController', EmployeesLeaveHistoryController);
    /*@ngNoInject*/
    function EmployeesLeaveHistoryController(EmployeeService,$stateParams) {
        var vm = this;
        vm.employeeId=$stateParams.employeeId;

        getAllLeaveRequests();
        function getAllLeaveRequests(){
            debugger;
            EmployeeService.getAllLeaveRequests($stateParams.contractorId).then(function (data) {
                vm.requests = data;
            });
        }
    }

})();