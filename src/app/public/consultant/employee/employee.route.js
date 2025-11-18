/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.employee')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.contractorDashboard.employee', {
                url: "/employees",
                templateUrl: "app/public/contractor/employee/employee.html",
                controller: 'EmployeeController',
                controllerAs: 'vm'
            })
            .state('main.public.contractorDashboard.employeeCreate', {
                url: "/employees/add",
                templateUrl: "app/public/contractor/employee/employee.create.html",
                controller: "EmployeeCreateController",
                controllerAs: 'vm'
            }).state('main.public.contractorDashboard.leaveSettings', {
                url: "/employees/leave_settings",
                templateUrl: "app/public/contractor/employee/employee.leaveSettings.html",
                controller: "LeaveSettingsController",
                controllerAs: 'vm'
            }).state('main.public.contractorDashboard.leaveRequests', {
                url: "/employees/leave_requests",
                templateUrl: "app/public/contractor/employee/employee.leaveRequests.html",
                controller: "LeaveRequestsController",
                controllerAs: 'vm'
            }).state('main.public.contractorDashboard.leaveHistory', {
                url: "/employees/leave_history",
                templateUrl: "app/public/contractor/employee/employee.leaveHistory.html",
                controller: "EmployeesLeaveHistoryController",
                controllerAs: 'vm'
            }).state('main.public.contractorDashboard.employeeEdit', {
                url: "/employees/edit_employee/{employeeId}",
                templateUrl: "app/public/contractor/employee/employee.edit.html",
                controller: "EmployeeEditController",
                controllerAs: 'vm'
            }).state('main.public.contractorDashboard.employeeDetail', {
                url: "/employees/{employeeId}",
                templateUrl: "app/public/contractor/employee/employee.detail.html",
                controller: "EmployeeDetailController",
                controllerAs: 'vm'
        });
    }
})();