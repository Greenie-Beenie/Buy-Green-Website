class Food {
    constructor(id='', foodName='morsel', foodType='food', season=['summer', 'winter'], 
    containsGluten=false, isSustainable=true, description='this is food', 
    nutritionFacts={calories: 0, fat: 1.5, sugar: 0, carbohydrates: 0, protein: 2}) {
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

    getDescription = function() {
        return this.description;
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