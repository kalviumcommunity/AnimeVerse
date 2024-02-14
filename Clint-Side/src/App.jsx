import './App.css'
import Heading from './Components/Heading/Heading';
// import FlipCard from './Components/FlipCard';
// import Login from './screens/login page/login';
import LandingPage from './screens/Landing Page/LandingPage'
import MainPage from './screens/Main Page/MainPage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <h1>AnimeVerse</h1>
       <Heading/>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/MainPage" element={<FlipCard />} /> */}
      </Routes>
    </>
  )
}

export default App
