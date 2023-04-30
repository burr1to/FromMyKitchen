import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Comment", CommentSchema);
