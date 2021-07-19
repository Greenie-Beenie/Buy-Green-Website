export default function makeValidateFoodData() {
    return async function validateFoodData(foodData) {
        const properties = [
            "foodName", "foodType", "season", "containsGluten", 
            "isSustainable", "description", "nutritionFacts"
        ];
        for (let i = 0; i < properties.length; i++) {
            if (!(properties[i] in foodData)) {
                return false;
            }
        }
        return true;
    }
}