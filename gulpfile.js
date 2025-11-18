var args = require('yargs').argv;
var config = require('./gulp.config')();
var runSequence = require('run-sequence');

var gulp = require('gulp-help')(require('gulp'));
var $ = require('gulp-load-plugins')({lazy: true});

var colors = $.util.colors;

// ------------- TASKS ---------------------------------

gulp.task('default', 'Display this help text.', ['help']);

gulp.task('copy-index', function () {
    return gulp
        .src(config.index)
        .pipe(gulp.dest(config.dist));
});

gulp.task('app-js', function () {
    return gulp
        .src(config.appJs)
        .pipe($.concat(config.clientCompiledAppName))
        // .pipe(gulpif(env === 'production', plug.uglify()))
        .pipe(gulp.dest(config.jsDist));
});

gulp.task('vendor-js', function () {
    return gulp
        .src(config.vendorJs)
        .pipe($.concat(config.vendorJsName))
        // .pipe(gulpif(env === 'production', plug.uglify()))
        .pipe(gulp.dest(config.jsDist));
});

gulp.task('public-template-js', function () {
    return gulp
        .src(config.templatePublicJs)
        .pipe($.concat(config.templatePublicJsName))
        // .pipe(gulpif(env === 'production', plug.uglify()))
        .pipe(gulp.dest(config.jsDist));
});

gulp.task('admin-template-js', function () {
    return gulp
        .src(config.templateAdminJs)
        .pipe($.concat(config.templateAdminJsName))
        // .pipe(gulpif(env === 'production', plug.uglify()))
        .pipe(gulp.dest(config.jsDist));
});

gulp.task('public-template-css', function () {
    return gulp
        .src(config.templatePublicCss)
        .pipe($.concat(config.templatePublicCssName))
        // .pipe(gulpif(env === 'production', plug.uglify()))
        .pipe(gulp.dest(config.cssDist));
});

gulp.task('admin-template-css', function () {
    return gulp
        .src(config.templateAdminCss)
        .pipe($.concat(config.templateAdminCssName))
        // .pipe(gulpif(env === 'production', plug.uglify()))
        .pipe(gulp.dest(config.cssDist));
});

gulp.task('vendor-css', function () {
    return gulp
        .src(config.vendorCss)
        .pipe($.concat(config.vendorCssName))
        // .pipe(gulpif(env === 'production', plug.uglify()))
        .pipe(gulp.dest(config.cssDist));
});

gulp.task('app-html', function () {
    return gulp
        .src(config.templates)
        /*.pipe(plug.minifyHtml({
         empty: true
         }))*/
        .pipe(gulp.dest(config.dist));
});

gulp.task('fonts', function () {
    return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.fontsDist));
});

gulp.task('assets', function () {
    return gulp
        .src(config.assets)
        /* .pipe(plug.cache(plug.imagemin({
         optimizationLevel: 3
         })))*/
        .pipe(gulp.dest(config.assetsDist));
});

gulp.task('favicon', function () {
    return gulp
        .src(config.favicon)
        .pipe(gulp.dest(config.dist));
});

gulp.task('serve-and-watch', 'Serve the static files and watch for changes',
    ['serve', 'build']);

gulp.task('serve', 'Serve the static files.', function () {
    return gulp.src(config.dist)
        .pipe($.webserver({
            livereload: {
                enable: true,
                filter: function (fileName) {
                    if (fileName.match(/(\.map)|(\.ts)$/)) {
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            open: true,
            port: 1337
        }));
});

gulp.task('build', 'Build the project', function () {
    runSequence(
        'app-html',
        'copy-index',
        'favicon',
        'fonts',
        'assets',
        'app-js',
        'vendor-js',
        'public-template-js',
        'admin-template-js',
        'public-template-css',
        'admin-template-css',
        'vendor-css'
    );
});

// ------------- Watchers  ---------------------------------
gulp.task('watch', 'Watch files and run "build" on change', function () {
    var watcher = gulp.watch(config.appJs, ['build'], {debounceDelay: 300});

    watcher.on('change', function (event) {
        log('File ' + colors.red(event.path) + ' was ' + event.type + ', running tasks...');
    });
});

// ------------- TASK HELPERS --------------------------
/**
 * Inject files in a sorted sequence at a specified inject label
 * @param   {Array} src   glob pattern for source files
 * @param   {String} label   The label name
 * @param   {Array} order   glob pattern for sort order of the files
 * @returns {Stream}   The stream
 */
function inject(src, label, order) {
    var options = {read: false, relative: true};
    if (label) {
        options.name = 'inject:' + label;
    }

    return $.inject(orderSrc(src, order), options);
}

/**
 * Order a stream
 * @param   {Stream} src   The gulp.src stream
 * @param   {Array} order Glob array pattern
 * @returns {Stream} The ordered stream
 */
function orderSrc(src, order) {
    //order = order || ['**/*'];
    return gulp
        .src(src)
        .pipe($.if(order, $.order(order)));
}

/**
 * Log a message
 * @param   {Object} msg    Message to log.
 */
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log(colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log(colors.blue(msg));
    }
}
