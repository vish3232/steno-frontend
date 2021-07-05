import React,{useState,useEffect} from 'react'
import '../App.css';
import '../ScreenCss/GetPostAsPerId.css'
import Parser from 'editorjs-viewer'
import NavigationBarForEditor from '../ReusableComponent/NavigationBarForEditor';
global.backendData={}
function GetPostAsPerId(props) {
    const [allData,setallData]=useState({})
          
    useEffect(() => {
        if(props.location.state!==null){
      getPostAsPerId()
        }
    }, [])

    const getPostAsPerId=()=>{
       // console.log(props.location.state.id)
        fetch(`http://localhost:8080/post/getPostAsPerId/${props.location.state.id}/${props.location.state.slug}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then(res => {
            console.log(res);
          const data=JSON.parse(res.postData[0].paragraph)
         // console.log(data.blocks)

            const result = Parser(data.blocks)
          // console.log(result)
            var myblog = document.getElementById('myblog')
           // console.log(myblog)
            myblog.insertAdjacentHTML('beforeend', result);
                setallData(res.postData[0])
                
        })
   
    }

    return (
        <div className="home">
        <NavigationBarForEditor />
        <div  className="post-per-id-container" >
            <div  className="post-per-id-sub-container" >
                <h1>
                {allData.title}
                </h1>
                <div className="username" >
                By Malav Warke | June 28, 2021
                </div>
                <div className="postImageOfSingelPost" >
                <img alt="postImage" style={{width:'100%',height:'100%',objectFit:'cover'}} src={`http://localhost:8080/${allData.filename}`} />
                </div>
                <div className="subTitle" >
                {allData.subtitle}
                </div>
                <div id="myblog" className="content" >
                
                </div>
            </div>
        </div>
     </div>
        )
}

export default GetPostAsPerId
