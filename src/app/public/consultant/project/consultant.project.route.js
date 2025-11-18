/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.project')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
           .state("main.public.consultantDashboard.project", {
                url: "/project",
                templateUrl: "app/public/consultant/project/consultant.project.html",
                controller: 'ConsultantProjectController',
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard.projectCreate", {
                url: "/project/create/{consultantId}",
                templateUrl: "app/public/consultant/project/consultant.project.create.html",
                controller: 'ConsultantProjectCreateController',
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard.projectEdit", {
                url: "/project/edit/{projectId}",
                templateUrl: "app/public/consultant/project/consultant.project.edit.html",
                controller: 'ConsultantProjectEditController',
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard.projectProforma", {
                url: "/projectProforma",
                templateUrl: "app/public/consultant/project/consultant.project.proforma.html",
                controller: "ConsultantProjectProformaController",
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard.projectProformaCreate", {
                url: "/projectProforma/request",
                templateUrl: "app/public/consultant/project/consultant.project.proforma.create.html",
                controller: "ConsultantProjectProformaCreateController",
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard.projectProformaDetail", {
                url: "/projectProforma/{proformaId}/detail/{user}",
                templateUrl: "app/public/consultant/project/consultant.project.proforma.detail.html",
                controller: "ConsultantProjectProformaDetailController",
                controllerAs: 'vm'
            });



    }
})();