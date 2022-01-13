import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from './Store';
import LogIn from "./components/LogIn";
import Register from "./components/Register";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productDescription/:id" element={<ProductDetail />} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
