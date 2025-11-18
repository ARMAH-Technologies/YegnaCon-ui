/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .directive('pwCheck', [function () {
            return {
                require: 'ngModel',
                link: function (scope, elem, attrs, ctrl) {
                    var firstPassword = '#' + attrs.pwCheck;
                    elem.add(firstPassword).on('keyup', function(){
                        scope.$apply(function(){
                            var v = elem.val() === $(firstPassword).val();
                            ctrl.$setValidity('pwmatch', v);
                        });
                    });
                }
            }
        }])
        .controller('RegisterController', RegisterController);
    /*@ngNoInject*/
    function RegisterController($state,$scope, $stateParams, $rootScope, RegisterService,CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.profileType = $stateParams.profileType;
        vm.name = "";
        vm.email = "";
        vm.password = "";
        vm.profile_type = "";
        vm.terms_and_reference = "";
        vm.package_type = $stateParams.type;
        vm.registrationError = '';
        vm.resetPassword = resetPassword;

        vm.register = register;

        function register(isValid, free) {
            debugger;
            if (isValid) {
                debugger;
                if (free)
                    vm.profile_type = vm.profile_type ? "Professional" : "ProjectOwner";

                var data = {
                    "user": {
                        "name": vm.name,
                        "email": vm.email,
                        "password": vm.password,
                        "profile_type": vm.profile_type
                    }
                };
                RegisterService.register(data).then(function (response) {
                    $rootScope.inactiveUser = true;
                    var user = JSON.stringify(response.data);
                    localStorage.setItem('user', user);
                    $rootScope.currentUser = JSON.parse(localStorage.getItem('user'));
                    $state.go('main.public.getting_started')
                }, function (error) {
                    debugger;
                    vm.registrationError = "Error while Registering!";
                });
                $scope.registerButton = true;
            }

        }

        function setProfileType() {
            if ($stateParams.profileType == "supplier") {
                vm.profile_type = "Supplier";
            } else if ($stateParams.profileType == "professional") {
                vm.profile_type = "Professional";
            } else if ($stateParams.profileType == "project_owner") {
                vm.profile_type = "ProjectOwner";
            }

        }


        function resetPassword(){
            debugger;
            CoreService.resetPassword($rootScope.currentUser.id,vm.oldPassword,vm.newPassword).then(function(response){
               debugger;
                if(response == "Old Password InCorrect"){
                    vm.resetError = response;
                    vm.resetSuccess = "";
                }
                else if(response == "Password Change Successfully"){
                    vm.resetSuccess = "Password Changed Successfully";
                    vm.resetError = "";
                }
                else{
                    vm.resetError = "Internal Server Error !";
                    vm.resetSuccess = "";
                }

            });
        }

    }

})();