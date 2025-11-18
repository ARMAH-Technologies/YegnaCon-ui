(function () {
    'use strict';

    angular.module('app', [
        'app.core', 'app.admin', 'app.auth', 'app.public'])
        .constant("appConstant", {
            "localApi": "http://localhost:8000/api",
            //"onlineApi": "http://yegnacon.com/api/public/api",
            "grant_type": "password",
            "client_id": "$2y$10$jvw/V6Fo9mvp4JXDCYYI..123uYpTEl27",
            "client_secret": "$2y$10$9OqJjxC9qZKC92L.123nO7hVOPY0436eU",
            //"imagePath": "http://yegnacon.com/api/public/"
            "imagePath": "http://localhost:8000/"
        })

        .factory("TokenRestangular", tokenRestangular);

    /*@ngNoInject*/
    function tokenRestangular(Restangular, appConstant) {
        /*@ngNoInject*/
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setDefaultHeaders({Authorization: 'Bearer ' + localStorage.getItem('yegnacon_access_token')});
            RestangularConfigurer.setBaseUrl(appConstant.localApi);
        });

    }

})();