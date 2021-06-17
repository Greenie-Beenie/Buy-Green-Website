import { dietRestricts as dResDefault, allergies as alDefault } from "../../helpers/helper-objects";
import { Recipe } from "../../recipe/recipe";
import { Farm } from "../../farm/farm";

export default farmerDefault = {
    id: '',
    firstName: 'Randy',
    lastName: 'Marsh',
    dateOfBirth: new Date('1-1-1999'),
    dietRestricts: dResDefault,
    allergies: alDefault,
    address: '123 Fake Street',
    favourites: [new Recipe(), new Recipe(), new Recipe()],
    myRecipes: [
        new Recipe(firstName='Randy', lastName='Marsh'), 
        new Recipe(firstName='Randy', lastName='Marsh'),
        new Recipe(firstName='Randy', lastName='Marsh')
    ],
    farms: [
        new Farm(owners=['Randy Marsh']), 
        new Farm(owners=['Randy Marsh']), 
        new Farm(owners=['Randy Marsh'])
    ]
}