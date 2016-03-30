var gulp 			= 			require('gulp');
var sass 			= 			require('gulp-sass');
var minify_css		=			require('gulp-minify-css');
var imageMin		=			require('gulp-imagemin');


gulp.task('styles', function(){
	gulp.src('./assets/sass/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('./assets/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('minify-css', function(){
	return gulp.src('./assets/pre-css/main.css')
	.pipe(minify_css({
		keepSpecialComments: 1
	}))
	.pipe(gulp.dest('assets/css'))
});

gulp.task('image-compress' function(){
	return gulp.src('./assets/pre-images/*')
	.pipe(imageMin({
		progressive: true,
		optimizationLevel: 3	
	}))
	.pipe(gulp.dest('assets/images'))
});

//Add autoprefixer, watch, minify, imgCompressor and Browser sync, and jade	