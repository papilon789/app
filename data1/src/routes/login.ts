'use strict';

import { Jwt } from '../models/jwt';

import * as crypto from 'crypto';

import * as express from 'express';

import { MemberModel } from '../models/member';
import * as moment from 'moment';

const router = express.Router();

const model = new MemberModel();

const jwt = new Jwt();



/* GET home page. */
router.get('/',(req,res,next) => {
  res.render('index', {title: 'Express'});
});
/////////////////////******************Login**********************/////////////////////////////////
router.post('/login', (req, res, next) => {
  let tel = req.body.tel;
  let password = req.body.password;
  

  let db = req.db;

  let encPassword = crypto.createHash('md5').update(password).digest('hex');
 
  // jwt.getid(db, tel, encPassword)
  // .then(result1 => {
  //   res.send({ ok: true, rows: result1 });
  // })

  db('member')
    .select('id')
    .where('tel', tel)
    .where('password', encPassword)
    .then((result: any) => {
      console.log(result)
      if (result.length) {
        let playload = result[0];
        let token = jwt.sign(playload);
        let id = result[0];
       
        

        res.send({ ok: true, 
          token: token, 
          id : id.id,
        });
      } else {
        res.send({ ok: false, message: 'Access denied!' });
      }
    })
    .catch(error => {
      res.send({ ok: false, message: error.message });
    })
  });

//////////////////////*****************Member*********************/////////////////////////////

// router.post('/member', (req, res, next) => {
//   let name = req.body.name;
//   let surname = req.body.surname;
//   let nickname = req.body.nickname;
//   let tel = req.body.tel;
//   let email = req.body.email;
//   let line = req.body.line;
//   let aptitude = req.body.aptitude;
//   let password = req.body.password;
//   let db = req.db;

//   let encPassword = crypto.createHash('md5').update(password).digest('hex');

//     model.save(db, {
          
//           password: encPassword,
//           name: name,
//           surname: surname,
//           nickname: nickname, 
//           tel: tel,
//           email: email,
//           line: line,
//           aptitude: aptitude
        
//     })
//       .then((results: any) => {
//         res.send({ ok: true })
//       })
//       .catch(error => {
//         res.send({ ok: false, error: error })
//       })
//       // .finally(() => {
//       //   db.destroy();
//       // });
  
// });





export default router;