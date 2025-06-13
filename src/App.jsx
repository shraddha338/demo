// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Headers/Header";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <Router>
      <div className="main-layout">
        <Header />
        <div>
          <>
          <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Shraddha  Patil"
          studentPhotoUrl="/images/shraddhapatil.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
          </>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/CoursesPage" element={<CoursesPage />} />
            <Route path="/AdmissionsPage" element={<AdmissionsPage />} />
            {/* <Route path="/chat" element={<ChatbotComponent />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <ChatbotComponent />
      </div>
    </Router>
  );
}
export default App;

