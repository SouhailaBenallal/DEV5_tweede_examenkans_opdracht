const express = require('express');
const logController = require('./log.controller');
const router = express.Router();


router.get('/', logController.getAll);
router.get('/:uuid', logController.get);
router.post('/', logController.save);
router.put('/:uuid', logController.update);
router.delete('/:uuid', logController.remove);
module.exports = router;