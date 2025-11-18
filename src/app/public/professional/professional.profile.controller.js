/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.professional')
        .controller('ProfessionalProfileController', ProfessionalProfileController);
    /*@ngNoInject*/
    function ProfessionalProfileController($state, $rootScope, $stateParams, $location, $anchorScroll, ProfessionalService, CoreService, appConstant) {
        var vm = this;
        $rootScope.currentParentState = "profile";
        vm.currentState = $state.current.name;
        vm.professional = [];
        vm.addressId = null;
        vm.updateSuccess = '';
        vm.coreService = CoreService;
        vm.skills = [];
        vm.professionalTypes = CoreService.professionalTypes;
        vm.professionalLevels = CoreService.professionalLevels;
        vm.editorOptions = CoreService.editorOptions;
        vm.locations = CoreService.locations;

        vm.updateProfessional = updateProfessional;
        vm.updatePicture = updatePicture;
        vm.addExperience = addExperience;

        getProfessionalDetail($stateParams.professionalId);
        debugger;
        function formatSkills(skills) {
            var formattedSkills = [];
            angular.forEach(skills, function (value) {
                formattedSkills.push({"text": value.skill});
            });
            debugger;
            return formattedSkills;
        }

        function getProfessionalDetail(userId) {
            debugger;
            ProfessionalService.getProfessionalDetail(userId).then(function (response) {
                debugger;
                vm.professional = response.data;
                if (vm.professional.profile) {
                    vm.professional_title = vm.professional.profile.data.professional_title;
                    vm.birth_date = new Date(vm.professional.profile.data.birth_date);
                    vm.nationality = vm.professional.profile.data.nationality;
                    vm.gender = vm.professional.profile.data.gender;
                    vm.biography = vm.professional.profile.data.biography;
                    if (vm.professional.profile.data.experiences) {
                        vm.professional.experiences = vm.professional.profile.data.experiences.data;
                    }
                    if (vm.professional.profile.data.skills.data) {

                        vm.skills = formatSkills(vm.professional.profile.data.skills.data);
                        debugger;
                    }
                }

                if (vm.professional.address) {
                    vm.phone_number_1 = vm.professional.address.data.phone_number_1;
                    vm.phone_number_2 = vm.professional.address.data.phone_number_2;
                    vm.country = vm.professional.address.data.country;
                    vm.city = vm.professional.address.data.city;
                    vm.sub_city = vm.professional.address.data.sub_city;
                    vm.house_no = vm.professional.address.data.house_no;
                    vm.specific_address = vm.professional.address.data.specific_address;
                    vm.latitude = vm.professional.address.data.latitude;
                    vm.longitude = vm.professional.address.data.longitude;
                    vm.website = vm.professional.address.data.website;
                    vm.facebook_link = vm.professional.address.data.facebook_link;
                    vm.twitter_link = vm.professional.address.data.twitter_link;
                    vm.linkidin_link = vm.professional.address.data.linkidin_link;
                    vm.google_link = vm.professional.address.data.google_link;
                    vm.instagram_link = vm.professional.address.data.instagram_link;
                }
                vm.professional["logo"] = appConstant.imagePath + (vm.professional.file ? vm.professional.file.data.file_name : "uploads/profile/default_company.png");
                debugger;
            }, function (error) {

            });

        }

        function getFormattedSkills(skillTags) {
            var skills = [];
            angular.forEach(skillTags, function (value) {
                skills.push({"skill": value.text});
            });
            debugger;
            return skills;
        }

        function updateProfessional(userId) {
            debugger;
            if (userId) {
                var data = {
                    "professional": {
                        "professional_title": vm.professional_title,
                        "birth_date": vm.birth_date,
                        "gender": vm.gender,
                        "nationality": vm.nationality,
                        "biography": vm.biography
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
                    "educations": [],
                    "experiences": [],
                    "skills": getFormattedSkills(vm.skills)
                };
                //Check if Not null Professional and Address
                if (vm.professional.profile) {
                    debugger;
                    data.professional.id = vm.professional.profile.data.id;
                }
                if (vm.professional.address) {
                    debugger;
                    data.address.id = vm.professional.address.data.id;
                }
                debugger;

                ProfessionalService.updateProfessional(data).then(function (response) {
                    debugger;
                    vm.updateSuccess = "Profile Updated Successfully!";
                    $location.hash("go_to_top");
                    $anchorScroll();
                    var userId = JSON.parse(localStorage.getItem('user')).id;
                    CoreService.showDetail(userId, 'professional', true);
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
                    getProfessionalDetail($stateParams.professionalId);


                }, function (error) {
                    debugger;
                });
            }
        }

        function updatePicture() {
            debugger;
            if (vm.file) {
                if (vm.professional.file) {
                    CoreService.updateFile(vm.file, vm.professional.file.data.id).then(function (response) {
                        debugger;
                        vm.updateSuccess = "Profile Picture updated Successfully!"
                        getProfessionalDetail($stateParams.professionalId);
                    }, function (error) {
                        debugger;
                    });
                }
                else {
                    upload("profile", vm.professional.id);
                }
            }
        }

        function addExperience(isValid) {
            debugger;
            if (isValid) {
                var experience = {
                    "company": vm.professional.company,
                    "position": vm.professional.position,
                    "description": vm.professional.description,
                    "started_date": vm.professional.started_date,
                    "ended_date": vm.professional.ended_date
                };
                ProfessionalService.addExperience(experience, vm.professional.profile.data.id).then(function (response) {
                    debugger;
                    $state.go('main.public.professionalDashboard.experiences');

                }, function (error) {
                    debugger;

                });
            }
        }


    }

})();