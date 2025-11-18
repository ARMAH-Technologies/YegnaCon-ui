/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.user')
        .controller('UserListController', UserListController);
    /*@ngNoInject*/

    function UserListController($rootScope, $state, $stateParams, $uibModal, UserService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.getUsers = getUsers;
        vm.users = [];


        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 10;
        vm.filter = '';

        //User Filter Function
        vm.setPackageType = setPackageType;
        vm.setProfileType = setProfileType;
        vm.profileType = '';
        vm.package = '';
        vm.query = '';

        //User subscription Invoice
        vm.printSubscriptionInvoice = printSubscriptionInvoice;
        //User Activation
        vm.activateUser = activateUser;
        vm.deactivateUser = deactivateUser;

        //Subscription Modal
        vm.openModal = openModal;


        getUsers();


        function setProfileType(profileType) {
            vm.profileType = profileType;
            getUsers();
        }

        function setPackageType(packageType) {
            vm.package = packageType;
            getUsers();
        }


        function getUsers() {
            debugger;
            vm.users = [];
            UserService.getUsers(vm.currentPage, vm.profileType, vm.package, vm.query).then(function (response) {
                debugger;
                vm.users = response.data;
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            }, function (error) {

            });
        }

        function activateUser(user) {
            vm.modalContext = "activation";
            var status = "active";
            debugger;
            UserService.changeUserStatus(user, status).then(function (response) {
                debugger;
                user.status = "active";
                //$state.reload();
            }, function (error) {
                debugger;
            });
        }

        function deactivateUser(user) {
            vm.modalContext = "deactivation";
            var status = "inactive";
            debugger;
            UserService.changeUserStatus(user, status).then(function (response) {
                debugger;
                user.status = "inactive";
            }, function (error) {
                debugger;
            });
        }

        function openModal(user, userIndex) {
            debugger;
            $rootScope.subscriber = user;
            vm.subscriberIndex = userIndex;

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/admin/user/user.subscription.modal.html',
                controller: 'UserSubscriptionModalController',
                size: 'sm'
            });

            modalInstance.result.then(function (response) {

                vm.users[vm.subscriberIndex] = $rootScope.subscriber;
                console.log(vm.users[vm.subscriberIndex]);

            });


        }

        //Print Subscription INVOICE
        function printSubscriptionInvoice(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;

            window.print();

            document.body.innerHTML = originalContents;

            $state.transitionTo('main.admin.subscriptionInvoice', null, {'reload': true});
        }


    }

})();