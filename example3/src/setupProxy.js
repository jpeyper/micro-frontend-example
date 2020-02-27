const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/mfe/parent',
    proxy({
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/mfe/parent': '/'
      }
    })
  );
};