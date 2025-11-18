/**
 * Created by Job on 6/27/2016.
 */
/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.tender')
        .service('AdminTenderService', AdminTenderService);
    /*@ngNoInject*/
    function AdminTenderService(TokenRestangular) {
        var service = {
            getTender: getTender,
            getTenders: getTenders,
            updateTender: updateTender,
            addTender: addTender,
            getCompanies: getCompanies,
            deleteTender:deleteTender
        };

        return service;
        function getTenders(currentPage){
            debugger;
            return TokenRestangular.all('tenders?page='+currentPage).customGET('');

        }
        function updateTender(data){
            debugger;
            return TokenRestangular.all('tenders').customPUT(data);
        }
        function addTender(data){
            debugger;
            return TokenRestangular.all('tenders').customPOST(data);
        }
        function getCompanies(){
            debugger;
            return TokenRestangular.all('users?profileType=Contractor,Consultant&dropdown=true').customGET('');
        }
        function deleteTender(tenderId) {
            debugger;
            return TokenRestangular.all('tenders/'+tenderId).customDELETE();
        }
        function getTender(tenderId){
            debugger;
            return TokenRestangular.all('tenders/'+tenderId).customGET('');
        }

    }

})();