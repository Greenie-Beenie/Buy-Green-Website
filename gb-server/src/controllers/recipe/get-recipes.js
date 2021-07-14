export default function makeGetRecipes({ listRecipes }) {
    return async function getRecipes(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const recipe = await listRecipes({
                id: httpRequest.query.id
            });
            return {
                headers,
                statusCode: 200,
                body: recipe
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