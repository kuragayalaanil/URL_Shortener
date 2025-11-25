import express from "express";

import { createShortUrl } from "../controllers/shortUrlController.js";

const router = express.Router();

// Create URL Route
router.post("/", createShortUrl);

// router.get("/:id", redirectFromShortUrl);

export default router;
