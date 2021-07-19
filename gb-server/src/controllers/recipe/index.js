import { 
    listRecipes,
    addOneRecipe,
    deleteOneRecipe
} from "../../use-cases/recipe";
import makeGetRecipes from "./get-recipes";
import makePostRecipe from "./post-recipe";
import makeDeleteRecipe from "./delete-recipe";

const getRecipes = makeGetRecipes({ listRecipes });
const postRecipe = makePostRecipe({ addOneRecipe });
const deleteRecipe = makeDeleteRecipe({ deleteOneRecipe });

const recipeController = Object.freeze({
    getRecipes,
    postRecipe,
    deleteRecipe
});

export default recipeController;
export { getRecipes, postRecipe, deleteRecipe };