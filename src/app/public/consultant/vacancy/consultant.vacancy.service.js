/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.vacancy')
        .service('ConsultantVacancyService', ConsultantVacancyService);
    /*@ngNoInject*/
    function ConsultantVacancyService($http,TokenRestangular) {
        var service = {
            createVacancy: createVacancy,
            editVacancy: editVacancy,
            getVacancies: getVacancies,
            getVacancy: getVacancy,
            deleteVacancy: deleteVacancy,

        };

        return service;

        function createVacancy(vacancy){
            debugger;
            return TokenRestangular.all('vacancies').customPOST(vacancy);
        }

        function editVacancy(vacancy){
            debugger;
            return TokenRestangular.all('vacancies').customPUT(vacancy);
        }

        function getVacancy(vacancyId) {
            debugger;
            return TokenRestangular.all('vacancies/' + vacancyId).customGET('');
        }

        function deleteVacancy(vacancyId) {
            debugger;
            return TokenRestangular.all('vacancies/' + vacancyId).customDELETE('');
        }

        function getVacancies(userId, currentPage){
            debugger;
            return TokenRestangular.all('users/' + userId + '/vacancies?page=' + currentPage).customGET('');
        }

    }

})();