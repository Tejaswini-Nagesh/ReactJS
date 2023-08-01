import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./Pages/Authentication/LogIn";
import SignUpComponent from "./Pages/Authentication//SignUp";
import QuotePage from "./Pages/QuotePage";
import ProfilePage from "./Pages/ProfilePage"
import HomePage from "./Pages/HomePage"
import { ProtectedRoute } from "./Auth/ProtectedRoute";
// import { AuthProvider } from "./Auth/Auth";


export default function RouterComponent() {
    return (
      <Router>
      
          <Routes>
            <Route path="/LogIn" element={<LoginComponent />}/>
            <Route path="/SignUp" element={<SignUpComponent />}/>
            <Route exact path="/" element={<QuotePage />}/>
            <Route path="/profile" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }/>
        {/* <Route path="/profile" element={
            <ProfilePage />
        }/> */}
            <Route path="/home" element={<HomePage />}/>
            
          </Routes>
    
    </Router>
    );
  }