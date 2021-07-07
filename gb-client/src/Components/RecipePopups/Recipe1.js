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

function Recipe1 ({handleClose}) {
    const restrictions = [
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
    const nutrition = [
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
    const ingredients = [
        'avacado',
        'red chilli',
        'red onion',
        'tomato',
        'pasta',
    ]

    const recipeSteps = [
        {
            title: 'Cook Pasta',
            children: (
                <EuiText>
                    <div style = {{width: '300px'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae felis eu leo venenatis congue interdum eu justo. Aliquam scelerisque ex nisl, a vulputate orci consequat in. Aenean dapibus varius nunc ac porttitor. Proin iaculis varius nisi, eget dignissim felis. Sed et felis eros.</p>
                    </div>
                </EuiText>
            ),
        },
        {
            title: 'Chop and Mix',
            children: (
                <EuiText>
                    <div style = {{width: '300px'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae felis eu leo venenatis congue interdum eu justo. Aliquam scelerisque ex nisl, a vulputate orci consequat in. Aenean dapibus varius nunc ac porttitor. Proin iaculis varius nisi, eget dignissim felis. Sed et felis eros.</p>
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
                        <h1> Pasta Salad </h1>
                        <EuiText textAlign = 'left' size = 's'>
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
                    <EuiFlexGroup wrap responsive = {false} gutterSize = 'xs'>
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

export default Recipe1;
