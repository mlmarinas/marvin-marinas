//Initialize Gulp Modules
const gulp = require('gulp'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');


const mainScssFile = './assets/stylesheets/main.scss',
    cssDestinationFolder = './public/css/';

gulp.task('styles', function () {
    return gulp.src(mainScssFile)
        //Initialize sourcemaps
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        //gulp-autoprefixer
        .pipe(autoprefixer({
            cascade: false
        }))
        //Rename file 
        .pipe(rename({ suffix: '.min' }))
        //Write sourcemaps file to destination folder
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(cssDestinationFolder));
        console.log(cssDestinationFolder);
});

//Watch
const fileWatchPath = {
    sass: './assets/stylesheets/**/*.scss'
};

function watchTask() {
    return watch([fileWatchPath.sass],
        gulp.parallel('styles'));
}

//Default task
exports.default = gulp.series(
    gulp.parallel('styles'),
    watchTask);
    



















