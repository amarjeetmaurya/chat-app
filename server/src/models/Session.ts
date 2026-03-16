import { model, Schema, Types } from "mongoose";

const sessionSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      default: null
    },

    createdAt: {
      type: Date,
      default: Date.now,
      expires: 60 * 60 * 24 * 7
    }
  },
  {
    strict: "throw"
  }
);

export const Session = model("Session", sessionSchema);