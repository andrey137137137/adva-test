const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

function resolveSrc(dir) {
  return resolve(path.join('src', dir));
}

module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/variables.scss"; @import "@/scss/mixins.scss";`,
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set('@assets', resolveSrc('assets'));
    config.resolve.alias.set('@cmp', resolveSrc('components'));
    config.resolve.alias.set('@mixins', resolveSrc('mixins'));
    config.resolve.alias.set('@views', resolveSrc('views'));

    config.resolve.alias.set('@scss', resolveSrc('scss'));
    config.resolve.alias.set('@scssCmp', resolveSrc(path.join('scss', 'cmp')));
    config.resolve.alias.set(
      '@scssPgs',
      resolveSrc(path.join('scss', 'pages')),
    );
  },
};
