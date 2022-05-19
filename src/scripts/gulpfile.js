cssfont64 = require('gulp-cssfont64');

gulp.task('fontsConvert', function () {
	return gulp.src([assetsDir + 'fonts/*.woff', assetsDir + 'fonts/*.woff2'])
		.pipe(cssfont64())
		.pipe(gulp.dest(outputDir + 'styles/'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function () {
	gulp.watch(assetsDir + 'fonts/**/*', ['fontsConvert']);
});