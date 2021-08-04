export default function makePostFood({ addOneFood }) {
    return async function postFood(httpRequest) {
        try {
            const { foodName, ...restOfFoodData } = httpRequest.body;
            const foodPosted = await addOneFood({
                foodName,
                ...restOfFoodData
            });
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: foodPosted
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