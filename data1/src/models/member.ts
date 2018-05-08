import Knex = require('knex');
import * as moment from 'moment';



export class MemberModel {

  public tableName  = 'member';
  public primaryKey = 'id';

  list(knex: Knex, limit: number = 100, offset: number = 0) {
    return knex(this.tableName)
      .limit(limit)
      .offset(offset);
  }

  save(knex: Knex, data: any) {
    return knex(this.tableName)
      
      .insert(data);
  }

  update(knex: Knex, id: string, data: any) {
    return knex(this.tableName)
      .where(this.primaryKey, id)
      .update(data);
  }

  detail(knex: Knex, id: string) {
    return knex(this.tableName)
      .where(this.primaryKey, id);
  }

  // detail(db: Knex, id: string){
  //   return db(this.tableName)
  //   .select('id', 'name', 'surname', 'nickname', 'tel', 'email', 'line', 'aptitude')
  //   .where('id', id)
  // }

  remove(knex: Knex, id: string) {
    return knex(this.tableName)
      .where(this.primaryKey, id)
      .del();
  }

}