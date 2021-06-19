import React,{useState,useEffect,useRef} from 'react'
import '../App.css';
import EditorJs from 'react-editor-js';
import edjsHTML from 'editorjs-html'
import { EDITOR_JS_TOOLS } from '../tools'
import {textinput_component} from '../Textinput'
import {textinput_forparagraph} from '../Textinput'
import Parser from '@son_xx/editor-js-parser'
global.backendData={}
function GetPostAsPerId(props) {
    const [allData,setallData]=useState({})
     const [titleData, settitleData] = useState(null)
    const [paragraphData,setparagraphData]=useState(null)
    const [html,setHtml]=useState(null)
    var htmlObject = document.createElement('div')
          
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
        <div id="myblog" className="main-container" >
            <h1>{allData.title}</h1>
            <div>
                {allData.subtitle}
            </div>
            <blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
        </div>
       
        )
}

export default GetPostAsPerId
