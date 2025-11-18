/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant.tender')
        .controller('ConsultantTenderCreateController', ConsultantTenderCreateController);
    /*@ngNoInject*/
    function ConsultantTenderCreateController($state, $stateParams, ConsultantTenderService, CoreService, TenderService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.coreService = CoreService;
        vm.createTender = createTender;
        vm.updateSuccess = '';
        vm.editorOptions = CoreService.editorOptions;
        getTenderCategories();

        debugger;
        vm.tender_label = "Add Tender";
        if ($stateParams.edit){
            vm.tender_label = "Update Tender";
            getTender();
        }

        function getTender(){
            ConsultantTenderService.getTender($stateParams.tenderId).then(function(response){
                vm.tender = response.data;
                vm.tender.opening_date = new Date(vm.tender.opening_date);
                vm.tender.closing_date = new Date(vm.tender.closing_date);
            });
        }

        function createTender(isValid){
            if (isValid){
                if ($stateParams.edit){
                    updateTender();
                    return;
                }
                var tender = {
                    "tender": {
                        "title": vm.tender.title,
                        "category": vm.tender.category,
                        "document_price": vm.tender.document_price,
                        "bid_bond": vm.tender.bid_bond,
                        "opening_date": vm.tender.opening_date,
                        "closing_date": vm.tender.closing_date,
                        "description": vm.tender.description
                    },
                    "userId": $stateParams.consultantId
                };
                ConsultantTenderService.createTender(tender).then(function(response){
                    debugger;
                    $state.go("main.public.consultantDashboard.tender");
                }, function(response){
                    debugger;
                });
            }
        }

        function updateTender(){
            var tender = {
                "tender": {
                    "id": vm.tender.id,
                    "title": vm.tender.title,
                    "category": vm.tender.category,
                    "document_price": vm.tender.document_price,
                    "bid_bond": vm.tender.bid_bond,
                    "opening_date": vm.tender.opening_date,
                    "closing_date": vm.tender.closing_date,
                    "description": vm.tender.description,
                }
            };
            ConsultantTenderService.editTender(tender).then(function (response) {
                debugger;
                vm.updateSuccess = "Update successful!"
            }, function (error) {
                debugger;
            });
        }

        function getTenderCategories() {
            TenderService.getTenderCategories().then(function (response){
                vm.categories = [];
                for (var i = 0; i < response.data.length; i++){
                    vm.categories[i] = response.data[i];
                }
            })
        }

    }

})();