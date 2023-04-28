import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Photo", PhotoSchema);
