import React,{useState,useEffect} from 'react'
import '../App.css';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../tools'
import GenerateCopy from '../ReusableComponent/GenerateCopy'
import NavigationBarForEditor from '../ReusableComponent/NavigationBarForEditor';
import RightApps from '../ReusableComponent/RightApps'

function GetDraftAsperId(props) {
    const [titledata,settitledata]=useState(null)
    const [subTitle,setsubTitle]=useState(null)
    
    const [paragraphTitle,setparagraphTitle]=useState({})
    const [url,seturl]=useState(null)
    const [file,setFile]=useState(null)
   
    useEffect(() => {
        getDraftData()
    }, [])

    
    const getDraftData=()=>{
        settitledata(props.location.state.draftData.title)
        setsubTitle(props.location.state.draftData.subtitle)
        setparagraphTitle(JSON.parse( props.location.state.draftData.paragraph))
        seturl(props.location.state.draftData.slug)
        setFile(props.location.state.draftData.filename)
    }

    const onChangeParagraph=(value)=>{
        setparagraphTitle(value)
      }
  
    
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
      <NavigationBarForEditor  onClickSave={()=>draftPost()}  />
      <div className="grid">
       <GenerateCopy titleText={titledata} subTitleText={subTitle} fileText={file} slug={url} title={paragraphTitle} onTitleInput={(text)=>onChangeTitle(text)} onSubtitleInput={(text)=>onChangeSubtitle(text)} onFileInput={(text)=>onChangeFile(text)} onClickPublish={()=>publishPost()}  />
       <div className="saved-center">
            <div className="filter">
            <div contenteditable class="cdx-input" data-placeholder="Custom placeholder" >
    <EditorJs enableReInitialize={true}   placeholder="Write something..."   onChange={(api, newData)=>onChangeParagraph(newData)} data={paragraphTitle} tools={EDITOR_JS_TOOLS}  />
    </div>
            </div>

           
        </div>
    
       <RightApps/>
      </div>
  </div> 
  
 
        )
}

export default GetDraftAsperId
