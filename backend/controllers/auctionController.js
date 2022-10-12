const express = require('express');
const Auction = require('../models/auctionModel');
const crudController = require('./crudControllers');

const router = express.Router();

router.get('/', crudController(Auction).get);
router.get('/auction', crudController(Auction).getOne)
router.post('/', crudController(Auction).post);

module.exports = router;