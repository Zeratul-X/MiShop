const gulp = require('gulp');
const del = require('del');
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const webserver = require("gulp-webserver");
const sass = require('gulp-sass');

const delHandler = () => {
    return del(["./dist"]);
};

const cssHandler = () => {
    return gulp
        .src("./src/css/*.css")
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css"));
};

const htmlHandler = () => {
    return gulp
        .src("./src/pages/*.html")
        .pipe(
            htmlmin({
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                collapseBooleanAttributes: true,
            })
        )
        .pipe(gulp.dest("./dist/pages"));
};

const jsHandler = () => {
    return gulp
        .src("./src/js/*.js")
        .pipe(
            babel({
                presets: ["@babel/env"],
            })
        )
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"));
};

const libHandler = () => {
    return gulp.src("./src/lib/**")
        .pipe(gulp.dest("./dist/lib"));
};

const imagesHandler = () => {
    return gulp.src('./src/images/**')
        .pipe(gulp.dest('./dist/images'))
}

const webserverHandler = () => {
    return gulp.src('./dist') //找到要作为服务器根目录的文件夹
        .pipe(webserver({
            port: 8090,
            open: './pages/index.html',
            livereload: true,
            //proxy
            // proxies: [
            //     {
            //         source: '/abc',
            //         target: 'http://127.0.0.1/json.php'
            //     },
            //     {
            //         source: '/eee',
            //         target: 'http://127.0.0.1/json.php'
            //     }
            // ]
        }))
}

const scssHandler = () => {
    return gulp.src('./src/sass/**')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))

}
const watchHandler = () => {
    gulp.watch('./src/css/*.css', cssHandler);
    gulp.watch('./src/js/*.js', jsHandler);
    gulp.watch('./src/pages/*.html', htmlHandler);
    gulp.watch('./src/images/**', imagesHandler);
    gulp.watch('./src/lib/**', libHandler);
    gulp.watch('./src/sass/**',scssHandler)
}

module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(libHandler, imagesHandler, cssHandler, htmlHandler, jsHandler,scssHandler),
    webserverHandler,
    watchHandler
)