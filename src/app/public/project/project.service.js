/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.project')
        .service('ProjectService', ProjectService);
    /*@ngNoInject*/
    function ProjectService(TokenRestangular) {
        var service = {
            getProject:getProject,
            getProjectDetail:getProjectDetail
        };

        return service;
        function getProject(currentPage) {
            debugger;
            return TokenRestangular.all('projects?page=' + currentPage).customGET('');
        }

        function getProjectDetail(projectId){
            debugger;
            return TokenRestangular.all('projects/'+projectId).customGET('');
        }


    }

})();