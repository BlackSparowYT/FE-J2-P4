import React from 'react';
import Header from './components/sidebar.jsx';
// import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Error404 from './pages/404.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetail from './pages/posts/post-detail.jsx';
import PostAdd from './pages/posts/post-add.jsx';
import PostEdit from './pages/posts/post-edit.jsx';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/404' Component={Error404} />
                <Route path='*' Component={Error404} />

                <Route path='/post/:id' Component={PostDetail} />
                <Route path='/post/add' Component={PostAdd} />
                <Route path='/post/edit/:id' Component={PostAdd} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;