var path = require('path');
var wiredep = require('wiredep');

module.exports = function () {
    var clientSrcRootName = 'src';
    var client = './' + clientSrcRootName + '/';
    var clientApp = path.join(client, 'app');
    var clientCompiledAppName = 'app.js';
    var vendorJsName = 'vendor.js';
    var vendorCssName = 'vendor.css';
    var templateAdminJsName = 'admin-template.js';
    var templatePublicJsName = 'public-template.js';
    var templateAdminCssName = 'admin-template.css';
    var templatePublicCssName = 'public-template.css';
    var dist = './dist/';
    var jsDist = path.join(dist, 'js');
    var cssDist = path.join(dist, 'css');
    var fontsDist = path.join(dist, 'fonts');
    var assetsDist = path.join(dist, 'assets');
    var templates = path.join(client, '/**/*.html');
    var templateDist = path.join(dist, '/app');

    var config = {
        client: client,
        clientSrcRootName: clientSrcRootName,
        clientApp: clientApp,
        vendorJsName: vendorJsName,
        vendorCssName: vendorCssName,
        templateAdminJsName: templateAdminJsName,
        templatePublicJsName: templatePublicJsName,
        templateAdminCssName: templateAdminCssName,
        templatePublicCssName: templatePublicCssName,
        dist: dist,
        jsDist: jsDist,
        cssDist: cssDist,
        fontsDist: fontsDist,
        assetsDist: assetsDist,
        templates: templates,
        templateDist: templateDist,

        index: path.join(client, '/index/index.html'),

        favicon: path.join(client, '/favicon.png'),

        assets: path.join(client, '/assets/**/*.*'),

        clientCompiledAppName: clientCompiledAppName,

        appJs: [
            clientApp + '/**/*module*.js',
            clientApp + '/**/*.js'
        ],

        vendorJs: [
            "js/public/js/jquery.migrate.js",
            "js/public/js/jquery.bxslider.min.js",
            "js/public/js/jquery.flexslider.js",
            "js/public/js/jquery.imagesloaded.min.js",
            "js/public/js/jquery.isotope.min.js",
            "js/public/js/retina-1.1.0.min.js",
            "js/public/js/plugins-scroll.js",
            "js/public/js/script.js",
            "./bower_components/angular/angular.min.js",
            "./bower_components/angular-touch/angular-touch.min.js",
            "./bower_components/angular-animate/angular-animate.min.js",
            "./bower_components/angular-ui-router/release/angular-ui-router.min.js",
            "./bower_components/bootstrap/dist/js/bootstrap.min.js",
            "js/admin/core/libraries/jasny_bootstrap.min.js",
            "./bower_components/angular-bootstrap/ui-bootstrap.js",
            "./bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
            "./bower_components/moment/min/moment.min.js",
            "./bower_components/angularUtils-pagination/dirPagination.js",
            "./bower_components/lodash/dist/lodash.min.js",
            "./bower_components/ng-lodash/build/ng-lodash.min.js",
            "./bower_components/restangular/dist/restangular.min.js",
            "./bower_components/angular-notify/dist/angular-notify.min.js",
            "./bower_components/angular-messages/angular-messages.js",
            "./bower_components/ng-file-upload-shim/ng-file-upload-shim.min.js",
            "./bower_components/ng-file-upload/ng-file-upload.min.js",
            "./bower_components/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.min.js",
            "./bower_components/angular-sanitize/angular-sanitize.js",
            "./bower_components/angular-ckeditor/angular-ckeditor.js",
            "./bower_components/ng-tags-input/ng-tags-input.min.js",
            "./bower_components/angular-bootstrap-multiselect/angular-bootstrap-multiselect.js",
            "./bower_components/textangular/dist/textAngular-rangy.min.js",
            "./bower_components/textangular/dist/textAngular-sanitize.min.js",
            "./bower_components/textangular/dist/textAngular.min.js",
            "./bower_components/highcharts/highcharts.src.js",
            "./bower_components/highcharts-ng/dist/highcharts-ng.js",
            "./js/public/js/jssor.slider-21.1.min.js",
            "./bower_components/oclazyload/dist/ocLazyLoad.require.js",
            "./bower_components/oclazyload/dist/ocLazyLoad.min.js"

        ],

        templateAdminJs: [],

        templatePublicJs: [],

        vendorCss: [
            "./bower_components/bootstrap/dist/css/bootstrap.css",
            "./bower_components/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.min.css",
            "./bower_components/ng-tags-input/ng-tags-input.min.css",
            "./bower_components/textangular/dist/textAngular.css",
            "./bower_components/angular-notify/dist/angular-notify.min.css"



        ],

        templateAdminCss: [
            "./src/css/admin/icons/icomoon/css/styles.css",
            "./src/css/public/css/font-awesome.css",
            "./src/css/admin/css/bootstrap.css",
            "./src/css/admin/css/core.css",
            "./src/css/admin/components.css",
            "./src/css/admin/colors.css"
        ],

        templatePublicCss: [
            "./src/css/public/css/font-awesome.css",
            "./src/css/public/style.default.css",
            "./src/css/public/css/jquery.bxslider.css",
            "./src/css/public/css/animate.css",
            "./src/css/public/css/flexslider.css",
            "./src/css/public/css/settings.css",
            "./src/css/public/css/style.css",
            "./src/css/public/css/dataurl.css"
        ],

        "fonts": []
    };

    return config;
};
