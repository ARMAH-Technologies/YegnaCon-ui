/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantProformaController', ConsultantProformaController);
    /*@ngNoInject*/
    function ConsultantProformaController($state) {
        var vm = this;
        vm.currentState = $state.current.name;

    }

})();