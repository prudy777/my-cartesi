const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    report: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Report', ReportSchema);
