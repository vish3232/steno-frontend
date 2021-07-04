import React,{useState,useEffect,useRef} from 'react'
import '../App.css';
import '../ScreenCss/GetPostAsPerId.css'
import EditorJs from 'react-editor-js';
import edjsHTML from 'editorjs-html'
import { EDITOR_JS_TOOLS } from '../tools'
import {textinput_component} from '../Textinput'
import {textinput_forparagraph} from '../Textinput'
//import Parser from '@son_xx/editor-js-parser'
import GenerateCopy from '../ReusableComponent/GenerateCopy'
import RightApps from '../ReusableComponent/RightApps'
import Parser from 'editorjs-viewer'
import NavigationBarForEditor from '../ReusableComponent/NavigationBarForEditor';
import SavedCenter from '../ReusableComponent/SavedCenter'
import postImage from '../assets/postImage.svg'
global.backendData={}
function GetPostAsPerId(props) {
    const [allData,setallData]=useState({})
     const [titleData, settitleData] = useState(null)
    const [paragraphData,setparagraphData]=useState(null)
    const [html,setHtml]=useState(null)
    var htmlObject = document.createElement('div')
          
    useEffect(() => {
        if(props.location.state!==null){
     //  getPostAsPerId()
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
          const data=JSON.parse(res.postData[0].paragraph)
         // console.log(data.blocks)

            const result = Parser(data.blocks)
           console.log(result)
            var myblog = document.getElementById('myblog')
           // console.log(myblog)
            myblog.insertAdjacentHTML('beforeend', result);
                setallData(res.postData[0])
                
        })
   
    }

    return (
        <div className="home">
        <NavigationBarForEditor />
        <div className="post-per-id-container" >
            <div className="post-per-id-sub-container" >
                <h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h1>
                <div className="username" >
                By Malav Warke | June 28, 2021
                </div>
                <img className="postImage" src={postImage} />
                <div className="subTitle" >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                </div>
                <div className="content" >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
               <br/>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
               <br/>
               
                </div>
            </div>
        </div>
     </div>
        )
}

export default GetPostAsPerId
