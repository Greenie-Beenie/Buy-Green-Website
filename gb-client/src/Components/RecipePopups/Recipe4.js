import React from 'react';
import {
    EuiBadge,
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,
    EuiIcon,
    EuiModal,
    EuiModalBody,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiModalFooter,
    EuiOverlayMask,
    EuiSteps,
    EuiSpacer,
    EuiText,
    EuiTitle,
} from '@elastic/eui';

function Recipe4 ({handleClose}) {
    const restrictions = [
        {
            restriction: 'Meat',
            colour: '#f2353f',
        },
        {
            restriction: 'Kosher',
            colour: '#ffea47',
        },
        {
            restriction: 'Halal',
            colour: '#239925',
        },
    ];
    const nutrition = [
        {
            Name: 'Calories',
            Num: '300kcal',
        },
        {
            Name: 'Protein',
            Num: '20g',
        },
        {
            Name: 'Carbs',
            Num: '50g',
        },
        {
            Name: 'Fibre',
            Num: '7g',
        },
        {
            Name: 'Fat',
            Num: '10g',
        },
    ];
    const ingredients = [
        'chicken breasts',
        'red onion',
        'garlic',
        'ginger',
        'tomato',
        'chilli powder',
        'turmeric powder',
        'ground cumin',
        'vegetable oil',
    ]

    const recipeSteps = [
        {
            title: 'Chop ingredients',
            children: (
                <EuiText>
                    <div style = {{width: '300px'}}>
                    <p>chop chicken breasts, onion, tomato and mince the ginger and garlic</p>
                    </div>
                </EuiText>
            ),
        },
        {
            title: 'Put ingredients on stove',
            children: (
                <EuiText>
                    <div style = {{width: '300px'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae felis eu leo venenatis congue interdum eu justo. Aliquam scelerisque ex nisl, a vulputate orci consequat in. Aenean dapibus varius nunc ac porttitor. Proin iaculis varius nisi, eget dignissim felis. Sed et felis eros.</p>
                    </div>
                </EuiText>
            ),
        },
        {
            title: 'Add in the masala',
            children: (
                <EuiText>
                    <div style = {{width: '300px'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae felis eu leo venenatis congue interdum eu justo. </p>
                    </div>
                </EuiText>
            ),
        },

    ];
    return (
        <EuiOverlayMask>
            <EuiModal onClose={handleClose}>
                <EuiModalHeader>
                    <EuiModalHeaderTitle>
                        <h1> Chicken Curry </h1>
                        <EuiText size = 's'>
                            Author name
                            <EuiSpacer size = 'xs'/>
                            June 18 2021
                        </EuiText>
                    </EuiModalHeaderTitle>
                </EuiModalHeader>
                <EuiModalBody>
                    <EuiFlexGroup wrap responsive = {false} gutterSize = 'xs' style = {{maxWidth: '300px'}}>
                        {restrictions.map((restriction) => (
                            <EuiFlexItem grow = {false} key = {restriction}>
                                <EuiBadge color = {restriction.colour}>{restriction.restriction}</EuiBadge>
                            </EuiFlexItem>
                        ))}
                    </EuiFlexGroup>
                    <EuiSpacer size = 's'/>
                    <EuiTitle size = 'xs'>
                        <h2>Nutrition info: </h2>
                    </EuiTitle>
                    <EuiSpacer size = 'xs'/>
                    <EuiFlexGroup wrap responsive = {false} gutterSize = 'xs' style = {{maxWidth: '300px'}}>
                        {nutrition.map((nutrient) =>(
                           <EuiFlexItem grow = {false} key = {nutrient}>
                                <EuiBadge color = 'hollow'>{nutrient.Name}: {nutrient.Num}</EuiBadge>
                           </EuiFlexItem> 
                        ))}
                    </EuiFlexGroup>
                    <EuiSpacer size = 's'/>
                    <EuiTitle size = 'xs'>
                        <h2>Ingredients: </h2>
                    </EuiTitle>
                    <EuiFlexGroup gutterSize = 'xs'>
                        <EuiFlexItem>
                        <EuiSpacer size = 'xs'/>
                            {ingredients.map((ingredient) => (
                                <EuiText>
                                    <EuiIcon type = 'plus' /> {ingredient}
                                </EuiText>
                            ))}
                            </EuiFlexItem>
                    </EuiFlexGroup>
                        <EuiText>
                            <EuiSpacer size = 'm'/>
                            <EuiSteps titleSize = 'xs' steps = {recipeSteps}/>
                        </EuiText>
                </EuiModalBody>
                <EuiModalFooter>
                    <EuiButton onClick={handleClose} fill>
                        Close
                    </EuiButton>
                </EuiModalFooter>
            </EuiModal>
        </EuiOverlayMask>
    )
}
export default Recipe4;