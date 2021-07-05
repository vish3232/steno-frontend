import React from 'react'
import '../ScreenCss/Home.css'
import NavigationBar from '../ReusableComponent/NavigationBar'
import LeftSideBarCommon from '../ReusableComponent/LeftSideBarCommon'
import DashboardCenter from '../ReusableComponent/DashboardCenter'
import DashBoardRight from '../ReusableComponent/DashBoardRight'
function GetPost(props) {
   
    // const deletePost=(id)=>{

    //     fetch('http://localhost:8080/post/deletePostAsPerId', {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
          
    //         body:  JSON.stringify({
    //             id:id
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(res => {
                
    //                  if (res.message === "success...") {
    //                 window.location.reload()
    //             }
    //         })
       
        
    // }
     return (
        <div className="home">
            <NavigationBar />
            <div className="grid">
                <LeftSideBarCommon/>
                <DashboardCenter/>
                <DashBoardRight/>
            </div>
        </div>
    )
}

export default GetPost
