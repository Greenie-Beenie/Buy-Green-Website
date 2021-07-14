import { 
    listFood, 
    deleteOneFood 
} from "../../use-cases/food";
import makeGetFood from "./get-food";
import makeDeleteFood from "./delete-food";

const getFood = makeGetFood({ listFood });
const deleteFood = makeDeleteFood({ deleteOneFood });

const foodController = Object.freeze({
    getFood,
    deleteFood
});

export default foodController;
export { getFood, deleteFood };