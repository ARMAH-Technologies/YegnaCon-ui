/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.employee')
        .controller('EmployeeController', EmployeeController);
    /*@ngNoInject*/
    function EmployeeController(EmployeeService,$state,$rootScope,$stateParams, $window,PublicService, CoreService, appConstant) {
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
        vm.deleteEmployee = deleteEmployee;


        getEmployees();
        function getEmployees() {

            EmployeeService.getEmployees($stateParams.contractorId).then(function (data) {
                vm.employee = data;
            });
        }

        function deleteEmployee(employeeID){
            debugger;
            swal({
                    title:"Are you sure?",
                    text:"Remove this Employee",
                    type:"warning",
                    confirmButtonColor: "#ffba00",
                    confirmButtonText:"Yes",
                    showCancelButton: true,
                    cancelButtonText: "No"
                },
                function(isConfirm){
                    if(isConfirm){
                        EmployeeService.deleteEmployee($stateParams.contractorId,employeeID).then(function () {
                            $window.location.reload();
                        });
                    }
                });
        }
        //getLeaves();
        //
        //function getLeaves(){
        //    EmployeeService.getLeaves($stateParams.contractorId);
        //}


    }

})();