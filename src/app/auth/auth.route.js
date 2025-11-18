/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.auth')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "app/auth/login.html",
                controller: 'AuthController',
                controllerAs: 'vm'
            });

    }
})();