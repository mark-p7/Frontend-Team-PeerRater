// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import NewSurveyPage from './pages/NewSurveyPage';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// Routing stuff
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <div id="wrapper">
      <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
    <NavBar />
    <div className="container" id="main-container">
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/privacy" element={<PrivacyPage />} exact />
        <Route path="/profilepage" element={<ProfilePage />} exact />
        <Route path="/newsurvey" element={<NewSurveyPage />} exact />
        <Route path="*" element={<NotFoundPage />} exact />
      </Routes>
    </BrowserRouter>
  
    </div>
    <Footer />
        </div>
      </div>
    </>
 
  );
}

export default App;
