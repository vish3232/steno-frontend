import React, { useContext } from 'react'
import '../ReusableComponentCss/LeftSideBar.css'

const LeftSideBarCommon = () => {

  
    return (
        <div className="left-side-bar">
        <div
            
            className="button" >
            <span>👀</span>
            <span>Dashboard</span>
        </div>

        <div
            
            className="button">
            <span>📚</span>
            <span>Published</span>
        </div>

        <div
            
            className="button">
            <span>🔖</span>
            <span>Draft</span>
        </div>

        <div
            
            className="button">
            <span>⚙️</span>
            <span>Settings</span>
        </div>
    </div>
    )
}

export default LeftSideBarCommon
