/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.user')
        .service('UserService', UserService);
    /*@ngNoInject*/
    function UserService(TokenRestangular) {
        var service = {
            getUser : getUser,
            getUsers: getUsers,
            updateUser: updateUser,
            changeUserStatus: changeUserStaus,
            getSalesPersonel: getSalesPersonel,
            getSubscriptionPackages: getSubscriptionPackages,
            subscribe : subscribe,
            getUserStat : getUserStat,
            getVacancyStat: getVacancyStat,
            getTenderStat: getTenderStat,
            getProformaStat: getProformaStat,
            getProductStat: getProductStat
        };

        return service;

        function getUsers(currentPage,profileType,packageType,query){
            debugger;
            return TokenRestangular.all('users?page='+currentPage+'&profileType='+profileType+'&package='+ packageType +'&search='+query).customGET('');

        }
        function getUser(userId){
            debugger;
            return TokenRestangular.all('users/'+userId).customGET('');
        }
        function changeUserStaus(user,status){
            debugger;
            return TokenRestangular.all('users/'+user.id+'/status/'+ status).customGET('');
        }
        function updateUser(data){
            var user = {
                "user" : data
            };
            debugger;
            return TokenRestangular.all('user').customPUT(user);
        }
        function getSalesPersonel(){
            debugger;
            return TokenRestangular.all('sales').customGET('');
        }
        function getSubscriptionPackages(){
            debugger;
            return TokenRestangular.all('subscription_packages').customGET('');
        }
        function subscribe(data){
            debugger;
            return TokenRestangular.all('subscribe').customPOST(data);
        }

        function getUserStat(){
            debugger;
            return TokenRestangular.all('users/stat').customGET('');
        }
        function getTenderStat(){
            debugger;
            return TokenRestangular.all('tenders/stat').customGET('');
        }
        function getVacancyStat(){
            debugger;
            return TokenRestangular.all('vacancies/stat').customGET('');
        }
        function getProformaStat(){
            debugger;
            return TokenRestangular.all('proformas/stat').customGET('');
        }
        function getProductStat(){
            debugger;
            return TokenRestangular.all('products/stat').customGET('');
        }
    }

})();