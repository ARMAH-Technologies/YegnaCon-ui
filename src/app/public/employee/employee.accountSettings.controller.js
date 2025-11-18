(function () {
    'use strict';

    angular
        .module('app.public.employee')
        .controller('AccountSettingsController', AccountSettingsController);
    /*@ngNoInject*/
    function AccountSettingsController(CoreService,EmployeeUserService,$stateParams,$rootScope,$window) {
        var vm = this;
        $rootScope.currentParentState = "employeeDashboard.accountSettings";
        vm.resetPassword = resetPassword;

        /*getEmployeeInfo();
        function getEmployeeInfo(){
            debugger;
            EmployeeUserService.getEmployeeInfo($stateParams.companyId,
                $stateParams.employeeId).then(function (data) {
                vm.employee = data;
            });
        }*/

        function resetPassword(){

            CoreService.resetPassword($rootScope.currentUser.id,vm.oldPassword,vm.newPassword).then(function(response){
                debugger;
                if(response == "Old Password InCorrect"){
                    swal({
                        title:"Error",
                        text:"Old Password is Incorrect",
                        type:"error",
                        confirmButtonColor: "#ffba00"
                    });
                }
                else if(response == "Password Change Successfully"){

                    swal({
                        title:"",
                        text:"Your Password has been changed successfully",
                        type:"success",
                        confirmButtonColor: "#ffba00"
                        },
                        function(isConfirm){
                            if(isConfirm){
                                $window.location.reload();
                            }
                        });
                }
                else{
                    vm.resetError = "Internal Server Error !";
                    vm.resetSuccess = "";
                }

            });
        }

    }

})();