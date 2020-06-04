var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task("css", function () {
  var processors = [
    autoprefixer({ overrideBrowserslist: ["last 2 versions"] }),
  ];
  return gulp
    .src("./src/*.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest("./dest"));
});
