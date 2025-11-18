/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.project')
        .controller('ContractorProjectCreateController', ContractorProjectCreateController);
    /*@ngNoInject*/
    function ContractorProjectCreateController($state,$rootScope,$stateParams,ContractorProjectService, CoreService) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.myProjects";
        vm.currentState = $state.current.name;
        vm.contractor = {};
        vm.addProject= addProject;
        vm.upload = upload;
        vm.editorOptions = CoreService.editorOptions;


        function addProject(isValid){
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
                ContractorProjectService.addProject($stateParams.contractorId, project).then(function(response){

                    if (response.data){
                        upload("project", response.data.id);
                    }
                    $state.go("main.public.contractorDashboard.project")
                });

            }
        }

        function upload(type, vendorId) {
            debugger;
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, vendorId).then(function (response) {


                }, function(error){

                });
            }
        }



    }

})();