var { dest } = require('gulp');
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');

gulp.task('css', function() {
    return gulp.src('./css/app/*.css')
        .pipe(cssnano())
        .pipe(dest('./css/'))
})