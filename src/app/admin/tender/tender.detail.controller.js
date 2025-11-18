/**
 * Created by Job on 7/5/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.tender')
        .controller('TenderDetailController', TenderDetailController);
    /*@ngNoInject*/
    function TenderDetailController($state) {
        var vm = this;
        vm.currentState = $state.current.name;
    }

})();