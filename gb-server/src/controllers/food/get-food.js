export default function makeGetFood({ listFood }) {
    return async function getFood(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const food = await listFood({
                id: httpRequest.query.id
            });
            return {
                headers,
                statusCode: 200,
                body: food
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