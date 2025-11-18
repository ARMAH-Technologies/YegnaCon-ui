(function () {
    'use strict';

    angular
        .module('app.public.contractor.employee')
        .controller('LeaveRequestsController', LeaveRequestsController);
    /*@ngNoInject*/
    function LeaveRequestsController($scope,$http, EmployeeService, $stateParams, $state,$window) {
        /*$http.get('app/public/contractor/employee/requests.json').success(function (data){
            $scope.leaveRequests=data;
        });*/
        var vm = this;
        vm.contractorId = $stateParams.contractorId;
        vm.updateLeaveRequest = updateLeaveRequest;


        getAllLeaveRequests();
        function getAllLeaveRequests(){
            debugger;
            EmployeeService.getAllLeaveRequests($stateParams.contractorId).then(function (data) {
                vm.requests = data;
            });
        }

        function updateLeaveRequest(employeeId,leaveId,status){
            debugger;
            var value={
                "data" : {
                    "status" : status,
                    "remark" : "remark"
                }
            };
            EmployeeService.updateLeaveRequest($stateParams.contractorId,employeeId,leaveId,value).then(function () {
                debugger;
                $window.location.reload();
            });
        }

        /*getEmployeeInfo();
        function getEmployeeInfo() {

            EmployeeService.getEmployeeInfo($stateParams.contractorId,$stateParams.employeeId).then(function (data) {
                vm.employee = data;
            });
        }*/
    }

})();