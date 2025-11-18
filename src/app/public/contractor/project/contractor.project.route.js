/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.project')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
           .state("main.public.contractorDashboard.project", {
                url: "/project",
                templateUrl: "app/public/contractor/project/contractor.project.html",
                controller: 'ContractorProjectController',
                controllerAs: 'vm'
            }).state("main.public.contractorDashboard.projectCreate", {
                url: "/project/create/{contractorId}",
                templateUrl: "app/public/contractor/project/contractor.project.create.html",
                controller: 'ContractorProjectCreateController',
                controllerAs: 'vm'
            }).state("main.public.contractorDashboard.projectEdit", {
                url: "/project/edit/{projectId}",
                templateUrl: "app/public/contractor/project/contractor.project.edit.html",
                controller: 'ContractorProjectEditController',
                controllerAs: 'vm'
            }).state("main.public.contractorDashboard.projectProforma", {
                url: "/projectProfoma",
                templateUrl: "app/public/contractor/project/contractor.project.proforma.html",
                controller: "ContractorProjectProformaController",
                controllerAs: 'vm'
            }).state("main.public.contractorDashboard.projectProformaCreate", {
                url: "/projectProforma/request",
                templateUrl: "app/public/contractor/project/contractor.project.proforma.create.html",
                controller: "ContractorProjectProformaCreateController",
                controllerAs: 'vm'
            }).state("main.public.contractorDashboard.projectProformaDetail", {
                url: "/projectProforma/{proformaId}/detail/{user}",
                templateUrl: "app/public/contractor/project/contractor.project.proforma.detail.html",
                controller: "ContractorProjectProformaDetailController",
                controllerAs: 'vm'
            });



    }
})();