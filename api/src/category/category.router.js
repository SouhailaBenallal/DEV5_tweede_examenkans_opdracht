const express = require('express');
const categoryController = require('./category.controller');
const router = express.Router();


router.get('/', categoryController.getAll);
router.get('/:uuid', categoryController.get);
router.post('/', categoryController.save);
router.put('/:uuid', categoryController.update);
router.delete('/:uuid', categoryController.remove);
module.exports = router;