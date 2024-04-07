import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";

//Pages
import Home from './pages/Home/Home';
import Mentors from './components/Mentor/Mentors';
import MentorView from './components/Mentor/MentorView';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div className="App bg-blue-200">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mentor' element={<Mentors/>}/>
          <Route path='/mentor/:mID' element={<MentorView/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/signin' element={<Auth page={"login"}/>}/>
          <Route path='/signup' element={<Auth page={"register"}/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
