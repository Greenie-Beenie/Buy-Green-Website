import { 
    listFood,
    addOneFood, 
    deleteOneFood 
} from "../../use-cases/food";
import makeGetFood from "./get-food";
import makePostFood from "./post-food";
import makeDeleteFood from "./delete-food";

const getFood = makeGetFood({ listFood });
const postFood = makePostFood({ addOneFood });
const deleteFood = makeDeleteFood({ deleteOneFood });

const foodController = Object.freeze({
    getFood,
    postFood,
    deleteFood
});

export default foodController;
export { getFood, postFood, deleteFood };