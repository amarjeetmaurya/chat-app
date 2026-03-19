// src/services/otp.service.js
import Otp from "../models/Otp.js";
import { createOtpSessionToken } from "./otpSession.js";
import HttpError from "../utils/HttpError.js";
import bcrypt from "bcrypt"
 import generateOtp from "../utils/generateOtp.js";
 
// =============== (signup flow) ================
export async function requestOtp({ username, email, password }:{ username: string, email: string, password: string} ) {

  const otp = generateOtp();
  const otpHash = await bcrypt.hash(otp, 10);
  console.log(otpHash);

  // Save OTP record
  await Otp.create({
    email,
    otpHash,
    purpose: "SIGNUP",
    expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 min expiry
    attempts: 0,
    maxAttempts: 3,
    isUsed: false,
  });

  // TODO: send OTP via email/SMS
  console.log(`OTP for ${email}: ${otp}`);

  return { message: "OTP sent", email };
}

// =============== Verify OTP ================
export async function verifyOtp({ email, otp }: { email: string; otp: string }) {
  // ✅ Proper query: find latest OTP for this email & purpose
  const record = await Otp.findOne({ email }).sort({ createdAt: -1 });

  if (!record) throw new HttpError("OTP not found", 404);
  if (record.isUsed || Date.now() > record.expiresAt.getTime()) {
    throw new HttpError("OTP invalid or expired", 400);
  }

  if (record.attempts >= record.maxAttempts) {
    record.isUsed = true;
    await record.save();
    throw new HttpError("OTP blocked", 400);
  }
  const valid = await bcrypt.compare(otp, record.otpHash);

  if (!valid) {
    record.attempts += 1;
    await record.save();
    throw new HttpError("Invalid OTP", 400);
  }

  // ✅ Mark OTP as used
  record.isUsed = true;
  await record.save();

  const otpSessionToken = createOtpSessionToken(email, record.purpose);

  return {
    message: "OTP verified",
    otpSessionToken,
  };
}
