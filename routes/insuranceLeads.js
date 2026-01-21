import {createInsuranceLead, deleteInsuranceLead, getInsuranceLeadById, getInsuranceLeads, updateInsuranceLead} from "../controller/insuranceLeadsController.js";
import express from "express";

const router = express.Router();

// create new lead
router.post("/", createInsuranceLead);
// to get all leads
router.get("/", getInsuranceLeads);
// to get lead by id (i don't think we will need this although)
router.get("/:id", getInsuranceLeadById);
// update lead
router.put("/:id", updateInsuranceLead);
// deleteLead
router.delete("/:id", deleteInsuranceLead);

export default router;
