
import App from './App.jsx'

import './index.css'

 //import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './Redux/store';


createRoot(document.getElementById('root')).render(
  
   <Provider store ={store} >
 <BrowserRouter>
    <App />
    <Toaster />
 </BrowserRouter>
 </Provider>
);
