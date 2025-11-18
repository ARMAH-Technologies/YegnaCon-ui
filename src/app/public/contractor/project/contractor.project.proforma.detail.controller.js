/**
 * Created by tOm_HydRa on 8/11/16.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.project')
        .controller('ContractorProjectProformaDetailController', ContractorProjectProformaDetailController);
    /*@ngNoInject*/
    function ContractorProjectProformaDetailController($state,$rootScope, $stateParams, appConstant, CoreService, ContractorProjectService) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.projectProforma";
        vm.currentState = $state.current.name;
        vm.proforma = [];
        vm.getProformaDetail = getProformaDetail;
        vm.submitReply = submitReply;
        vm.proformaReply = [];
        vm.updateSuccess = "";
        vm.replied = false;
        vm.response = [];
        vm.userProforma = false;
        vm.bindHtml = CoreService.bindHtml;
        vm.setCurrentResponse = function(response){
            vm.response = response;
        };

        if ($stateParams.user)
            vm.userProforma = true;

        getProformaDetail();


        function getProformaDetail(){
            ContractorProjectService.getProformaDetail($stateParams.proformaId).then(function(response){
                vm.proforma = response.data;
                vm.proforma["userLogo"] = appConstant.imagePath + (response.data.user.data.file ? response.data.user.data.file.data.file_name : "uploads/project/project-default.jpg");
                vm.proforma.file.data.file_name = appConstant.imagePath + vm.proforma.file.data.file_name;
                if (vm.proforma.proformaResponses){
                    for (var i=0; i < vm.proforma.proformaResponses.data.length; i++){
                        if (vm.proforma.proformaResponses.data[i].company_id == $stateParams.contractorId){
                            vm.replied = true;
                            vm.myReply = vm.proforma.proformaResponses.data[i];
                            debugger;
                        }
                        vm.proforma.proformaResponses.data[i]["file_name"] = appConstant.imagePath + vm.proforma.proformaResponses.data[i].file.data.file_name;
                    }
                }
               debugger;
            }, function(error){
                debugger;
            });
        }

        function submitReply(isValid){
            debugger;
            if(isValid){
                var reply = {
                    "proformaResponse": {
                        "validity_date" : new Date()
                    },
                    "proformaResponseProjectCost":
                    {
                        "title": vm.proformaReply.title,
                        "description": vm.proformaReply.description
                    }
                };
                ContractorProjectService.replyProjectProforma(reply, $stateParams.contractorId, $stateParams.proformaId).then(function(response){
                    if (response.data){
                        upload("project_proforma_response", response.data.id);
                    }
                    vm.updateSuccess = "Project reply successful";
                    debugger;
                }, function(error){
                    debugger;
                });
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