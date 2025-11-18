/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.proforma')
        .controller('ProformaController', ProformaController);
    /*@ngNoInject*/
    function ProformaController($state) {
        var vm = this;
        vm.currentState = $state.current.name;
    }

})();