import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Error404 from './pages/404.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' Component={Home} />

                <Route path='/404' Component={Error404} />
                <Route path='*' Component={Error404} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;