"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductModel {
    constructor() {
        this.tableName = 'product';
        this.primaryKey = 'id';
    }
    list(knex, limit = 100, offset = 0) {
        return knex(this.tableName)
            .limit(limit)
            .offset(offset);
    }
    save(knex, data) {
        return knex(this.tableName)
            .insert(data);
    }
    update(knex, id, data) {
        return knex(this.tableName)
            .where(this.primaryKey, id)
            .update(data);
    }
    detail(knex, id) {
        return knex(this.tableName)
            .where(this.primaryKey, id);
    }
    remove(knex, id) {
        return knex(this.tableName)
            .where(this.primaryKey, id)
            .del();
    }
}
exports.ProductModel = ProductModel;
//# sourceMappingURL=product.js.map