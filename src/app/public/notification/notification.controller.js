/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.notification')
        .controller('NotificationController', NotificationController);
    /*@ngNoInject*/
    function NotificationController($state,$stateParams, NotificationService) {
        var vm = this;
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage =  8;
        vm.notifications = [];
        vm.userId = $stateParams.userId;
        vm.userType = $stateParams.type;
        debugger;

        vm.getNotifications = getNotifications;
        vm.readNotification = readNotification;

        getNotifications();
        function getNotifications(){
            NotificationService.getNotifications(vm.userId, vm.currentPage).then(function(response){
                debugger;
                if (response.data){
                    vm.notifications = response.data;
                    for (var i = 0; i < vm.notifications.length; i++){
                        vm.notifications[i]["order"] = i+1;
                    }
                }

                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;

            }, function(error){
                debugger;
            });
        }

        function readNotification(notification) {
            debugger;
            NotificationService.readNotification(notification.id).then(function(response){
                debugger;
                var param = {};
                param["proformaId"] = notification.item_id;
                if (notification.type == "ProjectCostResponse") param["user"] = true;

                param[vm.userType + "Id"] = vm.userId;
                if (notification.type == "ProjectCostRequest" || notification.type == "ProjectCostResponse"){
                    var s = "main.public." + vm.userType + "Dashboard.projectProformaDetail";
                    debugger;
                    $state.go(s, param)
                } else if (notification.type == "ProjectCostResponse"){
                    $state.go("main.public.cont")
                }
            }, function(error){
               debugger;
            });
        }

    }

})();