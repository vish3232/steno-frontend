import React from 'react'
import Logo from '../assets/Logo.svg'
import '../ReusableComponentCss/NavigationBar.css'

const NavigationBar = () => {


    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" />
                <p>Creatosaurus <span>| Steno</span></p>
            </div>
            <span >Dashboard</span> 
        </nav>
    )
}

export default NavigationBar
