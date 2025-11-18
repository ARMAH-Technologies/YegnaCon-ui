/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.core')
        .service('PublicService', PublicService);
    /*@ngNoInject*/
    function PublicService(TokenRestangular) {
        var service = {
            getNotifications: getNotifications,
            readNotification: readNotification,
            getCategoriesByType: getCategoriesByType,
            getUsersSelectedCategories: getUsersSelectedCategories,
            getUserInfo:getUserInfo
        };

        return service;

        function getNotifications(userId){
            return TokenRestangular.all('users/' + userId + '/notifications').customGET('');
        }

        function readNotification(notificationId){
            return TokenRestangular.all('notifications/' + notificationId).customGET('');
        }

        function getCategoriesByType(categoryType){

            return TokenRestangular.all('categories?type='+categoryType).customGET('');
        }


        function getUsersSelectedCategories(userId,Type){

            return TokenRestangular.all('users/'+userId+'/categories?type='+Type).customGET('');
        }

        function getUserInfo(userId) {
            return TokenRestangular.all('employees/'+userId).customGET('');
        }



    }

})();
