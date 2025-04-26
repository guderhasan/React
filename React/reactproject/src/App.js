import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
