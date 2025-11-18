/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.news')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.admin.news', {
                url: "/news",
                templateUrl: "app/admin/news/news.html",

            }).state('main.admin.news.list', {
                url: "/list",
                templateUrl: "app/admin/news/news.list.html",
                controller: 'NewsListController',
                controllerAs: 'vm'
            }).state('main.admin.news.post', {
                url: "/post",
                templateUrl: "app/admin/news/news.post.html",
                controller: 'NewsPostController',
                controllerAs: 'vm'
            }).state('main.admin.news.edit',{
                url: "/edit/{newsId}",
                templateUrl: "app/admin/news/news.edit.html",
                controller: 'NewsEditController',
                controllerAs : 'vm'
            });
    }
})();