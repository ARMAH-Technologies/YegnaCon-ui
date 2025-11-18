/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.user')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.admin.user', {
                url: "/user",
                templateUrl: "app/admin/user/user.html",
                controllerAs: 'vm'
            })
            .state('main.admin.user.list', {
                url: "/list",
                templateUrl: "app/admin/user/user.list.html",
                controller: 'UserListController',
                controllerAs: 'vm'
            })
            .state('main.admin.subscriptionInvoice', {
                url: "/subscriptionInvoice/{userId}",
                templateUrl: "app/admin/user/user.subscription.invoice.html",
                controller: 'UserSubscriptionInvoiceController',
                controllerAs: 'vm'
            });


    }
})();