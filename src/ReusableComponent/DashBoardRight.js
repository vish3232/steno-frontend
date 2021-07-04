import React, { useContext } from 'react'
import '../ReusableComponentCss/DashboardRight.css'

const DashBoardRight = () => {

  
    return (
        <div className="dash-board-right">
            <div className="resources">
                <div className="title">Looking for a little assistance? </div>
                <p>Our blog and tutorial section is loaded with helpful information.</p>
                <span>Check our knowledge base</span>
                <div className="sub-title">Join our community</div>
            </div>

            <div className="save">
                <div className="header">
                    <span>Draft</span>
                    <span >See all</span>
                </div>

                        <div className="card-container">
                                         <div className="card" >
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                        </div>
                            
                        </div>

                        <div className="card-container">
                                         <div className="card" >
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                        </div>
                            
                        </div>
                
                        <div className="card-container">
                                         <div className="card" >
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                        </div>
                            
                        </div>
                
                        <div className="card-container">
                                         <div className="card" >
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                        </div>
                            
                        </div>
                
                        <div className="card-container">
                                         <div className="card" >
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                        </div>
                            
                        </div>
                
                
            </div>
        </div>
    )
}

export default DashBoardRight
