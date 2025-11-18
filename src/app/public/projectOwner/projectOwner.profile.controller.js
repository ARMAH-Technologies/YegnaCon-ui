/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.projectOwner')
        .controller('ProjectOwnerProfileController', ProjectOwnerProfileController);
    /*@ngNoInject*/
    function ProjectOwnerProfileController($state,$stateParams,$location, $anchorScroll, ProjectOwnerService, CoreService, appConstant) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.projectOwner = [];

        vm.updateSuccess = '';

        vm.projectOwnerTypes = CoreService.projectOwnerTypes;
        vm.editorOptions = CoreService.editorOptions;

        vm.updateProjectOwner = updateProjectOwner;
        vm.updatePicture = updatePicture;
        debugger;
        getProjectOwnerDetail($stateParams.projectOwnersId);

        function getProjectOwnerDetail(userId){
            debugger;
            ProjectOwnerService.getProjectOwnerDetail(userId).then(function(response){
                debugger;
                vm.projectOwner = response.data;
                if (vm.projectOwner.profile) {
                    vm.type = vm.projectOwner.profile.data.type;
                }

                if (vm.projectOwner.address){
                    vm.phone_number_1 = vm.projectOwner.address.data.phone_number_1;
                    vm.phone_number_2 = vm.projectOwner.address.data.phone_number_2;
                    vm.country = vm.projectOwner.address.data.country;
                    vm.city = vm.projectOwner.address.data.city;
                    vm.sub_city = vm.projectOwner.address.data.sub_city;
                    vm.house_no = vm.projectOwner.address.data.house_no;
                    vm.specific_address = vm.projectOwner.address.data.specific_address;
                    vm.latitude = vm.projectOwner.address.data.latitude;
                    vm.longitude = vm.projectOwner.address.data.longitude;
                    vm.website = vm.projectOwner.address.data.website;
                    vm.facebook_link = vm.projectOwner.address.data.facebook_link;
                    vm.twitter_link = vm.projectOwner.address.data.twitter_link;
                    vm.linkidin_link = vm.projectOwner.address.data.linkidin_link;
                    vm.google_link = vm.projectOwner.address.data.google_link;
                    vm.instagram_link= vm.projectOwner.address.data.instagram_link;
                }

                vm.projectOwner["logo"] = appConstant.imagePath + (vm.projectOwner.file ? vm.projectOwner.file.data.file_name : "uploads/profile/default_company.png");
                debugger;
            },function(error){

            });

        }

        function updateProjectOwner(userId) {
            debugger;
            if (userId) {
                var data = {
                    "projectOwner": {
                        "type": vm.type
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
                    }
                };
                //Check if Not null ProjectOwner and Address
                if (vm.projectOwner.profile) {
                    debugger;
                    data.projectOwner.id = vm.projectOwner.profile.data.id;
                }
                if (vm.projectOwner.address) {
                    debugger;
                    data.address.id = vm.projectOwner.address.data.id;
                }
                debugger;

                ProjectOwnerService.updateProjectOwner(data).then(function (response) {
                    debugger;
                    vm.updateSuccess = "Profile Updated Successfully!";
                    $location.hash("go_to_top");
                    $anchorScroll();
                    var userId = JSON.parse(localStorage.getItem('user')).id;
                    CoreService.showDetail(userId,'projectOwner',true);
                }, function (error) {
                    debugger;
                });

            }

        }

        function upload(type, productId) {
            debugger;
            if (vm.file) {
                CoreService.uploadFile(vm.file, type, productId).then(function (response) {
                    debugger;
                    vm.updateSuccess = "Profile Picture uploaded successfully!"
                    getProjectOwnerDetail($stateParams.projectOwnersId);


                }, function(error){
                    debugger;
                });
            }
        }

        function updatePicture() {
            debugger;
            if (vm.file) {
                if (vm.projectOwner.file) {
                    CoreService.updateFile(vm.file, vm.projectOwner.file.data.id).then(function (response) {
                        debugger;
                        vm.updateSuccess = "Profile Picture updated Successfully!"
                        getProjectOwnerDetail($stateParams.projectOwnersId);
                    }, function (error) {
                        debugger;
                    });
                }
                else {
                    upload("profile", vm.projectOwner.id);
                }
            }
        }



    }

})();