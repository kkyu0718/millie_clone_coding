const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({ 
    target: 'http://localhost:3002/', 
    changeOrigin: true,
    onProxyReq: (proxyRes, req, res) => {
        res.on('close', () => proxyRes.destroy());
    }
}));
app.listen(3003);