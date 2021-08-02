const express = require('express');

const router = express.Router();

const categoryRouter = require('./category/category.router');
const logRouter = require('./log/log.router');

router.use('/categories', categoryRouter);
router.use('/logs', logRouter);


module.exports = router;