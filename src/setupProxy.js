const { createProxyMiddleware } = require("http-proxy-middleware");
import config from "./config.json";


module.exports = function (app) {
  app.use(
    config.loginApi,
    createProxyMiddleware({
      target: "http://localhost:3000/",
      changeOrigin: true,
    })
  );
};


// const packageJson = require("../package.json");

// const args = process.argv.slice(2);
// const mock = args[0] === "--mock";

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: mock ? packageJson.serverUrlMock : packageJson.serverUrlDev,
//       changeOrigin: true,
//     })
//   );
// };