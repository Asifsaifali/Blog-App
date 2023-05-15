import React from 'react';
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Singal from "./pages/singal/singal";
import Write from "./pages/write/write";
import Setting from "./pages/settings/Setting"
import Login from "./pages/Login/login"
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
  


function App() {

  const user=true;
  return (
  <Router>
    <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={user?<Home/> : <Register />} />
        <Route path="/Login" element={user?<Home/> : <Login />} />
        <Route path="/write" element={user?<Write/> :<Register />} />
        <Route path="/Setting" element={user?<Setting/> :<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/post/:postId" element={<Singal />} />
        
       </Routes>
    </Router>
  );
}

export default App;
