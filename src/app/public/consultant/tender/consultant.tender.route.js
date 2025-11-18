/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.tender')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state("main.public.consultantDashboard.tender", {
                url: "/tender",
                templateUrl: "app/public/consultant/tender/consultant.tender.html",
                controller: "ConsultantTenderController",
                controllerAs: 'vm'
            })
            .state("main.public.consultantDashboard.tenderCreate", {
                url: "/tender/create/{tenderId}/{edit}",
                templateUrl: "app/public/consultant/tender/consultant.tender.create.html",
                controller: "ConsultantTenderCreateController",
                controllerAs: 'vm'
            });



    }
})();