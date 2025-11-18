/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.projectOwner')
        .service('ProjectOwnerService', ProfesionalService);
    /*@ngNoInject*/
    function ProfesionalService(TokenRestangular) {
        var service = {
            getProjectOwners: getProjectOwners,
            getProjectOwnerDetail: getProjectOwnerDetail,
            updateProjectOwner: updateProjectOwner
        };

        return service;
        function getProjectOwners(currentPage) {
            debugger;
            return TokenRestangular.all('users?profileType=ProjectOwner&page=' + currentPage).customGET('');
        }

        function getProjectOwnerDetail(projectOwnerId) {
            debugger;
            return TokenRestangular.all('users/'+projectOwnerId).customGET('');
        }

        function updateProjectOwner(projectOwner) {
            debugger;
            return TokenRestangular.all('users').customPUT(projectOwner);
        }



    }

})();