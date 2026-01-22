import Employee from "../models/employee.js";
import { createTokenForUser,verifyToken } from "../services/authentication.js";

export const handleEmployeeLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const errors = [];

    /* ---------- Basic validations ---------- */
    if (!email) errors.push("Email is required");
    if (!password) errors.push("Password is required");

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    /* ---------- Find employee ---------- */
    const employee = await Employee.findOne({ email });

    if (!employee) {
      return res.status(401).json({
        errors: ["Invalid email or password"],
      });
    }

    /* ---------- Password check (plain) ---------- */
    if (employee.password !== password) {
      return res.status(401).json({
        errors: ["Invalid email or password"],
      });
    }

    const token=createTokenForUser(employee);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false, // set true in prod with HTTPS
    });

    /* ---------- Success ---------- */
    return res.status(200).json({
      message: "Login successful",
      employee: {
        id: employee._id,
        email: employee.email,
      },
    });

  } catch (error) {
    console.error("Employee login error:", error);

    return res.status(500).json({
      errors: ["Internal server error. Please try again later."],
    });
  }
};

export const verifyEmployeeToken = async (req, res) => {
    try {
      // 1️⃣ Read token from cookies
      const token = req.cookies?.token;

      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Authentication required verifyUserToken",
          navigate: "/login",
        });
      }

      // 2️⃣ Verify token
      const employeePayload = verifyToken(token);

      if (!employeePayload) {
        return res.status(401).json({
          success: false,
          message: "Invalid or expired token verifyUserToken",
          navigate: "/login",
        });
      }

      // 3️⃣ Attach user to request
      req.employee = employeePayload;

      // 4️⃣ Continue
      return res.status(200).json({
        success: true,
        message: "Token is valid",
        employee: employeePayload,
      });

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Authentication failed verifyUserToken",
        navigate: "/login",
      });
    }
  }

  export const handleEmployeeLogout = async (req, res) => {
    req.employee = undefined;
    res.clearCookie('token');
    res.status(200).json({ success: true, message: "Logout successful", redirectTo: "/login" });
  }