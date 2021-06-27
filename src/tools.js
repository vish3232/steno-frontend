import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import ImageTool from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import TextVariantTune from '@editorjs/text-variant-tune'
export const EDITOR_JS_TOOLS = {
    textVariant: TextVariantTune,
    table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 2,
      },
    },
  
  paragraph: { // apply only for the 'paragraph' tool
    tunes: ['textVariant'],
  },
  list: List,
  linkTool: {class:LinkTool,config: {
    endpoint: 'http://localhost:8080/post/fechURL', // Your backend endpoint for url data fetching
  }},
  image: {class:ImageTool,
    inlineToolbar: true,
    
    config: {
    endpoints: {
      byFile: 'http://localhost:8080/image/imageUpload', // Your backend file uploader endpoint
      byUrl: 'http://localhost:8080/image/imageUpload', // Your endpoint that provides uploading by Url
    }
    
  }},
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a header',
      levels: [1,2, 3, 4],
      defaultLevel:1 
    }
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+O',
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: 'Quote\'s author',
    },
  },
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
}
