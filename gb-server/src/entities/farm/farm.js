import { farmDefault as Fdef } from "./farm-default";

export class Farm {
    constructor(id=Fdef.id, farmName=Fdef.farmName, owners=Fdef.owners, crops=Fdef.crops, description=Fdef.description, 
        sells=Fdef.sells, opens=Fdef.opens, closes=Fdef.closes, location=Fdef.location, url=Fdef.url) {
        this.id = id;
        this.farmName = farmName;
        this.owners = owners;
        this.crops = crops;
        this.description = description;
        this.sells = sells;
        this.opens = Date(opens);
        this.closes = Date(closes);
        this.location = location;
        this.url = url;
    }

    getId = function() {
        return this.id;
    }

    getFarmName = function() {
        return this.farmName;
    }

    getOwners = function() {
        return this.owners;
    }

    getCrops = function() {
        return this.crops;
    }

    getDescription = function() {
        return this.description;
    }

    getFoodForSale = function() {
        return this.sells;
    }

    getOpenTime = function() {
        return this.opens;
    }

    getCloseTime = function() {
        return this.closes;
    }

    getLocation = function() {
        return this.location;
    }

    getUrl = function() {
        return this.url;
    }

    getFarmJSON = function() {
        return {
            id: this.id,
            farmName: this.farmName,
            owners: this.owners,
            crops: this.crops,
            description: this.description,
            sells: this.sells,
            opens: this.opens,
            closes: this.closes,
            location: this.location,
            url: this.url
        }
    }
}