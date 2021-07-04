import React, { useContext } from 'react'
import '../ReusableComponentCss/GenerateCopy.css'

const GenerateCopy = () => {

    
    return (
        <div className="generate-copy">
            <label>Title</label>
            <input
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem." />

          
            <label>Meta description</label>
            <input
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took" />

            <label>Feature image</label>
            <input
                placeholder="Upload image" />

            <label>Slug</label>
            <input
                placeholder="slugify-the-title" />

            <button >Publish</button>
        </div>
    )
}

export default GenerateCopy
