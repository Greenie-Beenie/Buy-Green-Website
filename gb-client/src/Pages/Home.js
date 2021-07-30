import React from 'react';
import SeasonalRecipes from '../Components/SeasonalRecipes';
import AvatarList from '../Components/AvatarList';
import avatars from '../data/WhyBuyLocalData';
import { Link } from 'react-router-dom';
import Map from '../Components/Map';
import Banner from '../Components/Banner';
import {
    EuiTitle,
    EuiSpacer,
    EuiButton,
    EuiText
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

function Home() {
    return (
        <div>
            <Banner/>
            {/* Why Buy Local */}
            <EuiSpacer size="xl"/>
            <EuiTitle size="m"><h1>Why should you buy local produce?</h1></EuiTitle>
            <EuiSpacer size="xl"/>
            <AvatarList avatars={avatars}/>
            <EuiText style={{marginLeft:"5em", marginRight:"5em", marginTop:"2em"}} textAlign="center">
                <p>
                    When you buy food locally, you benefit your community, your environment, and yourself. Enjoy tastier and healthier produce while 
                    living in the satisfaction of the benefits you've made for your environment and local economy, and the community connections you've made with
                    your neighbourhood farmers. Supermarket produce is often artificially ripened and tasteless in comparison to fresh local food. Why wait?
                </p>
            </EuiText>
            <EuiButton iconType="documentation" href="/about"> Learn More </EuiButton>

            {/* Seasonal Components */}
            <EuiSpacer size="xl"/>
            <SeasonalRecipes/>

            {/* Where to find Local */}
            <EuiTitle size="m">
                <h1>Where to find Local?</h1>
            </EuiTitle>
            <Map/>
        </div>
        
    )
}

export default Home