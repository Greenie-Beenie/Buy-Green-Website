export default function makeListRecipes({ listAllRecipes, findRecById, NotFoundError }) {
    return async function listRecipes({ id } = {}) {
        let responseBody;
        if (!id) {
            responseBody = await listAllRecipes();
            if (responseBody === []) {
                throw new NotFoundError("No recipes found.");
            }
        } else {
            const rec = await findRecById({ id });
            if (rec) {
                responseBody = rec;
            } else {
                throw new NotFoundError("Recipe not found.");
            }
        }
        return responseBody;
    }
}