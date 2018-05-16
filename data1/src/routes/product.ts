'use strict';

import * as express from 'express';
import * as moment from 'moment';
import { ProductModel } from '../models/product';

import * as crypto from 'crypto';

const router = express.Router();

const model = new ProductModel();

router.get('/product', (req, res, next) => {

    let db = req.db;
  
    model.list(db)
      .then((results: any) => {
        res.send({ ok: true, rows: results });
      })
      .catch(error => {
        res.send({ ok: false, error: error })
      });
  });
  
  router.post('/product', (req, res, next) => {

    let iduser = req.body.iduser;
    let productname = req.body.productname;
    let category = req.body.category;
    let price = req.body.price;
    let detail = req.body.detail;
    let tel = req.body.tel;
    let email = req.body.email;
    let line = req.body.line;
    let db = req.db;
  
    
  
      model.save(db, {
            
            iduser: iduser,
            productname: productname,
            category: category,
            price: price,
            detail: detail,
            tel: tel,
            email: email,
            line: line,
            
          
      })
        .then((results: any) => {
          res.send({ ok: true })
        })
        .catch(error => {
          res.send({ ok: false, error: error })
        })
        // .finally(() => {
        //   db.destroy();
        // });
    
  });
  
  router.put('/member/update', (req, res, next) => {
    
    let id = req.query.id
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
      model.update(db, id,  {
            password: encPassword,
            name: name,
            surname: surname,
            nickname: nickname, 
            tel: tel,
            email: email,
            line: line,
            aptitude: aptitude
         
      })
        .then((results: any) => {
          res.send({ ok: true })
        })
        .catch(error => {
          res.send({ ok: false, error: error })
        })
        // .finally(() => {
        //   db.destroy();
        // });
    } else {
      res.send({ ok: false, error: 'ข้อมูลไม่สมบูรณ์' }) ;
    }
  });
  
  router.get('/product/detail/trader', (req, res, next) => {
    
    // let id = sessionStorage.getItem('id');
    let category = req.query.category
    let db = req.db;
  
    model.detail(db, category)
      .then(results => {
        res.send({ ok: true, data: results });
      })
      .catch(error => {
        res.send({ ok: false, error: error });
      });
      // .finally(() => {
      //   db.destroy();
      // });
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
      .then((results: any) => {
        res.send({ ok: true })
      })
      .catch(error => {
        res.send({ ok: false, error: error })
      })
      .finally(() => {
        db.destroy();
      });
  });

export default router;