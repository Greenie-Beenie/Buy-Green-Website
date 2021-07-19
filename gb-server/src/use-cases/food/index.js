import { BadRequestError, NotFoundError, ConflictError } from "../../entities/helpers/custom-errors";
import { foodDb } from "../../data-access";
import makeValidateFoodData from "./validate-food-data";
import makeListFood from "./list-food";
import makeAddOneFood from "./add-one-food";
import makeDeleteOneFood from "./delete-one-food";

const validateFoodData = makeValidateFoodData();

const listFood = makeListFood({ foodDb, NotFoundError });
const addOneFood = makeAddOneFood({ foodDb, validateFoodData, BadRequestError, ConflictError });
const deleteOneFood = makeDeleteOneFood({ foodDb, BadRequestError, NotFoundError});

const foodService = Object.freeze({
    listFood,
    addOneFood,
    deleteOneFood
});

export default foodService;
export { listFood, addOneFood, deleteOneFood };