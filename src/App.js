import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productDescription/:id" element={<ProductDetail />} />
        </Routes>
      </div>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
