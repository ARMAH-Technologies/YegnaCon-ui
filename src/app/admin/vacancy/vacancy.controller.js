/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.vacancy')
        .controller('VacancyController', VacancyController);

    function VacancyController($state) {
        var vm = this;
        vm.currentState = $state.current.name;
    }

})();