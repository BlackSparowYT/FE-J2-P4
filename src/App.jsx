import React, { useEffect, useState } from "react";
import Header from "./components/sidebar.jsx";
// import Footer from './components/footer.jsx';
import Home from "./pages/home.jsx";
import Error404 from "./pages/404.jsx";
import Login from "./pages/auth/login.jsx";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const url = window.location.href;
    if (url.includes("account")) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [location]);

  console.log(showSidebar);

  return (
    <>
      {showSidebar ? <Header /> : null}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/404" Component={Error404} />
        <Route path="*" Component={Error404} />
        <Route path="/account/login" Component={Login} />
      </Routes>
    </>
  );
}

export default App;
