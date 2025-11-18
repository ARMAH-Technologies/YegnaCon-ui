/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.tender')
        .service('TenderService', TenderService);
    /*@ngNoInject*/
    function TenderService(TokenRestangular) {
        var service = {
            getTenders: getTenders,
            getTenderDetail : getTenderDetail,
            getTenderCategories: getTenderCategories,
            getLatestTenders: getLatestTenders,
            addTenderChoices: addTenderChoices
        };

        return service;
        function getTenders(currentPage, category, status, search) {
            debugger;
            return TokenRestangular.all('tenders/categories?page=' + currentPage + '&category_id=' + category + '&status=' + status + '&search=' + search).customGET('');
        }

        function getTenderDetail(tenderId){
            debugger;
            return TokenRestangular.all('tenders/'+tenderId).customGET('');
        }

        function getTenderCategories(){
            debugger;
            return TokenRestangular.all('categories?type=Tender').customGET('');
        }



        function getLatestTenders(currentPage){
            debugger;
            return TokenRestangular.all('tenders/categories?page='+currentPage).customGET('');
        }

        function addTenderChoices(userId,tenderChoices){
            debugger;
            return TokenRestangular.all('users/'+userId+'/categories').customPOST(tenderChoices);
        }

    }

})();