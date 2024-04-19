const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("URL index /");
    response.end();
});

const server = http.createServer((request, response) => {
    console.log(request.url);
});

app.listen(process.env.PORT);
