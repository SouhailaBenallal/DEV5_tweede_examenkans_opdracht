const db = require('../db/db');

class CategoryRepository {
    async findAll() {
        return db('Categories').select('*').orderBy('Name');
    }

    async findById(uuid) {
        return db('Categories')
            .select()
            .where('UUID', '=', uuid)
            .first();
    }

    save(name) {
        return db('Categories')
            .insert({
                Name: name,
            })
            .returning('*');
    }

    update(uuid, name) {
        return db('Categories')
            .update({
                Name: name,
            })
            .where('UUID', '=', uuid)
            .returning("UUID");
    }

    remove(uuid) {
        return db('Categories')
            .del()
            .where('UUID', '=', uuid);
    }
};

module.exports = new CategoryRepository();