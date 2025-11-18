/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .service('RegisterService', RegisterService);
    /*@ngNoInject*/
    function RegisterService($http,TokenRestangular) {
        var service = {
            register: register

        };

        return service;
        function register(user){
            debugger;
            return TokenRestangular.all('/users').customPOST(user);
        }


    }

})();