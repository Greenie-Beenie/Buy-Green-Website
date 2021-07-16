import { BadRequestError, NotFoundError, ConflictError } from "../../entities/helpers/custom-errors";
import { recipeDb } from "../../data-access";
import makeListRecipes from "./list-recipes";
import makeDeleteOneRecipe from "./delete-one-recipe";

const listRecipes = makeListRecipes({ recipeDb, NotFoundError });
const deleteOneRecipe = makeDeleteOneRecipe({ recipeDb, BadRequestError, NotFoundError});

const recipeService = Object.freeze({
    listRecipes,
    deleteOneRecipe
});

export default recipeService;
export { listRecipes, deleteOneRecipe };