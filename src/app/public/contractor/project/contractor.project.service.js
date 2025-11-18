/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.project')
        .service('ContractorProjectService', ContractorProjectService);
    /*@ngNoInject*/
    function ContractorProjectService($http,TokenRestangular) {
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
            replyProjectProforma: replyProjectProforma

        };

        return service;
       
        function getProjectDetail(projectId){

            return TokenRestangular.all('projects/' + projectId).customGET('');
        }

        function getProjects(userId, currentPage){
            return TokenRestangular.all('users/' + userId + '/projects?page=' + currentPage).customGET('');
        }

        function addProject(userId, project){

            return TokenRestangular.all('users/' + userId + "/projects").customPOST(project);
        }

        function editProject(project){

            return TokenRestangular.all('projects').customPUT(project);
        }

        function deleteProject(projectId){
            return TokenRestangular.all('projects/' + projectId).customDELETE('');
        }

        function submitProforma(projectProforma){

            return TokenRestangular.all('proformas').customPOST(projectProforma);
        }

        function getProformas(userId, currentPage){

            return TokenRestangular.all('users/' + userId + '/proformas/projects?page=' + currentPage).customGET('');
        }

        function getProforma(proformaId){

            return TokenRestangular.all('proformas/' + proformaId).customGET('');
        }

        function getCompanyProformas(userId, currentPage){

            return TokenRestangular.all('users/' + userId + '/proformas/company_projects?page=' + currentPage).customGET('');
        }

        function getProformaDetail(proformaId){

            return TokenRestangular.all('proformas/' + proformaId).customGET('');
        }
        function replyProjectProforma(reply, userId, proformaId){

            return TokenRestangular.all('users/' + userId + '/proformas/' + proformaId + '/reply').customPOST(reply);
        }

    }

})();