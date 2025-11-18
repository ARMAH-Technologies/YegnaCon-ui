/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.tender')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.admin.tender', {
                url: "/tender",
                templateUrl: "app/admin/tender/tender.html",
                controller: 'TenderController',
                controllerAs: 'vm'
            })
            .state('main.admin.tender.add', {
                url: "/add",
                templateUrl: "app/admin/tender/tender.add.html",
                controller: 'TenderAddController',
                controllerAs: 'vm'
            })
            .state('main.admin.tender.list', {
                url: "/list",
                templateUrl: "app/admin/tender/tenders.list.html",
                controller: 'TendersListController',
                controllerAs: 'vm'
            })
            .state('main.admin.tender.edit', {
                url: "/edit/{tenderId}",
                templateUrl: "app/admin/tender/tender.edit.html",
                controller: 'TenderEditController',
                controllerAs: 'vm'
            });


    }
})();