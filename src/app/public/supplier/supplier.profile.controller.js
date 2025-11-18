/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.supplier')
        .controller('SupplierProfileController', SupplierProfileController);

    /*@ngNoInject*/
    function SupplierProfileController($state, $location,$rootScope, $anchorScroll, $stateParams, SupplierService,PublicService,appConstant, CoreService) {

        var vm = this;
        $rootScope.currentParentState = "profile";
        vm.currentState = $state.current.name;
        vm.supplier = {};
        vm.category = {};
        vm.supplierId = null;
        vm.supplier.address = {};
        vm.updateSuccess = '';
        vm.categories = CoreService.supplierCategories;
        vm.locations = CoreService.locations;
        vm.updateSupplier = updateSupplier;
        vm.upload = upload;
        vm.updatePicture = updatePicture;

        getSupplierCategories();

        getSupplierDetail($stateParams.supplierId);

        function getSupplierDetail(userId) {
            debugger;
            SupplierService.getSupplierDetail(userId).then(function (response) {
                debugger;
                vm.supplier = response.data;
                if (vm.supplier.profile) {
                    vm.supplier.profile.data.established_year = new Date(vm.supplier.profile.data.established_year);
                }
                if (vm.supplier.address){
                    vm.addressId = vm.supplier.address.data.id;
                    vm.phone_number_1 = vm.supplier.address.data.phone_number_1;
                    vm.phone_number_2 = vm.supplier.address.data.phone_number_2;
                    vm.country = vm.supplier.address.data.country;
                    vm.city = vm.supplier.address.data.city;
                    vm.sub_city = vm.supplier.address.data.sub_city;
                    vm.house_no = vm.supplier.address.data.house_no;
                    vm.specific_address = vm.supplier.address.data.specific_address;
                    vm.latitude = vm.supplier.address.data.latitude;
                    vm.longitude = vm.supplier.address.data.longitude;
                    vm.website = vm.supplier.address.data.website;
                    vm.facebook_link = vm.supplier.address.data.facebook_link;
                    vm.twitter_link = vm.supplier.address.data.twitter_link;
                    vm.linkidin_link = vm.supplier.address.data.linkidin_link;
                    vm.google_link = vm.supplier.address.data.google_link;
                    vm.instagram_link= vm.supplier.address.data.instagram_link;
                }
                vm.supplier["logo"] = appConstant.imagePath + (vm.supplier.file ? vm.supplier.file.data.file_name : "uploads/profile/default_company.png");


            });

            PublicService.getUsersSelectedCategories($rootScope.currentUser.id,'Proforma').then(function (response) {
                debugger;
                vm.category = response.data;
            });


        }

        function getSupplierIds(supplierCategories){
            var categoryIds = [];
            angular.forEach(supplierCategories, function(value) {
                categoryIds.push(value.id);
            });
            debugger;
            return categoryIds;
        }

        function updateSupplier(isValid) {
            debugger;
            if (isValid) {
                var data = {
                    "supplier": {
                        "established_year": vm.supplier.profile.data.established_year,
                        "description": vm.supplier.profile.data.description
                    },
                    "address": {
                        "phone_number_1": vm.phone_number_1,
                        "phone_number_2": vm.phone_number_2,
                        "country": vm.country,
                        "city": vm.city,
                        "sub_city": vm.sub_city,
                        "house_no": vm.house_no,
                        "specific_address": vm.specific_address,
                        "latitude": vm.latitude,
                        "longitude": vm.longitude,
                        "website": vm.website,
                        "facebook_link": vm.facebook_link,
                        "twitter_link": vm.twitter_link,
                        "linkidin_link": vm.linkidin_link,
                        "google_link": vm.google_link,
                        "instagram_link": vm.instagram_link
                    },
                    "category_ids": getSupplierIds(vm.category)

                };
                //Check if Not null supplier and Address
                if (vm.supplier.profile.data.id) {
                    data.supplier.id = vm.supplier.profile.data.id;
                }
                if (vm.supplier.address) {
                    data.address.id = vm.supplier.address.data.id;
                }
                debugger;

                SupplierService.updateSupplier(data).then(function (response) {
                    vm.updateSuccess = "Profile updated successfully";
                    $location.hash("go_to_top");
                    $anchorScroll();
                    var userId = JSON.parse(localStorage.getItem('user')).id;
                    CoreService.showDetail(userId,'supplier',true);
                    debugger;
                }, function (error) {
                    debugger;
                });
            }


        }

        function getSupplierCategories() {
            debugger;
            SupplierService.getCategories().then(function (response) {
                debugger;
                if (response.data){
                    vm.categories = response.data;
                }

            });
        }

        function upload(type, productId) {
            debugger;
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, productId).then(function (response) {
                    debugger;
                    vm.updateSuccess = "Profile Picture uploaded successfully!"
                    getSupplierDetail($stateParams.supplierId);


                }, function(error){
                    debugger;
                });
            }
        }

        function updatePicture() {
            debugger;
            if (vm.file) {
                if (vm.supplier.file) {
                    CoreService.updateFile(vm.file, vm.supplier.file.data.id).then(function (response) {
                        debugger;
                        vm.updateSuccess = "Profile Picture updated Successfully!"
                        getSupplierDetail($stateParams.supplierId);
                    }, function (error) {
                        debugger;
                    });
                }
                else {
                    upload("profile", vm.supplier.id);
                }
            }
        }


    }

})();