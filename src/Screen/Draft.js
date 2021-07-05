import React,{useEffect,useState} from 'react'

function DraftScreen(props) {
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

    
    return (
        <div className="get-post-main-container" >
            <div onClick={()=>props.history.push('/post')} className="create-post-button" >create Post</div>
            <div className="draft-button" onClick={()=>props.history.push('/')} >Posts</div>
        <div className="blog-list-container" >
            {
                draft.map((data)=>{
                    return(
                        
                        <div 
                        className="blog-list-item-container"
                        
                        >
                            <div onClick={
                         ()=>props.history.push({
                          pathname: `/draftView`,
                          state:{draftData:data}
                      } )
                        } className="image-container" >
                                
                                <img alt="draftImage" src={`http://localhost:8080/${data.filename}`} />
                            </div>
                            <div className="title-and-subtitle-container" >
                                <h1> {data.title}</h1>
                                <div>{data.subtitle}</div>
                            </div>
                          </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default DraftScreen
