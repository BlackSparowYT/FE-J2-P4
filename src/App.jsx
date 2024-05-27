import React from 'react';
import Header from './components/sidebar.jsx';
// import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Search from './pages/search.jsx';
import Error404 from './pages/404.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/zoeken' Component={Search} />
                <Route path='/404' Component={Error404} />
                <Route path='*' Component={Error404} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;