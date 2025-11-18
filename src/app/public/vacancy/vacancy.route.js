/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.vacancy')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.vacancy', {
                url: "/vacancy",
                templateUrl: "app/public/vacancy/vacancy.html",
                controller: 'VacancyController',
                controllerAs: 'vm'
            }).state('main.public.vacancyDetail',{
                url : "/vacancy/{vacancyId}",
                templateUrl: "app/public/vacancy/vacancy.detail.html",
                controller: "VacancyDetailController",
                controllerAs: 'vm'
            });


    }
})();