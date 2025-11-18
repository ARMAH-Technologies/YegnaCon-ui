(function () {
    'use strict';

    angular
        .module('app.public.employee')
        .controller('RequestLeaveController', RequestLeaveController);
    /*@ngNoInject*/
    function RequestLeaveController(EmployeeUserService, $stateParams, $rootScope, $window) {
        var vm = this;
        $rootScope.currentParentState = "employeeDashboard.requestLeave";
        vm.companyId = $stateParams.companyId;
        vm.employeeId = $stateParams.employeeId;
        vm.requestLeave = requestLeave;
        vm.openPopup = openPopup;

        function openPopup(){
            debugger;
            vm.popupOpened=true;
        }

        function requestLeave() {
            debugger;
            var leaveName = vm.leaveName;
            var leaveId = 1;
            EmployeeUserService.getLeaves($stateParams.companyId).then(function (data) {
                vm.leaves = data;
                //alert(vm.leaves.length);
                for(var i=0;i<vm.leaves.length;i++){
                    if(vm.leaves[i].name == leaveName){
                        leaveId=vm.leaves[i].id;
                        //alert(leaveId);
                    }
                    //alert(leaveId);
                }
                //alert(leaveId);
                var request = {
                    "data" : {
                        "start_date" : vm.startingDate,
                        "leave_id" : leaveId,
                        "number_of_days" : vm.noOfDays,
                        "status" : "status",
                        "remark" : "remark"
                    }
                };
                EmployeeUserService.requestLeave($stateParams.companyId,$stateParams.employeeId,request).then(function (response) {
                    debugger;
                    if (response.possibility=="No"){
                        swal({
                            title:"Error",
                            text:"Your Request is Invalid, You have only <span style='font-weight: bold'>"+response.remain_date+" day(s)</span> remaining.",
                            html:true,
                            type:"error",
                            confirmButtonColor: "#ffba00"
                        });
                    }
                    //$state.go("main.public.contractorDashboard.leaveSettings");
                    else{
                        swal({
                                title:"",
                                text:"Your Request has been sent",
                                type:"success",
                                confirmButtonColor: "#ffba00"
                            },
                            function(isConfirm){
                                if(isConfirm){
                                    $window.location.reload();
                                }
                            });
                    }
                });
            });

        }

    }

})();