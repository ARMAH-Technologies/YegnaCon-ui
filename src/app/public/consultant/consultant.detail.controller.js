/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantDetailController', ConsultantDetailController);
    /*@ngNoInject*/
    function ConsultantDetailController($state, $rootScope, $stateParams,ConsultantService, CoreService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.consultant = {};
        vm.dumpHTML = function (html) {
            return html;
        };
        getConsultantDetail($stateParams.consultantId);
        vm.bindHtml = CoreService.bindHtml;
        function getConsultantDetail(userId){
            debugger;
            ConsultantService.getConsultantDetail(userId).then(function(response){
                debugger;
                vm.consultant = response.data;
                vm.consultant["logo"] = appConstant.imagePath + (vm.consultant.file ? vm.consultant.file.data.file_name : "uploads/profile/default_user.png");
                var projects = vm.consultant.profile.data.projects.data;
                if (projects){
                    for (var i = 0; i < projects.length; i++){
                        projects[i]["logo"] = appConstant.imagePath +
                            (projects[i].file ? projects[i].file.data.file_name : "uploads/profile/default_company.png");
                    }
                }
                vm.projects = projects;
            });

        }
    }

})();