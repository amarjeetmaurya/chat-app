// src/models/PendingSignup.js
import mongoose from "mongoose";

const pendingSignupSchema = new mongoose.Schema(
  {  
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PendingSignup = mongoose.model("PendingSignup", pendingSignupSchema);
export default PendingSignup;
