import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import recipeRoute from "./routes/recipe.js";
import userRoute from "./routes/users.js";
import filterRoute from "./routes/filter.js";
import commentRoute from "./routes/comment.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

//middleware
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "http://localhost",
      "http://localhost:3000",
    ],
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/api/recipes", recipeRoute);
app.use("/api/users", userRoute);
app.use("/api/comments", commentRoute);
app.use("/api/filter", filterRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
