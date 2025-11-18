/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.notification')
        .service('NotificationService', NotificationService);
    /*@ngNoInject*/
    function NotificationService(TokenRestangular) {
        var service = {
            getNotifications: getNotifications,
            readNotification: readNotification

        };
        return service;

        function getNotifications(userId){
            debugger;
            return TokenRestangular.all('users/' + userId + '/notifications').customGET('');
        }

        function readNotification(notificationId){
            debugger;
            return TokenRestangular.all('notifications/' + notificationId).customGET('');
        }



    }

})();
