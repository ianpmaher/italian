const express = require('express');
const router = require('./Controllers/router.js');
const app= express();

// ======================================== //
// MIDDLEWARE //
app.use(router);

app.listen(4001, async () => {
    console.log('Server is listening on port 4001');
});