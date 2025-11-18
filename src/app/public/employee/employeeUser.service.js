(function () {
    'use strict';

    angular
        .module('app.public.employee')
        .service('EmployeeUserService', EmployeeUserService);
    /*@ngNoInject*/
    function EmployeeUserService(TokenRestangular) {
        var service = {
            requestLeave:requestLeave,
            getAllLeaveRequests:getAllLeaveRequests,
            getLeaves:getLeaves,
            getLeaveRequests:getLeaveRequests,
            getLeaveBalances:getLeaveBalances,
            getEmployeeInfo:getEmployeeInfo,
            editEmployee:editEmployee
        };
        return service;

        function requestLeave(companyID,employeeID,request){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID+'/requests').customPOST(request);
        }

        function getAllLeaveRequests(companyID){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/requests').customGET('');
        }

        function getLeaves(companyID){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/leaves').customGET('');
        }

        function getLeaveRequests(companyID, employeeID){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID+'/requests').customGET('');
        }

        function getLeaveBalances(companyID,employeeID){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID+'/leaves').customGET('');
        }

        function getEmployeeInfo(companyID,employeeID){
            debugger;
            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID).customGET('');
        }

        function editEmployee(companyID, employeeID, values){
            return TokenRestangular.all('companies/'+companyID+'/employees/'+employeeID).customPUT(values);
        }
    }

})();
