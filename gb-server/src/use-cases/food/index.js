import { BadRequestError, NotFoundError, ConflictError } from "../../entities/helpers/custom-errors";
import { listAllFood, findFoodById, deleteFoodById } from "../../data-access/public/food-db";
import makeListFood from "./list-food";
import makeDeleteOneFood from "./delete-one-food";

const listFood = makeListFood({ listAllFood, findFoodById, NotFoundError });
const deleteOneFood = makeDeleteOneFood({ findFoodById, deleteFoodById, BadRequestError, NotFoundError});

const foodService = Object.freeze({
    listFood,
    deleteOneFood
});

export default foodService;
export { listFood, deleteOneFood };