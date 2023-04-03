import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Qualifications from'./pages/Qualifications';
import Skills from'./pages/Skills';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
<Routes>
  <Route path="About" element={<About/>}/>
  <Route path="Certifications" element={<Certifications/>}/>
  <Route path="Experience" element={<Experience/>}/>
  <Route path="Hobbies" element={<Hobbies/>}/>
  <Route path="Projects" element={<Projects/>}/>
  <Route path="Qualifications" element={<Qualifications/>}/>
  <Route path="Skills" element={<Skills/>}/>
</Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;