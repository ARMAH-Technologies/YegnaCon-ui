/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.consultant')
        .controller('ConsultantProfileController', ConsultantProfileController);
    /*@ngNoInject*/
    function ConsultantProfileController($state,$stateParams, $location, $window ,$rootScope, $anchorScroll, ConsultantService, CoreService, appConstant) {

        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentParentState = "consultantDashboard.profile";
        vm.consultantId = $stateParams.consultantId;
        vm.addressId = null;
        vm.updateSuccess = '';
        vm.consultantTypes = CoreService.consultantTypes;
        vm.companyLevels = CoreService.companyLevels;
        vm.editorOptions = CoreService.editorOptions;
        vm.locations = CoreService.locations;
        vm.consultant = [];
        vm.consultant.consultant = [];
        vm.consultant.address = [];

        vm.coreService = CoreService;
        vm.updateConsultant = updateConsultant;
        vm.updatePicture = updatePicture;
        debugger;
        getConsultantDetail($stateParams.consultantId);

        function getConsultantDetail(userId) {
            debugger;
            ConsultantService.getConsultantDetail(userId).then(function (response) {
                debugger;
                vm.consultant = response.data;
                if (vm.consultant.profile) {
                    vm.consultant.profile.data.established_year = new Date(vm.consultant.profile.data.established_year);
                    vm.consultantId = vm.consultant.profile.data.id;
                }
                if (vm.consultant.address) {
                    vm.addressId = vm.consultant.address.data.id;
                    vm.phone_number_1 = vm.consultant.address.data.phone_number_1;
                    vm.phone_number_2 = vm.consultant.address.data.phone_number_2;
                    vm.country = vm.consultant.address.data.country;
                    vm.city = vm.consultant.address.data.city;
                    vm.sub_city = vm.consultant.address.data.sub_city;
                    vm.house_no = vm.consultant.address.data.house_no;
                    vm.specific_address = vm.consultant.address.data.specific_address;
                    vm.latitude = vm.consultant.address.data.latitude;
                    vm.longitude = vm.consultant.address.data.longitude;
                    vm.website = vm.consultant.address.data.website;
                    vm.facebook_link = vm.consultant.address.data.facebook_link;
                    vm.twitter_link = vm.consultant.address.data.twitter_link;
                    vm.linkidin_link = vm.consultant.address.data.linkidin_link;
                    vm.google_link = vm.consultant.address.data.google_link;
                    vm.instagram_link= vm.consultant.address.data.instagram_link;


                }
                vm.consultant["logo"] = appConstant.imagePath + (vm.consultant.file ? vm.consultant.file.data.file_name : "uploads/profile/default_company.png");
                debugger;
            }, function (error) {

            });

        }

        function updateConsultant(isValid) {
            debugger;
            if (isValid) {
                var data = {
                    "consultant": {
                        "service_type": "Consultant",
                        "type": vm.consultant.profile.data.type,
                        "level": vm.consultant.profile.data.level,
                        "established_year": vm.consultant.profile.data.established_year,
                        "description": vm.consultant.profile.data.description
                    },
                    "address": {
                        "phone_number_1": vm.phone_number_1 ? vm.phone_number_1 : null,
                        "phone_number_2": vm.phone_number_2 ? vm.phone_number_2 : null,
                        "country": vm.country ? vm.country : null,
                        "city": vm.city ? vm.city : null,
                        "sub_city": vm.sub_city ? vm.sub_city : null,
                        "house_no": vm.house_no ? vm.house_no : null,
                        "specific_address": vm.specific_address ? vm.specific_address : null,
                        "latitude": vm.latitude ? vm.latitude : null,
                        "longitude": vm.longitude ? vm.longitude : null,
                        "website": vm.website ? vm.website : null,
                        "facebook_link": vm.facebook_link ? vm.facebook_link : null,
                        "twitter_link": vm.twitter_link ? vm.twitter_link : null,
                        "linkidin_link": vm.linkidin_link ? vm.linkidin_link : null,
                        "google_link": vm.google_link ? vm.google_link : null,
                        "instagram_link": vm.instagram_link ? vm.instagram_link : null
                    },
                    "projects": []
                };

                debugger;
                //Check if Not null consultant and Address
                if (vm.consultant.profile.data.id) {
                    debugger;
                    data.consultant.id = vm.consultant.profile.data.id;
                }
                if (vm.consultant.address) {
                    debugger;
                    data.address.id = vm.consultant.address.data.id;
                }
                debugger;

                ConsultantService.updateConsultant(data).then(function (response) {
                    debugger;
                    vm.updateSuccess = "Profile Updated Successfully!";
                    $location.hash("go_to_top");
                    $anchorScroll();
                    var userId = JSON.parse(localStorage.getItem('user')).id;
                    CoreService.showDetail(userId,'consultant',true);
                }, function (error) {
                    debugger;
                });
            }
        }

        function updatePicture() {
            debugger;
            if (vm.file) {
                if (vm.consultant.file) {
                    CoreService.updateFile(vm.file, vm.consultant.file.data.id).then(function (response) {
                        debugger;
                        vm.updateSuccess = "Profile Picture updated Successfully!"
                        getConsultantDetail($stateParams.consultantId);
                    }, function (error) {
                        debugger;
                    });
                }
                else {
                    upload("profile", vm.consultant.id);
                }
            }
        }

        function upload(type, productId) {
            debugger;
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, productId).then(function (response) {
                    debugger;
                    vm.updateSuccess = "Profile Picture uploaded successfully!"
                    getConsultantDetail($stateParams.consultantId);

                }, function (error) {
                    debugger;
                });
            }
        }



    }

})();