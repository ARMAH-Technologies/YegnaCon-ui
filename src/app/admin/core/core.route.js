/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.core')
        .config(moduleConfig);

    /*@ngNoInject*/
    function moduleConfig($stateProvider) {

        $stateProvider
            .state('main.admin', {
                url: "/admin",
                templateUrl: "app/admin/core/admin.html",
                controller: 'AdminController',
                controllerAs: 'vm'
            })
            .state('main.admin.passwordReset', {
                url: "/passwordReset",
                templateUrl: "app/admin/core/password.reset.html",
                controller: 'AdminController',
                controllerAs: 'vm'
            })

    }
})();