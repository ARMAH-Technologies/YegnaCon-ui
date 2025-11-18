/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .service('ConsultantService', ConsultantService);
    /*@ngNoInject*/
    function ConsultantService($http, TokenRestangular) {
        var service = {
            getConsultants: getConsultants,
            getConsultantDetail: getConsultantDetail,
            updateConsultant: updateConsultant,
            submitProductProforma: submitProductProforma,
            getCategories: getCategories,
            getProductProformas: getProductProformas,
            getProductProformaDetail: getProductProformaDetail,
            getProformaReplies: getProformaReplies,
            getProformaComparison: getProformaComparison,
            getNotifications: getNotifications,
            getUserGroup: getUserGroup,
            postUserGroup: postUserGroup,
            addMembersToGroup: addMembersToGroup,
            getGroupDetail: getGroupDetail,
            updateGroup: updateGroup,
            deleteUser: deleteUser

        };

        return service;
        function getConsultants(currentPage, grade, type, search) {
            debugger;
            return TokenRestangular.all('users?profileType=Consultant&status=active&page=' + currentPage + '&type=' + type + '&grade=' + grade + "&search=" + search).customGET('');
        }

        function getConsultantDetail(userId) {

            debugger;
            return TokenRestangular.all('users/' + userId).customGET('');
        }

        function updateConsultant(user) {
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

        function getProductProformas(userId) {
            debugger;
            return TokenRestangular.all('users/' + userId + '/proformas/products').customGET('');
        }

        function getProductProformaDetail(proformaId) {
            debugger;
            return TokenRestangular.all('proformas/' + proformaId).customGET('');
        }

        function getProformaReplies(proformaId) {
            debugger;
            return TokenRestangular.all('proformas/' + proformaId + '/reply').customGET('');
        }

        function getProformaComparison(proformaId) {
            return TokenRestangular.all('proformas/' + proformaId + '/reply/priceComparison').customGET('');
        }

        function getNotifications(userId) {
            return TokenRestangular.all('users/' + userId + '/notifications').customGET('');
        }

        function getUserGroup(dropdown, consultantId) {
            if (dropdown) {
                return TokenRestangular.all('users/' + consultantId + '/groups?dropdown=' + dropdown).customGET('');
            }
            else {
                return TokenRestangular.all('users/' + consultantId + '/groups').customGET('');
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