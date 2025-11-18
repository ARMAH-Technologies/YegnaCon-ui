/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.news')
        .controller('NewsEditController', NewsEditController);
    /*@ngNoInject*/
    function NewsEditController($state,$stateParams,NewsService,CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;

        vm.updateNews = updateNews;
        vm.news = {};

        getNewsItem($stateParams.newsId);

        //Editor Options CKEDITOR
        vm.editorOptions = CoreService.editorOptions;

        function updateNews(){
            var news = {"news":
                    {
                        'id' : vm.news.id,
                        "title": vm.news.title,
                        'description': vm.news.description
                    }
                };
            NewsService.updateNews(news).then(function(response){
                debugger;

            },function(error){
                debugger;
            });
        }
        function getNewsItem(newsId){
            NewsService.getNewsItem(newsId).then(function(response){
                debugger;
                vm.news = response.data;
                vm.imageFile = appConstant.imagePath + (vm.news.image ? vm.news.image : "uploads/profile/default_news.png");
            },function(error){
                debugger;
            });
        }

        function upload(type, newsId) {
            debugger;
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, newsId).then(function (response) {
                    debugger;

                }, function(error){
                    debugger;
                });
            }
        }

    }

})();