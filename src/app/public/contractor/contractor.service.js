/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .service('ContractorService', ContractorService);
    /*@ngNoInject*/
    function ContractorService(TokenRestangular) {
        var service = {
            getContractors: getContractors,
            getContractorDetail: getContractorDetail,
            updateContractor: updateContractor,
            submitProductProforma: submitProductProforma,
            getCategories: getCategories,
            getProductProformas: getProductProformas,
            getProductProformaDetail: getProductProformaDetail,
            getProformaReplies: getProformaReplies,
            getProformaComparison: getProformaComparison,
            getProformaReplyDetail: getProformaReplyDetail,
            getUserGroup: getUserGroup,
            postUserGroup: postUserGroup,
            addMembersToGroup: addMembersToGroup,
            getGroupDetail: getGroupDetail,
            updateGroup: updateGroup,
            deleteUser: deleteUser
        };

        return service;
        function getContractors(currentPage, grade, type, search) {
            debugger;
            return TokenRestangular.all('users?profileType=Contractor&status=active&page=' + currentPage + '&type=' + type + '&grade=' + grade + "&search=" + search).customGET('');
        }

        function getContractorDetail(userId) {

            debugger;
            return TokenRestangular.all('users/' + userId).customGET('');
        }

        function updateContractor(user) {
            debugger;
            return TokenRestangular.all('users').customPUT(user);
        }

        function submitProductProforma(proforma) {
            debugger;
            return TokenRestangular.all('proformas').customPOST(proforma);
        }

        function getCategories() {
            debugger;
            return TokenRestangular.all('categories?type=Supplier').customGET('');
        }

        function getProductProformas(userId, currentPage) {
            debugger;
            return TokenRestangular.all('users/' + userId + '/proformas/products?page=' + currentPage).customGET('');
        }

        function getProductProformaDetail(proformaId) {
            debugger;
            return TokenRestangular.all('proformas/' + proformaId).customGET('');
        }

        function getProformaReplies(proformaId, page) {
            debugger;
            return TokenRestangular.all('proformas/' + proformaId + '/reply?page='+page).customGET('');
        }

        function getProformaComparison(proformaId,page) {
            return TokenRestangular.all('proformas/' + proformaId + '/reply/priceComparison?page='+page).customGET('');
        }

        function getProformaReplyDetail(proformaId) {
            return TokenRestangular.all('proformaResponses//' + proformaId).customGET('');
        }

        function getUserGroup(dropdown, contractorId) {
            if (dropdown) {
                return TokenRestangular.all('users/' + contractorId + '/groups?dropdown=' + dropdown).customGET('');
            }
            else {
                return TokenRestangular.all('users/' + contractorId + '/groups').customGET('');
            }

        }

        function postUserGroup(data) {
            return TokenRestangular.all('groups').customPOST(data);
        }

        function addMembersToGroup(groupId, data) {
            return TokenRestangular.all('groups/' + groupId + '/users').customPOST(data);
        }

        function getGroupDetail(groupId) {
            return TokenRestangular.all('groups/' + groupId).customGET();
        }

        function updateGroup(groupId, data) {
            debugger;
            return TokenRestangular.all('groups/' + groupId).customPUT(data);
        }

        function deleteUser(groupId) {
            return TokenRestangular.all('groups/' + groupId).customDELETE();
        }

    }

})();