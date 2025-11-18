/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider, $urlRouterProvider, RestangularProvider) {

        RestangularProvider.setErrorInterceptor(
            function (response) {
                if (response.status == 401) {
                    window.location.href = 'index.html#/main/public/login';
                }
                else {

                }

                return true;
            }
        );
        $urlRouterProvider.otherwise("/main/public/home");

        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/core/main.html",
                controller: 'MainController',
                controllerAs: 'vm'
            })

    }
})();