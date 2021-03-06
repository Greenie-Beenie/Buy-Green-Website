export default function buildMakeFoodDefault({ Id }) {
    return function makeFoodDefault() {
        return {
            id: Id.makeId(),
            foodName: 'morsel', 
            foodType: 'food', 
            season: ['summer', 'winter'], 
            containsGluten: false, 
            isSustainable: true, 
            description: 'this is food', 
            nutritionFacts: {
                calories: 0, 
                fat: 1.5, 
                sugar: 0, 
                carbohydrates: 0, 
                protein: 2
            }
        }
    }
}