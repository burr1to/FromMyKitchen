import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    favorites: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Recipe",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
