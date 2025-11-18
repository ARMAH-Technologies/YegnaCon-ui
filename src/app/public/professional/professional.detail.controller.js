/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.professional')
        .controller('ProfessionalDetailController', ProfessionalDetailController);
    /*@ngNoInject*/
    function ProfessionalDetailController($state,$stateParams,ProfessionalService, CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        getProfessionalDetail($stateParams.professionalId);
        vm.bindHtml = CoreService.bindHtml;

        function getProfessionalDetail(professionalId){
            debugger;
            ProfessionalService.getProfessionalDetail(professionalId).then(function(response){
                vm.professional = response.data;
                console.log(vm.professional.profile.data.skills.data);
                for(var i=0 ;i< vm.professional.profile.data.skills.data.length;i++){
                    console.log(vm.professional.profile.data.skills.data[i]);
                }
            });
        }
    }

})();