const express = require('express');
const Item = require('../models/itemModel');
const crudController = require('./crudControllers');

const router = express.Router();

router.get('/', crudController(Item).get);
router.get('/item', crudController(Item).getOne)
router.post('/', crudController(Item).post);

module.exports = router;