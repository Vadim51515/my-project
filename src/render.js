import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
 export let rerenderEntiteTree =  (state) =>{
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}


