/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.documentation')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.documentation', {
                url: "/documentation",
                templateUrl: "app/public/documentation/documentation.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.home', {
                url: "/home",
                templateUrl: "app/public/documentation/home.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.login', {
                url: "/login",
                templateUrl: "app/public/documentation/login.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.register', {
                url: "/register",
                templateUrl: "app/public/documentation/register.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.consultants', {
                url: "/consultants",
                templateUrl: "app/public/documentation/consultants.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.suppliers', {
                url: "/suppliers",
                templateUrl: "app/public/documentation/suppliers.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.editProfile', {
                url: "/editProfile",
                templateUrl: "app/public/documentation/edit-profile.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.contractors', {
                url: "/contractors",
                templateUrl: "app/public/documentation/contractors.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.addProduct', {
                url: "/addProduct",
                templateUrl: "app/public/documentation/add-product.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.addProject', {
                url: "/addProject",
                templateUrl: "app/public/documentation/add-project.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.addProductProforma', {
                url: "/addProductProforma",
                templateUrl: "app/public/documentation/product-proforma.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.addProjectProforma', {
                url: "/addProjectProforma",
                templateUrl: "app/public/documentation/project-proforma.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.latestTender', {
                url: "/latestTender",
                templateUrl: "app/public/documentation/latest-tender.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.welcome', {
                url: "/welcome",
                templateUrl: "app/public/documentation/welcome.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.otherOutsourcedProject', {
                url: "/otherOutsourcedProject",
                templateUrl: "app/public/documentation/other-outsourced-project.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.yourOutsourcedProject', {
                url: "/yourOutsourcedProject",
                templateUrl: "app/public/documentation/your-outsourced-project.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.outsourceProject', {
                url: "/outsourceProject",
                templateUrl: "app/public/documentation/outsource-project.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.viewProductProforma', {
                url: "/viewProductProforma",
                templateUrl: "app/public/documentation/view-product-proforma.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.consultantsDetail', {
                url: "/consultantsDetail",
                templateUrl: "app/public/documentation/consultants-detail.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.contractorsDetail', {
                url: "/contractorsDetail",
                templateUrl: "app/public/documentation/contractors-detail.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.suppliersDetail', {
                url: "/suppliersDetail",
                templateUrl: "app/public/documentation/suppliers-detail.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.productsDetail', {
                url: "/productsDetail",
                templateUrl: "app/public/documentation/products-detail.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.projectsDetail', {
                url: "/projectsDetail",
                templateUrl: "app/public/documentation/projects-detail.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.vacanciesDetail', {
                url: "/vacanciesDetail",
                templateUrl: "app/public/documentation/vacancies-detail.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.professionalsDetail', {
                url: "/professionalsDetail",
                templateUrl: "app/public/documentation/professionals-detail.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.tendersDetail', {
                url: "/tendersDetail",
                templateUrl: "app/public/documentation/tenders-detail.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.addVacancy', {
                url: "/addVacancy",
                templateUrl: "app/public/documentation/add-vacancy.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.addTender', {
                url: "/addTender",
                templateUrl: "app/public/documentation/add-tender.html",
                controller: '',
                controllerAs: 'vm'
            }) .state('main.public.documentation.resetAccount', {
                url: "/resetAccount",
                templateUrl: "app/public/documentation/reset-account.html",
                controller: '',
                controllerAs: 'vm'
            });


    }
})();