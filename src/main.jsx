import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/core.css'
import './css/finn.css'

import user from './controller/User.js'

user.signUp();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
