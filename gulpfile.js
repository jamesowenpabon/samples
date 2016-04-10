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
    gulp.src('scss/lib/**/*.css')
    .pipe(sourcemaps.init())
        .pipe(concat('bundlelib.min.css'))
        .pipe(cleancss())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('css/lib'));
});

//Concatinates the lib JS files
gulp.task('concatlibjs', function() {
    var srcList = [
           'srcjs/lib/jquery.js',
           'srcjs/lib/angular.js',
           'srcjs/lib/bootstrap.js',
           'srcjs/lib/angular-route.js',
           'srcjs/lib/re-tree.js',
           'srcjs/lib/ng-device-detector.js',
           'srcjs/lib/response.js'
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