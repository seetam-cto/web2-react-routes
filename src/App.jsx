import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"

//components
import Navbar from "./components/Navbar";

//pages
import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Background from "./components/Background";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="products/" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
