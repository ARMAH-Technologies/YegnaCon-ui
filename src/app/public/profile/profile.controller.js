/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.profile')
        .controller('ProfileController', ProfileController);
    /*@ngNoInject*/
    function ProfileController($state) {
        var vm = this;
        vm.currentState = $state.current.name;
    }

})();