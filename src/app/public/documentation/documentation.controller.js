/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.documentation')
        .controller('DocumentationCtrl', DocumentationCtrl);

    function DocumentationCtrl($state, $stateParams, $rootScope) {
        var vm = this;
        $rootScope.currentStateName = $state.current.name;
    }

})();