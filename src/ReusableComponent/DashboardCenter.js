import React, { useEffect,useState } from 'react'
import '../ReusableComponentCss/DashboardCenter.css'
import { useHistory } from "react-router-dom";
const DashboardCenter = (props) => {
    const [post, setpost] = useState([])
   
    useEffect(() => {
       getPostList()
    }, [])
    const getPostList=()=>{
        
        fetch('http://localhost:8080/post/getAllPostData').then(res=>res.json()).then(data=>{
           // console.log(data.postData)
            if(data.message==="success..."){

                setpost(data.postData)
            }
        })
    }

    const history = useHistory();
    return (
        <div className="dashboard-center">
            <div className="quote-card">
                <div className="quote">
                    <span>Decide the effect you want to produce in your reader.</span>
                    <span>– Robert Collier</span>
                </div>
                <button onClick={()=>history.push('/post')} >Generate copy</button>
            </div>

            {/**<span className={context.userDetails.creditRemain === "loading" ? "loader" : null}>{context.userDetails.creditRemain === "loading" ? null : context.userDetails.creditRemain}</span> */}
            <div className="used-info">
                <div> 24 drafts</div>
                <div className="seperator"></div>
                <div> 150 published</div>
                <div className="seperator"></div>
                <div> 132 mins saved</div>
            </div>

            <div className="copy-generator-types">
                <div className="header">
                    <span>Published </span>
                    <span >See all</span>
                </div>

                <div className="card-container">
                    {
                        post.map((data)=>{
                            return(
                                <div onClick={
                                    ()=>  history.push({
                                           pathname: `/${data.slug}`,
                                           state:{id:data._id,slug:data.slug}
                                       } )
                                   }  className="card" >
                                <div>
                                    <span>{data.title}</span>
                                    <span>June 28,2021</span>
                                </div>
                                <div>
                                <img  src={`http://localhost:8080/${data.filename}`} alt="" />
                                </div>
                                
                            </div>
        
                            )
                        })
                    }
                   
                    
                </div>
            </div>
        </div>
    )
}

export default DashboardCenter
