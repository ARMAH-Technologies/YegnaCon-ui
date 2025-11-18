/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier')
        .service('SupplierService', SupplierService);
    /*@ngNoInject*/
    function SupplierService(TokenRestangular) {
        var service = {
            getSuppliers: getSuppliers,
            getSupplierDetail: getSupplierDetail,
            updateSupplier: updateSupplier,
            getSupplierProducts: getSupplierProducts,
            getSupplierProforma: getSupplierProforma,
            getProductProformaDetail: getProductProformaDetail,
            getCategories: getCategories,
            submitProforma: submitProforma,
            addProduct: addProduct,
            getProduct: getProduct,
            editProduct: editProduct,
            deleteProduct: deleteProduct,
            getSupplierByCategory:getSupplierByCategory

        };
        return service;
        function getSuppliers(currentPage, category, location, search) {
            return TokenRestangular.all('users?profileType=Supplier&status=active&page=' + currentPage + '&category=' + category + '&location=' + location + '&search=' + search).customGET('');
        }

        function getSupplierByCategory(currentPage) {
            return TokenRestangular.all('users?profileType=Supplier&dropdown=true&stauts=active&category=' + currentPage).customGET('');
        }

        function getSupplierDetail(userId) {

            debugger;
            return TokenRestangular.all('users/' + userId).customGET('');
        }

        function updateSupplier(user) {
            debugger;
            return TokenRestangular.all('users').customPUT(user);
        }

        function getSupplierProducts(userId, currentPage) {
            debugger;
            return TokenRestangular.all('users/' + userId + '/products?page=' + currentPage).customGET('');
        }

        function getSupplierProforma(userId, currentPage) {
            debugger;
            return TokenRestangular.all('users/' + userId + '/proformas/products').customGET('');
        }

        function getProductProformaDetail(proformaId) {
            debugger;
            return TokenRestangular.all('proformas/' + proformaId).customGET('');
        }

        function getCategories() {
            return TokenRestangular.all('categories?type=Supplier').customGET('');
        }

        function submitProforma(userId, proformaId, proforma) {
            return TokenRestangular.all('users/' + userId + '/proformas/' + proformaId + '/reply ').customPOST(proforma);
        }

        function addProduct(product) {
            debugger;
            return TokenRestangular.all('products').customPOST(product);
        }

        function getProduct(productId) {
            debugger;
            return TokenRestangular.all('products/' + productId).customGET('');
        }

        function editProduct(product) {
            debugger;
            return TokenRestangular.all('products').customPUT(product);
        }

        function deleteProduct(productId) {
            return TokenRestangular.all('products/' + productId).customDELETE('');
        }


    }

})();