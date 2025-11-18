/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .controller('QuickFactsController', QuickFactsController).filter();

    function QuickFactsController($state, $rootScope, $stateParams) {
        var vm = this;
        debugger;
        vm.pageId = $stateParams.factsId;
    }

})();