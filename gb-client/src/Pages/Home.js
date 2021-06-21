import React from 'react';
import SeasonalRecipes from '../Components/SeasonalRecipes';
import AvatarList from '../Components/AvatarList';
import avatars from '../data/WhyBuyLocalData';
import { Link } from 'react-router-dom';
import Map from '../Components/Map';
import {
    EuiTitle,
    EuiSpacer,
    EuiButton,
    EuiText
} from '@elastic/eui';

function Home() {
    return (
        <div>
            {/* Why Buy Local */}
            <EuiTitle size="m">
                <h1>Why should I buy local produce? Our website brings...</h1>
            </EuiTitle>
            <EuiSpacer size="xl"/>
            <AvatarList avatars={avatars}/>
            <EuiText style={{marginLeft:"5em", marginRight:"5em", marginTop:"2em"}} textAlign="center">
                <p>
                    My pet rock of 14 years died of old age a few hours ago and my family is making fun of me.
                    Her name was Rookie and she was a small crested rock. I really loved her a lot, for such a small thing she had so much personality. 
                    She would always walk onto my hand if I held it out for her and would jump to the cage door if I was home from work.
                    For the last week she had been sluggish and not climbing at all. She stopped visiting me when I came home and
                </p>
            </EuiText>
            <EuiButton iconType="documentation">
                <Link to="/about">Learn More</Link>
            </EuiButton>


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