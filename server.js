const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();
const port = process || 5000;
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/employees/', require('employeeRoutes'));
app.listen(port, () => console.log(`Server started on port ${port}`));
