import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Post from './Screen/Post';
import GetPost from './Screen/GetPost';
import GetPostAsPerId from './Screen/GetPostAsPerId';
import DraftScreen from './Screen/Draft';
import GetDraftAsperId from './Screen/GetDraftAsperId';
function App() {
    
  return (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={GetPost} />
        <Route exact path="/draft" component={DraftScreen} />
        <Route exact path="/draftView" component={GetDraftAsperId} />
  
          <Route exact path="/post" component={Post} />
          <Route exact path="/:post_slug" component={GetPostAsPerId} />
              
        </Switch>
    </BrowserRouter>
    );
}

export default App;
