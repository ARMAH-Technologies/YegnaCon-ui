/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.project')
        .service('ConsultantProjectService', ConsultantProjectService);
    /*@ngNoInject*/
    function ConsultantProjectService($http,TokenRestangular) {
        var service = {
            getProjectDetail: getProjectDetail,
            getProjects: getProjects,
            addProject: addProject,
            editProject: editProject,
            deleteProject: deleteProject,
            submitProforma: submitProforma,
            getProformas: getProformas,
            getProforma: getProforma,
            getCompanyProformas: getCompanyProformas,
            getProformaDetail: getProformaDetail,
            replyProjectProforma: replyProjectProforma,

        };

        return service;
       
        function getProjectDetail(projectId){
            debugger;
            return TokenRestangular.all('projects/' + projectId).customGET('');
        }

        function getProjects(userId, currentPage){
            return TokenRestangular.all('users/' + userId + '/projects?page=' + currentPage).customGET('');
        }

        function addProject(userId, project){
            debugger;
            return TokenRestangular.all('users/' + userId + "/projects").customPOST(project);
        }

        function editProject(project){
            debugger;
            return TokenRestangular.all('projects').customPUT(project);
        }

        function deleteProject(projectId){
            return TokenRestangular.all('projects/' + projectId).customDELETE('');
        }


        function submitProforma(projectProforma){
            debugger;
            return TokenRestangular.all('proformas').customPOST(projectProforma);
        }

        function getProformas(userId, currentPage){
            debugger;
            return TokenRestangular.all('users/' + userId + '/proformas/projects?page=' + currentPage).customGET('');
        }

        function getProforma(proformaId){
            debugger;
            return TokenRestangular.all('proformas/' + proformaId).customGET('');
        }

        function getCompanyProformas(userId, currentPage){
            debugger;
            return TokenRestangular.all('users/' + userId + '/proformas/company_projects?page=' + currentPage).customGET('');
        }

        function getProformaDetail(proformaId){
            debugger;
            return TokenRestangular.all('proformas/' + proformaId).customGET('');
        }

        function replyProjectProforma(reply, userId, proformaId){
            debugger;
            return TokenRestangular.all('users/' + userId + '/proformas/' + proformaId + '/reply').customPOST(reply);
        }

    }

})();