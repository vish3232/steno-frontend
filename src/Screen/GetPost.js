import React,{useEffect,useState} from 'react'

function GetPost(props) {
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

    const deletePost=(id)=>{

        fetch('http://localhost:8080/post/deletePostAsPerId', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
          
            body:  JSON.stringify({
                id:id
            })
        })
            .then(response => response.json())
            .then(res => {
                
                     if (res.message === "success...") {
                    window.location.reload()
                }
            })
       
        
    }
    return (
        <div className="get-post-main-container" >
            <div onClick={()=>props.history.push('/post')} className="create-post-button" >create Post</div>
            <div>Draft</div>
        <div className="blog-list-container" >
            {
                post.map((data)=>{

                    return(
                        
                        <div 
                        className="blog-list-item-container"
                        
                        >
                            <div onClick={
                         ()=>   props.history.push({
                                pathname: `/${data.slug}`,
                                state:{id:data._id,slug:data.slug}
                            } )
                        
                        } className="image-container" >
                                
                                <img  src={`http://localhost:8080/${data.filename}`} />
                            </div>
                            <div className="title-and-subtitle-container" >
                                <h1> {data.title}</h1>
                                <div>{data.subtitle}</div>
                            </div>
                            <div onClick={()=>deletePost(data._id)} >
                                Delete
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default GetPost
