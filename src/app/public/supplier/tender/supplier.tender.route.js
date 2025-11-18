/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier.tender')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state("main.public.supplierDashboard.tender", {
                url: "/tender",
                templateUrl: "app/public/supplier/tender/supplier.tender.html",
                controller: "SupplierTenderController",
                controllerAs: 'vm'
            })
            .state("main.public.supplierDashboard.tenderCreate", {
                url: "/tender/create/{tenderId}/{edit}",
                templateUrl: "app/public/supplier/tender/supplier.tender.create.html",
                controller: "SupplierTenderCreateController",
                controllerAs: 'vm'
            });



    }
})();