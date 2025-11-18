/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.notification')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider,$urlRouterProvider, RestangularProvider) {

        $stateProvider
            .state('main.public.notification', {
                url: "/{type}/notification/{userId}",
                templateUrl: "app/public/notification/notification.html",
                controller: 'NotificationController',
                controllerAs: 'vm'
            });

    }
})();