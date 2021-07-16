export default function makeDeleteOneRecipe({ recipeDb, BadRequestError, NotFoundError}) {
    return async function deleteOneRecipe({ id } = {}) {
        if (!id) {
            throw new BadRequestError("Must supply a recipe id.");
        } 
        if (await recipeDb.findRecById({ id })) {
            await recipeDb.deleteRecById({ id });
        } else {
            throw new NotFoundError("Recipe not found.");
        }
        return "Recipe successfully deleted.";
    }
}