import rDef from "./recipe-default";

export class Recipe {
    constructor(id=rDef.id, title=rDef.title, season=rDef.season, ingredients=rDef.ingredients, 
        dietRestricts=rDef.dietRestricts, tags=rDef.tags, description=rDef.description, body=rDef.body, 
        nutritionFacts=rDef.nutritionFacts, author=rDef.author) {
        this.id = id;
        this.title = title;
        this.season = season;
        this.ingredients = ingredients;
        this.dietRestricts = dietRestricts;
        this.tags = tags;
        this.description = description;
        this.body = body;
        this.nutritionFacts = nutritionFacts;
        this.author = author;
        this.datePosted = Date.now();
    }

    getId = function() {
        return this.id;
    }

    getTitle = function() {
        return this.title;
    }

    getStartSeason = function() {
        return this.season[0];
    }

    getEndSeason = function() {
        return this.season[1];
    }

    getIngredients = function() {
        return this.ingredients;
    }

    getDietRestricts = function() {
        return this.dietRestricts;
    }

    getTags = function() {
        return this.getTags;
    }

    getDescription = function() {
        return this.description;
    }

    getBody = function() {
        return this.body
    }

    getNutritionFacts = function() {
        return this.nutritionFacts;
    }

    getAuthorName = function() {
        return this.author;
    }

    getDatePosted = function() {
        return this.datePosted;
    }

    getRecipeJSON = function() {
        return {
            id: this.id,
            title: this.title,
            season: this.season,
            ingredients: this.ingredients,
            dietRestricts: this.dietRestricts,
            tags: this.tags,
            description: this.description,
            body: this.body,
            nutritionFacts: this.nutritionFacts,
            author: this.author,
            datePosted: this.datePosted
        }
    }
}