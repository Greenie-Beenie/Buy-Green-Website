export default function makeListRecipes({ recipeDb, NotFoundError }) {
    return async function listRecipes({ id } = {}) {
        let responseBody;
        if (!id) {
            responseBody = await recipeDb.listAllRecipes();
            if (responseBody === []) {
                throw new NotFoundError("No recipes found.");
            }
        } else {
            const rec = await recipeDb.findRecById({ id });
            if (rec) {
                responseBody = rec;
            } else {
                throw new NotFoundError("Recipe not found.");
            }
        }
        return responseBody;
    }
}