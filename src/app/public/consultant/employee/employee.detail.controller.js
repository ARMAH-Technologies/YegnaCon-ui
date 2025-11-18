/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.employee')
        .controller('EmployeeDetailController', EmployeeDetailController);
    /*@ngNoInject*/
    function EmployeeDetailController(EmployeeService,$state,$rootScope,$stateParams, PublicService, CoreService, appConstant) {
        var vm = this;


        $rootScope.currentParentState = "contractorDashboard.employee";

        vm.vacancies = [];
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 8;
        vm.contractorId = $stateParams.contractorId;
        vm.coreService = CoreService;

        vm.today = new Date();
        vm.showDetail = CoreService.showDetail;
        vm.field = "";
        vm.location = "";
        vm.search = "";

        vm.employeeId = $stateParams.employeeId;


        getEmployeeInfo();
        function getEmployeeInfo() {

            EmployeeService.getEmployeeInfo($stateParams.contractorId,$stateParams.employeeId).then(function (data) {
                vm.employee = data;
            });
        }

        getLeaveBalances();
        function getLeaveBalances(){
            EmployeeService.getLeaveBalances($stateParams.contractorId,$stateParams.employeeId).then(function (data) {
                vm.balances = data;
            })
        }

        getLeaveRequests();
        function getLeaveRequests(){
            EmployeeService.getLeaveRequests($stateParams.contractorId,$stateParams.employeeId).then(function (data) {
                vm.requests = data;
            })
        }
        //getLeaves();
        //
        //function getLeaves(){
        //    EmployeeService.getLeaves($stateParams.contractorId);
        //}


    }

})();