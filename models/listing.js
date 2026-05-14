const mongoose = require("mongoose");
const { listingSchema } = require("../schema");
const Schema = mongoose.Schema;
const Review = require("./review.js");

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
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"

        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

ListingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({_id : {$in: listing.reviews}});
    }
    
});
const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;