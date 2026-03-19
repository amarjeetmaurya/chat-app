// src/services/signup.service.js
import PendingSignup from "../models/PendingSignup.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import mongoose, { Types } from "mongoose";
import { Session } from "../models/Session.js";

// ================ Sign Up ===================
export async function completeSignupService(email: string) {
  const signup = await PendingSignup.findOne({ email });
  console.log(signup);
  if (!signup) {
    throw new Error("Signup session expired");
  }

  try {
    const hashedPassword = await bcrypt.hash(signup.password, 10);

    const user = User.create({
      email,
      password: hashedPassword,
      authProvider: "local",
    });

    const session = await Session.create({
      userId: (await user)._id,
    });

    return session;
  } catch (error) {
    throw error;
  }
}
