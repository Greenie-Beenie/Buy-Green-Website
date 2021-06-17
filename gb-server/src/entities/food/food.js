import fDef from "./food-default";

export class Food {
    constructor(id=fDef.id, foodName=fDef.foodName, foodType=fDef.foodType, season=fDef.season, 
        containsGluten=fDef.containsGluten, isSustainable=fDef.isSustainable, description=fDef.description, 
        nutritionFacts=fDef.nutritionFacts) {
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

    getStartSeason = function() {
        return this.season[0];
    }

    getEndSeason = function() {
        return this.season[1];
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