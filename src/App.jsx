import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Services from "./components/Services";
import About from "./pages/About";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BMICalculator from "./pages/bmi";
import CalorieFinder from "./pages/calories";
import HealthToolsPage from "./pages/Health";
import Player from "./pages/Player";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { YogaProvider } from "./YogaContext";
import YogaHome from "./pages/YogaHome";
import Yoga from "./pages/Yoga";
import Tutorials from "./pages/Tutorials";
import YogaCanvas from "./pages/YogaCanvas";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";



export default function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Navbar />
      <YogaProvider> 
        <Routes>  
          <Route path="/" element={<Home2 />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/lobby" element={<LobbyScreen />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
          <Route path="/health" element={<HealthToolsPage />} />
          <Route path="/Player" element={<Player />} />
          <Route path="/calories" element={<CalorieFinder />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
          {/* Yoga-related routes */}
          <Route path="/YogaHome" element={<YogaHome />} />
          <Route path="/start" element={<Yoga />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/yoga" element={<YogaCanvas />} />
        </Routes>
      </YogaProvider> {/* YogaProvider can wrap the Routes */}
      <Footer />
    </div>
  );
}
