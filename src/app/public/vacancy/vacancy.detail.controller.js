/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.vacancy')
        .controller('VacancyDetailController', VacancyDetailController);
    /*@ngNoInject*/
    function VacancyDetailController($state, $stateParams, VacancyService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.vacancy = {};
        vm.printDiv = printDiv;
        vm.back = back;
        vm.dumpHTML = function(html){
            return html;
        };
        getVacancyDetail($stateParams.vacancyId);

        function getVacancyDetail(vacancyId) {
            debugger;
            VacancyService.getVacancyDetail(vacancyId).then(function (response) {
                debugger;
                vm.vacancy = response.data;
                vm.companyLogo = appConstant.imagePath + (vm.vacancy.user.data.file.data.file_name ? vm.vacancy.user.data.file.data.file_name : "uploads/profile/default_company");

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
            $state.go('main.public.vacancy');
        }

    }

})();