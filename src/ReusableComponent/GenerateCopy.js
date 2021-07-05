import React from 'react'
import '../ReusableComponentCss/GenerateCopy.css'

const GenerateCopy = (props) => {

    
    return (
        <div className="generate-copy">
            <label>Title</label>
            <input
                value={props.titleText}
                onChange={(e)=>props.onTitleInput(e.target.value)}
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem." />

          
            <label>Meta description</label>
            <input
             onChange={(e)=>props.onSubtitleInput(e.target.value)}
               value={props.subTitleText}
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took" />

            <label>Feature image</label>
            <input
            type="file"
            
             onChange={(e)=>props.onFileInput(e.target.files[0])}
                placeholder="Upload image" />

            <label>Slug</label>
            <input
            value={props.slug}
                placeholder="slugify-the-title" />

            <button onClick={()=>props.onClickPublish()} >Publish</button>
        </div>
    )
}

export default GenerateCopy
