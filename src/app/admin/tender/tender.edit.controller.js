/**
 * Created by Job on 7/5/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.admin.tender')
        .controller('TenderEditController', TenderEditController)
        .directive('stringToNumber', function() {
            return {
                require: 'ngModel',
                link: function(scope, element, attrs, ngModel) {
                    ngModel.$parsers.push(function(value) {
                        return '' + value;
                    });
                    ngModel.$formatters.push(function(value) {
                        return parseFloat(value);
                    });
                }
            };
        });

    function TenderEditController($state,$stateParams,AdminTenderService,CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        vm.getTender = getTender;
        vm.updateTender = updateTender;
        vm.editorOptions = CoreService.editorOptions;
        vm.categories = CoreService.categories;



        getTender($stateParams.tenderId);

        function getTender(tenderId){
            debugger;
            AdminTenderService.getTender(tenderId).then(function(response){
                debugger;
                vm.tender = response.data;
                vm.tender.closing_date = new Date(vm.tender.closing_date);
                vm.tender.opening_date = new Date(vm.tender.opening_date);

            },function(error){
                debugger;
            });
        }
        function updateTender(){
            var tender = {
                'tender': {
                    'id': vm.tender.id,
                    "title": vm.tender.title,
                    "category":vm.tender.category,
                    "document_price": vm.tender.document_price,
                    "bid_bond": vm.tender.bid_bond,
                    "opening_date":vm.tender.opening_date,
                    "description": vm.tender.description,
                    "closing_date": vm.tender.closing_date
                }
            };
            debugger;
            AdminTenderService.updateTender(tender).then(function(response){
                debugger;
                $state.go('main.admin.tender.list');
            },function(error){
                debugger;
            })

        }
    }

})();