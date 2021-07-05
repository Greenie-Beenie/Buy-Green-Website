import React, {useState} from 'react';
import {
    EuiTitle,
    EuiSpacer,
    EuiButton,
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
} from '@elastic/eui';
import { Link } from 'react-router-dom';
import Recipe1 from './RecipePopups/Recipe1';
import Recipe2 from './RecipePopups/Recipe2';
import Recipe3 from './RecipePopups/Recipe3';
import Recipe4 from './RecipePopups/Recipe4';
import Recipe5 from './RecipePopups/Recipe5';

function SeasonalRecipes () {
    const [openRecipe1, setOpenRecipe1] = useState(false);
    const [openRecipe2, setOpenRecipe2] = useState(false);
    const [openRecipe3, setOpenRecipe3] = useState(false);
    const [openRecipe4, setOpenRecipe4] = useState(false);
    const [openRecipe5, setOpenRecipe5] = useState(false);

    //Recipe Popup
    const handleOpenRecipe1 = () => setOpenRecipe1(true);
    const handleCloseRecipe1 = () => setOpenRecipe1(false);

    const handleOpenRecipe2 = () => setOpenRecipe2(true);
    const handleCloseRecipe2 = () => setOpenRecipe2(false);

    const handleOpenRecipe3 = () => setOpenRecipe3(true);
    const handleCloseRecipe3 = () => setOpenRecipe3(false);

    const handleOpenRecipe4 = () => setOpenRecipe4(true);
    const handleCloseRecipe4 = () => setOpenRecipe4(false);

    const handleOpenRecipe5 = () => setOpenRecipe5(true);
    const handleCloseRecipe5 = () => setOpenRecipe5(false);

    let recipePopup1;
    if (openRecipe1) {
        recipePopup1 = (
            <Recipe1 handleClose={handleCloseRecipe1} openRecipe1 = {openRecipe1} openRecipe2 = {openRecipe2} openRecipe3 = {openRecipe3} openRecipe4 = {openRecipe4} openRecipe5 = {openRecipe5} />
        );   
    }
    let recipePopup2;
    if (openRecipe2) {
        recipePopup2 = (
            <Recipe2 handleClose={handleCloseRecipe2} />
        );   
    }
    let recipePopup3;
    if (openRecipe3) {
        recipePopup3 = (
            <Recipe3 handleClose={handleCloseRecipe3} />
        );   
    }
    let recipePopup4;
    if (openRecipe4) {
        recipePopup4 = (
            <Recipe4 handleClose={handleCloseRecipe4} />
        );   
    }
    let recipePopup5;
    if (openRecipe5) {
        recipePopup5 = (
            <Recipe5 handleClose={handleCloseRecipe5} />
        );   
    }

    //Footer for the recipe cards
    const cardFooterContent1 = (
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleOpenRecipe1}>Eat it</EuiButton>
            {recipePopup1}
          </EuiFlexItem>
        </EuiFlexGroup>
      );
      const cardFooterContent2 = (
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleOpenRecipe2}>Eat it</EuiButton>
            {recipePopup2}
          </EuiFlexItem>
        </EuiFlexGroup>
      );
      const cardFooterContent3 = (
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleOpenRecipe3}>Eat it</EuiButton>
            {recipePopup3}
          </EuiFlexItem>
        </EuiFlexGroup>
      );
      const cardFooterContent4 = (
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleOpenRecipe4}>Eat it</EuiButton>
            {recipePopup4}
          </EuiFlexItem>
        </EuiFlexGroup>
      );
      const cardFooterContent5 = (
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleOpenRecipe5}>Eat it</EuiButton>
            {recipePopup5}
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
                        image="https://www.graceandgoodeats.com/wp-content/uploads/2020/05/Italian-pasta-salad-5.jpg"
                        title="Pasta Salad"
                        description="can be an appetizer, side dish, or the main course"
                        footer={cardFooterContent1}
                    />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiCard
                        textAlign="left"
                        image="https://mapleleafhh.com/wp-content/uploads/Broiled-Beef-Burger-e1556647638183.jpg"
                        title="Hamburger"
                        description="the term hamburger was derived from Hamburg, a city in Germany"
                        footer={cardFooterContent2}
                    />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiCard
                        textAlign="left"
                        image="https://www.aboutamom.com/wp-content/uploads/2017/01/Oatmeal2.png"
                        title="Oats and Fruits"
                        description="oatmeal with fruits"
                        footer={cardFooterContent3}
                    />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiCard
                        textAlign="left"
                        image="https://i1.wp.com/smittenkitchen.com/wp-content/uploads//2019/10/chicken-tikka-masala.jpg?fit=750%2C500&ssl=1"
                        title="Chicken Curry"
                        description="originates from the Indian subcontinent; tastes good with rice"
                        footer={cardFooterContent4}
                    />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiCard
                        textAlign="left"
                        image="http://irepo.primecp.com/2015/04/216765/Mixed-Fruit-Smoothie-5134_ExtraLarge1000_ID-951561.jpg?v=951561"
                        title="Fruit Smoothie"
                        description="a healthy drink composed of fruits"
                        footer={cardFooterContent5}
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
      