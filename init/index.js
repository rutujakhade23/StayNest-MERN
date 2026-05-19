const mongoose = require("mongoose");
require("dotenv").config();
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


const MONGO_URL = process.env.ATLASDB_URL;

main() 
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

    async function main() {
        await mongoose.connect(MONGO_URL);
    }

    const initDB = async() => {
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj) => ({
            ...obj, 
            owner:  "6a0bf756e878dfc6e4a27a8f"}));
        await Listing.insertMany(initData.data);
        console.log("data was initialized");
    };

    initDB();


// const mongoose = require("mongoose");
// require("dotenv").config();

// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = process.env.ATLASDB_URL;

// async function main() {
//     await mongoose.connect(MONGO_URL);
//     console.log("connected to DB");

//     await initDB();
// }

// main().catch((err) => {
//     console.log(err);
// });

// const initDB = async () => {
//     await Listing.deleteMany({});
//     await Listing.insertMany(initData.data);
//     console.log("data was initialized");
// };