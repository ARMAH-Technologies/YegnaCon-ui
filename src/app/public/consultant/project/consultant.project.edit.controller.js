/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.project')
        .controller('ConsultantProjectEditController', ConsultantProjectEditController);
    /*@ngNoInject*/
    function ConsultantProjectEditController($state,$stateParams,ConsultantProjectService, ConsultantService, CoreService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.consultant = {};
        vm.editProject = editProject;
        vm.project = [];
        getProjectDetail($stateParams.projectId);
        vm.upload = upload;
        vm.updatePicture = updatePicture;
        vm.editorOptions = CoreService.editorOptions;

        function getProjectDetail(projectId){
            ConsultantProjectService.getProjectDetail(projectId).then(function(response){
                debugger;

                vm.project = response.data;
                vm.project["logo"] = appConstant.imagePath + (response.data.file ? response.data.file.data.file_name : "uploads/project/project-default.jpg");

            });

        }

        getConsultantDetail($stateParams.consultantId);

        function getConsultantDetail(userId){
            debugger;
            ConsultantService.getConsultantDetail(userId).then(function(response){
                debugger;
                vm.consultant = response.data;
                //console.log(vm.consultant);
                //Set Id for Consultant And Its address if exists
                if(vm.consultant.profile.data.id){
                    vm.consultantId = vm.consultant.profile.data.id;
                }
                if(vm.consultant.address.data.id){
                    vm.addressId = vm.consultant.address.data.id;
                }

            },function(error){

            });

        }

        function editProject(isValid){
            debugger;
            if (isValid){
                var project = {
                    "project": {
                        "id": vm.project.id,
                        "name": vm.project.name,
                        "category": vm.project.category,
                        "client": vm.project.client,
                        "description": vm.project.description,
                        "elapsed_time": vm.project.elapsed_time,
                        "cost":vm.project.cost,
                        "location":vm.project.location,
                    }
                };
                debugger;
                ConsultantProjectService.editProject(project).then(function(response){
                   debugger;
                    console.log("Project Update Successful");
                }, function(error){
                    debugger;
                });
            }
        }

        function upload(type, productId) {
            debugger;
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, productId).then(function (response) {
                    debugger;
                    getProjectDetail($stateParams.projectId);

                }, function(error){
                    debugger;
                });
            }
        }

        function updatePicture() {
            debugger;
            if (vm.file) {
                if (vm.project.file) {
                    CoreService.updateFile(vm.file, vm.project.file.data.id).then(function (response) {
                        debugger;
                        getProjectDetail($stateParams.projectId);
                    }, function (error) {
                        debugger;
                    });
                }
                else {
                    upload("project", vm.project.id);
                }
            }
        }

    }

})();