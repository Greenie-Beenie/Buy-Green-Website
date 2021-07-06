import React, { useEffect, useState } from 'react'

import "./NavBar.css"
import {
    EuiTitle,
    EuiButton,
    EuiTextColor,
    EuiFlexItem
} from '@elastic/eui';

function NavBar() {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 80){
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return <>
    <div className= {show ? 'navbar' : 'navbar-hidden'}>
            <div className ='nav-container'>
                <EuiTitle color="black" size = 'xxl' href="/Home" className = "nav-logo">
                <a>
                    <EuiTextColor className = "nav-logo-text" >GB</EuiTextColor>
                </a>
                </EuiTitle>
                <ul className="nav-menu">
                    <li className = "nav-item">
                    <EuiFlexItem grow={false}>
                        <EuiButton color = "danger" fill onClick={() => {}} href="/Home">Home</EuiButton>
                    </EuiFlexItem>
                    </li>
                    <li className = "nav-item">
                    <EuiFlexItem grow={false}>
                        <EuiButton color = "danger" fill onClick={() => {}} href="/About">About</EuiButton>
                    </EuiFlexItem>
                    </li>
                    <li className = "nav-item">
                    <EuiFlexItem grow={false}>
                        <EuiButton color = "danger" fill onClick={() => {}} href="/recipecreator">Recipe Creator</EuiButton>
                    </EuiFlexItem>
                    </li>
                    <li className = "nav-item">
                    <EuiFlexItem grow={false}>
                        <EuiButton color = "danger" fill onClick={() => {}} href="/localmap">Local Farm Map</EuiButton>
                    </EuiFlexItem>
                    </li>
                </ul>
            </div>
            </div>
    </>; 
}

export default NavBar