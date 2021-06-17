import { dietRestricts as dResDefault, allergies as alDefault } from "../../helpers/helper-objects";
import { Recipe } from "../../recipe/recipe";

export default customerDefault = {
    id: '',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: new Date('1-1-1999'),
    dietRestricts: dResDefault,
    allergies: alDefault,
    address: '123 Fake Street',
    favourites: [new Recipe(), new Recipe(), new Recipe()],
    myRecipes: [
        new Recipe(firstName='John', lastName='Doe'),
        new Recipe(firstName='John', lastName='Doe'), 
        new Recipe(firstName='John', lastName='Doe')
    ]
}