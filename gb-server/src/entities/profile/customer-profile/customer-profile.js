import { customerDefault as cDef} from "./customer-default";

export class CustomerProfile {
    constructor(id=cDef.id, firstName=cDef.firstName, lastName=cDef.lastName, dateOfBirth=cDef.dateOfBirth, 
        dietRestricts=cDef.dietRestricts, allergies=cDef.allergies, address=cDef.address, favourites=cDef.favourites, 
        myRecipes=cDef.myRecipes) {
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