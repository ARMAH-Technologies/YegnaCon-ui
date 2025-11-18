/**
 * Created by Job on 6/27/2016.
 */

(function () {
    'use strict';

    angular
        .module('app.public.contractor.project')
        .controller('ContractorProjectEditController', ContractorProjectEditController);
    /*@ngNoInject*/
    function ContractorProjectEditController($state,$stateParams,ContractorProjectService, ContractorService, appConstant, CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.contractor = {};
        vm.editProject = editProject;
        vm.project = [];
        getProjectDetail($stateParams.projectId);
        vm.upload = upload;
        vm.updatePicture = updatePicture;
        vm.updateSuccess = '';
        vm.editorOptions = CoreService.editorOptions;

        function getProjectDetail(projectId){
            ContractorProjectService.getProjectDetail(projectId).then(function(response){
                debugger;

                vm.project = response.data;
                vm.project["logo"] = appConstant.imagePath + (response.data.file ? response.data.file.data.file_name : "uploads/project/project-default.jpg");

            });

        }

        getContractorDetail($stateParams.contractorId);

        function getContractorDetail(userId){
            debugger;
            ContractorService.getContractorDetail(userId).then(function(response){
                debugger;
                vm.contractor = response.data;
                //console.log(vm.contractor);
                //Set Id for Contractor And Its address if exists
                if(vm.contractor.profile.data.id){
                    vm.contractorId = vm.contractor.profile.data.id;
                }
                if(vm.contractor.address.data.id){
                    vm.addressId = vm.contractor.address.data.id;
                }

            },function(error){

            });

        }

        function editProject(isValid){
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
                ContractorProjectService.editProject(project).then(function(response){
                   debugger;
                    vm.updateSuccess = "Update successful!"

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
                    vm.updateSuccess = "Project Picture uploaded successfully!"
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
                        vm.updateSuccess = "Project Picture updated Successfully!"
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