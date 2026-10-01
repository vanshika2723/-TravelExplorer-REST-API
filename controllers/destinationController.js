const Destination = require("../models/Destination");

/* =========================
   CREATE DESTINATION
========================= */

const createDestination = async (req, res) => {
    try {
        const destination = await Destination.create(req.body);

        res.status(201).json({
            success: true,
            message: "Destination created successfully",
            data: destination
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create destination",
            error: error.message
        });
    }
};


/* =========================
   GET ALL DESTINATIONS
========================= */

const getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: destinations.length,
            data: destinations
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch destinations",
            error: error.message
        });
    }
};


/* =========================
   GET SINGLE DESTINATION
========================= */

const getDestinationById = async (req, res) => {
    try {
        const destination =
            await Destination.findById(req.params.id);

        if (!destination) {
            return res.status(404).json({
                success: false,
                message: "Destination not found"
            });
        }

        res.status(200).json({
            success: true,
            data: destination
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid destination ID",
            error: error.message
        });
    }
};


/* =========================
   UPDATE DESTINATION
========================= */

const updateDestination = async (req, res) => {
    try {
        const destination =
            await Destination.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

        if (!destination) {
            return res.status(404).json({
                success: false,
                message: "Destination not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Destination updated successfully",
            data: destination
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update destination",
            error: error.message
        });
    }
};


/* =========================
   DELETE DESTINATION
========================= */

const deleteDestination = async (req, res) => {
    try {
        const destination =
            await Destination.findByIdAndDelete(
                req.params.id
            );

        if (!destination) {
            return res.status(404).json({
                success: false,
                message: "Destination not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Destination deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to delete destination",
            error: error.message
        });
    }
};


module.exports = {
    createDestination,
    getDestinations,
    getDestinationById,
    updateDestination,
    deleteDestination
};