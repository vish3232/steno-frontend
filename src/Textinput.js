import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import LinkTool from '@editorjs/link'
export const textinput_component={
    header: {
      class: Header,
      config: {
        placeholder: 'Enter a header',
        levels: [1, 2, 3, 4],
        defaultLevel: 1,
        
      }
      
    },
    linkTool: {
      class: LinkTool,
      config: {
        endpoint: 'http://localhost:8080/post/getPostAsPerId', // Your backend endpoint for url data fetching
      }
    }
    
   
}

export const textinput_forparagraph={
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+O',
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: 'Quote\'s author',
    },
  },
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: 'http://localhost:8080/post/getPostAsPerId', // Your backend endpoint for url data fetching
    }
  }
 
     
}






