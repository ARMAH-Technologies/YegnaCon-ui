/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorProductProformaCreateController', ContractorProductProformaCreateController);
    /*@ngNoInject*/
    function ContractorProductProformaCreateController($state, $rootScope,SupplierService, $stateParams, ContractorService, CoreService) {
        var vm = this;
        $rootScope.currentParentState = "contractorDashboard.productProforma";
        vm.currentState = $state.current.name;
        vm.coreService = CoreService;
        vm.products = [];
        //Initialize product to one row.
        vm.editorOptions = CoreService.editorOptions;
        vm.productProfoma = {
            "proformaRequest": {
                "type": "Product"
            },
            "proformaItems": []
        };
        vm.categories = [];
        vm.clicked = false;
        vm.groups = [];
        vm.addProduct = addProduct;
        vm.removeProduct = removeProduct;
        vm.submitProductProforma = submitProductProforma;
        vm.getSuppliersByCategory = getSuppliersByCategory;

        addProduct();
        getCategories();
        getUserGroups();

        function addProduct() {
            vm.clicked = false;
            debugger;
            vm.products.push(
                {
                    "item_name": "",
                    "category_id": "",
                    "quantity": null,
                    "unit": "",
                    "description": ""
                }
            )
        }

        function removeProduct(index) {
            debugger;
            vm.products.splice(index, 1);
        }

        function submitProductProforma() {
            debugger;
            vm.clicked = true;
            vm.productProfoma.proformaItems = vm.products;

            ContractorService.submitProductProforma(vm.productProfoma).then(function (response) {
                debugger;
                if (response.data) {
                    upload("product_proforma_request", response.data.id);
                }
                $state.go('main.public.contractorDashboard.productProforma', {contractorId: $stateParams.contractorId});
            });

        }

        function getCategories() {
            ContractorService.getCategories().then(function (response) {
                vm.categories = response.data;
            });

        }

        function upload(type, proformaId) {
            debugger;
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, proformaId).then(function (response) {
                    debugger;

                }, function (error) {
                    debugger;
                });
            }
        }

        function getUserGroups() {
            debugger;
            ContractorService.getUserGroup(true, $rootScope.currentUser.id).then(function (response) {
                vm.groups = response.proforma_groups;
                for (var i = 0; i < vm.groups.users.length; i++) {
                    vm.suppliersSelectedName.push(vm.groups.users[i].name)
                }

            });
        }

        function getSuppliersByCategory(categoryID) {
            debugger;
            vm.suppliers = [];
            SupplierService.getSupplierByCategory(categoryID).then(function (response) {
                vm.suppliers = response.data;
            });
        }


    }

})();