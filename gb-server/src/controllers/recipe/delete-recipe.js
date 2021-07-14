export default function makeDeleteRecipe({ deleteOneRecipe }) {
    return async function deleteRecipe(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const deleteMessage = await deleteOneRecipe({
                id: httpRequest.query.id
            });
            return {
                headers,
                statusCode: 200,
                body: deleteMessage
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