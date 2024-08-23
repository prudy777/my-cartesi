const mongoose = require('mongoose');

const VoucherSchema = new mongoose.Schema({
    voucher: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Voucher', VoucherSchema);
