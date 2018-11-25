// Include Gulp and all required plugins

var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');



var targetPath = 'assets/css';

// Create gulp task named 'less' that
// will take 'custom.less' file from 'sourcePath' folder,
// compress it,
// add browser specific prefixes,
// minify it,
// save result CSS file into 'targetPath' folder

gulp.task('less', function () {
    return gulp.src(['assets/styles.less'])
        .pipe(sourcemaps.init())
        .pipe(less({compress: true}).on('error', gutil.log))
        .pipe(autoprefixer('last 10 versions', 'ie 9'))
        .pipe(minifyCSS({keepBreaks: false}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(targetPath));
});

var src = './assets/',
    path = {
        assets: {
            styles: [ src + '*.less']
        },
        watch: {
            styles: [ src + '**/*.less',src + 'less/**/*.less']
        }
    };

// Defaut
gulp.task('default', ['less','watch']);

// (gulp watch)
gulp.task('watch', function () {

    watch(path.watch.styles, function() {
        gulp.start('less');
    });


});
