import buildMakefarmDefault from "./farm-default";
export default function buildMakeFarm({ Id, makeFood}) {
    const farmDef = buildMakefarmDefault({ Id, makeFood});
    return function makeFarm({
        id=Id.makeId(), farmName=farmDef.farmName, owners=farmDef.owners, crops=farmDef.crops, 
        description=farmDef.description, sells=farmDef.sells, opens=farmDef.opens, 
        closes = farmDef.closes, location=farmDef.location, url=farmDef.url
    }) {
        return new Farm({ id, farmName, owners, crops, description, 
            sells, opens, closes, location, url
        });
    }   
}

class Farm {
    constructor({ id, farmName, owners, crops, description, 
        sells, opens, closes, location, url }) {
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