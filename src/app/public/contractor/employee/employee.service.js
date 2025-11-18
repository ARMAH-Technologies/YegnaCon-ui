/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.employee')
        .service('EmployeeService', EmployeeService);
    /*@ngNoInject*/
    function EmployeeService(TokenRestangular) {
        var service = {
            getLeaves: getLeaves,
            updateLeaves:updateLeaves,
            addEmployee:addEmployee,
            getEmployees:getEmployees,
            getEmployeeInfo:getEmployeeInfo,
            deleteEmployee:deleteEmployee,
            editEmployee:editEmployee,
            getAllLeaveRequests:getAllLeaveRequests,
            updateLeaveRequest:updateLeaveRequest,
            getLeaveBalances:getLeaveBalances,
            getLeaveRequests:getLeaveRequests
            //getVacancyDetail: getVacancyDetail
        };

        return service;
        function getLeaves(companyID){
            debugger;
           return TokenRestangular.all('companies/'+companyID+'/leaves').customGET('');
        }

        function updateLeaves(companyID, leaveValues){

            return TokenRestangular.all('companies/'+companyID+'/leaves').customPUT(leaveValues);
        }

        function addEmployee(companyID,values){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/employees').customPOST(values);
        }

        function getEmployees(companyID){
            return TokenRestangular.all('companies/'+companyID+'/employees').customGET('');
        }

        function getEmployeeInfo(companyID,employeeID){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID).customGET('');
        }

        function deleteEmployee(companyID,employeeID){

            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID).customDELETE('');
        }

        function editEmployee(companyID, employeeID, values){

            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID).customPUT(values);
        }

        function getAllLeaveRequests(companyID){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/requests').customGET('');
        }

        function getLeaveRequests(companyID, employeeID){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID+'/requests').customGET('');
        }

        function updateLeaveRequest(companyID,employeeID,leaveID,value){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID+'/requests/'+leaveID).customPUT(value);

        }

        function getLeaveBalances(companyID,employeeID){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID+'/leaves').customGET('');
        }

    }

})();