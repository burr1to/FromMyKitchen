import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pTime: {
      type: Number,
      required: true,
    },
    cTime: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        name: String,
        quantity: Number,
      },
    ],
    method: [{ method: { type: String, required: true } }],
    photos: [
      {
        name: { type: String, required: true },
        path: { type: String, required: true },
        mimetype: { type: String, required: true },
      },
    ],
    tags: [{ tag: String }],
  },

  { timestamps: true }
);

export default mongoose.model("Recipe", RecipeSchema);
