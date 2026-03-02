const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: { 
        type:String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        set: (v) => v ==="" ? "https://unsplash.com/photos/lush-green-island-with-rocky-cliffs-and-white-sand-beach-qzgmZKsyVsQ" 
        : v,
    },
    price: Number,
    location: String,
    Country: String,
});

const Listing = mongoose.model("Listing", ListingSchema);
module.export = Listing;

