/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.project')
        .controller('ContractorProjectController', ContractorProjectController);
    /*@ngNoInject*/
    function ContractorProjectController($state,$stateParams,$rootScope, ContractorProjectService) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.myProjects";
        vm.currentState = $state.current.name;
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage =  8;
        vm.contractorId = $stateParams.contractorId;
        vm.deleteProject = deleteProject;
        vm.getProjects = getProjects;

        getProjects();

        function getProjects(){

            ContractorProjectService.getProjects($rootScope.currentUser.id, vm.currentPage).then(function(response){

                if (response.data){
                    vm.projects = response.data;
                    for (var i = 0; i < vm.projects.length; i++){
                        vm.projects[i]["order"] = i+1;
                    }
                }

                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            });
        }

        function deleteProject(projectId){
            debugger;
            ContractorProjectService.deleteProject(projectId).then(function(response){
                debugger;
                getProjects();
            });
        }

    }

})();