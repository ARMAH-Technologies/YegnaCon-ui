/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier')
        .controller('SupplierProformaDetailController', SupplierProformaDetailController);
    /*@ngNoInject*/
    function SupplierProformaDetailController($state, $stateParams,CoreService, $rootScope, SupplierService,appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.proformaDto = null;
        vm.delivery_date = new Date();
        vm.delivery_type = 'From Stock';
        vm.proformaStatus = 'Open';
        vm.reply = [];
        vm.alerts = [];
        vm.validity_date = new Date();
        vm.getProformaDetail = getProformaDetail;
        vm.toggleRequestDescription = toggleRequestDescription;
        vm.submitProforma = submitProforma;
        vm.priceCalculator = priceCalculator;
        vm.printDiv = printDiv;
        vm.closeAlert = closeAlert;
        vm.addAlert = addAlert;
        vm.clicked = false;
        vm.upload = upload;
        vm.postReply = postReply;
        vm.showDescription = false;

        getProformaDetail($stateParams.proformaRequestId);

        function getProformaDetail(proformaId) {
            debugger;
            SupplierService.getProductProformaDetail(proformaId).then(function (response) {
                debugger;
                vm.productProforma = response.data;
                vm.productProforma.logo = appConstant.imagePath + (vm.productProforma.user.data.file?vm.productProforma.user.data.file.data.file_name:"uploads/profile/default_user.png");
                if(vm.productProforma.file){
                    vm.productProforma.file = appConstant.imagePath + (vm.productProforma.file.data.file_name);
                }
                bindProforma();
            });
        }

        function bindProforma() {
            debugger;
            vm.proformaDto = null;
            vm.proformaResponseItems = [];
            for (var i = 0; i < vm.productProforma.proformaRequestItems.data.length; i++) {
                if (vm.productProforma.proformaRequestItems.data[i].proformaResponseItems.data.length > 0 || vm.productProforma.status == 'inactive') {
                    vm.proformaStatus = 'Closed';
                    addAlert('Proforma has been Already Submitted','warning');
                    vm.disabled = true;
                    vm.proformaResponseItems.push(
                        {

                            item_name: vm.productProforma.proformaRequestItems.data[i].item_name,
                            proforma_request_item_id: vm.productProforma.proformaRequestItems.data[i].id,
                            quantity: vm.productProforma.proformaRequestItems.data[i].proformaResponseItems.data[0].quantity,
                            price: vm.productProforma.proformaRequestItems.data[i].proformaResponseItems.data[0].price,
                            unit: vm.productProforma.proformaRequestItems.data[i].unit,
                            delivery_type: vm.productProforma.proformaRequestItems.data[i].proformaResponseItems.data[0].delivery_type,
                            delivery_date: vm.productProforma.proformaRequestItems.data[i].proformaResponseItems.data[0].delivery_date,
                            description: vm.productProforma.proformaRequestItems.data[i].description,
                            validity_date: vm.productProforma.proformaRequestItems.data[i].proformaResponseItems.data[0].validity_date

                        }
                    );
                    priceCalculator();
                }
                else {
                    vm.proformaResponseItems.push(
                        {
                            item_name: vm.productProforma.proformaRequestItems.data[i].item_name,
                            proforma_request_item_id: vm.productProforma.proformaRequestItems.data[i].id,
                            quantity: vm.productProforma.proformaRequestItems.data[i].quantity,
                            price: 0,
                            unit: vm.productProforma.proformaRequestItems.data[i].unit,
                            delivery_type: vm.delivery_type,
                            delivery_date: vm.delivery_date,
                            description: vm.productProforma.proformaRequestItems.data[i].description,
                        }
                    );
                }
            }
            vm.proformaDto = {
                proformaResponse: {
                    validity_date: vm.validity_date
                },
                proformaResponseItems: vm.proformaResponseItems
            };
        }

        function priceCalculator() {
            vm.subTotal = 0;
            for (var i = 0; i < vm.proformaResponseItems.length; i++) {
                vm.subTotal += (vm.proformaResponseItems[i].price * vm.proformaResponseItems[i].quantity)
            }
        }

        function submitProforma() {
            debugger;
            vm.disabled = true;
            vm.clicked = true;
            SupplierService.submitProforma($stateParams.supplierId, $stateParams.proformaRequestId, vm.proformaDto).then(function (response) {
                debugger;
                if (response.data){
                    upload("product_proforma_response", response.data.id);
                }
                $state.go('main.public.supplierDashboard.proforma');
            });
        }

        function printDiv(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
            $state.reload();
        }

        function addAlert(msg, type) {
            vm.alerts.push(
                {
                    msg: msg,
                    type: type
                }
            );
        }

        function closeAlert(index) {
            vm.alerts.splice(index, 1);
        }

        function toggleRequestDescription(description,index){

            debugger;
            vm.index = index;
            vm.currentDescription = description;
            vm.proformaDto.proformaResponseItems[index].description = vm.reply[index];
            if(vm.showDescription){
                vm.showDescription = false;
            }
            else if(!vm.showDescription){
                vm.showDescription  = true;
            }

        }

        function postReply(){
            debugger;
            vm.proformaDto.proformaResponseItems[vm.index].description = vm.reply[vm.index];
            vm.showDescription = false;
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

