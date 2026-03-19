// src/services/otpSession.service.js
import { signToken, verifyToken } from "../config/jwt.js";

export function createOtpSessionToken(email: string, purpose: string) {
  return signToken(
    {
      email,
      type: "OTP_SESSION",
      purpose, // e.g. "SIGNUP" or "LOGIN"
    },
    { expiresIn: "5m" } // short expiry
  );
}

export function verifyOtpSessionToken(token : string, expectedPurpose: string) {
  console.log(token)
  const payload = verifyToken(token);
  if (!payload) throw new Error("Invalid or expired OTP session");

  if (payload.type !== "OTP_SESSION") {
    throw new Error("Invalid token type");
  }

  if (payload.purpose !== expectedPurpose) {
    throw new Error("Invalid OTP session purpose");
  }

  return payload;
}
