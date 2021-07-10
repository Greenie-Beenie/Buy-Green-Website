import buildMakeFoodDefault from "./food-default";
export default function buildMakeFood({ Id }) {
    fooDef = buildMakeFoodDefault({ Id });
    return function makeFood({
        id=Id.makeId(), foodName=fooDef.foodName, foodType=fooDef.foodType, season=fooDef.season,
        containsGluten=fooDef.containsGluten, isSustainable=fooDef.isSustainable, 
        description=fooDef.description, nutritionFacts=fooDef.nutritionFacts
    }) {
        return new Food({ id, foodName, foodType, season, containsGluten, 
            isSustainable, description, nutritionFacts 
        });
    }
}

class Food {
    constructor({ id, foodName, foodType, season, containsGluten, 
        isSustainable, description, nutritionFacts }) {
        this.id = id;
        this.foodName = foodName;
        this.foodType = foodType;
        this.season = season;
        this.containsGluten = containsGluten;
        this.isSustainable = isSustainable;
        this.description = description;
        this.nutritionFacts = nutritionFacts;
    }

    getId = function() {
        return this.id;
    }

    getFoodName = function() {
        return this.foodName;
    }

    getFoodType = function() {
        return this.foodType;
    }

    getContainsGluten = function() {
        return this.containsGluten;
    }

    getIsSustainable = function() {
        return this.getIsSustainable;
    }

    getDescription = function() {
        return this.description;
    }

    getNutritionFacts = function() {
        return this.nutritionFacts;
    }

    getFoodJSON = function() {
        return {
            id: this.id,
            foodName: this.foodName,
            foodType: this.foodType,
            season: this.season,
            containsGluten: this.containsGluten,
            isSustainable: this.isSustainable,
            description: this.description,
            nutritionFacts: this.nutritionFacts
        }
    }
}