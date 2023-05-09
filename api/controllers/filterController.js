import Recipe from "../models/Recipe.js";

export const filterbyType = () => { };

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

export const filterbyName = async (req, res, next) => {
  try {
    const { search } = req.query;
    const regex = new RegExp(search, "i");
    const recipes = await Recipe.find({ name: regex }).select("name photo _id");
    res.status(200).json(recipes);
  } catch (err) {
    next(err);
  }
};

export const filterbyLatest = async (req, res, next) => {
  try {
    const recipe = await Recipe.find({})
      .sort({ createdAt: -1 })
      .limit(4)
      .select("name photo _id");
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};


export const filterbyIng = async (req, res, next) => {
  const { ing1, ing2, ing3 } = req.query;
  try {
    const recipes = await Recipe.find();
    const filter = recipes.filter(recipe => {
      return recipe.ingredients.some(ingredient => ingredient.name === ing1 || ingredient.name === ing2 || ingredient.name === ing3)
    })

    res.status(200).json(filter)

  } catch (err) {

    console.log(err);
    next(err);
  }
};
