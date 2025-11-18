/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .controller('ContactController', ContactController);
    /*@ngNoInject*/
    function ContactController($state,HomeService) {
        var vm = this;
        vm.currentState = $state.current.name;
    }

})();