/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.project')
        .controller('ConsultantProjectProformaCreateController', ConsultantProjectProformaCreateController);
    /*@ngNoInject*/
    function ConsultantProjectProformaCreateController($state, CoreService, ConsultantProjectService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.companyLevels = CoreService.companyLevels;
        vm.companyTypes = CoreService.companyTypes;

        vm.submitProforma = submitProforma;
        vm.editorOptions = CoreService.editorOptions;
        vm.clicked = false;
        function submitProforma(isValid){
            vm.clicked = true;
            debugger;
            if (isValid){
                var proforma = {
                    "proformaRequest": {
                        "type": "ProjectCost"
                    },
                    "proformaRequestProjectCost":
                    {
                        "title": vm.project.name,
                        "description": vm.project.description,
                        "type": vm.project.type,
                        "level": vm.project.level
                    }
                };
                debugger;
                ConsultantProjectService.submitProforma(proforma).then(function(response){
                    if (response.data){
                        upload("project_proforma_request", response.data.id);
                    }
                    $state.go("main.public.consultantDashboard.projectProforma");
                    debugger;
                }, function(error){
                    debugger;
                });
            }else{
                vm.clicked=false;
            }
        }

        function upload(type, proformaId) {
            debugger;
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, proformaId).then(function (response) {
                    debugger;

                }, function(error){
                    debugger;
                });
            }
        }



    }

})();