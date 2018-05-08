import * as jwt from 'jsonwebtoken';

import Knex = require('knex');
import * as moment from 'moment';

export class Jwt {
  static verify: any;
    private secretKey = process.env.SECRET_KEY;


    getid(db: Knex, tel: string, encPassword: string){
      return db('member')
      .select('id')
      .where('tel', tel)
      .where('password', encPassword);
    }


  sign(playload: any) {

    
    
    let token = jwt.sign(playload, this.secretKey, {
      expiresIn: '1d'
    });
    
    return token;
  }

  verify(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secretKey, (err, decoded) => {
        if (err) {
          reject(err)
        } else {
          resolve(decoded)
        }
      });
    });
  }

}
