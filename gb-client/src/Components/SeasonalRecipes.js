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
import RecipePopup from './RecipePopup';
import recipe1Data from '../data/Recipe1Data';
import recipe2Data from '../data/Recipe2Data';
import recipe3Data from '../data/Recipe3Data';
import recipe4Data from '../data/Recipe4Data';
import recipe5Data from '../data/Recipe5Data';

function SeasonalRecipes () {
  const [openRecipe1, setOpenRecipe1] = useState(false);
  const [openRecipe2, setOpenRecipe2] = useState(false);
  const [openRecipe3, setOpenRecipe3] = useState(false);
  const [openRecipe4, setOpenRecipe4] = useState(false);
  const [openRecipe5, setOpenRecipe5] = useState(false);

  //open and close popup
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
  

  //call RecipePopup with data
  let recipePopup1;
  if (openRecipe1) {
    recipePopup1 = (
      <RecipePopup handleClose = {handleCloseRecipe1}
        recipeData = {recipe1Data}
        />
    );   
  }

  let recipePopup2;
  if (openRecipe2) {
    recipePopup2 = (
      <RecipePopup handleClose={handleCloseRecipe2}
      recipeData = {recipe2Data} 
      />
    );   
  }

  let recipePopup3;
  if (openRecipe3) {
    recipePopup3 = (
      <RecipePopup handleClose={handleCloseRecipe3}
        recipeData = {recipe3Data} 
      />
    );      
  }

  let recipePopup4;
  if (openRecipe4) {
    recipePopup4 = (
      <RecipePopup handleClose={handleCloseRecipe4} 
        recipeData = {recipe4Data}
      />
    );        
  }

  let recipePopup5;
  if (openRecipe5) {
    recipePopup5 = (
      <RecipePopup handleClose={handleCloseRecipe5}
        recipeData = {recipe5Data} 
      />
    );  
  }

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
                      image={recipe1Data.image}
                      title={recipe1Data.title}
                      description={recipe1Data.description}
                      onClick={handleOpenRecipe1}
                  />
                  {recipePopup1}
              </EuiFlexItem>
              <EuiFlexItem>
                  <EuiCard
                      textAlign="left"
                      image={recipe2Data.image}
                      title={recipe2Data.title}
                      description={recipe2Data.description}
                      onClick={handleOpenRecipe2}
                  />
                  {recipePopup2}
              </EuiFlexItem>
              <EuiFlexItem>
                  <EuiCard
                      textAlign="left"
                      image={recipe3Data.image}
                      title={recipe3Data.title}
                      description={recipe3Data.description}
                      onClick={handleOpenRecipe3}
                  />
                  {recipePopup3}
              </EuiFlexItem>
              <EuiFlexItem>
                  <EuiCard
                      textAlign="left"
                      image={recipe4Data.image}
                      title={recipe4Data.title}
                      description={recipe4Data.description}
                      onClick={handleOpenRecipe4}
                  />
                  {recipePopup4}
              </EuiFlexItem>
              <EuiFlexItem>
                  <EuiCard
                      textAlign="left"
                      image={recipe5Data.image}
                      title={recipe5Data.title}
                      description={recipe5Data.description}
                      onClick={handleOpenRecipe5}
                  />
                  {recipePopup5}
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
    