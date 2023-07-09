import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import PhoneStore from './store/PhoneStore';
import './css/style.css'
import App from './App';

export const Context = createContext(null)
const app = ReactDOM.createRoot(document.getElementById('app'))
app.render(
    <Context.Provider value={{
        phone: new PhoneStore()
    }}>
        <App />
    </Context.Provider>
)
