/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.consultant', {
                url: "/consultant",
                templateUrl: "app/public/consultant/consultant.html",
                controller: 'ConsultantController',
                controllerAs: 'vm'
            })
            .state('main.public.consultantDetail', {
                url: "/consultant/{consultantId}",
                templateUrl: "app/public/consultant/consultant.detail.html",
                controller: 'ConsultantDetailController',
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard", {
                url: "/consultant/{consultantId}",
                templateUrl: "app/public/consultant/consultant.dashboard.html",
                controller: 'ConsultantDashboardController',
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard.profile", {
                url: "/profile",
                templateUrl: "app/public/consultant/consultant.profile.html",
                controller: 'ConsultantProfileController',
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard.productProforma", {
                url: "/productProforma",
                templateUrl: "app/public/consultant/product/consultant.product.proforma.html",
                controller: "ConsultantProductProformaController",
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard.productProformaCreate", {
                url: "/productProforma/request",
                templateUrl: "app/public/consultant/product/consultant.product.proforma.create.html",
                controller: "ConsultantProductProformaCreateController",
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard.productProformaRequestDetail", {
                url: "/productProforma/request/{proformaRequestId}",
                templateUrl: "app/public/consultant/product/consultant.product.proforma.request.html",
                controller: "ConsultantProductProformaRequestController",
                controllerAs: 'vm'
            })
            .state("main.public.consultantDashboard.productProformaReplies", {
                url: "/productProforma/replies/{proformaRequestId}",
                templateUrl: "app/public/consultant/product/consultant.product.proforma.replies.html",
                controller: "ConsultantProductProformaRepliesController",
                controllerAs: 'vm'
            })
            .state("main.public.consultantDashboard.productProformaRepliesDetail", {
                url: "/productProforma/repliesDetail/{proformaReplyId}",
                templateUrl: "app/public/consultant/product/consultant.product.proforma.replies.detail.html",
                controller: "ConsultantProductProformaDetailRepliesController",
                controllerAs: 'vm'
            }).state("main.public.consultantDashboard.notifications", {
                url: "/notifications",
                templateUrl: "app/public/consultant/notification/consultant.notification.html",
                controller: "ConsultantNotificationController",
                controllerAs: 'vm'
            })
            .state("main.public.consultantDashboard.groupList", {
                url: "/productProforma/groupList",
                templateUrl: "app/public/consultant/consultant.groupList.html",
                controller: "ConsultantGroupListController",
                controllerAs: 'vm'
            })
            .state("main.public.consultantDashboard.groupCreate", {
                url: "/productProforma/groupAdd",
                templateUrl: "app/public/consultant/consultant.groupCreate.html",
                controller: "ConsultantGroupCreateController",
                controllerAs: 'vm'

            })
            .state("main.public.consultantDashboard.groupDetail", {
                url: "/productProforma/groupDetail/{groupId}",
                templateUrl: "app/public/consultant/consultant.groupCreate.html",
                controller: "ConsultantGroupCreateController",
                controllerAs: 'vm'
            });



    }
})();