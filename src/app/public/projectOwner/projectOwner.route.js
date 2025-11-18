/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.projectOwner')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.projectOwner', {
                url: "/projectOwner",
                templateUrl: "app/public/projectOwner/projectOwner.html",
                controller: 'ProjectOwnerController',
                controllerAs: 'vm'
            }).state('main.public.projectOwnerDetail',{
                url : "/projectOwner/{projectOwnersId}",
                templateUrl: "app/public/projectOwner/projectOwner.detail.html",
                controller: "ProjectOwnerDetailController",
                controllerAs: 'vm'
            }).state("main.public.projectOwnerDashboard", {
                url: "/projectOwner/{projectOwnersId}",
                templateUrl: "app/public/projectOwner/projectOwner.dashboard.html",
                controller: 'ProjectOwnerDashboardController',
                controllerAs: 'vm'
            }).state("main.public.projectOwnerDashboard.profile", {
                url: "/profile",
                templateUrl: "app/public/projectOwner/projectOwner.profile.html",
                controller: 'ProjectOwnerProfileController',
                controllerAs: 'vm'
            }).state("main.public.projectOwnerDashboard.skills", {
                url: "/profile/skills",
                templateUrl: "app/public/projectOwner/projectOwner.skills.html",
                controller: 'ProjectOwnerProfileController',
                controllerAs: 'vm'
            }).state("main.public.projectOwnerDashboard.experiences", {
                url: "/profile/experiences",
                templateUrl: "app/public/projectOwner/projectOwner.experiences.html",
                controller: 'ProjectOwnerProfileController',
                controllerAs: 'vm'
            });


    }
})();