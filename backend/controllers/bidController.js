const express = require('express');
const Bid = require('../models/bidModel');
const crudController = require('./crudControllers');

const router = express.Router();

router.get('/', crudController(Bid).get);
router.get('/bid', crudController(Bid).getOne)
router.post('/', crudController(Bid).post);

module.exports = router;