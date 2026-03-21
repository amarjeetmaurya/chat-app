// src/config/jwt.js
import jwt from "jsonwebtoken";
// import { JWT_SECRET } from "./env.js"; 

// Sign a token
export function signToken(payload: object, options: jwt.SignOptions = {}) {
  return jwt.sign(payload, process.env.OTP_SESSION_SECRET as string, {
    expiresIn: (options.expiresIn || "15m") as any, // default expiry
  });
}

// Verify a token
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.OTP_SESSION_SECRET as string);
  } catch (err) {
    return null;
  }
}

// Decode without verifying (useful for debugging)
export function decodeToken(token: string) {
  return jwt.decode(token);
}
