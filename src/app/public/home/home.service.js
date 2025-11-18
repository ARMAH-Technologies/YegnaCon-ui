/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .service('HomeService', HomeService);
    /*@ngNoInject*/
    function HomeService(TokenRestangular) {
        var service = {
            getNews: getNews,
            getNewsDetail : getNewsDetail,
            postComment:postComment,
            getProductCategories: getProductCategories,
            getProducts: getProducts,
            getUserInfo:getUserInfo
        };
        return service;

        function getNews() {
            debugger;
            return TokenRestangular.all('news').customGET('');
        }

        function getNewsDetail(newsId){
            debugger;
            return TokenRestangular.all('news/'+newsId).customGET('');
        }

        function postComment(newsId,comment){
            debugger;
            return TokenRestangular.all('news/'+newsId+'/comments').customPOST(comment);
        }

        function getProductCategories(){
            return TokenRestangular.all('product_categories').customGET('');
        }

        function getProducts(currentPage){
            return TokenRestangular.all('products?page=' + currentPage).customGET('');
        }

        function getUserInfo(userId) {
            return TokenRestangular.all('employees/'+userId).customGET('');
        }


    }

})();