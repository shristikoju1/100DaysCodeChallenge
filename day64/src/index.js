import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Profile from './display';
import Map from './mapping';
import MyButton from './events';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <h1>Welcome to my app</h1>
    <App />
    <Profile/>
    <Map/>
    <MyButton/>
   
    </div>
  
);


