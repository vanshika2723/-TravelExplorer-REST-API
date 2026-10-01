const express = require("express");

const {
    createDestination,
    getDestinations,
    getDestinationById,
    updateDestination,
    deleteDestination
} = require("../controllers/destinationController");

const router = express.Router();


/* =========================
   CREATE + GET ALL
========================= */

// POST /api/destinations
router.post("/", createDestination);

// GET /api/destinations
router.get("/", getDestinations);


/* =========================
   GET + UPDATE + DELETE
========================= */

// GET /api/destinations/:id
router.get("/:id", getDestinationById);

// PUT /api/destinations/:id
router.put("/:id", updateDestination);

// DELETE /api/destinations/:id
router.delete("/:id", deleteDestination);


module.exports = router;