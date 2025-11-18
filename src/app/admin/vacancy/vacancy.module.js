/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular.module('app.admin.vacancy', [])
        .config(['$provide', function($provide){
            $provide.decorator('taOptions', ['$delegate', function(taOptions) {
                taOptions.forceTextAngularSanitize = true;
                taOptions.toolbar = [
                    ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
                    ['justifyLeft','justifyCenter','justifyRight', 'justifyFull'],
                    ['insertImage', 'insertLink', 'wordcount', 'charcount']

                ];
                return taOptions;

            }])
        }]);
})();
