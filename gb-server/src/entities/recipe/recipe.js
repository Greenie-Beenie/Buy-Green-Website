import buildMakeRecipeDefault from "./recipe-default";
export default function buildMakeRecipe({ Id, makeFood, dResDefault }) {
    const recDef = buildMakeRecipeDefault({Id, makeFood, dResDefault});
    return function makeRecipe({
        id=Id.makeId(), title=recDef.title, season=recDef.season, ingredients=recDef.ingredients, 
        dietRestricts=recDef.dietRestricts, tags=recDef.tags, description=recDef.description, body=recDef.body, 
        nutritionFacts=recDef.nutritionFacts, author=recDef.author, datePosted=Date.now()
    }) {
        return new Recipe({ id, title, season, ingredients, dietRestricts, 
            tags, description, body, nutritionFacts, author, datePosted 
        });
    }
}

class Recipe {
    constructor({ id, title, season, ingredients, dietRestricts, 
        tags, description, body, nutritionFacts, author, datePosted}) {
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
        this.datePosted = datePosted;
    }

    getId = function() {
        return this.id;
    }

    getTitle = function() {
        return this.title;
    }

    getSeason = function() {
        return this.season[0];
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

    getRecipeJSON = function(rec=this) {
        return {
            id: rec.id,
            title: rec.title,
            season: rec.season,
            ingredients: rec.ingredients,
            dietRestricts: rec.dietRestricts,
            tags: rec.tags,
            description: rec.description,
            body: rec.body,
            nutritionFacts: rec.nutritionFacts,
            author: rec.author,
            datePosted: rec.datePosted
        }
    }
}