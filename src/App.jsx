import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
// import NotFound from "./pages/NotFound";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Squares from "./hooks/Squares";

function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen overflow-hidden bg-gray-900">
        {/* Background animation */}
        <div className="absolute inset-0 z-10">
          <Squares
           speed={1.0} 
           squareSize={40}
           direction='down' // up, down, left, right, diagonal
          />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <Navbar className="fixed" />
          <main className="flex-grow ">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              {/* <Route path="/contact" element={<Footer/>} /> */}
              {/* <Route path="*" element={<NotFound />} /> */}
              
            </Routes>
            {/* <SkillsPage/>
            <ProjectsPage /> */}
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
