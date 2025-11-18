/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorDetailController', ContractorDetailController);
    /*@ngNoInject*/
    function ContractorDetailController($state,$rootScope, $stateParams, ContractorService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.contractor = {};
        vm.dumpHTML = function (html) {
            return html;
        };
        getContractorDetail($stateParams.contractorId);
        function getContractorDetail(userId) {
            debugger;
            ContractorService.getContractorDetail(userId).then(function (response) {
                debugger;
                vm.contractor = response.data;
                vm.contractor["logo"] = appConstant.imagePath + (vm.contractor.file ? vm.contractor.file.data.file_name : "uploads/profile/default_user.png");
                var projects = vm.contractor.profile.data.projects.data;
                if (projects){
                    for (var i = 0; i < projects.length; i++){
                        projects[i]["logo"] = appConstant.imagePath +
                            (projects[i].file ? projects[i].file.data.file_name : "uploads/profile/default_company.png");
                    }
                }
                vm.projects = projects;
            });

        }

        function showDetail(){
            debugger;
            if ($rootScope.currentUser && $rootScope.currentUser.status == "active") {
                var id = type + "Id";
                var param = {};
                param[id] = userId;
                $state.go("main.public." + type + "Detail", param);
            }
            else {
                $state.go("main.public.login");

            }
        }

    }

})();