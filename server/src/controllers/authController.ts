import type { NextFunction, Request, Response } from "express";
import { verifyIdToken } from "../services/googleAuth.js";
import User from "../models/User.js";
import { Session } from "../models/Session.js";

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
