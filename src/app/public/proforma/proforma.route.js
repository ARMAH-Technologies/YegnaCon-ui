/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.proforma')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.proforma', {
                url: "/proforma",
                templateUrl: "app/public/proforma/proforma.html",
                controller: 'ProformaController',
                controllerAs: 'vm'
            });


    }
})();