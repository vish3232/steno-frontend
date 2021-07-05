import React from 'react'
import '../ReusableComponentCss/SavedCenter.css'
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../tools'

const SavedCenter = (props) => {


    return (
        <div className="saved-center">
            <div className="filter">
            <div contenteditable class="cdx-input" data-placeholder="Custom placeholder" >
    <EditorJs    placeholder="Write something..."   onChange={(api, newData)=>props.onParagraph(newData)} data={props.title} tools={EDITOR_JS_TOOLS}  />
    </div>
            </div>

           
        </div>
    )
}

export default SavedCenter
