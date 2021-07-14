import { BadRequestError, NotFoundError, ConflictError } from "../../entities/helpers/custom-errors";
import { listAllRecipes, findRecById, deleteRecById } from "../../data-access/public/recipes-db";
import makeListRecipes from "./list-recipes";
import makeDeleteOneRecipe from "./delete-recipe";

const listRecipes = makeListRecipes({ listAllRecipes, findRecById, NotFoundError });
const deleteOneRecipe = makeDeleteOneRecipe({ findRecById, deleteRecById, BadRequestError, NotFoundError});

const recipeService = Object.freeze({
    listRecipes,
    deleteOneRecipe
});

export default recipeService;
export { listRecipes, deleteOneRecipe };