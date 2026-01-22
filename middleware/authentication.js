import { verifyToken } from "../services/authentication.js";

export const authenticateUser = (req, res, next) => {
  try {
    // 1️⃣ Read token from cookies
    const token = req.cookies?.token;

    console.log("Authenticating token:", token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required authenticateUser",
        navigate: "/login",
      });
    }

    // 2️⃣ Verify token
    const employeePayload = verifyToken(token);

    if (!employeePayload) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token authenticateUser",
        navigate: "/login",
      });
    }

    // 3️⃣ Attach user to request
    req.employee = employeePayload;

    // 4️⃣ Continue
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Authentication failed authenticateUser",
      navigate: "/login",
    });
  }
};
