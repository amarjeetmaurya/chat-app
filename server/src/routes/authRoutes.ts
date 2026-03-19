import { Router } from "express";
import { loginWithGoogle } from "../controllers/authController.js";

const router = Router();

// router.get("/otp/request", (req, res) => {
//     res.status(200).json({success: "its working!"});
// })

// ============== login with google ==========
router.post("/google", loginWithGoogle);


export default router;