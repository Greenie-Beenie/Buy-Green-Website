import { 
    listRecipes,
    deleteOneRecipe
} from "../../use-cases/recipe";
import makeGetRecipes from "./get-recipes";
import makeDeleteRecipe from "./delete-recipe";

const getRecipes = makeGetRecipes({ listRecipes });
const deleteRecipe = makeDeleteRecipe({ deleteOneRecipe });

const recipeController = Object.freeze({
    getRecipes,
    deleteRecipe
});

export default recipeController;
export { getRecipes, deleteRecipe };