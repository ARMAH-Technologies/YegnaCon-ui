/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.tender')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state("main.public.contractorDashboard.tender", {
                url: "/tender",
                templateUrl: "app/public/contractor/tender/contractor.tender.html",
                controller: "ContractorTenderController",
                controllerAs: 'vm'
            })
            .state("main.public.contractorDashboard.tenderCreate", {
                url: "/tender/create/{tenderId}/{edit}",
                templateUrl: "app/public/contractor/tender/contractor.tender.create.html",
                controller: "ContractorTenderCreateController",
                controllerAs: 'vm'
            });



    }
})();