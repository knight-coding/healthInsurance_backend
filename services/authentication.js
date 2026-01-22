import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
// Removed unused 'express' import

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

// 1. Safety Check: Ensure the key exists before starting
if (!SECRET_KEY) {
  throw new Error('FATAL ERROR: SECRET_KEY is not defined in .env');
}

export const createTokenForUser = (employee) => {
  const payload = {
    _id: employee._id,
    email: employee.email,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });

  return token;
};


export const verifyToken = (token) => {
    // 3. Fix: Added error handling to prevent server crashes
    try {
        const payload = jwt.verify(token, SECRET_KEY);
        return payload;
    } catch (error) {
        // Token is expired or invalid
        return null; 
    }
};