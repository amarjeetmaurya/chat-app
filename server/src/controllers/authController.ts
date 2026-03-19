import type { NextFunction, Request, Response } from "express";
import { verifyIdToken } from "../services/googleAuth.js";
import User from "../models/User.js";
import { Session } from "../models/Session.js";
import PendingSignup from "../models/PendingSignup.js";
import { requestOtp, verifyOtp } from "../services/otp.js";
import { completeSignupService } from "../services/signup.js";

// =================== Request otp =====================
export async function requestOtpController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    console.log(req.body);

    const { username, email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({ message: "Email required" });
    }
    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }
    const pendingUser = await PendingSignup.findOne({ email });
    if (pendingUser) {
      pendingUser.username = username;
      pendingUser.password = password;
      await pendingUser.save();
    } else {
      await PendingSignup.create({ username, email, password });
    }

    const result = await requestOtp({ username, email, password });
    res.json(result);
  } catch (err) {
    next(err);
  }
}

// ============== verify OTP ===============
export async function verifyOtpController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(req.body);
  try {
    const { email, otp } = req.body;
    const result = await verifyOtp({ email, otp });
    res.json(result);
  } catch (err) {
    next(err);
  }
}

//============= complete signup ===============
export async function completeSignupController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const payload = req.otpSession;
    console.log({ payload });
    const session = await completeSignupService(payload.email);
    console.log({session})

    res.cookie("sid", session.id, {
      httpOnly: true,
      signed: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.json({ message: "Signup complete" });
  } catch (err) {
    next(err);
  }
}

// ============== login with google ==========
export const loginWithGoogle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  type GoogleAuthBody = {
    idToken: string;
  };

  console.log("yoo!!");

  const { idToken } = req.body as GoogleAuthBody;

  if (!idToken) {
    return res.status(400).json({
      success: false,
      message: "idToken is required",
    });
  }

  const userData = await verifyIdToken(idToken);
  const { name, email, picture, sub, email_verified } = userData;

  if (!sub || !email) {
    throw new Error("Invalid Google payload");
  }
  if (!email_verified) {
    new Error("Email not verified by Google");
  }

  const user = await User.findOne({ email }).select("-__v");

  if (user) {
    const allSessions = await Session.find({ userId: user.id });
    if (allSessions.length >= 2) {
      await allSessions[0].deleteOne();
    }

    const isGoogleAvatar = user.avatar?.includes("googleusercontent.com");
    if (picture && !isGoogleAvatar) {
      user.avatar = picture;
      await user.save();
    }

    const session = await Session.create({ userId: user._id });

    res.cookie("sid", session.id, {
      httpOnly: true,
      signed: true,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 1000 * 60 * 24 * 7,
    });

    return res.json({ message: "logged in" });
  }
  

  console.log("new User login");

  try {
    const user = User.create({
      googleId: sub,
      email,
      username: name,
      avatar: picture,
      authProvider: "google",
    });

    console.log(user);

    const session = await Session.create({
      userId: (await user)._id,
    });

    res.cookie("sid", session.id, {
      httpOnly: true,
      signed: true,
      maxAge: 60 * 1000 * 60 * 24 * 7,
    });

    res.status(201).json({ message: "account created and logged in" });
  } catch (err) {
    next(err);
  }
};
