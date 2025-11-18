/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.tender')
        .controller('TenderController', TenderController);
    /*@ngNoInject*/
    function TenderController($state) {
        var vm = this;
        vm.currentState = $state.current.name;
    }

})();