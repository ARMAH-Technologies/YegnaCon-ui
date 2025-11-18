/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('MainController', MainController);
    /*@ngNoInject*/
    function MainController($state,$rootScope) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentUser = JSON.parse(localStorage.getItem('user'));

    }

})();