(function () {
    'use strict';
    angular
        .module('app.admin.user')
        .controller('UserSubscriptionModalController', UserSubscriptionModalController);


    function UserSubscriptionModalController($scope,$state, $rootScope, $uibModalInstance, UserService) {
        debugger;
        var vm = this;
        $scope.sales = [];
        $scope.packages = [];
        vm.subscriptionButtonDisabled = false;


        //Get Currrent User
        $scope.subscriberId = $rootScope.subscriber.id;
        debugger;

        //User Subscription
        $scope.getSalesPersonel = getSalesPersonel;
        $scope.getPackages = getPackages;
        $scope.subscribe = subscribe;

        $scope.subscription = {};
        $scope.subscription.user_id = $rootScope.subscriber.id;

        getSalesPersonel();
        getPackages();

        $scope.ok = ok;
        $scope.cancel = cancel;

        function ok() {
            $uibModalInstance.close($scope.items);
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
            $state.reload();
        }

        function getSalesPersonel() {
            debugger;
            UserService.getSalesPersonel().then(function (response) {
                debugger;
                $scope.sales = response.data;
                $scope.sales.sort(function(a, b) {
                    var textA = a.full_name.toUpperCase();
                    var textB = b.full_name.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
            }, function () {
                debugger;
            });

        }

        function getPackages() {
            debugger;
            UserService.getSubscriptionPackages().then(function (response) {
                debugger;
                $scope.packages = response.data;
                $scope.packages.sort(function(a, b) {
                    var textA = a.package;
                    var textB = b.package;
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });

            }, function (error) {
                debugger;
            });
        }

        function subscribe() {
            debugger;
            $scope.subscriptionButtonDisabled = true;
            UserService.subscribe($scope.subscription).then(function (response) {
                $rootScope.subscriber = response.data;
                cancel();
            }, function (error) {
                cancel();

            });
        }
    }
})();
