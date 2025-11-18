/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.project')
        .controller('ConsultantProjectCreateController', ConsultantProjectCreateController);
    /*@ngNoInject*/
    function ConsultantProjectCreateController($state,$stateParams,ConsultantProjectService, CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.consultant = {};
        var stateParam = $stateParams;
        vm.addProject= addProject;
        vm.upload = upload;
        vm.editorOptions = CoreService.editorOptions;

        debugger;
        function addProject(isValid){
            debugger;
            if (isValid){
                var project = {
                    "project":
                    {
                        "name": vm.project.name,
                        "category": vm.project.category,
                        "client": vm.project.client,
                        "description": vm.project.description,
                        "elapsed_time": vm.project.elapsed_time,
                        "cost":vm.project.cost,
                        "location":vm.project.location,
                    }
                };
                ConsultantProjectService.addProject($stateParams.consultantId, project).then(function(response){
                    debugger;
                    if (response.data){
                        upload("project", response.data.id);
                    }
                    $state.go("main.public.consultantDashboard.project");

                });
            }
        }

        function upload(type, productId) {
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, productId).then(function (response) {
                    debugger;
                });
            }
        }



    }

})();