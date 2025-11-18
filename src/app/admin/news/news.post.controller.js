/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.news')
        .controller('NewsPostController', NewsPostController);
    /*@ngNoInject*/
    function NewsPostController($state,NewsService,CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.news = {
            "news" : {
                "title":"",
                "description": ""
            }
        };
        vm.postNewsItem = postNewsItem;

        //Editor Options CKEDITOR
        vm.editorOptions = {
            language: 'en',
            allowedContent: true,
            entities: false
        };

        function postNewsItem(){
            NewsService.postNewsItem(vm.news).then(function(response){
                debugger;
                if (response.data){
                    upload("news", response.data.id);
                }
                $state.go("main.admin.news.list");
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