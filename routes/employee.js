import {handleEmployeeLogin,verifyEmployeeToken,handleEmployeeLogout} from "../controller/employeeController.js";
import express from "express";
import { authenticateUser } from "../middleware/authentication.js";

const router = express.Router();

router.post("/login", handleEmployeeLogin );
router.get("/verify-token",authenticateUser, verifyEmployeeToken );
router.get("/logout",authenticateUser, handleEmployeeLogout );

export default router;
