/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier')
        .controller('SupplierProductCreateController', SupplierProductCreateController);
    /*@ngNoInject*/
    function SupplierProductCreateController($state, $stateParams, SupplierService, CoreService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.updateSuccess = '';
        vm.product = [];
        vm.product_label = "Add Product";
        vm.coreService = CoreService;
        debugger;

        vm.addProduct = addProduct;
        vm.updatePicture = updatePicture;

        if ($stateParams.edit){
            vm.product_label = "Update Product";
            getProduct();
        }
        function getProduct(){
            SupplierService.getProduct($stateParams.productId).then(function(response){
                debugger;
                vm.product = response.data;
                vm.product["logo"] = appConstant.imagePath + (response.data.file ? response.data.file.data.file_name : "uploads/project/project-default.png");

            });
        }

        function addProduct(){
            if ($stateParams.edit){
                updateProduct();
                return;
            }
            var product = {
                "product": {
                    "name": vm.product.name,
                    "category": vm.product.category,
                    "quantity": vm.product.quantity,
                    "unit": vm.product.unit,
                    "description": vm.product.description
                }
            };
            SupplierService.addProduct(product).then(function(response){
                debugger;
                if (response.data){
                    upload("product", response.data.id);
                }
                $state.go("main.public.supplierDashboard.product");
            }, function(error){
                debugger;
            });

        }

        function updateProduct(){
            var product = {
                "product": {
                    "id": vm.product.id,
                    "name": vm.product.name,
                    "category": vm.product.category,
                    "quantity": vm.product.quantity,
                    "unit": vm.product.unit,
                    "description": vm.product.description
                }
            };
            SupplierService.editProduct(product).then(function (response) {
                debugger;
                vm.updateSuccess = "Update successful!"
            }, function (error) {
                debugger;
            });
        }

        function upload(type, productId) {
            debugger;
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, productId).then(function (response) {
                    debugger;
                    vm.updateSuccess = "Product Image uploaded successfully";
                    console.log("product pic uploaded");

                }, function(error){
                    debugger;
                });
            }
        }

        function updatePicture() {
            debugger;
            if (vm.file) {
                CoreService.updateFile(vm.file, vm.product.file.data.id).then(function (response) {
                    debugger;
                    vm.updateSuccess = "Profile Image updated successfully";
                    getProduct();
                }, function(error){
                    debugger;
                    getProduct();
                });
            }
        }




    }

})();