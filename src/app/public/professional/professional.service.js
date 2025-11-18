/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.professional')
        .service('ProfessionalService', ProfesionalService);
    /*@ngNoInject*/
    function ProfesionalService(TokenRestangular) {
        var service = {
            getProfessionals: getProfessionals,
            getProfessionalDetail: getProfessionalDetail,
            updateProfessional: updateProfessional,
            addExperience: addExperience,
        };

        return service;
        function getProfessionals(currentPage, field, experience, search) {
            debugger;
            return TokenRestangular.all('users?profileType=Professional&page=' + currentPage + '&field=' + field + '&experience=' + experience + '&search=' + search).customGET('');
        }

        function getProfessionalDetail(professionalId) {
            debugger;
            return TokenRestangular.all('users/'+professionalId).customGET('');
        }

        function updateProfessional(user) {
            debugger;
            return TokenRestangular.all('users').customPUT(user);
        }

        function addExperience(experience, professionalId) {
            debugger;
            return TokenRestangular.all('professionals/' + professionalId + '/experience').customPOST(experience);
        }

    }

})();