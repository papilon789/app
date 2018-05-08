'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const test_1 = require("../models/test");
const router = express.Router();
const model = new test_1.KpiListModel();
router.get('/', (req, res, next) => {
    let db = req.db;
    model.list(db)
        .then((results) => {
        res.send({ ok: true, rows: results });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    });
});
router.post('/', (req, res, next) => {
    let datas = req.body.data;
    let db = req.db;
    model.save(db, datas)
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
router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    let datas = req.body.data;
    let db = req.db;
    if (id) {
        model.update(db, id, datas)
            .then((results) => {
            res.send({ ok: true });
        })
            .catch(error => {
            res.send({ ok: false, error: error });
        })
            .finally(() => {
            db.destroy();
        });
    }
    else {
        res.send({ ok: false, error: 'ข้อมูลไม่สมบูรณ์' });
    }
});
router.get('/detail/:id', (req, res, next) => {
    let id = req.params.id;
    let db = req.db;
    model.detail(db, id)
        .then((results) => {
        res.send({ ok: true, detail: results[0] });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
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
//# sourceMappingURL=test.js.map