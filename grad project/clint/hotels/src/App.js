import "./App.css";
import Footer from "./components/Footer";
import Tours from "./components/Tours";
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={< Tours/>}></Route>
        <Route path="About" element={< About/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
