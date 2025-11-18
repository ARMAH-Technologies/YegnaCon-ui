/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.tender')
        .controller('TenderDetailController', TenderDetailController);
    /*@ngNoInject*/
    function TenderDetailController($state,$stateParams,TenderService,appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.tender = {};
        vm.printDiv = printDiv;
        vm.back = back;
        vm.dumpHTML = function(html){
            return html;
        };
        getTenderDetail($stateParams.tenderId);

        function getTenderDetail(tenderId){
            debugger;
            TenderService.getTenderDetail(tenderId).then(function(response){
                debugger;

                vm.tender = response.data;
                vm.companyLogo = appConstant.imagePath + (vm.tender.user.data.file.data.file_name ? vm.tender.user.data.file.data.file_name : "uploads/profile/default_company");
                console.log(vm.tender);
            });

        }
        function printDiv(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;

            window.print();

            document.body.innerHTML = originalContents;
        }

        function back(){
            $state.go('main.public.tender');
        }

    }

})();