'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const Knex = require("knex");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const jwt_1 = require("./models/jwt");
const login_1 = require("./routes/login");
const member_1 = require("./routes/member");
const product_1 = require("./routes/product");
const jwt = new jwt_1.Jwt();
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
let checkAuth = (req, res, next) => {
    let token = null;
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    }
    else if (req.query && req.query.token) {
        token = req.query.token;
    }
    else {
        token = req.body.token;
    }
    jwt_1.Jwt.verify(token)
        .then((decoded) => {
        req.decoded = decoded;
        console.log(decoded);
        next();
    }, err => {
        return res.send({
            ok: false,
            error: 'No token provided.',
            code: 403
        });
    });
};
let connection = {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true,
    debug: true
};
let db = Knex({
    client: 'mysql',
    connection: connection,
    pool: {
        min: 0,
        max: 7,
        afterCreate: (conn, done) => {
            conn.query('SET NAMES utf8', (err) => {
                done(err, conn);
            });
        }
    },
});
app.use((req, res, next) => {
    req.db = db;
    next();
});
app.use('/', login_1.default);
app.use('/', member_1.default);
app.use('/', product_1.default);
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (process.env.NODE_ENV === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            title: 'error',
            message: err.message,
            error: err
        });
    });
}
app.use((err, req, res, next) => {
    res.status(err['status'] || 500);
    res.render('error', {
        title: 'error',
        message: err.message,
        error: {}
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map