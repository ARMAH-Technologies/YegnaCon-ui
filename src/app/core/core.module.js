/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular.module('app.core', ['ui.router', 'restangular', 'angularUtils.directives.dirPagination', 'ngFileUpload','ckeditor','ui.toggle','ngMessages','ngSanitize', 'ui.multiselect', 'textAngular','highcharts-ng','ngLodash','ui.bootstrap'])
        .config(['$provide', function($provide){
            $provide.decorator('taOptions', ['$delegate', function(taOptions) {
                taOptions.forceTextAngularSanitize = true;
                taOptions.toolbar = [
                    ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                    ['justifyLeft','justifyCenter','justifyRight', 'justifyFull'],
                    ['insertImage', 'insertLink', 'wordcount', 'charcount']

                ];
                return taOptions;

            }])
        }]);

})();
