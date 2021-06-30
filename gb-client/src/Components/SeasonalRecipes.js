import React, {useState} from 'react';
import {
    EuiTitle,
    EuiSpacer,
    EuiButton,
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import { Link } from 'react-router-dom';
import RecipePopup from './RecipePopup';

function SeasonalRecipes () {
    const [openRecipePopup, setOpenRecipePopup] = useState(false);

    //Recipe Popup
    const handleOpenRecipePopup = () => setOpenRecipePopup(true);
    const handleCloseRecipePopup = () => setOpenRecipePopup(false);

    let recipePopup;
    if (openRecipePopup) {
        recipePopup = (
            <RecipePopup handleClose={handleCloseRecipePopup} />
        );   
    }

    //Footer for the recipe cards
    const cardFooterContent = (
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleOpenRecipePopup}>Eat it</EuiButton>
            {recipePopup}
          </EuiFlexItem>
        </EuiFlexGroup>
      );

    return (
        <div>
            <EuiTitle size="m">
                <h1>Seasonal Recipes</h1>
            </EuiTitle>
            <EuiSpacer/>
            <EuiFlexGroup gutterSize="l">
                <EuiFlexItem>
                    <EuiCard
                        textAlign="left"
                        image="https://source.unsplash.com/400x200/?Water"
                        title="Elastic in Nature"
                        description="Example of a card's description. Stick to one or two sentences."
                        footer={cardFooterContent}
                    />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiCard
                        textAlign="left"
                        image="https://source.unsplash.com/400x200/?Water"
                        title="Elastic in Water"
                        description="Example of a card's description. Stick to one or two sentences."
                        footer={cardFooterContent}
                    />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiCard
                        textAlign="left"
                        image="https://source.unsplash.com/400x200/?Water"
                        title="Elastic in Water"
                        description="Example of a card's description. Stick to one or two sentences."
                        footer={cardFooterContent}
                    />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiCard
                        textAlign="left"
                        image="https://source.unsplash.com/400x200/?Water"
                        title="Elastic in Water"
                        description="Example of a card's description. Stick to one or two sentences."
                        footer={cardFooterContent}
                    />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiCard
                        textAlign="left"
                        image="https://source.unsplash.com/400x200/?Water"
                        title="Elastic in Water"
                        description="Example of a card's description. Stick to one or two sentences."
                        footer={cardFooterContent}
                    />
                </EuiFlexItem>               
            </EuiFlexGroup>
            <EuiSpacer />
            

            <Link to="/recipecreator">
                <EuiButton
                    iconSide="right"
                    fill
                    iconType="discoverApp">
                    See More
                </EuiButton>
            </Link>
         </div>
    )
}

export default SeasonalRecipes
      