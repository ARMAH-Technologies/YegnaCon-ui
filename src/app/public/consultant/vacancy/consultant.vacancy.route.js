/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.vacancy')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state("main.public.consultantDashboard.vacancy", {
                url: "/vacancy",
                templateUrl: "app/public/consultant/vacancy/consultant.vacancy.html",
                controller: "ConsultantVacancyController",
                controllerAs: 'vm'
            })
            .state("main.public.consultantDashboard.vacancyCreate", {
                url: "/vacancy/create/{vacancyId}/{edit}",
                templateUrl: "app/public/consultant/vacancy/consultant.vacancy.create.html",
                controller: "ConsultantVacancyCreateController",
                controllerAs: 'vm'
            });



    }
})();