import './App.css';


import Registration from './Components/Registration';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>

      <Routes>

          <Route path="/" element={<Registration/>} />

          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />

        

      </Routes>

    </BrowserRouter>
  );
}

export default App;
