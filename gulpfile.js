const gulp = require('gulp'),
  $gp = require('gulp-load-plugins')(),
  del = require('del'),
  cssnext = require('postcss-cssnext'),
  short = require('postcss-short'),
  shortText = require('postcss-short-text'),
  shortBorder = require('postcss-short-border'),
  // webpack = require('webpack'),
  webpack = require('webpack-stream'),
  webpackConfig = require('./webpack.config.js'),
  browserSync = require('browser-sync').create(),
  pathes = {
    src: 'src',
    dest: 'public',
    html: {
      src: '/pug',
      dest: '',
    },
    css: {
      src: '/scss',
      dest: '/css',
    },
    js: {
      src: '/js',
      dest: '/js',
    },
  };

for (path in pathes) {
  if (!pathes[path].src) continue;

  pathes[path].src = pathes.src + pathes[path].src;
  pathes[path].dest = pathes.dest + pathes[path].dest;
}

function clean() {
  return del([pathes.dest + '/*']);
}

function html() {
  const locals = {};

  return gulp
    .src(pathes.html.src + '/index.pug')
    .pipe($gp.plumber())
    .pipe(
      $gp.pug({
        locals,
        pretty: true,
      }),
    )
    .pipe(gulp.dest(pathes.html.dest));
}

function css() {
  const plugins = [
    // precss(),
    cssnext(),
    // colorAlpha(),
    short(),
    // shortFont(),
    shortText(),
    shortBorder(),
    // minmax(),
    // autoprefixer({browsers: ['last 2 version']}),
    // cssnano()
  ];

  return (
    gulp
      .src(pathes.css.src + '/style.scss')
      .pipe($gp.plumber())
      // .pipe(cssGlobbing())
      .pipe($gp.sass().on('error', $gp.sass.logError))
      .pipe($gp.postcss(plugins))
      .pipe($gp.concatCss('bundle.css'))
      // .pipe(minifyCSS())
      .pipe($gp.rename('style.min.css'))
      .pipe(gulp.dest(pathes.css.dest))
  );
}

function js() {
  return (
    gulp
      .src(pathes.js.src + '/*.js')
      // .pipe($gp.sourcemaps.init())
      // .pipe($gp.webpack(webpackConfig, webpack))
      .pipe(webpack(webpackConfig))
      // .pipe(concat('script.min.js'))
      // .pipe($gp.sourcemaps.write())
      .pipe(gulp.dest(pathes.js.dest))
  );
}

function browser_sync() {
  browserSync.init({
    server: pathes.dest,
    // notify: false
  });
  browserSync.watch(pathes.dest + '/**/*.*', browserSync.reload);
}

function watch() {
  gulp.watch([pathes.html.src + '/*.pug', pathes.html.src + '/includes/*.pug'], gulp.series(html));
  gulp.watch(pathes.css.src + '/*.scss', gulp.series(css));
  gulp.watch(pathes.js.src + '/*.js', gulp.series(js));
}

exports.clean = clean;
exports.html = html;
exports.css = css;
exports.js = js;
exports.watch = watch;
exports.browser_sync = browser_sync;

gulp.task(
  'default',
  gulp.series(clean, gulp.parallel(html, css, js), gulp.parallel(watch, browser_sync)),
);
