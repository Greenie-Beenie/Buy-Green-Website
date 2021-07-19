import { makeFood } from "../../entities";
export default function makeAddOneFood({ foodDb, validateFoodData, BadRequestError, ConflictError }) {
    return function addOneFood(foodData) {
        if (!await validateFoodData(foodData)) {
            throw new BadRequestError("Missing or invalid attributes.");
        }
        const food = makeFood(foodData);
        if (await foodDb.findFoodById({ id=food.getId() })) {
            throw new ConflictError(`Food with id: ${food.getId()} already exists.`);
        }
        return foodDb.addFood(food.getFoodJSON());
    }
}