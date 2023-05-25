import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
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
    foodtype: {
      type: String,
      required: true,
    },

    culture: {
      type: String,
      requited: true,
    },

    description: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        name: String,
        quantity: Number,
        unit: String,
      },
    ],
    photo: {
      type: String,
    },

    methods: [{ method: String }],

    tags: [{ tag: String }],
  },

  { timestamps: true }
);

export default mongoose.model("Recipe", RecipeSchema);
