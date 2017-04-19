var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy-gh-pages', function() {
  return gulp.src([ "./index.html","./js/jquery-3.2.1.min.js"], { base: '.' })
 .pipe(ghPages()); 
});

                     