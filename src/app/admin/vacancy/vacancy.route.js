/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.vacancy')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.admin.vacancy', {
                url: "/vacancy",
                templateUrl: "app/admin/vacancy/vacancy.html",
                controller: 'VacancyController',
                controllerAs: 'vm'
            })
            .state('main.admin.vacancy.list', {
                url: "/list",
                templateUrl: "app/admin/vacancy/vacancy.list.html",
                controller: 'VacancyListController',
                controllerAs: 'vm'
            })
            .state('main.admin.vacancy.add', {
                url: "/add",
                templateUrl: "app/admin/vacancy/vacancy.add.html",
                controller: 'VacancyAddController',
                controllerAs: 'vm'
            })
            .state('main.admin.vacancy.edit', {
                url: "/edit/{vacancyId}",
                templateUrl: "app/admin/vacancy/vacancy.edit.html",
                controller: 'VacancyEditController',
                controllerAs: 'vm'
            });


    }
})();