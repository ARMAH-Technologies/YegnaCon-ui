/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.employee')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
        .state("main.public.employeeDashboard", {
            url: "/company/{companyId}/employee/{employeeId}",
            templateUrl: "app/public/employee/employee.dashboard.html",
            controller: '',
            controllerAs: 'vm'
        }).state("main.public.employeeDashboard.profile", {
            url: "/Profile",
            templateUrl: "app/public/employee/employee.Profile.html",
            controller: "EmployeeProfileController",
            controllerAs: 'vm'
        }).state("main.public.employeeDashboard.editProfile", {
            url: "/edit_profile",
            templateUrl: "app/public/employee/employee.editProfile.html",
            controller: "EmployeeEditProfileController",
            controllerAs: 'vm'
        }).state("main.public.employeeDashboard.requestLeave", {
            url: "/requestLeave",
            templateUrl: "app/public/employee/employee.requestLeave.html",
            controller: "RequestLeaveController",
            controllerAs: 'vm'
        }).state("main.public.employeeDashboard.leaves", {
            url: "/Leaves",
            templateUrl: "app/public/employee/employee.leaves.html",
            controller: "LeavesController",
            controllerAs: 'vm'
        }).state("main.public.employeeDashboard.leaveHistory", {
            url: "/leaveHistory",
            templateUrl: "app/public/employee/employee.leaveHistory.html",
            controller: "LeaveHistoryController",
            controllerAs: 'vm'
        }).state("main.public.employeeDashboard.accountSettings", {
            url: "/account_settings",
            templateUrl: "app/public/employee/employee.accountSettings.html",
            controller: "AccountSettingsController",
            controllerAs: 'vm'
        });


    }
})();