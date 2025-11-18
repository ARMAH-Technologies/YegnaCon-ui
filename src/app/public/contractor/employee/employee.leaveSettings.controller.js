(function () {
    'use strict';

    angular
        .module('app.public.contractor.employee')
        .controller('LeaveSettingsController', LeaveSettingsController);
    /*@ngNoInject*/
    function LeaveSettingsController(EmployeeService, $stateParams, $state, $window) {
        var vm = this;
        /*vm.leaves;*/
        vm.contractorId = $stateParams.contractorId;
        vm.updateLeaves = updateLeaves;
        //var arr= new Array();
        //vm.leaveValues = arr;
//vm.getItem = getItem;
        getLeaves();

        /*vm.getItem = function(item){
             vm.leave = item;
            debugger;
        };*/
 /*function getItem(item){
     debugger;
     vm.x = item;
 }*/
        /*vm.changed = function(id,value){
            var x = {
               "data": {

               }
            }
        }*/
        function getLeaves() {
            debugger;
            EmployeeService.getLeaves($stateParams.contractorId).then(function (data) {
                vm.leaves = data;
            });
        }

        function updateLeaves() {
            debugger;
            var leave = {
                'data': {
                    '1':{
                        "leave_id":vm.leaves[0].id,
                        "value":vm.leaves[0].value
                    },
                    '2':{
                        "leave_id":vm.leaves[1].id,
                        "value":vm.leaves[1].value
                    },
                    '3':{
                        "leave_id":vm.leaves[2].id,
                        "value":vm.leaves[2].value
                    },
                    '4':{
                        "leave_id":vm.leaves[3].id,
                        "value":vm.leaves[3].value
                    },
                    '5':{
                        "leave_id":vm.leaves[4].id,
                        "value":vm.leaves[4].value
                    },
                    '6':{
                        "leave_id":vm.leaves[5].id,
                        "value":vm.leaves[5].value
                    },
                    '7':{
                        "leave_id":vm.leaves[6].id,
                        "value":vm.leaves[6].value
                    }
                }
            };

            EmployeeService.updateLeaves($stateParams.contractorId,leave).then(function (response) {
               //$state.go("main.public.contractorDashboard.leaveSettings");
                $window.location.reload();
            });

        }

    }

})();