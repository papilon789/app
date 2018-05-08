'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const member_1 = require("../models/member");
const crypto = require("crypto");
const router = express.Router();
const model = new member_1.MemberModel();
router.get('/member', (req, res, next) => {
    let db = req.db;
    model.list(db)
        .then((results) => {
        res.send({ ok: true, rows: results });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    });
});
router.post('/member', (req, res, next) => {
    let name = req.body.name;
    let surname = req.body.surname;
    let nickname = req.body.nickname;
    let tel = req.body.tel;
    let email = req.body.email;
    let line = req.body.line;
    let aptitude = req.body.aptitude;
    let password = req.body.password;
    let db = req.db;
    let encPassword = crypto.createHash('md5').update(password).digest('hex');
    model.save(db, {
        password: encPassword,
        name: name,
        surname: surname,
        nickname: nickname,
        tel: tel,
        email: email,
        line: line,
        aptitude: aptitude
    })
        .then((results) => {
        res.send({ ok: true });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    });
});
router.put('/member/update', (req, res, next) => {
    let id = req.query.id;
    let name = req.body.name;
    let surname = req.body.surname;
    let nickname = req.body.nickname;
    let tel = req.body.tel;
    let email = req.body.email;
    let line = req.body.line;
    let aptitude = req.body.aptitude;
    let password = req.body.password;
    let db = req.db;
    let encPassword = crypto.createHash('md5').update(password).digest('hex');
    if (id) {
        model.update(db, id, {
            password: encPassword,
            name: name,
            surname: surname,
            nickname: nickname,
            tel: tel,
            email: email,
            line: line,
            aptitude: aptitude
        })
            .then((results) => {
            res.send({ ok: true });
        })
            .catch(error => {
            res.send({ ok: false, error: error });
        });
    }
    else {
        res.send({ ok: false, error: 'ข้อมูลไม่สมบูรณ์' });
    }
});
router.get('/member/detail', (req, res, next) => {
    let id = req.query.id;
    let db = req.db;
    model.detail(db, id)
        .then(results => {
        res.send({ ok: true, data: results });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    });
});
router.delete('/member/:id', (req, res, next) => {
    let id = req.body.id;
    let name = req.body.name;
    let surname = req.body.surname;
    let nickname = req.body.nickname;
    let tel = req.body.tel;
    let email = req.body.email;
    let line = req.body.line;
    let aptitude = req.body.aptitude;
    let password = req.body.password;
    let db = req.db;
    model.remove(db, id)
        .then((results) => {
        res.send({ ok: true });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
exports.default = router;
//# sourceMappingURL=member.js.map