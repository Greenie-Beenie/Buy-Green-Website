export default function makeListFood({ listAllFood, findFoodById, NotFoundError }) {
    return async function listFood({ id } = {}) {
        let responseBody;
        if (!id) {
            responseBody = await listAllFood();
            if (responseBody === []) {
                throw new NotFoundError("No food found.");
            }
        } else {
            const food = await findFoodById({ id });
            if (food) {
                responseBody = food;
            } else {
                throw new NotFoundError("food not found.");
            }
        }
        return responseBody;
    }
}