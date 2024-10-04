import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import { Nav } from "./header";
import { HomePage } from "./home-page";
import { AboutProduct } from "./about-product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "./form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-product" element={<AboutProduct />} />
          <Route path="/prato" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
