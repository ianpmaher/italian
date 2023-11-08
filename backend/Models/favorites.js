// require mongoose
const mongoose = require('mongoose');
// Schema constructor
const FavoritesSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    arrayFav: [String],
});

// create Favorites model using schema
const Favorite = mongoose.model("Favorites", FavoritesSchema);

//export Favorites model
module.exports = Favorite;