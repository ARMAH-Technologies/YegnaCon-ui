/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.core')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider,$urlRouterProvider, RestangularProvider) {

        $stateProvider
            .state('main.public', {
                url: "/public",
                templateUrl: "app/public/core/public.html",
                controller: 'PublicController',
                controllerAs: 'vm'
            })
            .state('main.public.login', {
                url: "/login",
                templateUrl: "app/public/core/core.login.html",
                controller: 'PublicController',
                controllerAs: 'vm'
            });

    }
})();