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
  app.use(
    '/mfe/example1',
    proxy({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/mfe/example1': '/'
      }
    })
  );
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
  app.use(
    '/mfe/example3',
    proxy({
      target: 'http://localhost:3003',
      changeOrigin: true,
      pathRewrite: {
        '^/mfe/example3': '/'
      }
    })
  );
};