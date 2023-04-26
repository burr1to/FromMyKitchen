import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
  recipeID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Favorite", FavoriteSchema);
