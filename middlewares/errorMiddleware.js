require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
const noticeRoutes = require('./routes/noticeRoutes');
const voucherRoutes = require('./routes/voucherRoutes');
const reportRoutes = require('./routes/reportRoutes');

app.use('/notice', noticeRoutes);
app.use('/voucher', voucherRoutes);
app.use('/report', reportRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
