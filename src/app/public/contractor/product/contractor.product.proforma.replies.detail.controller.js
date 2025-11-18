/**
 * Created by acer1 on 8/14/2016.
 */
/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorProductProformaDetailRepliesController', ContractorProductProformaDetailRepliesController);
    /*@ngNoInject*/
    function ContractorProductProformaDetailRepliesController($state, $rootScope, $stateParams, ContractorService, appConstant) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.productProforma";
        vm.currentState = $state.current.name;
        vm.printDiv = printDiv;
        vm.toggleRequestDescription = toggleRequestDescription;
        getProductProformaDetail($stateParams.proformaReplyId);

        function getProductProformaDetail(proformaId) {
            debugger;
            ContractorService.getProformaReplyDetail(proformaId).then(function (response) {
                debugger;
                vm.proformaResponseItems = [];
                vm.productProforma = response.data;
                if (vm.productProforma.file) {
                    vm.productProforma.file.data.file_name = appConstant.imagePath + (vm.productProforma.file.data.file_name);
                }
                if (vm.productProforma.proformaRequest.data.file) {
                    vm.productProforma.proformaRequest.data.file.data.file_name = vm.productProforma.proformaRequest.data.file.data.file_name?appConstant.imagePath + (vm.productProforma.proformaRequest.data.file.data.file_name):'no image';

                }
                vm.productProforma.logo = appConstant.imagePath + ( response.data.logo ? response.data.logo : "uploads/profile/default_user.png");

                for (var i = 0; i < response.data.proformaResponseItems.data.length; i++) {
                    vm.proformaResponseItems.push(
                        {
                            item_name: response.data.proformaResponseItems.data[i].item_name,
                            description: response.data.proformaResponseItems.data[i].description,
                            responseDescription: response.data.proformaResponseItems.data[i].description,
                            requested_quantity: response.data.proformaRequest.data.proformaRequestItems.data[i].quantity,
                            quantity: response.data.proformaResponseItems.data[i].quantity,
                            unit: response.data.proformaRequest.data.proformaRequestItems.data[i].unit,
                            price: response.data.proformaResponseItems.data[i].price,
                            sub_total: (response.data.proformaResponseItems.data[i].quantity * response.data.proformaResponseItems.data[i].price)
                        });
                }
                priceCalculator();
            });
        }

        function priceCalculator() {
            vm.subTotal = 0;
            for (var i = 0; i < vm.proformaResponseItems.length; i++) {
                vm.subTotal += (vm.proformaResponseItems[i].sub_total)
            }
        }

        function printDiv(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;

            window.print();

            document.body.innerHTML = originalContents;
            $state.reload();
        }

        function toggleRequestDescription(requestDescription, responseDescription) {
            debugger;
            vm.currentRequestDescription = requestDescription;
            vm.currentResponseDescription = responseDescription;
            if (vm.showDescription)
                vm.showDescription = false;
            else if (!vm.showDescription)
                vm.showDescription = true;

        }

    }

})();