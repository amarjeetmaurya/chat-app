import { Router } from "express";
import { completeSignupController, loginWithGoogle, requestOtpController, verifyOtpController } from "../controllers/authController.js";
import requireOtpSession from "../middlewares/requireOtpSession.js";

const router = Router();

// router.get("/otp/request", (req, res) => {
//     res.status(200).json({success: "its working!"});
// })

// ============== request OTP ===============
router.post("/otp/request", requestOtpController);


// ============== verify OTP ===============
router.post("/otp/verify", verifyOtpController);


// // ============== complete signup ============
router.post(
  "/signup/complete",
  requireOtpSession("SIGNUP"),
  completeSignupController
);


// ============== login with google ==========
router.post("/google", loginWithGoogle);


export default router;