import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/proxy",
  createProxyMiddleware({
        target: "https://www.naver.com/",
        changeOrigin: true,
        pathRewrite: function (path, req) { return path.replace('/proxy', '/') },
    })
);

app.listen(3000);