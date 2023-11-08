const express = require("express");
const router = express.Router();
// Favorite model
const Favorite = require("../Models/favorites.js");
// ===================================== //

// MIDDLWARE //

// ===================================== //
// ROUTES //
// ===================================== //
// INDEX //
router.get("/", (req, res) => {
    res.send("favorites index route");
});

// NEW //
router.get("/new", (req, res) => {
    res.send("favorites new route");
});

module.exports = router;