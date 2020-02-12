const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/mfe/example2',
    proxy({
      target: 'http://localhost:3002',
      changeOrigin: true,
      pathRewrite: {
        '^/mfe/example2': '/'
      }
    })
  );
};