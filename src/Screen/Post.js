import React,{useState} from 'react'
import '../App.css';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../tools'
import {textinput_component} from '../Textinput'
import {textinput_forparagraph} from '../Textinput'
import GenerateCopy from '../ReusableComponent/GenerateCopy'
import NavigationBarForEditor from '../ReusableComponent/NavigationBarForEditor';
import SavedCenter from '../ReusableComponent/SavedCenter'
import RightApps from '../ReusableComponent/RightApps'
function Post() {
    const [titledata,settitledata]=useState(null)
    const [subTitle,setsubTitle]=useState(null)
    
    const [paragraphTitle,setparagraphTitle]=useState({})
    const [url,seturl]=useState(null)
    const [file,setFile]=useState(null)
   
    const onChangeParagraph=(value)=>{
      setparagraphTitle(value)
    }

    console.log(paragraphTitle)
  
    const publishPost=()=>{
      const formData = new FormData();
      formData.append("image", file)
      
      formData.append("title",titledata)
      formData.append("subtitle", subTitle)
      
      formData.append("paragraph",JSON.stringify(paragraphTitle))
      formData.append("slug",url)
      
      console.log(formData)  
      fetch('http://localhost:8080/post/createPost', {
        method: 'POST',
        
        body:  formData
    })
        .then(response => response.json())
        .then(res => {
            
                 if (res.message === "insert successfully...") {
                alert(res.message)
            }
        })
   
    }

    const draftPost=()=>{
      const formData = new FormData();
      formData.append("image", file)
      
      formData.append("title",titledata)
      formData.append("subtitle", subTitle)
      
      formData.append("paragraph",JSON.stringify(paragraphTitle))
      formData.append("slug",url)
      
      console.log(formData)  
      fetch('http://localhost:8080/draft/createDraft', {
        method: 'POST',
        
        body:  formData
    })
        .then(response => response.json())
        .then(res => {
            
                 if (res.message === "insert successfully...") {
                alert(res.message)
            }
        })
   
    }

    
    return (
  <div className="home">
      <NavigationBarForEditor />
      <div className="grid">
       <GenerateCopy/>
       <SavedCenter/>
       <RightApps/>
      </div>
  </div> 
        )
}

export default Post
