/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.tender')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.tender', {
                url: "/tender",
                templateUrl: "app/public/tender/tender.html",
                controller: 'TenderController',
                controllerAs: 'vm'
            }).state('main.public.tenderDetail', {
                url: "/tender/{tenderId}",
                templateUrl: "app/public/tender/tender.detail.html",
                controller: 'TenderDetailController',
                controllerAs: 'vm'
            });
    }
})();