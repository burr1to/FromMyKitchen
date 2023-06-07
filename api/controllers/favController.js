import Favorite from "../models/Favorite.js";

export const makeFavorite = async (req, res, next) => {
  try {
    let favorite = new Favorite(req.body);
    await favorite.save();
    res.status(200).send(favorite);
  } catch (err) {
    next(err);
  }
};

export const getFavorite = async (req, res, next) => {
  try {
    const recipe = await Favorite.findOne({
      recipeID: req.params.id1,
      userID: req.params.id2,
    });
    res.status(200).send(recipe);
  } catch (error) {
    next(error);
  }
};

export const deleteFavorite = async (req, res, next) => {
  try {
    const recipe = await Favorite.findOneAndDelete({
      recipeID: req.params.id1,
      userID: req.params.id2,
    });
    if (!recipe) {
      return res.status(404).send("ID not found");
    }

    res.status(200).json({ message: "Favorite removed successfully" });
  } catch (error) {
    next(error);
  }
};

export const getUserFavorites = async (req, res, next) => {
  try {
    const favorites = await Favorite.find({ userID: req.params.id });
    res.status(200).send(favorites);
  } catch (error) {
    next(error);
  }
};
