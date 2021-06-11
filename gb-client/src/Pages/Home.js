import React from 'react'
import SeasonalRecipes from '../Components/SeasonalRecipes'
import Map from '../Components/Map'
import {EuiTitle} from '@elastic/eui';

function Home() {
    return (
        <div>
            <SeasonalRecipes/>
            <EuiTitle size="m">
                <h1>Where to find Local?</h1>
            </EuiTitle>
            <Map/>
        </div>
        
    )
}

export default Home