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

function Recipe5 ({handleClose}) {
    const restrictions = [
        { 
            restriction: 'Dairy',
            colour: '#0cbff0',
        },
        {
            restriction: 'Nuts',
            colour: '#f0910c',
        },
    ];
    const nutrition = [
        {
            Name: 'Calories',
            Num: '200kcal',
        },
        {
            Name: 'Protein',
            Num: '10g',
        },
        {
            Name: 'Carbs',
            Num: '40g',
        },
        {
            Name: 'Fibre',
            Num: '10g',
        },
        {
            Name: 'Fat',
            Num: '7g',
        },
    ];
    const ingredients = [
        'milk',
        'banana',
        'strawberries',
        'blueberries',
        'greek yogurt',
        'chia seeds',
        'cinnamon',
        'honey',
    ]

    const recipeSteps = [
        {
            title: 'Put everything in a blender',
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
                        <h1> Berry Shake </h1>
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

export default Recipe5;