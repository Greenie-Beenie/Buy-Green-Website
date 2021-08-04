import { BadRequestError, NotFoundError, ConflictError } from "../../entities/helpers/custom-errors";
import { recipeDb } from "../../data-access";
import makeValidateRecipeData from "./validate-recipe-data";
import makeListRecipes from "./list-recipes";
import makeAddOneRecipe from "./add-one-recipe";
import makeDeleteOneRecipe from "./delete-one-recipe";

const validateRecipeData = makeValidateRecipeData();

const listRecipes = makeListRecipes({ recipeDb, NotFoundError });
const addOneRecipe = makeAddOneRecipe({ recipeDb, validateRecipeData, BadRequestError, ConflictError});
const deleteOneRecipe = makeDeleteOneRecipe({ recipeDb, BadRequestError, NotFoundError});

const recipeService = Object.freeze({
    listRecipes,
    addOneRecipe,
    deleteOneRecipe
});

export default recipeService;
export { listRecipes, addOneRecipe, deleteOneRecipe };