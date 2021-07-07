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

function Recipe3 ({handleClose}) {
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
            restriction: 'Nuts',
            colour: '#f0910c',
        },
        {
            restriction: 'Dairy',
            colour: '#0cbff0',
        },
        {
            restriction: 'Vegan',
            colour: '#c087f5',
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
            Num: '9g',
        },
        {
            Name: 'Fat',
            Num: '7g',
        },
    ];
    const ingredients = [
        '1 cup of oats',
        '1/2 cup of yogurt',
        '2 tbsp of honey',
        '1/4 cup of blueberries',
        '1/4 cup of raspberries',
        'hazlenuts',
        'almonds',
    ]

    const recipeSteps = [
        {
            title: 'Make oats',
            children: (
                <EuiText>
                    <p>Leave oats in water overnight</p>
                </EuiText>
            ),
        },
        {
            title: 'Mix',
            children: (
                <EuiText>
                    <p>Mix together all other ingredients</p>
                </EuiText>
            ),
        },

    ];
    return (
        <EuiOverlayMask>
            <EuiModal onClose={handleClose}>
                <EuiModalHeader>
                    <EuiModalHeaderTitle>
                        <h1> Oats and Fruits </h1>
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
export default Recipe3;