/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.news')
        .service('NewsService', NewsService);
    /*@ngNoInject*/
    function NewsService(TokenRestangular) {
        var service = {
            getNews: getNews,
            getNewsItem : getNewsItem,
            postNewsItem: postNewsItem,
            deleteNews:deleteNews,
            updateNews : updateNews

        };

        return service;

        function getNewsItem(newsId){
            debugger;
            return TokenRestangular.all('news/'+newsId).customGET('');
        }
        function getNews(currentPage) {
            debugger;
            return TokenRestangular.all('news?page=' + currentPage).customGET('');
        }

        function postNewsItem(data) {
            debugger;
            return TokenRestangular.all('news').customPOST(data);

        }

        function deleteNews(newsId) {
            debugger;
            return TokenRestangular.all('news/'+newsId).customDELETE();
        }
        function updateNews(data) {
            debugger;
            return TokenRestangular.all('news').customPUT(data);
        }
    }

})();