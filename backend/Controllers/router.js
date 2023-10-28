// declare express router
const Router = require('express').Router;

const router = Router();

// ======================================== //
// MIDDLEWARE //

// ======================================== //
// ROUTES //
// GET //
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// EXPORTS //
module.exports = router;