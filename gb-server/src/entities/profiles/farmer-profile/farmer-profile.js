import { CustomerProfile } from "../customer-profile/customer-profile";
import buildMakeFarmerDefault from "./farmer-default";
export default function buildMakeFarmerProfile({ 
    Id, dResDefault, alDefault, makeRecipe, makeFarm
}) {
    const frmrDef = buildMakeFarmerDefault({ Id, dResDefault, alDefault, makeRecipe, makeFarm });
    return function makeFarmerProfile({
        id=Id.makeId(), firstName=frmrDef.firstName, lastName=frmrDef.lastName, dateOfBirth=frmrDef.dateOfBirth, 
        myRecipes=frmrDef.dateOfBirth, dietRestricts=frmrDef.dietRestricts, allergies=frmrDef.allergies, 
        address=frmrDef.address, favourites=frmrDef.favourites, myRecipes=frmrDef.myRecipes, farms=frmrDef.farms
    }) {
        return new FarmerProfile({ id, firstName, lastName, dateOfBirth, dietRestricts, 
            allergies, address, favourites, myRecipes, farms
        });
    }
}

class FarmerProfile extends CustomerProfile {
    constructor({id, firstName, lastName, dateOfBirth, dietRestricts, 
        allergies, address, favourites, myRecipes, farms}) {
        super(id, firstName, lastName, dateOfBirth, dietRestricts, 
            allergies, address, favourites, myRecipes);
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