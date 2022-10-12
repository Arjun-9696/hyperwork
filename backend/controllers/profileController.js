const express = require('express');
const Profile = require('../models/profileModel');
const crudController = require('./crudControllers');

const router = express.Router();

router.get('/', crudController(Profile).get);
router.get('/:id', crudController(Profile).getOne)
router.post('/', crudController(Profile).post);

module.exports = router;