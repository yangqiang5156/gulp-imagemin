var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var gulp     = require('gulp');

gulp.task('imagemin', function(){
  return gulp.src('../source/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('../dist/'));
});

gulp.task('default', ['imagemin']);

/*
git clone peter-gulp-imagemin
cd peter-gulp-imagemin
cnpm i
mkdir ../source/  # all images here
mkdir ../dist     # output image will be here
*/

// ➜  img  du -sh source/*
// 388K  source/pic1-1-sever-client.png
// 360K  source/pic1-2-full-stack-dev.png
// ➜  img  du -sh dist/*
// 260K  dist/pic1-1-sever-client.png
// 240K  dist/pic1-2-full-stack-dev.png
