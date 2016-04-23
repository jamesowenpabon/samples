var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concatcss = require('gulp-concat-css');
var concat = require('gulp-concat');

//Mins the application JS files
gulp.task('minappjs', function() {
    gulp.src('srcjs/app/**/*.js')
        .pipe(sourcemaps.init())
            .pipe(uglify({
                noSource : true,
                mangle: false
            }))
            .pipe(rename(function(path) {
                var vspot = path.basename.search("-src");
                path.basename = vspot > 0 ? path.basename.substr(0,vspot) : path.basename;
            }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('js/app'));
});

//Compiles & mins the application CSS files
gulp.task('minappsass', function()    {
    gulp.src('scss/app/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(cleancss())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('css/app'));
});

//Concatinates the lib CSS files
gulp.task('concatlibcss', function()    {
    var srcList = [
           'node_modules/bootstrap/dist/css/bootstrap.css',
           'node_modules/font-awesome/css/font-awesome.css'
        ];
    gulp.src(srcList)
    .pipe(sourcemaps.init())
        .pipe(concat('bundlelib.min.css'))
        .pipe(cleancss())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('css/lib'));
});

//Concatinates the lib JS files
gulp.task('concatlibjs', function() {
    var srcList = [
           'node_modules/jquery/dist/jquery.js',
           'node_modules/angular/angular.js',
           'node_modules/bootstrap/dist/js/bootstrap.js',
           'node_modules/angular-route/angular-route.js',
           'node_modules/ng-device-detector/node_modules/re-tree/re-tree.js',
           'node_modules/ng-device-detector/ng-device-detector.js',
           'node_modules/response.js/response.js'
        ];
    gulp.src(srcList)
    .pipe(sourcemaps.init())
        .pipe(concat('bundlelib.min.js'))
        .pipe(uglify({
            noSource : true,
            mangle : false
        }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('js/lib'))
});

//Watch for dev changes
gulp.task('watch',function()    {
    gulp.watch('srcjs/app/**/*.js',['minappjs']);
    gulp.watch('scss/app/**/*.scss',['minappsass']);
});


gulp.task('default', function() {
    // default tasks
}); 