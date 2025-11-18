/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.projectOwner')
        .controller('ProjectOwnerController', ProjectOwnerController);
    /*@ngNoInject*/
    function ProjectOwnerController($state,$rootScope, ProjectOwnerService,CoreService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentStateName = $state.current.name;
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.itemsPerPage =  10;
        vm.projectOwners = [];
        vm.coreService = CoreService;
        vm.getProjectOwners = getProjectOwners;
        vm.showDetail = CoreService.showDetail;
        vm.locations = CoreService.locations;

        getProjectOwners();

        function getProjectOwners() {
            debugger;
            ProjectOwnerService.getProjectOwners(vm.currentPage).then(function (response){
                debugger;
                if (response.data) {
                    for (var i = 0; i < response.data.length; i++) {
                        vm.projectOwners[i] = response.data[i];
                        vm.projectOwners[i]["image"] = appConstant.imagePath + (response.data[i].file ? response.data[i].file.data.file_name : "uploads/profile/default_user.png");
                    }

                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            });
        }

    }

})();