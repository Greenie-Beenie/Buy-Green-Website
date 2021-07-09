import { CustomerProfile } from "../customer-profile/customer-profile"
import fDef from "./farmer-default";

export class FarmerProfile extends CustomerProfile {
    constructor(id=fDef.id, firstName=fDef.firstName, lastName=fDef.lastName, dateOfBirth=fDef.dateOfBirth, 
        dietRestricts=fDef.dietRestricts, allergies=fDef.allergies, address=fDef.address, favourites=fDef.favourites, 
        myRecipes=fDef.myRecipes, farms=fDef.farms) {
        super(id, firstName, lastName, dateOfBirth, dietRestricts, 
            allergies, address, favourites, myRecipes, farms);
        this.farms = farms;
    }

    getFarms = function() {
        return this.farms;
    }

    getFarmerProfileJSON = function() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            dateOfBirth: this.dateOfBirth,
            dietRestricts: this.dietRestricts,
            allergies: this.allergies,
            address: this.address,
            favourites: this.favourites,
            myRecipes: this.myRecipes,
            farms: this.farms
        }
    }
}