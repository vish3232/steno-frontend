import React,{useState,useEffect} from 'react'
import '../ScreenCss/Dashboard.css'
import NavigationBar from '../ReusableComponent/NavigationBar'
function Dashboard(props) {
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


    

    return (
        <div  >
           <NavigationBar/>
           {post.length?
            <div onClick={
                ()=>   props.history.push({
                       pathname: `/${post[0].slug}`,
                       state:{id:post[0]._id,slug:post[0].slug}
                   })

               } className="grid1" >
                
                <div className="postImage" >
                 <img alt="postImage" src={`http://localhost:8080/${post[0].filename}`} style={{width:'100%',height:"100%",objectFit:'cover'}} />
                </div>
                <div className="PostContent" >
                    <div className="title-header" >
                    { post[0].title}
                    </div>
                    <div className="sub-title" >
                   {post[0].subtitle}
                    </div>
                    <div className="date-header" >
                    June 04, 2021
                    </div>
                </div>
               

            </div>:<></>
            }
      
            <div className="grid2" >
                {
                    post.map((data)=>{
                        return(
                <div onClick={
                    ()=>   props.history.push({
                           pathname: `/${data.slug}`,
                           state:{id:data._id,slug:data.slug}
                       } )

                   } className="postListItem" >
                    <div className="image" >
                    <img alt="postImage" src={`http://localhost:8080/${data.filename}`} style={{width:"100%",height:"100%",objectFit:'cover'}} />
                    </div>
                    <div className="header" >
                   {data.title}
                    </div>
                    <div className="sub-header" >
                   {data.subtitle}
                    </div>
                    <div className="date" >
                    June 04, 2021
                    </div>
                </div>
                        )
                    })
                }
                

               
            </div>
    
        </div>
    )
}

export default Dashboard
