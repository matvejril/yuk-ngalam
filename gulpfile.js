var gulp = require('gulp');
var less = require('gulp-less');
// var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();


var configs = {
    src: {
        less: 'less/main.less'
    },
    dist: {
        css: 'css'
    },
    watch: {
        html: 'index.html',
        less: 'less/*.less',
        css: 'css/main.css'
    }
};


gulp.task('default', ['less'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(configs.watch.html).on('change', browserSync.reload);
    gulp.watch(configs.watch.less, ['less']);
});

gulp.task('less', function() {
    return gulp.src(configs.src.less)
        .pipe(less())
        .pipe(gulp.dest(configs.dist.css))
        .pipe(browserSync.stream({ match: '**/*.css' }));
});
