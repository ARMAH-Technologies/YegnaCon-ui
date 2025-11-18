/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.home')
        .controller('AdminHomeController', HomeController);

    function HomeController($scope,$state,UserService) {
        var vm = this;
        vm.currentState = $state.current.name;

        var chartConfigPrototype = '{"title":{"text":""},"options": {}}';
        vm.series =  [
            {
                "type": "pie",
                "colorByPoint": true,
                "innerSize": "40%",
                "data": [
                    {
                        "name": "Contractor",
                        "y": 26
                    },
                    {
                        "name": "Consultant",
                        "y": 5
                    },
                    {
                        "name": "Project Owner",
                        "y": 1
                    },
                    {
                        "name": "Professional",
                        "y": 6
                    },
                    {
                        "name": "Supplier",
                        "y": 404
                    }
                ]
            }
        ];
        
        var plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        };



        getUserStat();
        getTenderStat();
        getProformaStat();
        getProductStat();

        function getUserStat(){
            debugger;
            UserService.getUserStat().then(function(response){
                debugger;
                $scope.userStatByProfileChartConfig = JSON.parse(chartConfigPrototype);
                $scope.userStatByPackageTypeChartConfig = JSON.parse(chartConfigPrototype);

                $scope.userStatByProfileChartConfig.title.text = "Profile Types";
                $scope.userStatByProfileChartConfig.series = vm.series;
                $scope.userStatByProfileChartConfig.options.tooltip = {};
                $scope.userStatByProfileChartConfig.options.tooltip.pointFormat = '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                $scope.userStatByProfileChartConfig.options.plotOptions = plotOptions;

                $scope.userStatByPackageTypeChartConfig.title.text = "Package Types";
                $scope.userStatByPackageTypeChartConfig.series = response.subscriptionPackage.series;
                $scope.userStatByPackageTypeChartConfig.options.tooltip = {};
                $scope.userStatByPackageTypeChartConfig.options.tooltip.pointFormat = '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/> <b>Total Revenue in ETB.  {point.price:,.1f}</b>';

                $scope.userStatByPackageTypeChartConfig.options.plotOptions = plotOptions;




            }, function(error){
                debugger;
            });
        }
        function getTenderStat(){
            debugger;
            UserService.getTenderStat().then(function(result){
                $scope.tenderStat = result.tender;
                $scope.tenderVacancyChartConfig = JSON.parse(chartConfigPrototype);

                $scope.tenderVacancyChartConfig.title.text = "Tender And Vacancy Distribution";
                $scope.tenderVacancyChartConfig.xAxis = {"categories": result.tender.chart.categories};
                $scope.tenderVacancyChartConfig.yAxis = {"title":{"text":"In numbers"}};
                $scope.tenderVacancyChartConfig.series = [];
                $scope.tenderVacancyChartConfig.series.push(result.tender.chart.series);
                $scope.tenderVacancyChartConfig.options.chart = {"type": "line"};



                getVacancyStat();

            },function(error){

            });
        }
        function getVacancyStat(){
            debugger;
            UserService.getVacancyStat().then(function(result){
                debugger;
                $scope.vacancyStat = result.vacancy;
                $scope.tenderVacancyChartConfig.series.push(result.vacancy.chart.series);
            },function(error){
                debugger;
            });
        }
        function getProformaStat(){
            debugger;
            UserService.getProformaStat().then(function(result){
                debugger;
                $scope.proformaStat = result.proforma;
            },function(error){
                debugger;
            });
        }
        function getProductStat(){
            debugger;
            UserService.getProductStat().then(function(result){
                debugger;
                $scope.productStat = result.product;
            },function(error){
                debugger;
            })
        }

    }

})();