export default function buildMakeRecipeDefault({ Id, makeFood, dResDefault }) {
    return function makeRecipeDefault() {
        return {
            id: Id.makeId(),
            title: 'morsel soup',
            season: ['summer', 'winter'],
            ingredients: [makeFood(), makeFood()],
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
    }
}