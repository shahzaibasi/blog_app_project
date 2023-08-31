import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={user ? <Home /> : <Register />}/>
        <Route path="/login" element={user ? <Home /> : <Login />}/>
        <Route path="/write" element={user ? <Write /> : <Register />}/>
        <Route path="/setting" element={<Setting />} />
        {/* <Route path="/setting" element={user ? <Setting /> : <Register />}/> */}
        <Route path="/post" element={<Single />}/>
        <Route path="/about" element={<Sidebar />}/>
      </Routes>
    </Router>
  );
}

export default App;
