/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.auth')
        .service('AuthService', AuthService);
    /*@ngNoInject*/
    function AuthService($http, TokenRestangular, $state, $rootScope) {
        var service = {
            getLoggedInUser: getLoggedInUser,
            signIn: signIn,
            signOut: signOut
        };

        return service;

        function signIn(data) {
            debugger;
            return TokenRestangular.all('oauth/authorize').customPOST(data);
        }

        function getLoggedInUser() {
            debugger;
            return TokenRestangular.all('user').customGET('');
        }

        function signOut() {
            debugger;
            localStorage.removeItem('user');
            localStorage.removeItem('yegnacon_access_token');
            localStorage.removeItem('yegnacon_refresh_token');
            $rootScope.currentUser = null;
            $rootScope.signOut = true;
            $rootScope.inactiveUser = false;
            $rootScope.notifications = null;
            $state.go('main.public.home');
        }
    }

})();