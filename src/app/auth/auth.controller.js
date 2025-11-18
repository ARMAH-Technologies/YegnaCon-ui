/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthController', AuthController);
    /*@ngNoInject*/
    function AuthController($state, AuthService, $rootScope, TokenRestangular, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.email = '';
        vm.password = '';
        vm.loginError = '';
        vm.singIn = signIn;
        $rootScope.currentState = 'Auth';
        vm.authenticating = false;


        function signIn() {
            vm.authenticating = true;
            vm.loginError = '';

            var data = {
                "grant_type": appConstant.grant_type,
                "client_id": appConstant.client_id,
                "client_secret": appConstant.client_secret,
                "username": vm.email,
                "password": vm.password
            };

            debugger;
            AuthService.signIn(data).then(function (response) {
                debugger;
                localStorage.setItem('yegnacon_access_token', response.access_token);
                localStorage.setItem('yegnacon_refresh_token', response.refresh_token);
                TokenRestangular.setDefaultHeaders({Authorization: 'Bearer ' + localStorage.getItem('yegnacon_access_token')});
                AuthService.getLoggedInUser().then(function (response) {
                    debugger;
                    var user = JSON.stringify(response.data);
                    localStorage.setItem('user', user);
                    $rootScope.currentUser = JSON.parse(localStorage.getItem('user'));

                    if (response.data.profileType == 'Admin') {
                        $state.go('main.admin.home');
                    }

                    else if(response.data.profileType == 'Consultant'){
                       $state.go('main.public.consultantDashboard');
                    }

                    else if(response.data.profileType == 'Contractor'){
                       $state.go('main.public.contractorDashboard');
                    }

                    else if(response.data.profileType == 'Supplier'){
                       $state.go('main.public.supplerDashboard');
                    }

                    else if(response.data.profileType == 'ProjectOwner'){
                       $state.go('main.public.projectOwnerDashboard');
                    }
                    else{
                        $state.go('main.public.home');
                    }

                });
            }, function (error) {
                debugger;
                if(error.statusText == 'Unauthorized'){
                    vm.loginError = "Invalid username or password !";
                }
                else{
                    vm.loginError = error.statusText;
                }
                vm.authenticating = false;
            })

        }

    }

})();
