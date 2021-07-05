import React from 'react';
import './Banner.css'

import {
    EuiTitle,
    EuiTextColor,
    
} from '@elastic/eui';

const Banner = () => {
    return (
        <div className = "banner">
                <EuiTitle  style={{ userSelect: "none" }} className = "nav-logo">
                    <h2>
                        <EuiTextColor color="ghost">Greenie <br/> Beenie</EuiTextColor>
                    </h2>
                </EuiTitle>
        </div>
    )
}

export default Banner