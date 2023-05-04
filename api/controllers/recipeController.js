import Recipe from "../models/Recipe.js";
import { createError } from "../utils/error.js";

export const createRecipe = async (req, res, next) => {
  try {
    let recipe = new Recipe({
      name: req.body.name,
      pTime: req.body.ptime,
      cTime: req.body.ctime,
      size: req.body.size,
      description: req.body.description,
      ingredients: JSON.parse(req.body.ingredients),
      methods: JSON.parse(req.body.methods),
      tags: JSON.parse(req.body.tags),
      userID: req.body.id,
      photo: req.body.photo,
    });

    await recipe.save();
    res.status(200).send(recipe);
  } catch (err) {
    console.log(err);
    res.status(400).send("Recipe not created");
  }
};
export const getSingleRecipe = async (req, res, next) => {
  try {
    const singleRecipe = await Recipe.findById(req.params.id);
    res.status(200).json(singleRecipe);
  } catch (err) {
    res.status(400).send(err);
  }
};
export const getAllRecipes = async (req, res, next) => {
  const { limit, ...others } = req.query;
  try {
    const recipes = await Recipe.find({ ...others }).limit(parseInt(limit));
    res.status(200).json(recipes);
  } catch (err) {
    res.send(400).send(err);
  }
};
export const updateRecipe = async (req, res, next) => {};
export const deleteRecipe = async (req, res, next) => {};

export const uploadPhoto = async (req, res, next) => {
  try {
    res.status(200).send("Uploaded");
  } catch (err) {
    console.log(err);
  }
};

// const yo = "C:\\Users\\singh\\Desktop\\kitchen\\api";

// export const getPhoto = async (req, res) => {
//   const photo = await Photo.findById(req.params.id);
//   res.setHeader("Content-Type", "image/jpeg");
//   res.sendFile(path.join(yo, photo.path));
// };

export const loveRecipe = async (req, res, next) => {};
