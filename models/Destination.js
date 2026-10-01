const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        country: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            enum: [
                "Beach",
                "Mountain",
                "Culture",
                "City",
                "Adventure"
            ]
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        price: {
            type: Number,
            required: true,
            min: 0
        },

        duration: {
            type: String,
            required: true
        },

        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },

        image: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Destination = mongoose.model(
    "Destination",
    destinationSchema
);

module.exports = Destination;