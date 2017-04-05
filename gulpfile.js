var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    modRewrite = require('connect-modrewrite');

/** The run task will launch the web app in your default browser*/
gulp.task('run',
    ['browser-sync']
);

gulp.task('browser-sync', function () {
    /** Runs the web app currently under development and watches the filesystem for changes */

    // Specify list of files to watch for changes, apparently reload method doesn't work on Windows */
	var filesToWatch = [
        './**/*.html',
        './**/*.js'
   ];

    // Create a rewrite rule that redirects to index.html to let Angular handle the routing
	browserSync.init(filesToWatch, {
        server: {
            baseDir: "./",
            middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
	});
});