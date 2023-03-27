import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    prepHours: {
      type: Number,
      required: true,
    },
    prepMins: {
      type: Number,
      required: true,
    },
    cookHours: {
      type: Number,
      required: true,
    },
    cookMins: {
      type: Number,
      required: true,
    },

    ingredients: [
      {
        name: String,
        quantity: Number,
      },
    ],

    method: {
      type: [String],
      required: true,
    },
    photos: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", RecipeSchema);
