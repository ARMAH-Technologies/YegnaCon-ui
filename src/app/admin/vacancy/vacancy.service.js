/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.vacancy')
        .service('AdminVacancyService', VacancyService);
    /*@ngNoInject*/
    function VacancyService(TokenRestangular) {
        var service = {
            getVacancy: getVacancy,
            getVacancies: getVacancies,
            updateVacancy: updateVacancy,
            addVacancy: addVacancy,
            getCompanies: getCompanies,
            deleteVacancy:deleteVacancy
        };

        return service;
        function getVacancies(currentPage){
            debugger;
            return TokenRestangular.all('vacancies?page='+currentPage).customGET('');

        }
        function updateVacancy(data){
            debugger;
            return TokenRestangular.all('vacancies').customPUT(data);
        }
        function addVacancy(data){
            debugger;
            return TokenRestangular.all('vacancies').customPOST(data);
        }
        function getCompanies(){
            debugger;
            return TokenRestangular.all('users?profileType=Contractor,Consultant&dropdown=true').customGET('');
        }
        function deleteVacancy(vacancyId) {
            debugger;
            return TokenRestangular.all('vacancies/'+vacancyId).customDELETE();
        }
        function getVacancy(vacancyId){
            debugger;
            return TokenRestangular.all('vacancies/'+vacancyId).customGET('');
        }

    }

})();