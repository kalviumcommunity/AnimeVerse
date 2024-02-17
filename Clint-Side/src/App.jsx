import './App.css'
import Navbar from './Components/Navbar/NavBar';
import LoginPage2 from './screens/LoginPage2/LoginPage2';
import LandingPage from './screens/Landing Page/LandingPage'
import FormData from './screens/AddData/AddData'
import MainPage from './screens/Main Page/MainPage'
import { Routes, Route } from "react-router-dom";
import UpdateData from './screens/UpdateData/UpdateData';

function App() {
  return (
    <>
       <Navbar/>
      {/* <LoginPage2/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Login" element={<LoginPage2 />} />
        <Route path="/AddData" element={<FormData />} />
        <Route path="/update" element={<UpdateData/>} />
      </Routes>
    </>
  )
}

export default App