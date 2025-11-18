/**
 * Created by acer1 on 7/30/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .controller('NewsController', NewsController);
    /*@ngNoInject*/
    function NewsController($state, HomeService, $stateParams, $rootScope, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;

        var user = $rootScope.currentUser;
        vm.news = [];
        vm.currentPage = 1;
        vm.comment = null;
        var newsId = $stateParams.newsId;
        vm.getComments = getComments;
        vm.postComment = postComment;
        vm.loadMore = true;
        vm.dumpHTML = function (html) {
            return html;
        };
        getNews();
        getNewsDetail(newsId);


        function getNewsDetail(newsId) {
            HomeService.getNewsDetail(newsId).then(function (response) {
                debugger;
                vm.news = response.data;
                vm.image = appConstant.imagePath + (vm.news.files.data[0].file_name );

                getComments(3, true);
            });
        }

        function getComments(count, status) {
            debugger;
            vm.comments = [];
            if (vm.news.comments.length < 3) {
                for (var x = 0; x < vm.news.comments.length; x++) {
                    vm.comments[x] = vm.news.comments.data[x];
                    vm.loadMore = false;
                }
            }
            else {
                for (var x = 0; x < count; x++) {
                    vm.comments[x] = vm.news.comments.data[x];
                    vm.loadMore = true;
                }
            }
        }

        function postComment() {
            debugger;
            HomeService.postComment(newsId, vm.comment).then(function (response) {
                $state.reload();
            });
        }

        function getNews() {
            HomeService.getNews().then(function (response) {
                debugger;
                vm.newsList = response.data;
            });
        }
    }

})();
