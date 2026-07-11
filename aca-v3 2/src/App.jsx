import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Philosophy from "./pages/Philosophy";
import GradPathPage from "./pages/GradPathPage";
import Partners from "./pages/Partners";
import Research from "./pages/Research";
import About from "./pages/About";
import GetGradPath from "./pages/GetGradPath";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/gradpath" element={<GradPathPage />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-gradpath" element={<GetGradPath />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
