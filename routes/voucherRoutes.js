const express = require('express');
const { createVoucher } = require('../controllers/voucherController');

const router = express.Router();

router.post('/', createVoucher);

module.exports = router;
