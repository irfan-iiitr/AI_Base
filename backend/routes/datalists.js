const express = require('express');
const router =express.Router();

const getList= require('../controller/datalist');

router.route('/').get(getList);
module.exports = router ;// isko ni daalne  se error aa raha tha
