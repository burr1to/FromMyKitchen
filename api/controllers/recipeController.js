import Recipe from "../models/Recipe.js";

export const createRecipe = async (req, res, next) => {
  const newRecipe = new Recipe(req.body);

  try {
    const savedRecipe = await newRecipe.save();
    res.status(200).json(savedRecipe);
  } catch (err) {
    next(err);
  }
};

// export const updateRecipe
