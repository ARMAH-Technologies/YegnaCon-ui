/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .controller('HomeController', HomeController).filter('limitHTML', limitHTML);

    /*@ngNoInject*/
    //Custom HTML filter LimitTo
    function limitHTML() {
        return function (text, limit) {

            var changedString = String(text).replace(/<[^>]+>/gm, '');
            var length = changedString.length;

            return changedString.length > limit ? changedString.substr(0, limit - 1) : changedString;
        }
    }

    function HomeController($state, HomeService, $rootScope, TenderService, CoreService, NotificationService, VacancyService,
                            AuthService, appConstant, TokenRestangular) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.news = [];
        vm.currentPage = 1;
        vm.totalItems = 0;
        vm.itemsPerPage = 10;
        vm.showDetail = CoreService.showDetail;
        $rootScope.loginError = '';
        vm.companyLogo = [];
        $rootScope.singIn = signIn;
        $rootScope.signOut = signOut;
        $rootScope.authenticating = false;
        vm.dumpHTML = function (html) {
            return html;
        };
        vm.getProducts = getProducts;
        vm.notficationHover = notficationHover;
        getNews();
        getLatestTenders();
        getLatestVacancies();
        getProductCategories();
        getCompanyLogo();

        function getNews() {
            debugger;
            HomeService.getNews().then(function (response) {
                debugger;
                vm.news = response.data;
                vm.image1 = appConstant.imagePath + (vm.news[0].image );
                vm.image2 = appConstant.imagePath + (vm.news[1].image );
                vm.image3 = appConstant.imagePath + (vm.news[2].image );
            });
        }

        function getLatestTenders() {
            debugger;
            TenderService.getTenders(vm.currentPage, "", "", "").then(function (response) {
                debugger;
                vm.tenders = [];
                vm.data = response.data;
                for (var x = 0; x < 5; x++) {
                    vm.tenders[x] = vm.data[x];
                }

            });

        }

        function getLatestVacancies() {
            debugger;
            VacancyService.getVacancies(vm.currentPage, "", "", "").then(function (response) {
                debugger;
                vm.vacancies = [];
                vm.data = response.data;
                for (var x = 0; x < 5; x++) {
                    vm.vacancies[x] = vm.data[x];
                }

            });
        }

        function getProductCategories() {
            HomeService.getProductCategories().then(function (response) {
                vm.categories = [];
                vm.data = response.data;
                for (var x = 0; x < vm.data.length; x++) {
                    vm.data[x]["val"] = vm.data[x].category.split(' ').join("-");
                    vm.categories[x] = vm.data[x];
                }


            });
        }

        function getProducts() {
            HomeService.getProducts(vm.currentPage).then(function (response) {
                vm.products = [];
                debugger;
                vm.data = response.data;
                for (var x = 0; x < vm.data.length; x++) {
                    vm.data[x]["category"] = vm.data[x].category.split(' ').join("-");
                    vm.products[x] = vm.data[x];
                    vm.totalItems = response.meta.pagination.total;
                    vm.itemsPerPage = response.meta.pagination.per_page;
                }

            });
        }

        function getCompanyLogo() {
            debugger;
            for (var i = 0; i < 8; i++) {
                vm.companyLogo.push({img: ''})
            }
        }

        if ($rootScope.currentUser && $rootScope.currentUser.status == 'active') {
            getNotifications($rootScope.currentUser.id);
        } else if ($rootScope.currentUser && $rootScope.currentUser.status == 'inactive' && (($rootScope.currentUser.profileType != 'Professional') || ($rootScope.currentUser.profileType != 'ProjectOwner'))) {
            if ($state.current.name != "main.public.getting-started")
                $rootScope.inactiveUser = true;
        }

        function signOut() {
            debugger;
            AuthService.signOut();
        }

        function signIn(isValid) {
            if (isValid) {
                vm.authenticating = true;
                vm.loginError = '';

                var data = {
                    "grant_type": appConstant.grant_type,
                    "client_id": appConstant.client_id,
                    "client_secret": appConstant.client_secret,
                    "username": vm.email,
                    "password": vm.password
                };

                debugger;
                AuthService.signIn(data).then(function (response) {
                    debugger;
                    localStorage.setItem('yegnacon_access_token', response.access_token);
                    localStorage.setItem('yegnacon_refresh_token', response.refresh_token);
                    TokenRestangular.setDefaultHeaders({Authorization: 'Bearer ' + localStorage.getItem('yegnacon_access_token')});
                    AuthService.getLoggedInUser().then(function (response) {
                        debugger;
                        var user = JSON.stringify(response.data);
                        localStorage.setItem('user', user);
                        $rootScope.currentUser = JSON.parse(localStorage.getItem('user'));
                        if (response.data.profileType == 'Admin') {
                            $state.go('main.admin.home');
                        }
                        else {

                            if ($rootScope.currentUser.status == 'active') {
                                getNotifications($rootScope.currentUser.id);

                                if (response.data.profileType == 'Consultant') {
                                    if(response.data.consultant) {
                                        $state.go('main.public.consultantDashboard.productProforma', {consultantId: response.data.id});
                                    }else{
                                        $state.go('main.public.consultantDashboard.profile', {consultantId: response.data.id});
                                    }
                                }

                                else if (response.data.profileType == 'Contractor') {
                                    if(response.data.contractor) {
                                        $state.go('main.public.contractorDashboard.productProforma', {contractorId: response.data.id});
                                    }else{
                                        $state.go('main.public.contractorDashboard.profile', {contractorId: response.data.id});
                                    }
                                }

                                else if (response.data.profileType == 'Supplier') {
                                    if(response.data.supplier) {
                                        $state.go('main.public.supplierDashboard.proforma', {supplierId: response.data.id});
                                    }else{
                                        $state.go('main.public.supplierDashboard.profile', {supplierId: response.data.id});
                                    }
                                }

                                else if (response.data.profileType == 'ProjectOwner') {
                                    $state.go('main.public.projectOwnerDashboard.profile', {projectOwnersId: response.data.id});
                                }

                                else if (response.data.profileType == 'Professional') {
                                    $state.go('main.public.professionalDashboard.profile', {professionalId: response.data.id});
                                }

                                else if (response.data.profileType == 'Employee') {
                                    debugger;
                                    HomeService.getUserInfo(response.data.id).then(function(res){
                                        $state.go('main.public.employeeDashboard.profile',
                                            {employeeId: res.employee_id,companyId: res.company_id});
                                    });
                                }

                            }
                            else {
                                $rootScope.inactiveUser = true;
                                $state.go('main.public.getting_started');
                            }
                        }

                    });
                }, function (error) {
                    debugger;
                    if (error.statusText == 'Unauthorized') {
                        vm.loginError = "Invalid username or password !";
                    }
                    else {
                        vm.loginError = error.statusText;
                    }
                    vm.authenticating = false;
                });
            }

        }


        function getNotifications(userId) {
            NotificationService.getNotifications(userId).then(function (response) {
                debugger;
                if (response.data) {
                    $rootScope.notifications = response.data;
                    $rootScope.notificationsCount = $rootScope.notifications.length;
                    for (var i = 0; i < $rootScope.notifications.length; i++) {
                        $rootScope.notifications[i]["order"] = i + 1;
                        $rootScope.notifications[i]["user_logo"] = appConstant.imagePath + ($rootScope.notifications[i].user_logo ? $rootScope.notifications[i].user_logo : "uploads/profile/default_company.png");

                    }
                }

            }, function (error) {
                debugger;
            });
        }

        function readNotification(notification) {
            debugger;
            NotificationService.readNotification(notification.id).then(function (response) {
                debugger;
                var param = {};
                var currentUser = $rootScope.currentUser.profileType.toLowerCase();
                param[currentUser + "Id"] = $rootScope.currentUser.id;
                if (currentUser == 'supplier') {
                    param["proformaRequestId"] = notification.item_id;
                    $state.go("main.public.supplierDashboard.proformaDetail", param);
                    return;
                } else {

                    if (notification.type == "ProjectCostResponse") param["user"] = true;

                    var user = $rootScope.currentUser;
                    debugger;
                    if (notification.type == "ProjectCostRequest" || notification.type == "ProjectCostResponse") {
                        var s = "main.public." + currentUser + "Dashboard.projectProformaDetail";
                        param["proformaId"] = notification.item_id;
                        param[vm.userType + "Id"] = vm.userId;
                        debugger;
                        $state.go(s, param);
                        return;
                    }
                    param["proformaRequestId"] = notification.item_id;

                    if (notification.type == "ProformaRequestItem") {
                        $state.go("main.public." + currentUser + "Dashboard.productProformaRequestDetail", param);
                    } else if (notification.type == "ProformaResponseItem") {
                        $state.go("main.public." + currentUser + "Dashboard.productProformaReplies", param);
                    }
                }
            }, function (error) {
                debugger;
            });
        }

        function notficationHover() {
            debugger;
            $rootScope.currentStateName = "notification";
        }


    }

})();