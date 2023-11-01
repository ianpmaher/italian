// require('dotenv').config();
const express = require('express');
const router = require('./Controllers/router.js');
const app = express();
// ======================================== //
const cors = require('cors');

// ======================================== //
// MIDDLEWARE //
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())
app.use(router);

app.listen(4001, async () => {
    console.log('Server is listening on port 4001');
});