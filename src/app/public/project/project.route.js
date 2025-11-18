/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.project')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.project', {
                url: "/project",
                templateUrl: "app/public/project/project.html",
                controller: 'ProjectController',
                controllerAs: 'vm'
            }).state('main.public.projectDetail', {
                url: "/projectDetail/{projectId}",
                templateUrl: "app/public/project/project.detail.html",
                controller: 'ProjectDetailController',
                controllerAs: 'vm'
            });


    }
})();