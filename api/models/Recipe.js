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
    },
    ingredients: [
      {
        name: String,
        quantity: Number,
      },
    ],
    method: [{ method: String }],
    photos: {
      type: [String],
    },
    tags: [{ tag: String }],
  },

  { timestamps: true }
);

export default mongoose.model("Recipe", RecipeSchema);
