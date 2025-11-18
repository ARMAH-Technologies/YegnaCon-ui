/**
 * Created by Job on 6/29/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.project')
        .controller('ProjectDetailController', ProjectDetailController);
    /*@ngNoInject*/
    function ProjectDetailController($state,appConstant,$rootScope,$stateParams,ProjectService) {
        var vm = this;
        vm.currentState = $state.current.name;

        getProjectDetail($stateParams.projectId);

        function getProjectDetail(projectId){
            ProjectService.getProjectDetail(projectId).then(function (response) {
                debugger;
                vm.project = response.data;
                vm.project.file = appConstant.imagePath + (vm.project.file.data.file_name ? vm.project.file.data.file_name : "uploads/project/project-default.jpg");
            });
        }
    }

})();