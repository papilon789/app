"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KpiListModel {
    constructor() {
        this.tableName = 'kpi_list';
        this.primaryKey = 'id';
    }
    list(knex, limit = 100, offset = 0) {
        return knex(this.tableName)
            .select('kpi_year', 'kpi_level')
            .where({
            'kpi_level': 'กรม'
        })
            .where('kpi_year', '>=', 2560)
            .limit(limit)
            .offset(offset);
    }
    save(knex, datas) {
        return knex(this.tableName)
            .insert(datas);
    }
    update(knex, id, datas) {
        return knex(this.tableName)
            .where(this.primaryKey, id)
            .update(datas);
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
exports.KpiListModel = KpiListModel;
//# sourceMappingURL=test.js.map