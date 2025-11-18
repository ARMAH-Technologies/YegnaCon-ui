/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.professional')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.professional', {
                url: "/professional",
                templateUrl: "app/public/professional/professional.html",
                controller: 'ProfessionalController',
                controllerAs: 'vm'
            }).state('main.public.professionalDetail', {
                url: "/professional/{professionalId}",
                templateUrl: "app/public/professional/professional.detail.html",
                controller: "ProfessionalDetailController",
                controllerAs: 'vm'
            }).state("main.public.professionalDashboard", {
                url: "/professional/{professionalId}",
                templateUrl: "app/public/professional/professional.dashboard.html",
                controller: 'ProfessionalDashboardController',
                controllerAs: 'vm'
            }).state("main.public.professionalDashboard.profile", {
                url: "/profile",
                templateUrl: "app/public/professional/professional.profile.html",
                controller: 'ProfessionalProfileController',
                controllerAs: 'vm'
            }).state("main.public.professionalDashboard.experiences", {
                url: "/profile/experiences",
                templateUrl: "app/public/professional/professional.experiences.html",
                controller: 'ProfessionalProfileController',
                controllerAs: 'vm'
            }).state("main.public.professionalDashboard.experiencesCreate", {
                url: "/profile/experiences/create",
                templateUrl: "app/public/professional/professional.experiences.create.html",
                controller: 'ProfessionalProfileController',
                controllerAs: 'vm'
            })
            .state("main.public.professionalDashboard.educationCreate", {
                url: "/profile/education/create",
                templateUrl: "app/public/professional/professional.education.create.html",
                controller: 'ProfessionalProfileController',
                controllerAs: 'vm'
            });


    }
})();