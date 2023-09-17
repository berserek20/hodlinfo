const express = require('express');
const router = express.Router();
const {  getData } = require('../controller/dataController');
// const \
router.get('/read',getData);
module.exports.routes= router;