import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/core.css'

import user from './controller/User.js'

await user.signUp("ROC", "ifno@roc-nijmegen.nl", "Welkom123", "school");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
