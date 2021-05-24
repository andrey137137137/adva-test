const gulp = require('gulp');
const $gp = require('gulp-load-plugins')();
const del = require('del');
const cssnext = require('postcss-cssnext');
const short = require('postcss-short');
const shortText = require('postcss-short-text');
const shortBorder = require('postcss-short-border');
const shortBorderRadius = require('postcss-short-border-radius');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const browserSync = require('browser-sync').create();
const pathes = {
  src: 'src',
  dest: 'public',
  assets: 'public/assets',
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
  if (!pathes[path].src) {
    continue;
  }

  const { src, dest } = pathes[path];

  pathes[path].src = pathes.src + src;
  pathes[path].dest = pathes.dest + dest;
}

function clean() {
  return del([pathes.dest + '/*', '!' + pathes.assets]);
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
    shortBorderRadius(),
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
      .pipe($gp.sourcemaps.init())
      .pipe(webpack(webpackConfig))
      // .pipe(concat('script.min.js'))
      .pipe($gp.sourcemaps.write())
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
  gulp.watch(
    [
      pathes.assets + '/**/*',
      pathes.assets + '/**/**/*',
      pathes.html.src + '/*.pug',
      pathes.html.src + '/includes/*.pug',
    ],
    gulp.series(html),
  );
  gulp.watch([pathes.css.src + '/*.scss', pathes.css.src + '/**/*.scss'], gulp.series(css));
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
