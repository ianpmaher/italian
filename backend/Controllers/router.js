require('dotenv').config();
// declare express router
const Router = require('express').Router;
const axios = require('axios');
const express = require('express');
const router = Router();
const cheerio = require('cheerio');

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

// ======================================== //
// this code from https://npm.io/package/collins makes EVERYTHING work in Express
const dict = new Collins(serverName, accessKey);

// SEARCH ENGLISH TO ITALIAN //
router.get('/english/search/:word/', async (req, res) => {
    try {
        const word = req.params.word;
        dict.first("english-italian", word, function(err, data) {
            console.log("first result", data);
            res.send(data.entryContent)
        })        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// SEARCH ITALIAN TO ENGLISH //
router.get('/italian/search/:word/', async (req, res) => {
    try {
        const word = req.params.word;
        dict.first("italian-english", word, function(err, data) {
            console.log("first result", data);
            res.send(data.entryContent)
        })        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// ======================================== //
// QUIZ ENGLISH TO ITALIAN QUIZ //
router.get('/english/quiz/:word/', async (req, res) => {
    try {
        const word = req.params.word;
        dict.first("english-italian", word, function(err, data) {
            console.log("first result", data);
            const $ = cheerio.load(data.entryContent); // cheerio node package parses html
            const word = $('span.quote').first().text(); // gets the first word in the entry
            
            res.send(word) // sends the word to the frontend
        })        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// ======================================== //
// ENTRY ENGLISH TO ITALIAN //
"http://api.collinsdictionary.com/api/v1/dictionaries/english-italian/entries/word_1"
// I had messed up and forgot that the : makes it a variable, so I was trying to search for the word "word_1" instead of the word that was passed in as a parameter.
router.get('/english/entry/:entryId', async (req, res) => {
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
// ENTRY ITALIAN TO ENGLISH //
router.get('/italian/entry/:entryId', async (req, res) => {
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

// ======================================== //
// SEARCH [first] ROUTE //
"http://api.collinsdictionary.com/api/v1/dictionaries/english-italian/entries/word_1"
// I had messed up and forgot that the : makes it a variable, so I was trying to search for the word "word_1" instead of the word that was passed in as a parameter.
// router.get('/english/search/:searchWord', async (req, res) => {
//     try {
//         const searchWord = req.params.searchWord;
//         console.log(searchWord)
//         dict.first("english-italian", searchWord, 'html', function(err, data) {
//             console.log(data);
//             // res.send(data.entryContent)
//             res.send(data.entryContent)
//         })        
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }

// })




// EXPORTS //
module.exports = router;