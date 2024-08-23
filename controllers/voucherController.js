const Voucher = require('../models/Voucher');

const createVoucher = async (req, res) => {
    try {
        const voucher = await Voucher.create({ voucher: req.body.voucher });
        res.status(201).json({
            success: true,
            data: voucher,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

module.exports = { createVoucher };
