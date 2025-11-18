/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.profile')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.profile', {
                url: "/profile",
                templateUrl: "app/public/profile/profile.html",
                controller: 'ProfileController',
                controllerAs: 'vm'
            });


    }
})();