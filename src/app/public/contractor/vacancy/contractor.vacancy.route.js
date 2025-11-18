/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.vacancy')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state("main.public.contractorDashboard.vacancy", {
                url: "/vacancy",
                templateUrl: "app/public/contractor/vacancy/contractor.vacancy.html",
                controller: "ContractorVacancyController",
                controllerAs: 'vm'
            })
            .state("main.public.contractorDashboard.vacancyCreate", {
                url: "/vacancy/create/{vacancyId}/{edit}",
                templateUrl: "app/public/contractor/vacancy/contractor.vacancy.create.html",
                controller: "ContractorVacancyCreateController",
                controllerAs: 'vm'
            });



    }
})();