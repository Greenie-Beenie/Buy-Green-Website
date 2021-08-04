import { makeRecipe } from "../../entities";
export default function makeAddOneRecipe({ recipeDb, validateRecipeData, BadRequestError, ConflictError }) {
    return function addOneRecipe(recipeData) {
        if (!await validateRecipeData(recipeData)) {
            throw new BadRequestError("Missing or invalid attributes.");
        }
        const recipe = makeRecipe(recipeData);
        if (await recipeDb.findRecById({ id=recipe.getId() })) {
            throw new ConflictError(`Recipe with id: ${recipe.getId()} already exists.`);
        }
        return recipeDb.addRec(recipe.getRecipeJSON());
    }
}