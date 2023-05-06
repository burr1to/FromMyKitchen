import Recipe from "../models/Recipe.js";

export const getRecipebyType = () => {};

export const randomRecipe = async (req, res, next) => {
  try {
    const pipeline = [
      { $sample: { size: 4 } },
      {
        $project: {
          _id: 1,
          name: 1,
          photo: 1,
        },
      },
    ];
    const result = await Recipe.aggregate(pipeline);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
