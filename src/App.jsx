import React from "react";
import Header from "./components/sidebar.jsx";
// import Footer from './components/footer.jsx';
import Home from "./pages/home.jsx";
import Error404 from "./pages/404.jsx";
import Login from "./pages/auth/login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    let showSidebar = true;

    const url = window.location.href;
    if(url.includes("account")) {
        showSidebar = false;
    }
  
  return (
    <BrowserRouter>
        {
            showSidebar ? <Header /> : null
        }
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/404" Component={Error404} />
            <Route path="*" Component={Error404} />

            <Route path="/account/login" Component={Login} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
