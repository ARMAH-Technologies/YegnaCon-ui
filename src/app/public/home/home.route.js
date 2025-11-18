/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.home', {
                url: "/home",
                templateUrl: "app/public/home/home.html",
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('main.public.news', {
                url: "/news/{newsId}",
                templateUrl: "app/public/home/home.news.html",
                controller: 'NewsController',
                controllerAs: 'vm'
            })
            .state('main.public.contact', {
                url: "/contact",
                templateUrl: "app/public/home/contact.html",
                controller: 'ContactController',
                controllerAs: 'vm'
            })
            .state('main.public.pricing', {
                url: "/pricing",
                templateUrl: "app/public/home/pricing.html",
                controllerAs: 'vm'
            })
            .state("main.public.about_us", {
                url: "/aboutus",
                templateUrl: "app/public/home/home.aboutUs.html",
                controller: '',
                controllerAs: 'vm'
            })
            .state("main.public.getting-started", {
                url: "/getting-started",
                templateUrl: "app/public/home/welcome.html",
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state("main.public.getting_started", {
                url: "/getting_started",
                templateUrl: "app/public/home/getting_started.html",
                controller: '',
                controllerAs: 'vm'
            })
            .state("main.public.registerFree", {
                url: "/register/free",
                templateUrl: "app/public/home/register-partials/freeRegister.html",
                controller: 'RegisterController',
                controllerAs: 'vm'
            })
            .state("main.public.registerPackage", {
                url: "/register/package/{type}",
                templateUrl: "app/public/home/register-partials/packageRegister.html",
                controller: 'RegisterController',
                controllerAs: 'vm'
            })
            .state("main.public.resetPassword", {
                url: "/passwordReset",
                templateUrl: "app/public/home/password-reset.html",
                controller: 'RegisterController',
                controllerAs: 'vm'
            })
            .state("main.public.quickFacts", {
                url: "/quickFacts",
                templateUrl: "app/public/home/quick.facts.html",
                controller: '',
                controllerAs: 'vm'
            })
            .state("main.public.quickFactsDetail", {
                url: "/quickFactsDetail/{factsId}",
                templateUrl: "app/public/home/quick.facts.detail.html",
                controller: 'QuickFactsController',
                controllerAs: 'vm'
            })
            .state("main.public.otherServices", {
                url: "/otherServices",
                templateUrl: "app/public/home/other.services.html",
                controller: 'OtherServicesController',
                controllerAs: 'vm'

            });


    }
})();