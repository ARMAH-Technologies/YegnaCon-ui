/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.project')
        .controller('ConsultantProjectController', ConsultantProjectController);
    /*@ngNoInject*/
    function ConsultantProjectController($state,$rootScope,$stateParams,ConsultantService, ConsultantProjectService) {
        $rootScope.currentParentState = "consultantDashboard.myProjects";
        var vm = this;
        vm.currentState = $state.current.name;
        vm.consultantId = $stateParams.consultantId;
        vm.deleteProject = deleteProject;
        vm.getProjects = getProjects;

        getProjects();

        function getProjects(){
            debugger;
            ConsultantProjectService.getProjects($rootScope.currentUser.id, vm.currentPage).then(function(response){
                debugger;
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
            ConsultantProjectService.deleteProject(projectId).then(function(response){
                debugger;
                getProjects();
            });
        }

    }

})();