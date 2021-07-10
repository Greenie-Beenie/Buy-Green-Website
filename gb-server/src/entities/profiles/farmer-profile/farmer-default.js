export default function buildMakeFarmerDefault({ 
    Id, dResDefault, alDefault, makeRecipe, makeFarm 
}) {
    return function makeCustomerDefault() {
        return {
            id: Id.makeId(),
            firstName: 'Randy',
            lastName: 'Marsh',
            dateOfBirth: new Date('1-1-1999'),
            dietRestricts: dResDefault,
            allergies: alDefault,
            address: '123 Fake Street',
            favourites: [makeRecipe(), makeRecipe(), makeRecipe()],
            myRecipes: [
                makeRecipe(author=`${firstName} ${lastName}`),
                makeRecipe(author=`${firstName} ${lastName}`),
                makeRecipe(author=`${firstName} ${lastName}`)
            ],
            farms: [
                makeFarm(owners=[`${firstName} ${lastName}`]),
                makeFarm(owners=[`${firstName} ${lastName}`]),
                makeFarm(owners=[`${firstName} ${lastName}`])
            ]
        }
    }
}