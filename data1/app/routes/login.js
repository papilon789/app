'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../models/jwt");
const crypto = require("crypto");
const express = require("express");
const member_1 = require("../models/member");
const router = express.Router();
const model = new member_1.MemberModel();
const jwt = new jwt_1.Jwt();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});
router.post('/login', (req, res, next) => {
    let tel = req.body.tel;
    let password = req.body.password;
    let db = req.db;
    let encPassword = crypto.createHash('md5').update(password).digest('hex');
    db('member')
        .select('id')
        .where('tel', tel)
        .where('password', encPassword)
        .then((result) => {
        console.log(result);
        if (result.length) {
            let playload = result[0];
            let token = jwt.sign(playload);
            let id = result[0];
            res.send({ ok: true,
                token: token,
                id: id.id,
            });
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
//# sourceMappingURL=login.js.map