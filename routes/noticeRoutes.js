const express = require('express');
const { createNotice } = require('../controllers/noticeController');

const router = express.Router();

router.post('/', createNotice);

module.exports = router;
