export { dietRestricts, allergies};

const dietRestricts = {
    beef: false, 
    vegetarian: false, 
    vegan: false, 
    kosher: false, 
    halal: false
}

const allergies = {
    dairy: false,
    eggs: false,
    fish: false,
    fruitVegPollen: false,
    gluten: false,
    meat: false,
    peach: false,
    peanut: false,
    shellfish: false,
    soy: false,
    treeNut: false,
    wheat: false,
    custom: {
        default: false
    }
}