import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GradPathPage from "./pages/GradPathPage";
import Partners from "./pages/Partners";
import About from "./pages/About";
import GetGradPath from "./pages/GetGradPath";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import BetaProgramAgreement from "./pages/BetaProgramAgreement";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gradpath" element={<GradPathPage />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-gradpath" element={<GetGradPath />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/beta-program-agreement" element={<BetaProgramAgreement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
