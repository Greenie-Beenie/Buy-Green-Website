import { CustomerProfile } from "../customer-profile/customer-profile"
import { farmerDefault as fDef} from "./farmer-default";

export class FarmerProfile extends CustomerProfile {
    constructor(id=fDef.id, farms=fDef.farms) {
        this.id = id;
        this.farms = farms;
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