// Dependencies
require('dotenv').config();
const express = require('express');
const router = require('./Controllers/router.js');
const app = express();
// ======================================== //
const cors = require('cors');

// ======================================== //
const PORT = process.env.PORT || 4001;
// MIDDLEWARE //
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});