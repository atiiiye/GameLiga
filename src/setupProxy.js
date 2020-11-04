const { createProxyMiddleware } = require("http-proxy-middleware");
const PORT = process.env.PORT || 3000;
const express = require("express");
const path = require("path");


module.exports = function (app) {
  // app.use(
  //   "http://2.186.229.181:7580/api/",
  //   createProxyMiddleware({
  //     target: "/Account/Login",
  //     changeOrigin: true,
  //   })
  // );
  // };

  // app.use(
  //   'http://2.186.229.181:7580/api/Account/Login',
  //   createProxyMiddleware({
  //     target: 'http://localhost:3000',
  //     changeOrigin: true,
  //   })
  // );

  // app.use(
  //   'http://2.186.229.181:7580/api/Account/CreateAccount',
  //   createProxyMiddleware({
  //     target: 'http://localhost:3000',
  //     changeOrigin: true,
  //   })
  // );

  // app.use(express.static(__dirname));
  // app.use(
  //   "http://2.186.229.181:7580/api/Account/Login",
  //   proxy({
  //     pathRewrite: {
  //       "http://2.186.229.181:7580/api/Account/Login/": "/",
  //     },
  //     target: "https://localhost:3000/",
  //     secure: false,
  //   })
  // );

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "index.html"));
  // });

  // app.listen(port);
  // const URL = `http://2.186.229.181:7580/api/Account/Login/${PATH}`;


  // app.use(
  //   createProxyMiddleware("http://2.186.229.181:7580/api/Account/Login", {
  //     target: "http://localhost:3000/",
  //     changeOrigin: true,
  //   })
  // ),
  //   app.use(
  //     createProxyMiddleware(
  //       "http://2.186.229.181:7580/api/Account/CreateAccount",
  //       {
  //         target: "http://localhost:3000/",
  //         changeOrigin: true,
  //       }
  //     )
  //   );
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
