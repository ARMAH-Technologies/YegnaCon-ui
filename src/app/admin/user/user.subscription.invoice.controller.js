/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.user')
        .controller('UserSubscriptionInvoiceController', UserSubscriptionInvoiceController);
    /*@ngNoInject*/

    function UserSubscriptionInvoiceController($rootScope, $state,$stateParams, UserService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.user = {};
        vm.currentDate =new Date();
        vm.printSubscriptionInvoice = printSubscriptionInvoice;


        getUser($stateParams.userId);
        function getUser(userId){
            debugger;
            UserService.getUser(userId).then(function(response){
                debugger;
                vm.user = response.data;
            },function(error){

            });

        }

        //Print Subscription INVOICE
        function printSubscriptionInvoice(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;

            window.print();

            document.body.innerHTML = originalContents;

            $state.transitionTo('main.admin.subscriptionInvoice', null, {'reload':true});
        }


    }

})();