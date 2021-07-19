export default function makePostRecipe({ addOneRecipe }) {
    return async function postRecipe(httpRequest) {
        try {
            const { title, ...restOfRecipeData } = httpRequest.body;
            const recipePosted = await addOneRecipe({
                title,
                ...restOfRecipeData
            });
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: recipePosted
            };
        } catch (e) {
            const status = e.errorCode === undefined ? 500 : e.errorCode;
            const message = status == 500 ? 'Internal server error.' : e.message;
            return {
                headers,
                statusCode: status,
                body: message
            };
        }
    }
}