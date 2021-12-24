import "./App.css";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import SimpleContainer from "./components/SimpleContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./components/Demo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PrimarySearchAppBar />
        
        <Routes>
          <Route path="/" element={<SimpleContainer />} />
          <Route path="/productDescription/:id" element={<Demo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
