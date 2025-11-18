/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.core')
        .controller('AdminController', AdminController);
    /*@ngNoInject*/
    function AdminController($state, $scope, $rootScope, AuthService, CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = 'Admin';
        debugger;
        vm.signOut = signOut;
        vm.resetPassword = resetPassword;

        function signOut() {
            debugger;
            AuthService.signOut();
        }


        function resetPassword() {
            debugger;
            CoreService.resetPassword($rootScope.currentUser.id, vm.oldPassword, vm.newPassword).then(function (response) {
                debugger;
                if (response == "Old Password InCorrect") {
                    vm.resetError = response;
                    vm.resetSuccess = "";
                }
                else if (response == "Password Change Successfully") {
                    vm.resetSuccess = "Password Changed Successfully";
                    vm.resetError = "";
                }
                else {
                    vm.resetError = "Internal Server Error !";
                    vm.resetSuccess = "";
                }

            });
        }

    }

})();
