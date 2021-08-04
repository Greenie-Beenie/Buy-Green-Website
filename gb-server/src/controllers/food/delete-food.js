export default function makeDeleteFood({ deleteOneFood }) {
    return async function deleteFood(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const deleteMessage = await deleteOneFood({
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