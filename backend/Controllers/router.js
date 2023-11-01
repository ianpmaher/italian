// declare express router
const Router = require('express').Router;
const axios = require('axios');
const express = require('express');
const router = Router();

// ======================================== //
// MIDDLEWARE //
router.use(express.urlencoded({extended: true}))
router.use(express.json());

// ======================================== //
// MIDDLEWARE //
// ======================================== //
// CollinsDictionary API
const baseUrl = 'https://api.collinsdictionary.com/api/v1/dictionaries/';

router.get('/:dictCode/', async (req, res) => {
    try {
        const dictCode = req.params.dictCode;
        const response = await axios.get(`{${baseUrl}/${dictCode}`);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// ======================================== //
// ROUTES //
// GET //
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// EXPORTS //
module.exports = router;