/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor.project')
        .controller('ContractorProjectProformaController', ContractorProjectProformaController);
    /*@ngNoInject*/
    function ContractorProjectProformaController($state,$stateParams,$rootScope, ContractorProjectService, CoreService, appConstant) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.projectProforma";
        vm.currentState = $state.current.name;
        vm.totalItems = 0;
        vm.totalItems2 = 0;
        vm.currentPage = 1;
        vm.currentPage2 = 1;
        vm.itemsPerPage =  8;
        vm.itemsPerPage2 = 8;
        vm.userOutsourced = [];
        vm.companyOutsourced = [];
        vm.noCompanyOutsourced = false;
        vm.getProformas = getProformas;
        vm.getCompanyProformas = getCompanyProformas;
        getProformas();
        getCompanyProformas();

        function getCompanyProformas(){
            ContractorProjectService.getCompanyProformas($stateParams.contractorId, vm.currentPage).then(function (response) {
                debugger;
                if (response.data && response.data.length > 0){
                    debugger;
                    vm.companyOutsourced = response.data;
                    for (var i = 0; i < vm.companyOutsourced.length; i++){
                        if (vm.companyOutsourced[i].file)
                            vm.companyOutsourced[i]["file_name"] = appConstant.imagePath + vm.companyOutsourced[i].file.data.file_name;
                    }
                }
                vm.totalItems = response.meta.pagination.total;
                vm.itemsPerPage = response.meta.pagination.per_page;
            });
        }

        function getProformas(){
            ContractorProjectService.getProformas($stateParams.contractorId, vm.currentPage2).then(function(response){
                debugger;
                vm.userOutsourced = response.data;

                vm.totalItems2 = response.meta.pagination.total;
                vm.itemsPerPage2 = response.meta.pagination.per_page;

            }, function(error){debugger;});
        }



    }

})();