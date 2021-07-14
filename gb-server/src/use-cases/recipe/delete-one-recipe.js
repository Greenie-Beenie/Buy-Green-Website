export default function makeDeleteOneRecipe({ findRecById, deleteRecById, BadRequestError, NotFoundError}) {
    return async function deleteOneRecipe({ id } = {}) {
        if (!id) {
            throw new BadRequestError("Must supply a recipe id.");
        } 
        if (await findRecById({ id })) {
            await deleteRecById({ id });
        } else {
            throw new NotFoundError("Recipe not found.");
        }
        return "Recipe successfully deleted.";
    }
}