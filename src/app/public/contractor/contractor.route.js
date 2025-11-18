/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.contractor', {
                url: "/contractor",
                templateUrl: "app/public/contractor/contractor.html",
                controller: 'ContractorController',
                controllerAs: 'vm'
            })
            .state('main.public.contractorDetail', {
                url: "/contractor/{contractorId}",
                templateUrl: "app/public/contractor/contractor.detail.html",
                controller: 'ContractorDetailController',
                controllerAs: 'vm'
            }).state("main.public.contractorDashboard", {
                url: "/contractor/{contractorId}",
                templateUrl: "app/public/contractor/contractor.dashboard.html",
                controller: 'ContractorDashboardController',
                controllerAs: 'vm'
            }).state("main.public.contractorDashboard.profile", {
                url: "/profile",
                templateUrl: "app/public/contractor/contractor.profile.html",
                controller: 'ContractorProfileController',
                controllerAs: 'vm'
            }).state("main.public.contractorDashboard.productProforma", {
                url: "/productProforma",
                templateUrl: "app/public/contractor/product/contractor.product.proforma.html",
                controller: "ContractorProductProformaController",
                controllerAs: 'vm'
            }).state("main.public.contractorDashboard.productProformaCreate", {
                url: "/productProforma/request",
                templateUrl: "app/public/contractor/product/contractor.product.proforma.create.html",
                controller: "ContractorProductProformaCreateController",
                controllerAs: 'vm'
            }).state("main.public.contractorDashboard.productProformaRequestDetail", {
                url: "/productProforma/request/{proformaRequestId}",
                templateUrl: "app/public/contractor/product/contractor.product.proforma.request.html",
                controller: "ContractorProductProformaRequestController",
                controllerAs: 'vm'
            })
            .state("main.public.contractorDashboard.productProformaReplies", {
                url: "/productProforma/replies/{proformaRequestId}",
                templateUrl: "app/public/contractor/product/contractor.product.proforma.replies.html",
                controller: "ContractorProductProformaRepliesController",
                controllerAs: 'vm'
            })
            .state("main.public.contractorDashboard.productProformaRepliesDetail", {
                url: "/productProforma/repliesDetail/{proformaReplyId}",
                templateUrl: "app/public/contractor/product/contractor.product.proforma.replies.detail.html",
                controller: "ContractorProductProformaDetailRepliesController",
                controllerAs: 'vm'
            })
            .state("main.public.contractorDashboard.groupList", {
                url: "/productProforma/groupList",
                templateUrl: "app/public/contractor/contractor.groupList.html",
                controller: "ContractorGroupListController",
                controllerAs: 'vm'
            })
            .state("main.public.contractorDashboard.groupCreate", {
                url: "/productProforma/groupAdd",
                templateUrl: "app/public/contractor/contractor.groupCreate.html",
                controller: "ContractorGroupCreateController",
                controllerAs: 'vm'

            })
            .state("main.public.contractorDashboard.groupDetail", {
                url: "/productProforma/groupDetail/{groupId}",
                templateUrl: "app/public/contractor/contractor.groupCreate.html",
                controller: "ContractorGroupCreateController",
                controllerAs: 'vm'
            });


    }
})();