const logService = require("./log.service");
const { isUUID } = require("../util/util");

class LogController {

    async getAll(req, res) {
        try {
            const logs = await logService.getAll();
            res.status(200).json({ logs });
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
            const log = await logService.get(uuid);
            res.status(200).json({ log });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }



    async save(req, res) {
        try {
            const log = await logService.save(
                req.body.content,
                req.body.fk_category
            );
            res.status(201).json({ message: "Log has been added", log });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async update(req, res) {
        const uuid = req.params.uuid;
        if (!isUUID(uuid)) {
            return res.status(400).json({ message: "Format UUID is not correct" });
        }
        try {
            const log = await logService.isPresent(uuid);
            if (log) {
                await logService.update(
                    uuid,
                    req.body.log
                );
                res.status(200).json({ message: "Log has been edited" });
            } else {
                res.status(200).json({ message: "Log does not exist" });
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
            const log = await logService.isPresent(uuid);
            if (log) {
                await logService.remove(uuid);
                res.status(200).json({ message: "Log has been deleted" });
            } else {
                res.status(404).json({ message: "Log does not exist" });
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = new LogController();