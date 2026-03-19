import type { NextFunction, Request, Response } from "express";
import { Session } from "../models/Session.js";

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log("cookies:", req.cookies);
    console.log("signedCookies:", req.signedCookies);
    const { sid } = req.signedCookies;

    if (!sid) {
      const session = await Session.create({});
      res.cookie("sid", session.id, {
        httpOnly: true,
        signed: true,
        sameSite: "lax",
        maxAge: 60 * 1000 * 60 * 24 * 1,
      });
    }
    console.log("Session:", sid);
    next();
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
};
