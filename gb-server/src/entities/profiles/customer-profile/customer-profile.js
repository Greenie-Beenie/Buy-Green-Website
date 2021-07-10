import buildMakeCustomerDefault from "./customer-default";
export default function buildMakeCustomerProfile({ Id, dResDefault, alDefault, makeRecipe }) {
    const cusDef = buildMakeCustomerDefault({ Id, dResDefault, alDefault, makeRecipe});
    return function makeCustomerProfile({
        id=Id.makeId(), firstName=cusDef.firstName, lastName=cusDef.lastName, dateOfBirth=cusDef.dateOfBirth,
        dietRestricts=cusDef.dietRestricts, allergies=cusDef.allergies, address=cusDef.address,
        favourites=cusDef.favourites, myRecipes=cusDef.myRecipes
    }) {
        return new CustomerProfile({ id, firstName, lastName, dateOfBirth, 
            dietRestricts, allergies, address, favourites, myRecipes 
        });        
    }
}

export class CustomerProfile {
    constructor({ id, firstName, lastName, dateOfBirth, dietRestricts, 
        allergies, address, favourites, myRecipes }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = new Date(dateOfBirth);
        this.dietRestricts = dietRestricts;
        this.allergies = allergies;
        this.address = address;
        this.favourites = favourites;
        this.myRecipes = myRecipes;
    }

    getId = function() {
        return this.id
    }

    getFirstName = function() {
        return this.firstName;
    }

    getLastName = function() {
        return this.lastName;
    }

    getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }

    getDateOfBirth = function() {
        return this.dateOfBirth;
    }

    getDietRestricts = function() {
        return this.dietRestricts;
    }

    getAllergies = function() {
        return this.allergies;
    }

    getAddress = function() {
        return this.address;
    }

    getFavourites = function() {
        return this.favourites;
    }

    getMyRecipes = function() {
        return this.myRecipes;
    }

    getCustomerProfileJSON = function() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            dateOfBirth: this.dateOfBirth,
            dietRestricts: this.dietRestricts,
            allergies: this.allergies,
            address: this.address,
            favourites: this.favourites,
            myRecipes: this.myRecipes
        }
    }
}