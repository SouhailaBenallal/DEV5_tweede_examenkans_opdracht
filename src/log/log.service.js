const logRepository = require('./log.repository');
const categoryRepository = require('../category/category.repository');
const { logDto } = require('./dto/logDTO');

class LogService {

    /**
     * Get all logs
     * @returns list of object logs
     */
    async getAll() {
        const logs = await logRepository.findAllWithCategory();
        return logs.map((log) => logDto(log));
    }

    /**
     * check if a log exists 
     * @param {*} uuid uuid of log
     * @returns 
     */
    async isPresent(uuid) {
        if (!uuid) {
            throw new Error("UUID is required");
        }
        try {
            return logRepository.isPresent(uuid);
        } catch (err) {
            throw new Error(err);
        }
    }

    //TODO
    /**
     * Retrieve a log using its identifier
     * @param {*} uuid uuid of log
     * @returns a object log
     */
    async get(uuid) {
        if (!uuid) {
            throw new Error("UUID is required");
        }
        try {
            const log = await logRepository.findById(uuid);
            if (!log) {
                throw new Error("Log does not exist");
            }
            return logDto(log);
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Save a log
     * @param {*} name name of log
     * @returns 
     */
    async save(content, fk_category) {
        if (!content) {
            throw new Error("Content is required");
        }
        if (!fk_category) {
            throw new Error("UUID of category is required");
        }
        const category = await categoryRepository.findById(fk_category);
        if (!category) {
            throw new Error("Category does not exist");
        }
        try {
            return logRepository.save(content, fk_category);
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Update a log
     * @param {*} uuid 
     * @param {*} param1 
     * @returns 
     */
    async update(uuid, { content, fk_category }) {
        if (!content) {
            throw new Error("Content is required");
        }
        try {
            return logRepository.update(uuid, content, fk_category);
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Remove a log
     * @param {*} uuid 
     * @returns 
     */
    async remove(uuid) {
        try {
            return logRepository.remove(uuid);
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = new LogService();