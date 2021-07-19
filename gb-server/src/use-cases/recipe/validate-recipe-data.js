export default function makeValidateRecipeData() {
    return async function validateRecipeData(recipeData) {
        const properties = [
            "title", "season", "ingredients", "dietRestricts", "tags", 
            "description", "body", "nutritionFacts", "author"
        ];
        for (let i = 0; i < properties.length; i++) {
            if (!(properties[i] in recipeData)) {
                return false;
            }
        }
        return true;
    }
}