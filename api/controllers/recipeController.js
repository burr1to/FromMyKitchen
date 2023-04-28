import Recipe from "../models/Recipe.js";
import Photo from "../models/Photo.js";
import multer from "multer";
import { createError } from "../utils/error.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const yo = "C:\\Users\\singh\\Desktop\\kitchen\\api";

export const createRecipe = async (req, res, next) => {
  const newRecipe = new Recipe(req.body);

  try {
    const savedRecipe = await newRecipe.save();
    res.status(200).json(savedRecipe);
  } catch (err) {
    next(err);
  }
};

export const uploadPhoto = async (req, res, next) => {
  if (!req.file) {
    createError(400, "No file");
    return;
  }
  const photo = new Photo({
    name: req.file.originalname,
    path: req.file.path,
  });

  await photo.save();
  res.status(200).send("Uploaded");
};

// export const updateRecipe
export const getPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.setHeader("Content-Type", "image/jpeg");
  res.sendFile(path.join(yo, photo.path));
};

//C:\Users\singh\Desktop\kitchen\api\controllers
