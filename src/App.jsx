import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import GetGradPath from "./pages/GetGradPath";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-gradpath" element={<GetGradPath />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
