import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      sparse: true, // allows null for guests
      lowercase: true,
    },

    password: {
      type: String,
      select: false, // hide by default
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["guest", "user", "admin"],
      default: "guest",
    },

    authProvider: {
      type: String,
      enum: ["local", "google", "guest"],
      required: true,
    },

    isGuest: {
      type: Boolean,
      default: false,
    },

    guestExpiresAt: {
      type: Date,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
