var gulp = require('gulp');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint')

var src = 'src/*.ts';
var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', function () {
    var tsResult = gulp.src(src)
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("./dist/"));
});

gulp.task('lint', function () {
    gulp.src(src)
        .pipe(tslint({
            formatter: "verbose",
            configuration: 'tslint.json'
        }))
        .pipe(tslint.report())
});

gulp.task('default', [ 'lint', 'tsc'] );