import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from './Store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productDescription/:id" element={<ProductDetail />} />
        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
