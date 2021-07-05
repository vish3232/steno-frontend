import React,{useState} from 'react'
import '../App.css';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../tools'
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

    const onChangeTitle=(value)=>{
      settitledata(value)
      seturl(value)
    }

    const onChangeSubtitle=(value)=>{
      setsubTitle(value)
    }

    const onChangeFile=(value)=>{
      setFile(value)
    }

   
    
    return (
  <div className="home">
      <NavigationBarForEditor onClickSave={()=>draftPost()}  />
      <div className="grid">
       <GenerateCopy slug={url} title={paragraphTitle} onTitleInput={(text)=>onChangeTitle(text)} onSubtitleInput={(text)=>onChangeSubtitle(text)} onFileInput={(text)=>onChangeFile(text)} onClickPublish={()=>publishPost()}  />
       <div className="saved-center">
            <div className="filter">
            <div contenteditable class="cdx-input" data-placeholder="Custom placeholder" >
    <EditorJs    placeholder="Write something..."   onChange={(api, newData)=>onChangeParagraph(newData)} data={paragraphTitle} tools={EDITOR_JS_TOOLS}  />
    </div>
            </div>

           
        </div>
    
       <RightApps/>
      </div>
  </div> 
        )
}

export default Post
