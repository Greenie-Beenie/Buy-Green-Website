import Id from "./id";
import helperObjects from "./helpers/helper-objects";
import buildMakeFood from "./food/food";
import buildMakeRecipe from "./recipe/recipe";
import buildMakeFarm from "./farm/farm";
import buildMakeCustomerProfile from "./profiles/customer-profile/customer-profile";
import buildMakeFarmerProfile from "./profiles/farmer-profile/farmer-profile";

const dResDefault = helperObjects.dietRestricts;
const alDefault = helperObjects.allergies;

const makeFood = buildMakeFood({ Id });
const makeRecipe = buildMakeRecipe({ Id, makeFood, dResDefault});
const makeFarm = buildMakeFarm({ Id, makeFood });

const makeCustomerProfile = buildMakeCustomerProfile({ 
    Id, dResDefault, alDefault, makeRecipe
});
const makeFarmerProfile = buildMakeFarmerProfile({
    Id, dResDefault, alDefault, makeRecipe, makeFarm
});


export default entities = Object.freeze({
    makeFood,
    makeRecipe,
    makeFarm,
    makeCustomerProfile,
    makeFarmerProfile
})
export { makeFood, makeRecipe, makeFarm, makeCustomerProfile, makeFarmerProfile };
