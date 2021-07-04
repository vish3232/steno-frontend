import React from 'react'
import '../ScreenCss/Dashboard.css'
import DashboardPostImage from '../assets/DashboardPostImage.svg'
import Logo from '../assets/Logo.svg'
import NavigationBar from '../ReusableComponent/NavigationBar'
function Dashboard() {
    return (
        <div  >
           <NavigationBar/>
            <div className="grid1" >
                <div className="postImage" >
                 <img src={DashboardPostImage} style={{width:'100%',height:"100%"}} />
                </div>
                <div className="PostContent" >
                    <div className="title-header" >
                    Top 10 ways to grow online and build audience
                    </div>
                    <div className="sub-title" >
                    Top 10 ways to grow online and build audience Top 10 ways to grow online and build audience
                    </div>
                    <div className="date-header" >
                    June 04, 2021
                    </div>
                </div>
               

            </div>
      
            <div className="grid2" >
                <div className="postListItem" >
                    <img src={DashboardPostImage} style={{width:"100%",height:"100%"}} />
                    <div className="header" >
                    Top 10 ways to grow online and build audience
                    </div>
                    <div className="sub-header" >
                    Top 10 ways to grow online and build audience Top 10 ways to grow online and build audience
                    </div>
                    <div className="date" >
                    June 04, 2021
                    </div>
                </div>

                <div className="postListItem" >
                    <img src={DashboardPostImage} style={{width:"100%",height:"100%"}} />
                    <div className="header" >
                    Top 10 ways to grow online and build audience
                    </div>
                    <div className="sub-header" >
                    Top 10 ways to grow online and build audience Top 10 ways to grow online and build audience
                    </div>
                    <div className="date" >
                    June 04, 2021
                    </div>
                </div>

                <div className="postListItem" >
                    <img src={DashboardPostImage} style={{width:"100%",height:"100%"}} />
                    <div className="header" >
                    Top 10 ways to grow online and build audience
                    </div>
                    <div className="sub-header" >
                    Top 10 ways to grow online and build audience Top 10 ways to grow online and build audience
                    </div>
                    <div className="date" >
                    June 04, 2021
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default Dashboard
