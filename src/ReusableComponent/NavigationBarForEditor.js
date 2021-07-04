import React, { useContext } from 'react'
import Logo from '../assets/Logo.svg'
import '../ReusableComponentCss/NavigationBar.css'

const NavigationBarForEditor = () => {


    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" />
                <p>Creatosaurus <span>| Steno</span></p>
                <div className="save-and-preview-container" >
                <span>Save</span>
                <span>Preview</span>
            </div>
          
           
            </div>
            <div className="save-and-preview-container" >
            <span >Dashboard</span> 
            <span >Home</span> 
            </div>
            
        </nav>
    )
}

export default NavigationBarForEditor
