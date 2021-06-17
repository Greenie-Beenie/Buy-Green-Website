import { dietRestricts as dResDefault, allergies as alDefault } from "../../helpers/helper-objects";
import { recipeDefault as recDef } from "../../recipe/recipe-default";

export const customerDefault = {
    id: '',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: new Date('1-1-1999'),
    dietRestricts: dResDefault,
    allergies: alDefault,
    address: '123 Fake Street',
    favourites: [recDef, recDef, recDef],
    myRecipes: [recDef, recDef, recDef]
}