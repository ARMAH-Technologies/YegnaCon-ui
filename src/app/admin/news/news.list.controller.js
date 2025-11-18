/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.news')
        .controller('NewsListController', NewsListController);
    /*@ngNoInject*/
    function NewsListController($state, NewsService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.getNews = getNews;
        vm.deleteNews = deleteNews;
        vm.news = [];
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 10;

        getNews();

        function getNews() {
            debugger;
            NewsService.getNews(vm.currentPage).then(function (response) {
                debugger;
                vm.news = response.data;
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            }, function (error) {
                debugger;
            });
        }

        function deleteNews(newsId) {
            debugger;
            NewsService.deleteNews(newsId).then(function () {
                debugger;
                $state.reload();
            });
        }

    }

})();