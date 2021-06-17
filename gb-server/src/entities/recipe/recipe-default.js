import { dietRestricts as dResDefault} from "../helpers/helper-objects";
import { Food } from "../food/food";

export const recipeDefault = {
    id: '',
    title: 'morsel soup',
    season: ['summer', 'winter'],
    ingredients: [new Food(), new Food()],
    dietRestricts: dResDefault,
    tags: [],
    description: 'this is a recipe',
    body: 'Step 1, Step 2, Step 3.',
    nutritionFacts: {
        calories: 0, 
        fat: 3, 
        sugar: 0, 
        carbohydrates: 0, 
        protein: 4
    },
    author: 'John Doe',
    datePosted: new Date('1-1-1999')
}