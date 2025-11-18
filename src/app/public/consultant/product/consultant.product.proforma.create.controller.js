/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantProductProformaCreateController', ConsultantProductProformaCreateController);
    /*@ngNoInject*/
    function ConsultantProductProformaCreateController($state, ConsultantService, CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.coreService = CoreService;
        var product = '{"item_name": "","category_id":"","quantity": null,"unit": "","description": ""}';
        vm.editorOptions = CoreService.editorOptions;
        //Initialize product to one row.
        vm.products = [JSON.parse(product)];
        vm.productProfoma = {
            "proformaRequest": {
                "type": "Product"
            },
            "proformaItems": []
        };
        vm.categories = [];
        vm.addProduct = addProduct;
        vm.removeProduct = removeProduct;
        vm.submitProductProforma = submitProductProforma;
        vm.clicked = false;
        getCategories();

        function addProduct() {
            vm.clicked = false;
            var template = JSON.parse(product);
            debugger;
            vm.products.push(template);
            debugger;
        }

        function removeProduct(index) {
            vm.products.splice(index, 1);
        }

        function getTemplate() {
            return product;
        }

        function submitProductProforma() {
            vm.clicked = true;
            vm.productProfoma.proformaItems = vm.products;

            ConsultantService.submitProductProforma(vm.productProfoma).then(function (response) {
                debugger;
                if (response.data){
                    upload("product_proforma_request", response.data.id);
                }
                $state.go('main.public.consultantDashboard.productProforma');
            }, function (error) {
                debugger;
            });

        }

        function getCategories() {
            ConsultantService.getCategories().then(function (response) {
                vm.categories = response.data;
            }, function (error) {

            });

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