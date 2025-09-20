import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import AdminProfile from './components/AdminProfile';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Events from './components/Events';
import PressRelease from './components/PressRelease';
// import Applyform from './components/Applyform';
import Hireforms from './components/Hireforms';
import AboutUs from './components/AboutUs'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          {/* <Route path="/employee-details" element={<EmployeeDetails />} /> */}
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/press-release" element={<PressRelease />} /> 
          <Route path="/hireforms" element={<Hireforms />}/>
          <Route path="/aboutus" element={<AboutUs />}/>

          {/* <Route path="/applyforms" element={<Applyform />}/> */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;