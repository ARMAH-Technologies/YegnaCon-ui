/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.contractor')
        .controller('ContractorProfileController', ContractorProfileController);
    /*@ngNoInject*/
    function ContractorProfileController($state, $stateParams,$rootScope, $location, $anchorScroll, ContractorService, CoreService, appConstant) {
        var vm = this;
        $rootScope.currentParentState = "consultantDashboard.profile";
        vm.currentState = $state.current.name;
        vm.contractor = {};
        vm.updateSuccess = '';
        vm.contractorTypes = CoreService.contractorTypes;
        vm.companyLevels = CoreService.companyLevels;
        vm.editorOptions = CoreService.editorOptions;
        vm.locations = CoreService.locations;
        vm.updateContractor = updateContractor;
        vm.updatePicture = updatePicture;

        getContractorDetail($stateParams.contractorId);
        function getContractorDetail(userId){
            debugger;
            ContractorService.getContractorDetail(userId).then(function(response){
                debugger;
                vm.contractor = response.data;
                if (vm.contractor.profile) {
                    vm.contractor.profile.data.established_year = new Date(vm.contractor.profile.data.established_year);

                }
                vm.contractor["logo"] = appConstant.imagePath + (vm.contractor.file ? vm.contractor.file.data.file_name : "uploads/profile/default_company.png");
                debugger;
            }, function (error) {

            });

        }
        function updateContractor(userId){
            debugger;
            var data = {
                "contractor": {
                    "service_type": vm.contractor.profile.data.service_type,
                    "type": vm.contractor.profile.data.type,
                    "level": vm.contractor.profile.data.level,
                    "established_year": vm.contractor.profile.data.established_year,
                    "description": vm.contractor.profile.data.description
                },
                "address": {
                    "phone_number_1": vm.contractor.address.data.phone_number_1,
                    "phone_number_2": vm.contractor.address.data.phone_number_1,
                    "country": vm.contractor.address.data.country,
                    "city": vm.contractor.address.data.city,
                    "sub_city": vm.contractor.address.data.sub_city,
                    "house_no": vm.contractor.address.data.house_no,
                    "specific_address": vm.contractor.address.data.specific_address,
                    "latitude": vm.contractor.address.data.latitude,
                    "longitude": vm.contractor.address.data.longitude,
                    "website": vm.contractor.address.data.website,
                    "facebook_link": vm.contractor.address.data.facebook_link,
                    "twitter_link": vm.contractor.address.data.twitter_link,
                    "linkidin_link": vm.contractor.address.data.linkidin_link,
                    "google_link": vm.contractor.address.data.google_link,
                    "instagram_link":vm.contractor.address.data.instagram_link
                }
            };
            //Check if Not null Contractor and Address
            if(vm.contractor.profile.data.id){
                data.contractor.id = vm.contractor.profile.data.id;
            }
            if(vm.contractor.address){
                data.address.id = vm.contractor.address.data.id;
            }
            debugger;

            ContractorService.updateContractor(data).then(function(response){
                console.log(response);
                vm.updateSuccess = "Profile Updated Successfully!";
                $location.hash("go_to_top");
                $anchorScroll();
                var userId = JSON.parse(localStorage.getItem('user')).id;
                CoreService.showDetail(userId,'contractor',true);


            },function(error){

            });


        }
        function upload(type, productId) {
            debugger;
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, productId).then(function (response) {
                    debugger;
                    vm.updateSuccess = "Profile Picture uploaded successfully!"
                    getContractorDetail($stateParams.contractorId);


                }, function(error){
                    debugger;
                });
            }
        }
        function updatePicture() {
            debugger;
            if (vm.file) {
                if (vm.contractor.file) {
                    CoreService.updateFile(vm.file, vm.contractor.file.data.id).then(function (response) {
                        debugger;
                        vm.updateSuccess = "Profile Picture updated Successfully!"
                        getContractorDetail($stateParams.contractorId);
                    }, function (error) {
                        debugger;
                    });
                }
                else {
                    upload("profile", vm.contractor.id);
                }
            }
        }

    }

})();