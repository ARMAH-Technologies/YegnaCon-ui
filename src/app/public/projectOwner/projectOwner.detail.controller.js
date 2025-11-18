/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.projectOwner')
        .controller('ProjectOwnerDetailController', ProjectOwnerDetailController);
    /*@ngNoInject*/
    function ProjectOwnerDetailController($state,$stateParams,ProjectOwnerService) {
        var vm = this;
        vm.currentState = $state.current.name;
        getProjectOwnerDetail($stateParams.projectOwnersId);

        function getProjectOwnerDetail(projectOwnerId){
            debugger;
            ProjectOwnerService.getProjectOwnerDetail(projectOwnerId).then(function(response){
                debugger;
                vm.projectOwner = response.data;
                console.log(vm.projectOwner.profile.data.skills.data);
                for(var i=0 ;i< vm.projectOwner.profile.data.skills.data.length;i++){
                    console.log(vm.projectOwner.profile.data.skills.data[i]);
                }
            });
        }
    }

})();