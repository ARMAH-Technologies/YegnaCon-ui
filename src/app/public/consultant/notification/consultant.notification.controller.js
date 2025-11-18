/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantNotificationController', ConsultantNotificationController);
    /*@ngNoInject*/
    function ConsultantNotificationController($state,$stateParams,ConsultantService) {
        var vm = this;
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage =  8;
        vm.notifications = [];
        debugger;

        vm.getNotifications = getNotifications;
        getNotifications();
        function getNotifications(){
            ConsultantService.getNotifications($stateParams.consultantId, vm.currentPage).then(function(response){
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

    }

})();