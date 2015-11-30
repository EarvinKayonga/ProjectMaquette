var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  mainBowerFiles = require('main-bower-files'),
  inject = require('gulp-inject');

var paths = {
  temp: 'temp',
  index: 'app/index.html',
  tempVendor: 'temp/vendor',
  app: 'app/**/*.*',
  bower: 'bower_components'
}

var app = {
   env: process.env.ENV != "production"
}

gulp.task('default', ['scripts', 'serve', 'watch']);

gulp.task('scripts', function() {
  var tempIndex = gulp.src(paths.index).pipe(gulp.dest(paths.temp)),
    tempVendors = gulp.src(mainBowerFiles()).pipe(gulp.dest(paths.tempVendor)),
    scripts = gulp.src(paths.app).pipe(gulp.dest(paths.temp));

  tempIndex.pipe(inject(scripts, {
      relative: true
    }))
    .pipe(inject(tempVendors, {
      relative: true,
      name: 'vendorInject'
    }))
    .pipe(gulp.dest(paths.temp));
});

gulp.task('serve', function() {
  gulp.src(paths.temp)
    .pipe(webserver({
	livereload: app.env, // Check the ENV settings
	port: process.env.PORT || 8000
    }));
});


gulp.task('watch', function() {
  gulp.watch(paths.app, ['scripts']);
  gulp.watch(paths.bower + '/**/*', ['scripts']);
});
