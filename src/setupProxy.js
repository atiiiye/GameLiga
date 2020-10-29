// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "http://localhost:3000",
//       changeOrigin: true,
//     })
//   );
// };


const { createProxyMiddleware } = require("http-proxy-middleware");
const packageJson = require("../package.json");

const args = process.argv.slice(2);
const mock = args[0] === "--mock";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: mock ? packageJson.serverUrlMock : packageJson.serverUrlDev,
      changeOrigin: true,
    })
  );
};