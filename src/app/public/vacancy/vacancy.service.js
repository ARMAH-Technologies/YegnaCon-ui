/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.vacancy')
        .service('VacancyService', VacancyService);
    /*@ngNoInject*/
    function VacancyService(TokenRestangular) {
        var service = {
            getVacancies: getVacancies,
            getVacancyDetail: getVacancyDetail
        };

        return service;
        function getVacancies(currentPage, field, location, search) {
            debugger;
            return TokenRestangular.all('vacancies?page='+currentPage + '&field=' + field + '&location=' + location + '&search=' + search).customGET('');
        }

        function getVacancyDetail(vacancyId) {
            debugger;
            return TokenRestangular.all('vacancies/'+vacancyId).customGET('');
        }



    }

})();