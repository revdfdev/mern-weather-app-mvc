const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const { v4 } = require('node-uuid');
const chalk = require('chalk')
require('dotenv').config();

const app = express();

app.use(parser.urlencoded({
    extended: true
}));

app.use(parser.json({
    extended: true
}));

morgan.token('id', function geId(req) {
    return req.id;
})

app.use(assignId);
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]', {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: fs.createWriteStream(path.join(__dirname, 'error.log'), {flags: 'a'})
}))


function assignId(req, res, next) {
    req.id = v4();
    next();
}

require('./routes/routes.index')(app);

app.listen(process.env.PORT || 4000, function() {
    console.log(chalk.green(`Listening to request on port ${process.env.PORT || 4000}`))
})
