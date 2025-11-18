/**
 * Created by tOm_HydRa on 8/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier.tender')
        .service('SupplierTenderService', SupplierTenderService);
    /*@ngNoInject*/
    function SupplierTenderService($http,TokenRestangular) {
        var service = {
            createTender: createTender,
            editTender: editTender,
            getTenders: getTenders,
            getTender: getTender,
            deleteTender: deleteTender,

        };

        return service;

        function createTender(tender){
            debugger;
            return TokenRestangular.all('tenders').customPOST(tender);
        }

        function editTender(tender){
            debugger;
            return TokenRestangular.all('tenders').customPUT(tender);
        }

        function getTender(tenderId) {
            debugger;
            return TokenRestangular.all('tenders/' + tenderId).customGET('');
        }

        function deleteTender(tenderId) {
            debugger;
            return TokenRestangular.all('tenders/' + tenderId).customDELETE('');
        }

        function getTenders(userId, currentPage){
            debugger;
            return TokenRestangular.all('users/' + userId + '/tenders?page=' + currentPage).customGET('');
        }

    }

})();