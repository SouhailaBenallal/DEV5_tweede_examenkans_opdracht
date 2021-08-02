const { isUUID } = require("../util/util");
const categoryService = require("./category.service");

class CategoryController {

    async getAll(req, res) {
        try {
            const categories = await categoryService.getAll();
            res.status(200).json({ categories });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async get(req, res) {
        const uuid = req.params.uuid;
        if (!isUUID(uuid)) {
            res.status(400).json({ message: "Format UUID is not correct" });
        }
        try {
            const category = await categoryService.get(uuid);
            if (category) {
                res.status(200).json({ category });
            } else {
                res.status(404).json({ message: "Category does not exist" });
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }



    async save(req, res) {
        try {
            const category = await categoryService.save(req.body.name);
            res.status(201).json({ message: "Category has been added", category });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async update(req, res) {
        const uuid = req.params.uuid;
        if (!isUUID(uuid)) {
            res.status(400).json({ message: "Format UUID is not correct" });
        }
        try {
            const category = await categoryService.get(uuid);
            if (category) {
                await categoryService.update(uuid, req.body.category);
                res.status(200).json({ message: "Category has been edited" });
            } else {
                res.status(200).json({ message: "Category does not exist" });
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async remove(req, res) {
        const uuid = req.params.uuid;
        if (!isUUID(uuid)) {
            res.status(400).json({ message: "Format UUID is not correct" });
        }
        try {
            const category = await categoryService.get(uuid);
            if (category) {
                await categoryService.remove(uuid);
                res.status(200).json({ message: "Category has been deleted" });
            } else {
                res.status(404).json({ message: "Category does not exist" });
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = new CategoryController();