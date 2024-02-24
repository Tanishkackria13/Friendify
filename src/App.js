import React, { useContext } from "react";
import "./index.scss"
import { BrowserRouter, Outlet, Route, Navigate, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/Register";
import { Profile } from "./pages/profile/Profile";
import { Home } from "./pages/home/Home";
import { Navbar } from "./components/navbar/navbar";
import { Leftbar } from "./components/leftbar/leftbar";
import { Rightbar } from "./components/rightbar/rightbar";
import { DarkModeContext } from "./context/darkmodecontext";

function App() {
  const currUser = true;
  const {darkMode}=useContext(DarkModeContext)
  console.log(darkMode )
  const Layout = () => {
    return (
      <div className={`theme-${darkMode?"dark":"light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute>{<Layout />}</ProtectedRoute>}>
          <Route index element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;