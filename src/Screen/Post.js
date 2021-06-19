import React,{useState} from 'react'
import '../App.css';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../tools'
import {textinput_component} from '../Textinput'
import {textinput_forparagraph} from '../Textinput'

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
        <div className="main-container" >
          <input onChange={(e)=>{settitledata(e.target.value);seturl(e.target.value)}} className="title-input-box"  placeholder="Enter title" />
          <input onChange={(e)=>setsubTitle(e.target.value)} className="sub-title-input-box"  placeholder="Enter sub title" />
  
   {/*<div contenteditable class="cdx-input" data-placeholder="Custom placeholder">
   <EditorJs    placeholder="Title"   onChange={(api, newData)=>onChangeText(newData)} data={titledata} tools={textinput_component}  />
  
  </div>
    */}
  <div contenteditable class="cdx-input" data-placeholder="Custom placeholder" >
    <EditorJs    placeholder="Write something..."   onChange={(api, newData)=>onChangeParagraph(newData)} data={titledata} tools={EDITOR_JS_TOOLS}  />
    </div>
    <div>
      <input value={url}  onChange={(e)=>seturl(e.target.value)} placeholder="enter url" style={{width:"80%",height:40,borderRadius:15}} />
      <input type="file" onChange={(e)=>setFile(e.target.files[0])}  style={{width:"80%",height:40}} />
    
    </div>
      <div onClick={()=>publishPost()} className="submit-button" >
        Submit
      </div>
      <div onClick={()=>draftPost()} className="save-button" >
        Save
      </div>
    </div>
   
        )
}

export default Post
