var gulp = require('gulp');
var gutil = require('gulp-util');

var coffee = require('gulp-coffee');
var jade = require('gulp-jade');

var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');

gulp.task('default', ['coffee', 'jade']);

gulp.task('coffee', function(){
	//converting coffeescript to javascript
	gulp.src('./src/app.coffee')
		.pipe(coffee({
			bare: true
		}).on('error', gutil.log))
		//.pipe(uglify())
		.pipe(gulp.dest('./dist/'));

	gulp.src('./src/files/js/*.coffee')
		.pipe(coffee({
			bare: true
		}).on('error', gutil.log))
		//.pipe(uglify())
		.pipe(gulp.dest('./dist/files/js/'));
});

gulp.task('jade', function(){
	//converting the jade to html
	var opts = {
		conditionals: true,
    	spare:true
	}

	gulp.src('./src/files/*.jade')
		.pipe(jade())
		.pipe(minifyHTML(opts))
		.pipe(gulp.dest('./dist/files/'))

	gulp.src('./src/files/views/*.jade')
		.pipe(jade())
		.pipe(minifyHTML(opts))
		.pipe(gulp.dest('./dist/files/views/'))
});
