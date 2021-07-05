import React from 'react';
import './Banner.css'

import {
    EuiTitle,
    EuiTextColor,
    
} from '@elastic/eui';

const Banner = () => {
    return (
        <div className = "banner">
                <EuiTitle   size = 'xxl' className = "banner-text">
                    <h2>
                        <EuiTextColor color="ghost">Greenie <br/> Beenie</EuiTextColor>
                    </h2>
                </EuiTitle>
        </div>
    )
}

export default Banner