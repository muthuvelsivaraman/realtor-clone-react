import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
   
<>
<Router>
  <Routes>
    <Route path="/" element={<Home/>} > </Route> 
    <Route path="/profile" element={<Profile/>} > </Route> 
    <Route path="/Sign-In" element={<SignIn/>} > </Route> 
    <Route path="/Sign-Up" element={<SignUp/>} > </Route> 
    <Route path="/offers" element={<Offers/>} > </Route> 
    <Route path="/Forgot-Password" element={<ForgotPassword/>} > </Route> 
  </Routes>
</Router>

</>

  );
}

export default App;

