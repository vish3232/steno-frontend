import React, { useState,useEffect } from 'react'
import '../ReusableComponentCss/DashboardRight.css'
import { useHistory } from "react-router-dom";

const DashBoardRight = () => {
    const [draft, setdraft] = useState([])
    useEffect(() => {
       getPostList()
    }, [])
    const getPostList=()=>{
        
        fetch('http://localhost:8080/draft/getAllDraftData').then(res=>res.json()).then(data=>{
           // console.log(data.postData)
            if(data.message==="success..."){

                setdraft(data.draftData)
            }
        })
    }

    const history = useHistory();
   
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
                                      {
                                          draft.map((data)=>{
                                              return(
                                                <div onClick={
                                                    ()=>history.push({
                                                     pathname: `/draftView`,
                                                     state:{draftData:data}
                                                 } )
                                                   } className="card" >
                                                <p>{data.title}</p>
                                            </div>
                                
                                              )
                                          })
                                      }
                                        
                        </div>

                       
                
            </div>
        </div>
    )
}

export default DashBoardRight
