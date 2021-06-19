import React,{useState,useEffect} from 'react'
import '../App.css';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../tools'

function GetDraftAsperId(props) {
    const [titledata,settitledata]=useState(null)
    const [subTitle,setsubTitle]=useState(null)
    
    const [paragraphTitle,setparagraphTitle]=useState({})
    const [url,seturl]=useState(null)
    const [file,setFile]=useState(null)
   
    useEffect(() => {
        console.log(props.location.state.draftData.paragraph);
        getDraftData()
    }, [])

    const tp={"time":1624103447623,"blocks":[{"id":"jYdlKMliiR","type":"header","data":{"text":"Hey,this is example of draft.","level":1}}],"version":"2.21.0"}

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
  
    return (
        <div className="main-container" >
        <input value={titledata} onChange={(e)=>{settitledata(e.target.value);seturl(e.target.value)}} className="title-input-box"  placeholder="Enter title" />
        <input value={subTitle} onChange={(e)=>setsubTitle(e.target.value)} className="sub-title-input-box"  placeholder="Enter sub title" />

 {/*<div contenteditable class="cdx-input" data-placeholder="Custom placeholder">
 <EditorJs    placeholder="Title"   onChange={(api, newData)=>onChangeText(newData)} data={titledata} tools={textinput_component}  />

</div>
  */}
<div contenteditable class="cdx-input" data-placeholder="Custom placeholder" >
  <EditorJs enableReInitialize={true}   placeholder="Write something..."   onChange={(api, newData)=>onChangeParagraph(newData)} data={paragraphTitle} tools={EDITOR_JS_TOOLS}  />
  </div>
  <div>
    <input value={url}  onChange={(e)=>seturl(e.target.value)} placeholder="enter url" style={{width:"80%",height:40,borderRadius:15}} />
    <input  type="file" onChange={(e)=>setFile(e.target.files[0])}  style={{width:"80%",height:40}} />
  
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

export default GetDraftAsperId
