const categoryRepository = require('./category.repository');
const { categoryDto } = require('./dto/categoryDTO');

class CategoryService {

    /**
     * Get all categories
     * @returns list of object categories
     */
    async getAll() {
        const categories = await categoryRepository.findAll();
        return categories.map((category) => categoryDto(category));
    }

    /**
     * Retrieve a category using its identifier
     * @param {*} uuid uuid of category
     * @returns a object category
     */
    async get(uuid) {
        if (!uuid) {
            throw new Error("UUID is required");
        }
        try {
            return categoryRepository.findById(uuid);
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Save a category
     * @param {*} name name of category
     * @returns 
     */
    async save(name) {
        if (!name) {
            throw new Error("Name is required");
        }
        try {
            return categoryRepository.save(name);
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Update a category
     * @param {*} uuid 
     * @param {*} param1 
     * @returns 
     */
    async update(uuid, { name }) {
        if (!name) {
            throw new Error("Name is required");
        }
        try {
            return categoryRepository.update(uuid, name);
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Remove a category
     * @param {*} uuid 
     * @returns 
     */
    async remove(uuid) {
        try {
            return categoryRepository.remove(uuid);
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = new CategoryService();