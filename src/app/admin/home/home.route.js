/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.home')
        .config(moduleConfig);

    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.admin.home', {
                url: "/home",
                templateUrl: "app/admin/home/home.html",
                controller: 'AdminHomeController',
                controllerAs: 'vm'
            });


    }
})();