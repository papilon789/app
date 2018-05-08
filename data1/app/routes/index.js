'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../models/jwt");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const jwt = new jwt_1.Jwt();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});
router.post('/login', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let fullname = req.body.name;
    let id = req.body.id;
    let db = req.db;
    let encPassword = crypto.createHash('md5').update(password).digest('hex');
    db('member')
        .select('id', 'username', 'name')
        .where('username', username)
        .where('password', encPassword)
        .then((result) => {
        console.log(result);
        if (result.length) {
            let playload = result[0];
            let token = jwt.sign(playload);
            res.send({ ok: true, token: token });
        }
        else {
            res.send({ ok: false, message: 'Access denied!' });
        }
    })
        .catch(error => {
        res.send({ ok: false, message: error.message });
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map