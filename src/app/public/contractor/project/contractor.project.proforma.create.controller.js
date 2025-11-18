/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.project')
        .controller('ContractorProjectProformaCreateController', ContractorProjectProformaCreateController);
    /*@ngNoInject*/
    function ContractorProjectProformaCreateController($state,$rootScope, CoreService, ContractorProjectService) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.projectProforma";
        vm.currentState = $state.current.name;
        vm.companyLevels = CoreService.companyLevels;
        vm.companyTypes = CoreService.companyTypes;

        vm.submitProforma = submitProforma;
        vm.editorOptions = CoreService.editorOptions;
        vm.clicked= false;

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
                ContractorProjectService.submitProforma(proforma).then(function(response){
                    if (response.data){
                        upload("project_proforma_request", response.data.id);
                    }
                    $state.go("main.public.contractorDashboard.projectProforma");
                    debugger;
                }, function(error){
                    debugger;
                });
            }
            else{
                vm.clicked = false;
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