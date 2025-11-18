/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier.tender')
        .controller('SupplierTenderCreateController', SupplierTenderCreateController);
    /*@ngNoInject*/
    function SupplierTenderCreateController($state, $stateParams, SupplierTenderService, CoreService, TenderService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.coreService = CoreService;
        vm.createTender = createTender;
        vm.updateSuccess = '';
        getTenderCategories();

        debugger;
        vm.tender_label = "Post Tender";
        if ($stateParams.edit){
            vm.tender_label = "Update Tender";
            getTender();
        }


        function getTenderCategories() {
            TenderService.getTenderCategories().then(function (response){
                debugger;
                vm.categories = [];
                for (var i = 0; i < response.data.length; i++){
                    vm.categories[i] = response.data[i];
                }
            })
        }

        function getTender(){
            SupplierTenderService.getTender($stateParams.tenderId).then(function(response){
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
                        "category_id": vm.tender.category,
                        "document_price": vm.tender.document_price,
                        "bid_bond": vm.tender.bid_bond,
                        "opening_date": vm.tender.opening_date,
                        "closing_date": vm.tender.closing_date,
                        "description": vm.tender.description
                    },
                    "userId": $stateParams.supplierId
                };
                SupplierTenderService.createTender(tender).then(function(response){
                    debugger;
                    $state.go("main.public.supplierDashboard.tender");
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
                    "category_id": vm.tender.category,
                    "document_price": vm.tender.document_price,
                    "bid_bond": vm.tender.bid_bond,
                    "opening_date": vm.tender.opening_date,
                    "closing_date": vm.tender.closing_date,
                    "description": vm.tender.description,
                }
            };
            SupplierTenderService.editTender(tender).then(function (response) {
                debugger;
                vm.updateSuccess = "Update successful!"
            }, function (error) {
                debugger;
            });
        }

    }

})();