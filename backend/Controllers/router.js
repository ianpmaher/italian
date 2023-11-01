require('dotenv').config();
// declare express router
const Router = require('express').Router;
const axios = require('axios');
const express = require('express');
const router = Router();

const Collins = require("collins");
const serverName = "api.collinsdictionary.com";
const accessKey = process.env.API_KEY_COLLINS_DICTIONARY;

// ======================================== //
// MIDDLEWARE //
router.use(express.urlencoded({extended: true}))
router.use(express.json());

// ======================================== //
// MIDDLEWARE //
// ======================================== //
// CollinsDictionary API
const baseUrl = 'https://api.collinsdictionary.com/api/v1/dictionaries/';


// ======================================== //
// ROUTES //
// GET //
router.get('/', (req, res) => {
    res.send('Hello World!');
});

const dict = new Collins(serverName, accessKey);

// SEARCH
router.get('/:word/', async (req, res) => {
    try {
        const word = req.params.word;
        dict.search("english-italian", word, function(err, data) {
            console.log(data);
            res.send(data)
        })        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// ENTRY

"http://api.collinsdictionary.com/api/v1/dictionaries/english-italian/entries/word_1"
// I had messed up and forgot that the : makes it a variable, so I was trying to search for the word "word_1" instead of the word that was passed in as a parameter.
router.get('/english/:entryId', async (req, res) => {
    try {
        const entryId = req.params.entryId;
        console.log(entryId)
        dict.entry("english-italian", entryId, 'html', function(err, data) {
            console.log(data);
            res.send(data.entryContent)
        })        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

router.get('/italian/:entryId', async (req, res) => {
    try {
        const entryId = req.params.entryId;
        console.log(entryId)
        dict.entry("italian-english", entryId, 'html', function(err, data) {
            console.log(data);
            res.send(data.entryContent)
        })        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

"http://api.collinsdictionary.com/api/v1/dictionaries/english-italian/entries/dog_1"



// EXPORTS //
module.exports = router;