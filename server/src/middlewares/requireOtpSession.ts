import { Request, Response, NextFunction } from "express";
import { verifyOtpSessionToken } from "../services/otpSession.js";

export default function requireOtpSession(expectedPurpose: string) {
  return (req: Request, res : Response, next: NextFunction) => {

    const auth = req.headers.authorization;

    if (!auth) return res.status(401).json({ message: "Missing token" });

    const token = auth.split(" ")[1];
    try {
      const payload = verifyOtpSessionToken(token, expectedPurpose);
      req.otpSession = payload; // attach payload for controller
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired OTP session" });
    }
  };
}