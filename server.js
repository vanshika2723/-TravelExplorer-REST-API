const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const destinationRoutes =
    require("./routes/destinationRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use(
    "/api/destinations",
    destinationRoutes
);


// Test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "TravelExplorer API is running 🚀"
    });
});


// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {

        console.log(
            "MongoDB connected successfully"
        );

        app.listen(
            process.env.PORT || 5000,
            () => {

                console.log(
                    `Server running on http://localhost:${process.env.PORT || 5000}`
                );

            }
        );

    })
    .catch((error) => {

        console.error(
            "MongoDB connection failed:",
            error.message
        );

    });