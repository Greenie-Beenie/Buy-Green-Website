export default function makeListFood({ foodDb, NotFoundError }) {
    return async function listFood({ id } = {}) {
        let responseBody;
        if (!id) {
            responseBody = await foodDb.listAllFood();
            if (responseBody === []) {
                throw new NotFoundError("No food found.");
            }
        } else {
            const food = await foodDb.findFoodById({ id });
            if (food) {
                responseBody = food;
            } else {
                throw new NotFoundError("food not found.");
            }
        }
        return responseBody;
    }
}