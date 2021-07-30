const recipe1Data = {
    title: 'Pasta Salad',
    name: 'author name',
    date: 'June 18 2021',
    image: 'https://www.graceandgoodeats.com/wp-content/uploads/2020/05/Italian-pasta-salad-5.jpg',
    description: 'can be an appetizer, side dish, or the main course',
    restrictions: ['Gluten', 'Wheat', 'Vegan'],
    nutrition:{
        'Calories':'300kcal',
        'Protein':'10g',
        'Carbs':'80g',
        'Fibre':'9g',
        'Fat':'7g',
    },
    ingredients: ['avacado','red chilli','red onion','tomato','pasta'],
    steps: {
        'Cook Pasta':'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec vitae felis eu leo venenatis congue interdum eu justo.Aliquam scelerisque ex nisl, a vulputate orci consequat in.Aenean dapibus varius nunc ac porttitor.Proin iaculis varius nisi, eget dignissim felis.Sed et felis eros.' ,
        'Chop and Mix': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec vitae felis eu leo venenatis congue interdum eu justo.Aliquam scelerisque ex nisl, a vulputate orci consequat in .Aenean dapibus varius nunc ac porttitor.Proin iaculis varius nisi, eget dignissim felis.Sed et felis eros.' 
    }
};
/*
export const author = 'author name';
export const date = 'June 18 2021';
export const recipeName = 'Pasta Salad';
export const restrictions = [
    {
        restriction: 'Gluten',
        colour: '#bada55',
    },
    {
        restriction: 'Wheat',
        colour: '#e64386',
    },
    {
        restriction: 'Vegan',
        colour: '#c087f5',
    },
];
export const nutrition = [
    {
        Name: 'Calories',
        Num: '300kcal',
    },
    {
        Name: 'Protein',
        Num: '10g',
    },
    {
        Name: 'Carbs',
        Num: '80g',
    },
    {
        Name: 'Fibre',
        Num: '9g',
    },
    {
        Name: 'Fat',
        Num: '7g',
    },
];
export const ingredients = [
    'avacado',
    'red chilli',
    'red onion',
    'tomato',
    'pasta',
]

export const recipeSteps = [
    {
        title: 'Cook Pasta',
        children: (
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec vitae felis eu leo venenatis congue interdum eu justo.
                Aliquam scelerisque ex nisl, a vulputate orci consequat in.
                Aenean dapibus varius nunc ac porttitor.
                Proin iaculis varius nisi, eget dignissim felis.
                Sed et felis eros. 
            </p>
        )
    },
    {
        title: 'Chop and Mix',
        children: (
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec vitae felis eu leo venenatis congue interdum eu justo.
                Aliquam scelerisque ex nisl, a vulputate orci consequat in .Aenean dapibus varius nunc ac porttitor.Proin iaculis varius nisi, eget dignissim felis.Sed et felis eros. 
            </p>
        ),
    },
];
*/
export default recipe1Data;