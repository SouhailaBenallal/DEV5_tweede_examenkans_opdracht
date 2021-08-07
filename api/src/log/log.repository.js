const db = require('../db/db');

class LogRepository {
    async findAll() {
        return db('Logs').select('*');
    }

    async findAllWithCategory() {
        return db('Logs as log')
            .select('log.UUID as uuidLog',
                'log.Content as Content',
                'cat.UUID as uuidCat',
                'cat.Name as Name'
            )
            .join('Categories as cat', 'cat.UUID', 'log.FK_Category')
    }

    async findById(uuid) {
        return db('Logs as log')
            .select('log.UUID as uuidLog',
                'log.Content as Content',
                'cat.UUID as uuidCat',
                'cat.Name as Name'
            )
            .join('Categories as cat', 'cat.UUID', 'log.FK_Category')
            .where('log.UUID', '=', uuid)
            .first();
    }

    async isPresent(uuid) {
        return db('Logs')
            .select('*')
            .where('UUID', '=', uuid)
            .first();
    }

    save(content, fk_category) {
        return db('Logs')
            .insert({
                Content: content,
                FK_Category: fk_category
            })
            .returning('*');
    }

    update(uuid, content, fk_category) {
        return db('Logs')
            .update({
                Content: content,
                FK_Category: fk_category
            })
            .where('UUID', '=', uuid)
            .returning("UUID");
    }

    remove(uuid) {
        return db('Logs')
            .del()
            .where('UUID', '=', uuid);
    }
};

module.exports = new LogRepository();