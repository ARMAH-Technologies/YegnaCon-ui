/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.core')
        .service('AdminService', AdminService);
    /*@ngNoInject*/
    function AdminService(TokenRestangular) {
        var service = {
            getCategoriesByType: getCategoriesByType
        };

        return service;

        function getCategoriesByType(categoryType){
            debugger;
            return TokenRestangular.all('categories?type='+categoryType).customGET('');
        }

    }

})();
