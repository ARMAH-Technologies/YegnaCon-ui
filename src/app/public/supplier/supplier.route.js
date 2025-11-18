/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.supplier', {
                url: "/supplier",
                templateUrl: "app/public/supplier/supplier.html",
                controller: 'SupplierController',
                controllerAs: 'vm'
            })
            .state('main.public.supplierDetail', {
                url: "/supplier/detail/{supplierId}",
                templateUrl: "app/public/supplier/supplier.detail.html",
                controller: 'SupplierDetailController',
                controllerAs: 'vm'
            }).state("main.public.supplierDashboard", {
                url: "/supplier/{supplierId}",
                templateUrl: "app/public/supplier/supplier.dashboard.html",
                controller: 'SupplierDashboardController',
                controllerAs: 'vm'
            }).state('main.public.supplierDashboard.profile', {
                url: "/profile",
                templateUrl: "app/public/supplier/supplier.profile.html",
                controller: 'SupplierProfileController',
                controllerAs: 'vm'
            }).state("main.public.supplierDashboard.product", {
                url: "/product",
                templateUrl: "app/public/supplier/supplier.product.html",
                controller: 'SupplierProductController',
                controllerAs: 'vm'
            }).state("main.public.supplierDashboard.productCreate", {
                url: "/product/create/{productId}/{edit}",
                templateUrl: "app/public/supplier/supplier.product.create.html",
                controller: 'SupplierProductCreateController',
                controllerAs: 'vm'
            }).state("main.public.supplierDashboard.proforma", {
                url: "/proforma",
                templateUrl: "app/public/supplier/supplier.proforma.html",
                controller: 'SupplierProformaController',
                controllerAs: 'vm'
            })
            .state("main.public.supplierDashboard.proformaDetail", {
                url: "/proforma/{proformaRequestId}",
                templateUrl: "app/public/supplier/supplier.proforma.detail.html",
                controller: 'SupplierProformaDetailController',
                controllerAs: 'vm'

            });




    }
})();