const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: { 
        type:String,
        required: true,
    },
    description: String,
    image: {
    type: mongoose.Schema.Types.Mixed,
    default: "https://unsplash.com/photos/lush-green-island-with-rocky-cliffs-and-white-sand-beach-qzgmZKsyVsQ"
    },
    price: Number,
    location: String,
    Country: String,
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;

