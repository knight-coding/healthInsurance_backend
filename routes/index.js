import insuranceRouter from "./insuranceLeads.js";
import employeeRouter from "./employee.js";
import express from "express";

const router = express.Router();

router.use("/api/insurance",insuranceRouter)
router.use("/api/employee",employeeRouter)

export default router;