/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.project')
        .controller('ProjectController', ProjectController);
    /*@ngNoInject*/
    function ProjectController($state,$rootScope,ProjectService,CoreService,appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentStateName = $state.current.name;
        vm.getProjects = getProjects;
        vm.projects = [];
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage = 8;
        vm.category = "";
        vm.status = "";
        vm.search = "";


        getProjects();

        vm.showDetail = CoreService.showDetail;

        function getProjects() {
            debugger;
            ProjectService.getProject(vm.currentPage).then(function (response) {
                debugger;
                vm.projects = response.data;
                if (response.data){
                    for (var i = 0; i < response.data.length; i++){
                        vm.projects[i] = response.data[i];
                        vm.projects[i]["image"] = appConstant.imagePath + (response.data[i].file ? response.data[i].file.data.file_name : "uploads/project/project-default.jpg");
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;

            });
        }


    }

})();