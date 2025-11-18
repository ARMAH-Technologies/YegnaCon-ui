/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier.vacancy')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state("main.public.supplierDashboard.vacancy", {
                url: "/vacancy",
                templateUrl: "app/public/supplier/vacancy/supplier.vacancy.html",
                controller: "SupplierVacancyController",
                controllerAs: 'vm'
            })
            .state("main.public.supplierDashboard.vacancyCreate", {
                url: "/vacancy/create/{vacancyId}/{edit}",
                templateUrl: "app/public/supplier/vacancy/supplier.vacancy.create.html",
                controller: "SupplierVacancyCreateController",
                controllerAs: 'vm'
            });



    }
})();