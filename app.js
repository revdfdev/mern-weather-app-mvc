const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const { v4 } = require('node-uuid');
const chalk = require('chalk');
require('dotenv').config();
const cors = require('cors');

const app = express();

morgan.token('id', function geId(req) {
    return req.id;
})

app.use(assignId);
app.use(morgan(':id :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]', {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: fs.createWriteStream(path.join(__dirname, 'error.log'), {flags: 'a'})
}))

app.use(parser.urlencoded({
    extended: true
}));

app.use(parser.json({
    extended: true
}));

function assignId(req, res, next) {
    req.id = v4();
    next();
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.options("*", cors());

require('./routes/routes.index')(app);



app.listen(process.env.PORT || 4000, function() {
    console.log(chalk.green(`Listening to request on port ${process.env.PORT || 4000}`))
})
