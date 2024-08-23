
const Report = require('../models/Report');

const createReport = async (req, res) => {
    try {
        // Extract report data from the request body
        const { report } = req.body;

        // Optionally, save the report to the database
        const newReport = await Report.create({ report });

        // Send a success response
        res.status(201).json({
            success: true,
            data: newReport,
        });
    } catch (error) {
        // Handle any errors
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

const getReports = async (req, res) => {
    try {
        // Fetch all reports from the database
        const reports = await Report.find();

        // Send the reports as the response
        res.status(200).json({
            success: true,
            data: reports,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

module.exports = {
    createReport,
    getReports,
};
