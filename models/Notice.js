const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
    notice: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Notice', NoticeSchema);
