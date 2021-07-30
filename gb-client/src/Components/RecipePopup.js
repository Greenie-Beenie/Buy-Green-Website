import React from 'react';
import PropTypes, { string } from 'prop-types';
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

function RecipePopup (props) {
    const title = props.recipeData.title;
    const name = props.recipeData.name;
    const date = props.recipeData.date;
    const restrictions = props.recipeData.restrictions;
    const colours = {
        'Gluten': '#bada55',
        'Wheat': '#e64386',
        'Vegan': '#c087f5',
        'Dairy': '#0cbff0',
        'Meat': '#f2353f',
        'Kosher': '#ffea47',
        'Halal': '#239925',
        'Nuts': '#f0910c',
    }
    let nutrition = [];
    for (var key in props.recipeData.nutrition){
        nutrition.push({Name: key, Num: props.recipeData.nutrition[key]}
        )
    }
    const ingredients = props.recipeData.ingredients;
    let recipeSteps = [];
    for (var key in props.recipeData.steps){
        recipeSteps.push({title: key, children: 
            (
            <EuiText>
                <div style = {{width: '300px'}}>
                    <p>{props.recipeData.steps[key]}</p>
                </div>
            </EuiText>
            )}
        )
    }
    return (
        <div>
        <EuiOverlayMask>
            <EuiModal onClose={props.handleClose}>
                <EuiModalHeader>
                    <EuiModalHeaderTitle>
                        <h1>{title}</h1>
                        <EuiText textAlign = 'left' size = 's'>
                            {name}
                            <EuiSpacer size = 'xs'/>
                            {date}
                        </EuiText>
                    </EuiModalHeaderTitle>
                </EuiModalHeader>
                <EuiModalBody>
                    <EuiFlexGroup wrap responsive = {false} gutterSize = 'xs' style = {{maxWidth: '300px'}}>
                        {restrictions.map((restriction) => (
                            <EuiFlexItem grow = {false} key = {restriction}>
                                <EuiBadge color = {colours[restriction]}>{restriction}</EuiBadge>
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
                    <EuiButton onClick={props.handleClose} fill>Close</EuiButton>
                </EuiModalFooter>
            </EuiModal>
        </EuiOverlayMask>
        </div>
    )
}
RecipePopup.propTypes = {
    handleClose: PropTypes.func,
    recipeData: PropTypes.shape({
        title: PropTypes.string,
        name: PropTypes.string,
        date: PropTypes.string,
        restrictions: PropTypes.arrayOf(string),
        nutrition: PropTypes.shape({
            x: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
        }),
        ingredients: PropTypes.arrayOf(string),
        steps: PropTypes.shape({
            x: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
        })

    })
}

export default RecipePopup;