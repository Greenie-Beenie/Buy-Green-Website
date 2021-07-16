import { BadRequestError, NotFoundError, ConflictError } from "../../entities/helpers/custom-errors";
import { foodDb } from "../../data-access";
import makeListFood from "./list-food";
import makeDeleteOneFood from "./delete-one-food";

const listFood = makeListFood({ foodDb, NotFoundError });
const deleteOneFood = makeDeleteOneFood({ foodDb, BadRequestError, NotFoundError});

const foodService = Object.freeze({
    listFood,
    deleteOneFood
});

export default foodService;
export { listFood, deleteOneFood };