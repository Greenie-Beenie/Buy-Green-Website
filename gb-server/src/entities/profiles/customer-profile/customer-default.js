export default function buildMakeCustomerDefault({ Id, dResDefault, alDefault, makeRecipe}) {
    return function makeCustomerDefault() {
        return {
            id: Id.makeId(),
            firstName: 'John',
            lastName: 'Doe',
            dateOfBirth: new Date('1-1-1999'),
            dietRestricts: dResDefault,
            allergies: alDefault,
            address: '123 Fake Street',
            favourites: [makeRecipe(), makeRecipe(), makeRecipe()],
            myRecipes: [
                makeRecipe(author=`${firstName} ${lastName}`),
                makeRecipe(author=`${firstName} ${lastName}`),
                makeRecipe(author=`${firstName} ${lastName}`)
            ]
        }
    }
}