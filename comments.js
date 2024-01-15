// Create web server
// Run: node server.js
// Open in browser: http://localhost:3000/

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');git 

const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url);
    let filePath = '.' + reqUrl.pathname