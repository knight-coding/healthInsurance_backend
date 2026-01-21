import insuranceRouter from "./insuranceLeads.js";
import express from "express";

const router = express.Router();

router.use("/api/insurance",insuranceRouter)

export default router;